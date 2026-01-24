"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  className,
}: ProjectCardProps) {
  const CardWrapper = link ? "a" : "div"
  const cardProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-md transition-all duration-300",
        "hover:border-white/20 hover:bg-zinc-900/70",
        link && "cursor-pointer",
        className
      )}
    >
      <CardWrapper {...cardProps} className="block p-6">
        {/* Oil slick gradient effect on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(6,182,212,0.1) 50%, rgba(132,204,22,0.1) 100%)",
          }}
        />

        <div className="relative z-10">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="font-mono text-xl font-semibold tracking-tight text-zinc-50 transition-colors group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-lime-400 group-hover:bg-clip-text group-hover:text-transparent">
              {title}
            </h3>
            {link && (
              <ExternalLink className="h-5 w-5 flex-shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-300" />
            )}
          </div>

          <p className="mb-6 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-400 transition-all duration-200 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  )
}
