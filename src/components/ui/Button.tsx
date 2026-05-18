import React, { ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string; // Add explicitly to be sure
  type?: "submit" | "button" | "reset";
}

export const Button = ({
  children,
  to,
  href,
  variant = "primary",
  className,
  size = "md",
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 ease-in-out active:scale-95 hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-[#fb5c01] text-white shadow-lg shadow-[#fb5c01]/20 hover:shadow-xl hover:shadow-[#fb5c01]/30 hover:bg-[#ff6d1a] hover:scale-[1.03]",
    secondary: "bg-white text-[#1d1b18] shadow-sm hover:shadow-md hover:bg-[#fafafa] hover:scale-[1.03]",
    outline: "border-2 border-[#fb5c01] text-[#fb5c01] hover:bg-[#fb5c01] hover:text-white hover:shadow-lg hover:shadow-[#fb5c01]/10 hover:scale-[1.03]",
    ghost: "text-[#5b4137] hover:text-[#fb5c01] hover:bg-[#fb5c01]/5 hover:translate-x-1",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-10 py-5 text-lg",
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
