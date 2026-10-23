import { SquareUser } from "lucide-react"
import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"
import styles from "./network-diagram.module.css"

/**
 * "Supported servers" illustration from the Figma Home frame: a server node
 * inside glowing rings, linked to four client nodes. Purely decorative.
 * Geometry is in Figma pixels (538×270 box at 1440px).
 */
const CENTER = { x: 269, y: 135, r: 52.5 }
const RINGS = [135, 103.5, 76.5]
const CLIENTS = [
  { x: 34, y: 76 },
  { x: 34, y: 188 },
  { x: 504, y: 76 },
  { x: 504, y: 188 },
]
const CLIENT_RADIUS = 33.5

/** S-curve from a client's inner edge into the side of the server node. */
function linkPath(client: { x: number; y: number }) {
  const dir = client.x < CENTER.x ? 1 : -1
  const startX = client.x + dir * CLIENT_RADIUS
  const endX = CENTER.x - dir * CENTER.r
  const bend = client.y < CENTER.y ? 1 : -1
  const mid = (y: number) => CENTER.y - bend * y
  return [
    `M${startX} ${client.y}`,
    `C${startX + dir * 45} ${client.y - bend * 2}, ${startX + dir * 52} ${mid(22)}, ${startX + dir * 84} ${mid(14)}`,
    `S${endX - dir * 18} ${mid(3)}, ${endX} ${CENTER.y}`,
  ].join(" ")
}

function ServerGlyph({ x, y }: { x: number; y: number }) {
  return (
    <g
      transform={`translate(${x} ${y})`}
      fill="none"
      stroke="#6b6b6b"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1.5" y="1.5" width="37" height="11" rx="2.5" />
      <rect x="1.5" y="18.5" width="37" height="11" rx="2.5" />
      <path d="M8 7h.01M13 7h.01M8 24h.01M13 24h.01M20 29.5v5M6 37.5h28" />
    </g>
  )
}

export function NetworkDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 538 270"
      className={cn(styles.diagram, className)}
      fill="none"
      aria-hidden="true"
      focusable="false"
      overflow="visible"
    >
      <defs>
        <radialGradient id="network-glow">
          <stop offset="0" stopColor="#16244d" />
          <stop offset="0.5" stopColor="#0c1838" stopOpacity="0.85" />
          <stop offset="1" stopColor="#0c1838" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="network-client-glow">
          <stop offset="0" stopColor="#0d1d47" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0d1d47" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={CENTER.x} cy={CENTER.y} r="190" fill="url(#network-glow)" />
      {CLIENTS.map((client) => (
        <circle
          key={`glow-${client.x}-${client.y}`}
          cx={client.x}
          cy={client.y}
          r="90"
          fill="url(#network-client-glow)"
        />
      ))}

      {/* Innermost ring first: RINGS runs outermost → innermost. */}
      {RINGS.map((r, index) => (
        <circle
          key={r}
          className={styles.ring}
          style={{ "--stagger": RINGS.length - 1 - index } as CSSProperties}
          cx={CENTER.x}
          cy={CENTER.y}
          r={r}
          fill="#4870d8"
          fillOpacity="0.04"
          stroke="#ffffff"
          strokeOpacity="0.035"
        />
      ))}

      {CLIENTS.map((client, index) => (
        <path
          key={`link-${client.x}-${client.y}`}
          className={styles.link}
          style={{ "--stagger": index } as CSSProperties}
          pathLength={1}
          d={linkPath(client)}
          stroke="#4a4b50"
          strokeWidth="1.5"
        />
      ))}

      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={CENTER.r}
        fill="#27334d"
        stroke="#4b4e55"
      />
      <ServerGlyph x={CENTER.x - 20} y={CENTER.y - 20} />

      {CLIENTS.map((client) => (
        <g key={`client-${client.x}-${client.y}`}>
          <circle
            cx={client.x}
            cy={client.y}
            r={CLIENT_RADIUS}
            fill="#151e33"
            stroke="#3f4147"
          />
          <SquareUser
            x={client.x - 11}
            y={client.y - 11}
            width={22}
            height={22}
            color="#7a7a7a"
            strokeWidth={1.5}
          />
        </g>
      ))}
    </svg>
  )
}
