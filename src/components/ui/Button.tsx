import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  to,
  onClick,
  variant = "primary",
  className,
  size = "md",
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-br from-[#a73a00] to-[#fb5c01] text-white shadow-xl shadow-[#fb5c01]/10 hover:opacity-90",
    secondary: "bg-white text-[#1d1b18] hover:bg-[#f8f3ed]",
    outline: "border border-[#e4bfb1]/30 text-[#1d1b18] hover:bg-[#f8f3ed]",
    ghost: "text-[#5b4137] hover:text-[#1d1b18] hover:bg-[#f8f3ed]/50",
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

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};
