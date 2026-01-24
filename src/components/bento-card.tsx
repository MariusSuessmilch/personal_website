"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface BentoCardProps {
  title: string
  description: string
  icon: LucideIcon
  tags?: string[]
  className?: string
  glowColor?: "purple" | "cyan" | "lime"
}

const glowColors = {
  purple: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
  cyan: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  lime: "hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.15)]",
}

const iconColors = {
  purple: "text-purple-400",
  cyan: "text-cyan-400",
  lime: "text-lime-400",
}

export function BentoCard({
  title,
  description,
  icon: Icon,
  tags,
  className,
  glowColor = "purple",
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-md transition-all duration-500",
        glowColors[glowColor],
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className={cn("mb-4 inline-block", iconColors[glowColor])}>
          <Icon className="h-8 w-8" strokeWidth={1.5} />
        </div>

        <h3 className="mb-2 font-mono text-lg font-semibold tracking-tight text-zinc-50">
          {title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant={glowColor === "purple" ? "glow" : glowColor === "cyan" ? "cyan" : "lime"}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
