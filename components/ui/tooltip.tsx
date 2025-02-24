"use client"

import * as React from "react"
import {
  Tooltip as RadixTooltip,
  TooltipContent as RadixTooltipContent,
  TooltipProvider as RadixTooltipProvider,
  TooltipTrigger as RadixTooltipTrigger,
} from "@radix-ui/react-tooltip"

const TooltipProvider = RadixTooltipProvider

const Tooltip = RadixTooltip

const TooltipTrigger = RadixTooltipTrigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof RadixTooltipContent>,
  React.ComponentPropsWithoutRef<typeof RadixTooltipContent>
>(({ className, children, ...props }, ref) => (
  <RadixTooltipContent
    ref={ref}
    className="z-[100] overflow-hidden rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    {...props}
  >
    {children}
  </RadixTooltipContent>
))
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }

