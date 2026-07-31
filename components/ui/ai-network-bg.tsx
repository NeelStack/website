'use client'

import { motion } from 'framer-motion'

// ── Node grid in a 100×60 viewBox (≈5:3) with tech-stack labels ──
// preserveAspectRatio="xMidYMid slice" keeps all circles perfectly round.
const nodes = [
  // Row 1 — top edge (frontend & delivery layer)
  { cx: 12,  cy: 8,  r: 0.90, delay: 0.0, label: 'JS',   chars: 2 },
  { cx: 32,  cy: 6,  r: 0.70, delay: 0.4, label: 'CSS',  chars: 3 },
  { cx: 55,  cy: 9,  r: 1.00, delay: 0.9, label: 'AWS',  chars: 3 },
  { cx: 78,  cy: 7,  r: 0.75, delay: 1.4, label: 'API',  chars: 3 },
  { cx: 94,  cy: 9,  r: 0.85, delay: 0.2, label: 'CDN',  chars: 3 },
  // Row 2 — upper band (AI & cloud layer)
  { cx: 5,   cy: 24, r: 0.80, delay: 0.7, label: 'AI',   chars: 2 },
  { cx: 26,  cy: 22, r: 1.20, delay: 0.1, label: 'ML',   chars: 2 },
  { cx: 48,  cy: 23, r: 1.00, delay: 1.1, label: 'GCP',  chars: 3 },
  { cx: 70,  cy: 21, r: 0.90, delay: 0.6, label: 'Az',   chars: 2 },
  { cx: 92,  cy: 23, r: 1.10, delay: 1.6, label: 'DB',   chars: 2 },
  // Row 3 — centre cluster (product / app layer — largest nodes)
  { cx: 15,  cy: 38, r: 1.00, delay: 0.5, label: 'iOS',  chars: 3 },
  { cx: 38,  cy: 36, r: 1.45, delay: 0.0, label: 'App',  chars: 3 }, // main hub
  { cx: 60,  cy: 38, r: 1.30, delay: 0.8, label: 'Web',  chars: 3 }, // secondary hub
  { cx: 83,  cy: 36, r: 1.00, delay: 1.2, label: 'K8s',  chars: 3 },
  // Row 4 — lower band (tooling & data layer)
  { cx: 8,   cy: 52, r: 0.75, delay: 1.3, label: 'Git',  chars: 3 },
  { cx: 30,  cy: 50, r: 0.95, delay: 0.6, label: 'SQL',  chars: 3 },
  { cx: 52,  cy: 52, r: 0.85, delay: 1.0, label: 'TS',   chars: 2 },
  { cx: 74,  cy: 50, r: 0.80, delay: 0.4, label: 'UI',   chars: 2 },
  { cx: 96,  cy: 52, r: 0.75, delay: 1.5, label: 'HTML', chars: 4 },
]

// ── Edge pairs (by node index) ──
const edgePairs = [
  // Top row horizontal
  [0, 1], [1, 2], [2, 3], [3, 4],
  // Row 1 → Row 2 vertical
  [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
  // Row 2 horizontal
  [5, 6], [6, 7], [7, 8], [8, 9],
  // Row 2 → Row 3 vertical
  [5, 10], [6, 11], [7, 12], [8, 13], [9, 13],
  // Row 3 horizontal
  [10, 11], [11, 12], [12, 13],
  // Row 3 → Row 4 vertical
  [10, 14], [11, 15], [12, 16], [13, 17], [13, 18],
  // Row 4 horizontal
  [14, 15], [15, 16], [16, 17], [17, 18],
  // Diagonal cross-connections (network depth)
  [1, 7], [2, 8], [6, 12], [7, 13], [11, 16], [12, 17],
]

const edges = edgePairs.map(([a, b]) => ({
  x1: nodes[a].cx, y1: nodes[a].cy,
  x2: nodes[b].cx, y2: nodes[b].cy,
  delay: (nodes[a].delay + nodes[b].delay) / 2,
}))

// Animate only every 3rd edge for performance
const flowEdges = edgePairs
  .filter((_, i) => i % 3 === 0)
  .map(([a, b]) => ({
    x1: nodes[a].cx, y1: nodes[a].cy,
    x2: nodes[b].cx, y2: nodes[b].cy,
    delay: (nodes[a].delay + nodes[b].delay) / 2,
  }))

// Font size scales with node radius and label character count
function labelFontSize(r: number, chars: number): number {
  if (chars <= 2) return r * 0.78
  if (chars === 3) return r * 0.56
  return r * 0.44 // 4-char labels (HTML)
}

export function AiNetworkBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage: 'radial-gradient(ellipse 88% 88% at 50% 50%, black 45%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 50% 50%, black 45%, transparent 100%)',
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 60"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Node inner glow */}
          <filter id="ai-node-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="0.5" result="blur1" />
            <feGaussianBlur stdDeviation="1.2" result="blur2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Edge line soft glow */}
          <filter id="ai-edge-glow" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="0.25" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Static edge lines ── */}
        {edges.map((e, i) => (
          <line
            key={`e-${i}`}
            x1={e.x1} y1={e.y1}
            x2={e.x2} y2={e.y2}
            strokeWidth="0.22"
            strokeDasharray="1.2 2.8"
            className="stroke-primary/20 dark:stroke-cyan-400/18"
            filter="url(#ai-edge-glow)"
          />
        ))}

        {/* ── Animated data-flow dots ── */}
        {flowEdges.map((e, i) => (
          <motion.circle
            key={`f-${i}`}
            r={0.38}
            className="fill-primary/90 dark:fill-cyan-300/90"
            style={{ filter: 'drop-shadow(0 0 1px rgba(59,130,246,0.8))' }}
            animate={{
              cx: [e.x1, e.x2, e.x1],
              cy: [e.y1, e.y2, e.y1],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              delay: e.delay * 1.4,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* ── Glowing nodes with tech-stack labels ── */}
        {nodes.map((n, i) => (
          <g key={`n-${i}`}>
            {/* Outer ambient halo — slow breathe */}
            <motion.circle
              cx={n.cx} cy={n.cy}
              className="fill-primary/8 dark:fill-cyan-400/12"
              animate={{
                r:       [n.r * 2.8, n.r * 4.0, n.r * 2.8],
                opacity: [0.5, 0.12, 0.5],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                delay: n.delay * 0.9,
                ease: 'easeInOut',
              }}
            />

            {/* Mid halo — static ring */}
            <circle
              cx={n.cx} cy={n.cy}
              r={n.r * 1.9}
              className="fill-primary/14 dark:fill-cyan-400/18"
            />

            {/* Core node — pulses in radius (not scale, so text stays stable) */}
            <motion.circle
              cx={n.cx} cy={n.cy}
              className="fill-primary/80 dark:fill-cyan-400/85"
              filter="url(#ai-node-glow)"
              animate={{
                r:       [n.r, n.r * 1.32, n.r],
                opacity: [0.60, 1, 0.60],
              }}
              initial={{ r: n.r }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: n.delay,
                ease: 'easeInOut',
              }}
            />

            {/* Tech label — centered over node, never scales */}
            <text
              x={n.cx}
              y={n.cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={labelFontSize(n.r, n.chars)}
              fontFamily="ui-monospace, 'Cascadia Code', 'SF Mono', monospace"
              fontWeight="800"
              letterSpacing="-0.02em"
              fill="white"
              opacity={0.92}
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
