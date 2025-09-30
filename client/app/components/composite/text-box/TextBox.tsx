"use client";
import React from "react";

interface TextBoxProps {
  variant?: "big" | "small" | "small-long"; 
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  variant = "small",
  placeholder = "",
  value = "",
  onChange,
}) => {
  const baseStyles =
    "bg-[#F8FAFC] rounded-lg outline-none resize-none placeholder:text-slate-500 text-black w-full max-w-full";

  const sizeStyles =
    variant === "big"
      ? "h-[300px] p-4 text-sm md:h-[300px]"
      : variant === "small-long"
      ? "h-[40px] p-2 text-sm md:h-[40px]"
      : "h-[40px] p-2 text-sm md:h-[40px]";

  return variant === "big" ? (
    <textarea
      value={value}
      placeholder={placeholder} 
      onChange={(e) => onChange?.(e.target.value)}
      className={`${baseStyles} ${sizeStyles}`}
    />
  ) : (
    <input
      type="text"
      value={value}
      placeholder={placeholder} 
      onChange={(e) => onChange?.(e.target.value)}
      className={`${baseStyles} ${sizeStyles}`}
    />
  );
};

export default TextBox;
