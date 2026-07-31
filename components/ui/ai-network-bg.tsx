'use client'

import { motion } from 'framer-motion'

// ─── 3D Spatial AI Architecture Node Grid (100×60 viewBox) ───
const nodes = [
  // ── Foreground Focal Hubs (Depth 1) ──
  { id: 'n-ai',    cx: 38, cy: 34, r: 1.75, depth: 1, label: 'AI',   grad: 'url(#sphere-cyan)',   delay: 0.0, floatY: [-1.5, 1.8, -1.5], floatX: [-0.8, 1, -0.8] },
  { id: 'n-app',   cx: 62, cy: 36, r: 1.55, depth: 1, label: 'App',  grad: 'url(#sphere-violet)', delay: 0.8, floatY: [1.5, -1.8, 1.5],   floatX: [0.8, -0.9, 0.8] },
  { id: 'n-aws',   cx: 52, cy: 12, r: 1.40, depth: 1, label: 'AWS',  grad: 'url(#sphere-blue)',   delay: 0.4, floatY: [-1.2, 1.5, -1.2], floatX: [0.9, -0.8, 0.9] },
  { id: 'n-web',   cx: 18, cy: 38, r: 1.35, depth: 1, label: 'Web',  grad: 'url(#sphere-cyan)',   delay: 1.2, floatY: [1.4, -1.5, 1.4], floatX: [-0.9, 0.8, -0.9] },
  { id: 'n-k8s',   cx: 82, cy: 34, r: 1.30, depth: 1, label: 'K8s',  grad: 'url(#sphere-violet)', delay: 1.6, floatY: [-1.6, 1.2, -1.6], floatX: [0.8, -1, 0.8] },

  // ── Midground Connectivity Layer (Depth 2) ──
  { id: 'n-ml',    cx: 26, cy: 20, r: 1.10, depth: 2, label: 'ML',   grad: 'url(#sphere-blue)',   delay: 0.5, floatY: [1.2, -1.2, 1.2], floatX: [-0.6, 0.8, -0.6] },
  { id: 'n-gcp',   cx: 72, cy: 18, r: 1.05, depth: 2, label: 'GCP',  grad: 'url(#sphere-cyan)',   delay: 0.9, floatY: [-1.2, 1.4, -1.2], floatX: [0.7, -0.7, 0.7] },
  { id: 'n-sql',   cx: 32, cy: 50, r: 1.15, depth: 2, label: 'SQL',  grad: 'url(#sphere-violet)', delay: 1.1, floatY: [1.5, -1.4, 1.5],   floatX: [-0.8, 0.6, -0.8] },
  { id: 'n-ts',    cx: 55, cy: 52, r: 1.00, depth: 2, label: 'TS',   grad: 'url(#sphere-blue)',   delay: 1.4, floatY: [-1.4, 1.5, -1.4], floatX: [0.6, -0.8, 0.6] },
  { id: 'n-api',   cx: 80, cy: 10, r: 0.95, depth: 2, label: 'API',  grad: 'url(#sphere-cyan)',   delay: 0.3, floatY: [1.0, -1.2, 1.0], floatX: [-0.5, 0.7, -0.5] },

  // ── Deep Background Stars (Depth 3) ──
  { id: 'n-b1',    cx: 10, cy: 10, r: 0.70, depth: 3, label: '',     grad: 'url(#sphere-dim)',    delay: 0.1, floatY: [-0.8, 0.8, -0.8], floatX: [0.4, -0.4, 0.4] },
  { id: 'n-b2',    cx: 92, cy: 12, r: 0.65, depth: 3, label: '',     grad: 'url(#sphere-dim)',    delay: 0.7, floatY: [0.8, -0.8, 0.8],  floatX: [-0.4, 0.4, -0.4] },
  { id: 'n-b3',    cx: 6,  cy: 28, r: 0.75, depth: 3, label: '',     grad: 'url(#sphere-dim)',    delay: 1.3, floatY: [-0.9, 0.9, -0.9], floatX: [0.3, -0.3, 0.3] },
  { id: 'n-b4',    cx: 94, cy: 26, r: 0.80, depth: 3, label: '',     grad: 'url(#sphere-dim)',    delay: 0.2, floatY: [0.9, -0.9, 0.9],  floatX: [-0.4, 0.4, -0.4] },
  { id: 'n-b5',    cx: 12, cy: 52, r: 0.60, depth: 3, label: '',     grad: 'url(#sphere-dim)',    delay: 1.5, floatY: [-0.8, 0.8, -0.8], floatX: [0.4, -0.4, 0.4] },
  { id: 'n-b6',    cx: 76, cy: 50, r: 0.70, depth: 3, label: '',     grad: 'url(#sphere-dim)',    delay: 0.6, floatY: [0.8, -0.8, 0.8],  floatX: [-0.3, 0.3, -0.3] },
  { id: 'n-b7',    cx: 95, cy: 54, r: 0.65, depth: 3, label: '',     grad: 'url(#sphere-dim)',    delay: 1.0, floatY: [-0.8, 0.8, -0.8], floatX: [0.4, -0.4, 0.4] },
]

const edgePairs = [
  [0, 1], [0, 2], [0, 3], [0, 5], [0, 7],
  [1, 2], [1, 4], [1, 6], [1, 8],
  [2, 5], [2, 6], [2, 9],
  [3, 5], [3, 10], [3, 12],
  [4, 6], [4, 8], [4, 13],
  [7, 8], [7, 14], [8, 15],
  [9, 13], [6, 11],
]

const edges = edgePairs.map(([a, b]) => ({
  x1: nodes[a].cx, y1: nodes[a].cy,
  x2: nodes[b].cx, y2: nodes[b].cy,
  depth: Math.max(nodes[a].depth, nodes[b].depth),
  delay: (nodes[a].delay + nodes[b].delay) / 2,
}))

const flowEdges = edgePairs
  .filter((_, i) => i % 3 === 0)
  .map(([a, b]) => ({
    x1: nodes[a].cx, y1: nodes[a].cy,
    x2: nodes[b].cx, y2: nodes[b].cy,
    delay: (nodes[a].delay + nodes[b].delay) / 2,
  }))

export function AiNetworkBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden [will-change:transform]" aria-hidden="true">
      <svg
        className="w-full h-full [transform:translate3d(0,0,0)]"
        viewBox="0 0 100 60"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Cyan 3D Sphere */}
          <radialGradient id="sphere-cyan" cx="32%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#0284c7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
          </radialGradient>

          {/* Violet 3D Sphere */}
          <radialGradient id="sphere-violet" cx="32%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#c084fc" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.9" />
          </radialGradient>

          {/* Electric Blue 3D Sphere */}
          <radialGradient id="sphere-blue" cx="32%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#60a5fa" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#2563eb" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#091e42" stopOpacity="0.9" />
          </radialGradient>

          {/* Dim Background Sphere */}
          <radialGradient id="sphere-dim" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#334155" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
          </radialGradient>
        </defs>

        {/* Connection Lines */}
        {edges.map((e, i) => (
          <line
            key={`e-${i}`}
            x1={e.x1} y1={e.y1}
            x2={e.x2} y2={e.y2}
            strokeWidth={e.depth === 1 ? '0.24' : '0.16'}
            strokeDasharray={e.depth === 3 ? '1 3' : '1.5 2.5'}
            className={
              e.depth === 1
                ? 'stroke-primary/30 dark:stroke-cyan-400/25'
                : 'stroke-primary/18 dark:stroke-cyan-400/14'
            }
          />
        ))}

        {/* Data Flow Impulses */}
        {flowEdges.map((e, i) => (
          <motion.circle
            key={`f-${i}`}
            r={0.42}
            className="fill-cyan-400 dark:fill-cyan-300"
            animate={{
              cx: [e.x1, e.x2, e.x1],
              cy: [e.y1, e.y2, e.y1],
              opacity: [0, 0.85, 0.85, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              delay: e.delay * 1.5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n) => (
          <motion.g
            key={n.id}
            animate={{
              y: n.floatY,
              x: n.floatX,
            }}
            transition={{
              duration: 8 + (n.r % 3),
              repeat: Infinity,
              delay: n.delay,
              ease: 'easeInOut',
            }}
          >
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r * (n.depth === 1 ? 2.2 : 1.6)}
              className={
                n.depth === 1
                  ? 'fill-cyan-500/20 dark:fill-cyan-400/20'
                  : 'fill-primary/15 dark:fill-cyan-400/12'
              }
            />

            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={n.grad}
            />

            {n.label && (
              <text
                x={n.cx}
                y={n.cy + n.r + 2.8}
                textAnchor="middle"
                className="fill-cyan-600 dark:fill-cyan-400 font-mono font-extrabold select-none opacity-30 dark:opacity-35"
                style={{ fontSize: '2px', letterSpacing: '0.08em' }}
              >
                {n.label}
              </text>
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
