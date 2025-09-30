import React from "react";
import TextBox from "../components/composite/text-box/TextBox";
import Dropdown from "../components/composite/dropdown/Dropdown";

const Contact = () => {
  return (
    // full page container
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-10">
      {/* form container */}
      <div className="bg-white w-[90%] max-w-[900px] p-10 mt-[30px] rounded-lg shadow-lg flex gap-10">
        
        {/* left column */}
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-xl font-semibold">Left Column</h2>
          <p>Some content here...</p>
        </div>

        {/* right column (form inputs) */}
        <div className="flex flex-col gap-4 flex-1">
            <h1>First Name</h1>
          <TextBox placeholder="Text" variant="small" />
          <TextBox placeholder="Message Here" variant="big" />
          <Dropdown
            options={["None", "Option 1", "Option 2", "Option 3"]}
            placeholder="Select an option"
          />
        </div>
      </div>
    </div>
  );
};
  export default Contact;
