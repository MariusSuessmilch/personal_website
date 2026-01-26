import { ReactNode } from "react"

interface CalloutProps {
  children: ReactNode
  variant?: "info" | "warning" | "success"
}

const variantStyles = {
  info: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    icon: "text-cyan-400",
    iconBg: "bg-cyan-500/20",
  },
  warning: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    icon: "text-amber-400",
    iconBg: "bg-amber-500/20",
  },
  success: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    icon: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
  },
}

export function Callout({ children, variant = "info" }: CalloutProps) {
  const styles = variantStyles[variant]

  return (
    <div
      className={`mb-6 rounded-lg border ${styles.border} ${styles.bg} p-5`}
    >
      {children}
    </div>
  )
}
