
import * as React from "react"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
  color?: string
  size?: number
  strokeWidth?: number
  fallback?: string
}

const Icon = ({
  name,
  color,
  size = 24,
  strokeWidth = 2,
  className,
  fallback,
  ...props
}: IconProps) => {
  const IconComponent = (LucideIcons as any)[name] || (fallback && (LucideIcons as any)[fallback]) || LucideIcons.HelpCircle

  return (
    <IconComponent
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      className={cn("", className)}
      {...props}
    />
  )
}

export default Icon
