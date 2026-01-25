"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Point {
  x: number
  y: number
}

const SGD_STEPS: Point[] = [
  { x: 80, y: 20 },
  { x: 65, y: 35 },
  { x: 55, y: 30 },
  { x: 40, y: 50 },
  { x: 35, y: 45 },
  { x: 25, y: 55 },
  { x: 20, y: 50 },
]

const CONTOUR_RADII = [45, 36, 27, 18, 10, 4]
const CENTER = { x: 20, y: 50 }

export function SGDVisualizer() {
  const [visibleSteps, setVisibleSteps] = useState(0)
  const [isResetting, setIsResetting] = useState(false)

  useEffect(() => {
    if (isResetting) {
      const resetTimer = setTimeout(() => {
        setIsResetting(false)
        setVisibleSteps(0)
      }, 500)
      return () => clearTimeout(resetTimer)
    }

    if (visibleSteps < SGD_STEPS.length) {
      const stepTimer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1)
      }, 600)
      return () => clearTimeout(stepTimer)
    } else {
      const pauseTimer = setTimeout(() => {
        setIsResetting(true)
      }, 2000)
      return () => clearTimeout(pauseTimer)
    }
  }, [visibleSteps, isResetting])

  const visiblePoints = SGD_STEPS.slice(0, visibleSteps)

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 shadow-[inset_0_0_30px_rgba(99,102,241,0.1)] backdrop-blur-md">
      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Corner accents */}
      <div className="absolute left-2 top-2 h-4 w-4 border-l border-t border-cyan-500/30" />
      <div className="absolute right-2 top-2 h-4 w-4 border-r border-t border-cyan-500/30" />
      <div className="absolute bottom-2 left-2 h-4 w-4 border-b border-l border-cyan-500/30" />
      <div className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-cyan-500/30" />

      {/* Label */}
      <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-cyan-500/50">
        Loss Landscape
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-purple-500/50">
        SGD Path
      </div>

      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Glow filters */}
        <defs>
          <filter id="contourGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="headGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Contour lines - subtle glowing ellipses */}
        {CONTOUR_RADII.map((radius, index) => (
          <ellipse
            key={index}
            cx={CENTER.x}
            cy={CENTER.y}
            rx={radius * 1.3}
            ry={radius}
            fill="none"
            stroke="rgb(34, 211, 238)"
            strokeWidth={0.3}
            strokeOpacity={0.15 + index * 0.03}
            filter="url(#contourGlow)"
            className="animate-pulse"
            style={{
              animationDuration: `${4 + index * 0.5}s`,
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}

        {/* Center glow - the minimum */}
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={8}
          fill="url(#centerGradient)"
        />

        {/* Path connecting visited points */}
        <AnimatePresence>
          {visiblePoints.length > 1 && (
            <motion.path
              key="path"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              d={`M ${visiblePoints.map((p) => `${p.x},${p.y}`).join(" L ")}`}
              fill="none"
              stroke="rgb(168, 85, 247)"
              strokeWidth={0.8}
              strokeOpacity={0.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#pathGlow)"
              strokeDasharray="2 1"
            />
          )}
        </AnimatePresence>

        {/* Previous step dots */}
        <AnimatePresence>
          {visiblePoints.slice(0, -1).map((point, index) => (
            <motion.g key={`dot-${index}`}>
              {/* Outer glow ring */}
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                cx={point.x}
                cy={point.y}
                r={2.5}
                fill="none"
                stroke="rgb(168, 85, 247)"
                strokeWidth={0.5}
                filter="url(#dotGlow)"
              />
              {/* Inner dot */}
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                }}
                cx={point.x}
                cy={point.y}
                r={1.2}
                fill="rgb(168, 85, 247)"
                filter="url(#dotGlow)"
              />
            </motion.g>
          ))}
        </AnimatePresence>

        {/* Current step - the glowing head */}
        <AnimatePresence>
          {visiblePoints.length > 0 && (
            <motion.g key={`head-${visibleSteps}`}>
              {/* Pulsing outer ring */}
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0.2, 0.6],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  scale: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                  opacity: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                }}
                cx={visiblePoints[visiblePoints.length - 1].x}
                cy={visiblePoints[visiblePoints.length - 1].y}
                r={4}
                fill="none"
                stroke="rgb(34, 211, 238)"
                strokeWidth={0.5}
                filter="url(#headGlow)"
              />
              {/* Inner glow */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 12,
                }}
                cx={visiblePoints[visiblePoints.length - 1].x}
                cy={visiblePoints[visiblePoints.length - 1].y}
                r={3}
                fill="rgb(34, 211, 238)"
                fillOpacity={0.3}
                filter="url(#headGlow)"
              />
              {/* Core dot */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                cx={visiblePoints[visiblePoints.length - 1].x}
                cy={visiblePoints[visiblePoints.length - 1].y}
                r={1.8}
                fill="rgb(34, 211, 238)"
                filter="url(#headGlow)"
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step counter */}
        <text
          x="95"
          y="8"
          className="fill-zinc-500 font-mono text-[4px]"
          textAnchor="end"
        >
          {visibleSteps > 0 ? `Step ${visibleSteps}/${SGD_STEPS.length}` : "—"}
        </text>
      </svg>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-zinc-950/50 to-transparent" />
    </div>
  )
}
