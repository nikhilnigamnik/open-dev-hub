import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex h-fit w-fit rounded-xl border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-slate-200 outline-none focus:ring-4 focus:ring-gray-500",
  {
    variants: {
      variant: {
        default: "",
        destructive:
          "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-border text-slate-50 shadow-sm ",
        secondary:
          "bg-slate-900 text-slate-100 shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: " px-8 py-1",
        sm: "border border-border bg-secondary rounded-xl px-3 py-1 text-sm cursor-pointer",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    { className, variant, size, loading, asChild = false, ...props },

    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), {
          "opacity-50 pointer-events-none": loading,
        })}
        ref={ref}
        {...props}
      >
        {loading ? <span>Loading...</span> : props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
