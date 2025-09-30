"use client";
import React, { useState } from "react";

interface TextBoxProps {
  variant?: "big" | "small" | "small-long"; 
  placeholder?: string; 
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
      : variant === "small-long"
      ? "w-[630px] h-[40px] p-2 text-sm" 
      : "w-[300px] h-[40px] p-2 text-sm"; 

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
