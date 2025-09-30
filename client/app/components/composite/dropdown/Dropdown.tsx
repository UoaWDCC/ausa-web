"use client";
import React, { useState } from "react";

interface DropdownProps {
  options: string[];       // items to select from
  placeholder?: string;    // default text when nothing is selected
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
}) => {
  const [selected, setSelected] = useState("");

  const styles =
    "bg-[#F8FAFC] rounded-lg outline-none text-black w-[250px] h-[40px] p-2 text-sm";

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
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
