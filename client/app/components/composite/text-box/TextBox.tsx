"use client";
import React, { useState } from "react";

interface TextBoxProps {
  variant?: "big" | "small";
  placeholder?: string; // text shown inside input
}

const TextBox: React.FC<TextBoxProps> = ({
  variant = "small",
  placeholder = "",
}) => {
  const [value, setValue] = useState("");

  const baseStyles =
    "bg-[#F8FAFC] rounded-lg outline-none resize-none text-black";

  const sizeStyles =
    variant === "big"
      ? "w-[600px] h-[300px] p-4 text-sm" 
      : "w-[250px] h-[40px] p-2 text-sm";

  return variant === "big" ? (
    <textarea
      value={value}
      placeholder={placeholder} 
      onChange={(e) => setValue(e.target.value)}
      className={`${baseStyles} ${sizeStyles}`}
    />
  ) : (
    <input
      type="text"
      value={value}
      placeholder={placeholder} 
      onChange={(e) => setValue(e.target.value)}
      className={`${baseStyles} ${sizeStyles}`}
    />
  );
};

export default TextBox;
