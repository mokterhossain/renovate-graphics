"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "gradient";
  href?: string; // for routing
  onClick?: () => void; // optional click handler
  icon?: ReactNode; // optional icon
  className?: string; // extra tailwind classes
  size?: "sm" | "md" | "lg"; // text size
  width?: "auto" | "fixed" | "full"; // button width
  height?: "sm" | "md" | "lg"; // button height
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  className = "",
  size = "md",
  width = "auto",
  height = "md",
}: ButtonProps) {
  // Base styles
  const baseClasses =
    "flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300";

  // Variant styles
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-[#00A0E3] text-white shadow-md hover:bg-[#0090cc] hover:shadow-lg";
      break;
    case "outline":
      variantClasses =
        "border border-[#00A0E3] text-[#00A0E3] hover:bg-[#00A0E3] hover:text-white";
      break;
    case "gradient":
      variantClasses =
        "bg-gradient-to-r from-[#00A0E3] to-[#007bbd] text-white shadow-md hover:opacity-90";
      break;
  }

  // Width options
  let widthClasses = "";
  switch (width) {
    case "auto":
      widthClasses = "w-auto";
      break;
    case "fixed":
      widthClasses = "w-40"; // standard fixed width
      break;
    case "full":
      widthClasses = "w-full";
      break;
  }

  // Height options
  let heightClasses = "";
  switch (height) {
    case "sm":
      heightClasses = "h-10";
      break;
    case "md":
      heightClasses = "h-12"; // standard height
      break;
    case "lg":
      heightClasses = "h-16";
      break;
  }

  // Text size
  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "text-sm";
      break;
    case "md":
      sizeClasses = "text-base";
      break;
    case "lg":
      sizeClasses = "text-lg";
      break;
  }

  const finalClasses = `${baseClasses} ${variantClasses} ${widthClasses} ${heightClasses} ${sizeClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalClasses}>
        {icon && icon}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {icon && icon}
      {children}
    </button>
  );
}
