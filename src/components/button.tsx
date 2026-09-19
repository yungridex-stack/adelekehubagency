import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "dark" | "outline";
  children: ReactNode;
};

export function Button({ asChild, variant = "primary", className = "", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const variantClass = variant === "primary" ? "btn-primary" : variant === "dark" ? "btn-dark" : "btn-outline";
  return <Comp className={`${variantClass} ${className}`} {...props} />;
}