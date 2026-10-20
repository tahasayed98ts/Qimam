import {
  LinearFilter,
  LinearMipmapLinearFilter,
  Mesh,
  NoBlending,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Texture,
  WebGLRenderer,
} from "three"

/** One full turn every 48 s; crossings drift slowly down from the beam. */
const TWIST_SPEED = (Math.PI * 2) / 48
const RAMP_SECONDS = 2.5
const MAX_PIXEL_RATIO = 2
const MIN_FRAME_MS = 15

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

/*
 * Rotates the Waves artwork around its own axis. The two strands follow a
 * double helix fitted to the image (476×917 px at 1×, RMS ≈ 2px):
 *   x(y) = C0 + C1·y − (R0 + R1·y)·sin(θ(y) + phase),
 *   θ(y) = T0 + T1·y + T2·(1 − e^(−y/TAU)).
 * Each output pixel near a rotated strand samples the same strand at rest,
 * so the strands keep the artwork's exact look; everything else in the image
 * (faint ghost strands, glow) stays in place. Strands brighten in front and
 * dim behind the axis, and at uPhi = 0 the output equals the image exactly.
 */
const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uWaves;
  uniform float uPhi;
  varying vec2 vUv;

  const vec2 SIZE = vec2(476.0, 917.0);
  const float C0 = 230.261877;
  const float C1 = 0.062951;
  const float R0 = 81.318616;
  const float R1 = 0.024922;
  const float T0 = -0.756136;
  const float T1 = 0.005925;
  const float T2 = 0.666203;
  const float TAU = 78.005552;
  const float PI = 3.14159265;

  // Pixels within WINDOW of a strand belong to it; SIGMA splits the pixels
  // the strands share where they cross.
  const float WINDOW = 26.0;
  const float FEATHER = 8.0;
  const float SIGMA = 3.0;
  const float DEPTH_BACK = 0.42;
  const float CAMERA = 1100.0;
  // Rows where the strands overlap in the image (closer than 24px). Once a
  // strand moves away, these rows are filled from just above and below so it
  // doesn't carry pieces of the other strand.
  const vec2 OVERLAP_TOP = vec2(49.88, 79.93);
  const vec2 OVERLAP_MID = vec2(524.02, 566.75);

  vec4 waves(vec2 p) {
    if (p.x < 0.0 || p.x > SIZE.x) return vec4(0.0);
    return texture2D(uWaves, vec2(p.x / SIZE.x, 1.0 - p.y / SIZE.y));
  }

  float twist(float y) {
    return T0 + T1 * y + T2 * (1.0 - exp(-y / TAU));
  }

  float twistRate(float y) {
    return T1 + (T2 / TAU) * exp(-y / TAU);
  }

  float depthShade(float z, float r) {
    return mix(DEPTH_BACK, 1.0, clamp((z / r + 1.0) * 0.5, 0.0, 1.0));
  }

  // Share of the pixel at (x, y) that belongs to each strand at rest. The
  // faint strand is brighter near the light source, so it claims more there.
  vec2 strandWeights(float x, float y) {
    float theta = twist(y);
    float r = R0 + R1 * y;
    float axis = C0 + C1 * y;
    float faint = mix(0.75, 0.22, smoothstep(30.0, 200.0, y));
    float dA = abs(x - (axis - r * sin(theta)));
    float dB = abs(x - (axis + r * sin(theta)));
    float eA = exp(-(dA * dA) / (SIGMA * SIGMA));
    float eB = faint * exp(-(dB * dB) / (SIGMA * SIGMA));
    float sum = eA + eB + 1e-9;
    return vec2(
      (1.0 - smoothstep(WINDOW - FEATHER, WINDOW, dA)) * eA / sum,
      (1.0 - smoothstep(WINDOW - FEATHER, WINDOW, dB)) * eB / sum
    );
  }

  // Strand k at rest, at row y, offset d px across the strand.
  vec4 strandAtRest(int k, float y, float d) {
    float rest = twist(y) + float(k) * PI;
    float r = R0 + R1 * y;
    float slope = C1 - R1 * sin(rest) - r * cos(rest) * twistRate(y);
    float x = C0 + C1 * y - r * sin(rest) + d * sqrt(1.0 + slope * slope);
    vec2 weight = strandWeights(x, y);
    return waves(vec2(x, y)) * (k == 0 ? weight.x : weight.y);
  }

  vec4 strandAcrossOverlap(int k, float y, float d, vec2 rows) {
    float t = clamp((y - rows.x) / (rows.y - rows.x), 0.0, 1.0);
    return mix(strandAtRest(k, rows.x, d), strandAtRest(k, rows.y, d), t);
  }

  void main() {
    vec2 p = vec2(vUv.x * SIZE.x, (1.0 - vUv.y) * SIZE.y);
    float y = p.y;
    float theta = twist(y);
    float dTheta = twistRate(y);
    float r = R0 + R1 * y;
    float axis = C0 + C1 * y;

    vec2 own = strandWeights(p.x, y);
    vec4 color = waves(p) * (1.0 - own.x - own.y);

    for (int k = 0; k < 2; k++) {
      float rest = theta + float(k) * PI;
      float now = rest + uPhi;
      float xRest = axis - r * sin(rest);
      float xNow = axis - r * sin(now);
      float zRest = -r * cos(rest);
      float zNow = -r * cos(now);
      // Distance across the strand, kept as its slope and depth change.
      float slopeNow = C1 - R1 * sin(now) - r * cos(now) * dTheta;
      float d = (p.x - xNow) / sqrt(1.0 + slopeNow * slopeNow)
        * (CAMERA - zNow) / (CAMERA - zRest);

      vec4 strand = strandAtRest(k, y, d);
      float moved = smoothstep(2.0, 8.0, abs(xNow - xRest));
      if (y > OVERLAP_TOP.x && y < OVERLAP_TOP.y) {
        strand = mix(strand, strandAcrossOverlap(k, y, d, OVERLAP_TOP), moved);
      } else if (y > OVERLAP_MID.x && y < OVERLAP_MID.y) {
        strand = mix(strand, strandAcrossOverlap(k, y, d, OVERLAP_MID), moved);
      }

      float shade = clamp(depthShade(zNow, r) / depthShade(zRest, r), 0.45, 1.25);
      color += strand * shade;
    }

    gl_FragColor = color;
  }
`

export type HelixScene = {
  /** Start or pause the animation loop (paused while off screen). */
  setRunning(running: boolean): void
  dispose(): void
}

export async function createHelixScene(
  canvas: HTMLCanvasElement,
  {
    image,
    onContextLost,
  }: { image: HTMLImageElement; onContextLost: () => void }
): Promise<HelixScene> {
  // Animate the image the page already shows. An on-page <img> reports its
  // displayed and srcset-scaled size, which three.js would allocate the
  // texture with, so upload a detached copy that reports its real pixel size.
  // The browser serves the copy from memory; nothing is downloaded twice.
  await image.decode()
  const source = new Image()
  source.src = image.currentSrc
  await source.decode()
  const texture = new Texture(source)
  // Premultiply on upload so mipmaps average the translucent edges cleanly.
  texture.premultiplyAlpha = true
  texture.minFilter = LinearMipmapLinearFilter
  texture.magFilter = LinearFilter
  texture.needsUpdate = true

  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    premultipliedAlpha: true,
    powerPreference: "low-power",
  })
  renderer.setClearColor(0x000000, 0)

  const scene = new Scene()
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const geometry = new PlaneGeometry(2, 2)
  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uWaves: { value: texture },
      uPhi: { value: 0 },
    },
    blending: NoBlending,
    depthTest: false,
    depthWrite: false,
  })
  scene.add(new Mesh(geometry, material))

  const resize = () => {
    const { clientWidth, clientHeight } = canvas
    if (!clientWidth || !clientHeight) return
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO))
    renderer.setSize(clientWidth, clientHeight, false)
    renderer.render(scene, camera)
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)
  resize()

  let frame = 0
  let running = false
  let lastTime = 0
  let elapsed = 0

  const tick = (time: number) => {
    frame = requestAnimationFrame(tick)
    const deltaMs = time - lastTime
    if (lastTime && deltaMs < MIN_FRAME_MS) return
    // Clamp long gaps (tab switches) so the strands never jump.
    const dt = lastTime ? Math.min(deltaMs / 1000, 1 / 20) : 0
    lastTime = time
    elapsed += dt
    const ramp = Math.min(elapsed / RAMP_SECONDS, 1)
    // Decreasing phase turns the front of the helix left-to-right (like the
    // Earth seen with north up), so the crossings drift down.
    material.uniforms.uPhi.value -= TWIST_SPEED * ramp * ramp * dt
    renderer.render(scene, camera)
  }

  const handleContextLost = (event: Event) => {
    event.preventDefault()
    cancelAnimationFrame(frame)
    running = false
    onContextLost()
  }
  canvas.addEventListener("webglcontextlost", handleContextLost)

  return {
    setRunning(next) {
      if (next === running) return
      running = next
      if (running) {
        lastTime = 0
        frame = requestAnimationFrame(tick)
      } else {
        cancelAnimationFrame(frame)
      }
    },
    dispose() {
      cancelAnimationFrame(frame)
      running = false
      resizeObserver.disconnect()
      canvas.removeEventListener("webglcontextlost", handleContextLost)
      geometry.dispose()
      material.dispose()
      texture.dispose()
      renderer.dispose()
    },
  }
}
