import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-50 text-zinc-900",
        secondary:
          "border-transparent bg-zinc-800 text-zinc-50",
        destructive:
          "border-transparent bg-red-500 text-white",
        outline: "border-zinc-700 bg-zinc-100/10 text-zinc-50",
        glow: "border-purple-500/40 bg-purple-500/15 text-purple-200",
        cyan: "border-cyan-500/40 bg-cyan-500/15 text-cyan-200",
        lime: "border-lime-500/40 bg-lime-500/15 text-lime-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
