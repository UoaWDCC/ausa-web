"use client";
import React from "react";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  value = "",
  onChange,
}) => {
  const styles =
    "bg-[#F8FAFC] rounded-lg outline-none text-black w-full max-w-full h-[40px] p-2 text-sm";

  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={styles}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
