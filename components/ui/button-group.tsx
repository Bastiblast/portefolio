import * as React from "react"
import { cn } from "@/lib/utils"

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-lg border border-sage/30 bg-background p-1",
      className
    )}
    {...props}
  />
))
ButtonGroup.displayName = "ButtonGroup"

const ButtonGroupItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      "hover:bg-sage/20 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2",
      "data-[active=true]:bg-sage data-[active=true]:text-ivory",
      className
    )}
    {...props}
  />
))
ButtonGroupItem.displayName = "ButtonGroupItem"

export { ButtonGroup, ButtonGroupItem }
