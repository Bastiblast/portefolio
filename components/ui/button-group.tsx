import * as React from "react"
import { cn } from "@/lib/utils"

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-lg border border-border bg-background p-1 transition-colors",
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
      "px-3 py-2 rounded-md text-sm font-medium transition-colors text-foreground cursor-pointer",
      "hover:bg-secondary/10 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground",
      className
    )}
    {...props}
  />
))
ButtonGroupItem.displayName = "ButtonGroupItem"

export { ButtonGroup, ButtonGroupItem }
