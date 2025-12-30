import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          {
            // Variants
            "bg-yellow-400 text-neutral-900 hover:bg-yellow-500 hover:shadow-lg":
              variant === "primary",
            "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white":
              variant === "secondary",
            "text-neutral-700 hover:bg-neutral-100": variant === "ghost",
            "border border-neutral-300 text-neutral-700 hover:border-yellow-400 hover:text-yellow-600":
              variant === "outline",
            // Sizes
            "rounded-md px-3 py-1.5 text-sm": size === "sm",
            "rounded-lg px-6 py-3": size === "md",
            "rounded-xl px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
