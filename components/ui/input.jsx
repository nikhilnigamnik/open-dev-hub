import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "relative inline-flex hover:ring-1 hover:ring-gray-500  rounded-xl border border-blue-100/20 bg-blue-200/10 px-4 py-1 text-blue-200 outline-none focus:ring-4 focus:ring-gray-500 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full  ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
