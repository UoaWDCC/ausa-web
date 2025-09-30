import React from "react";
import TextBox from "../components/composite/text-box/TextBox";
import Dropdown from "../components/composite/dropdown/Dropdown";

const Contact = () => {
  return (
    // full page container
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-10">
      {/* form container */}
      <div className="bg-white w-[90%] max-w-[900px] p-10 mt-[30px] rounded-lg shadow-lg flex gap-10">
        
        {/* form inputs (rhs) */}
        <div className="grid grid-cols-2 gap-6">

          {/* top row: first name / last name columns */}
          <div className="flex flex-col gap-4 border border-black">
            <label className="text-black">First Name</label>
            <TextBox placeholder="Text" variant="small" />
            <label className="text-black">ID Number</label>
            <TextBox placeholder="Text" variant="small" />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-black">Last Name</label>
            <TextBox placeholder="Text" variant="small" />
            <label className="text-black">Year Level</label>
            <TextBox placeholder="Text" variant="small" />
          </div>

          {/* Email spans full width */}
          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-black">Email</label>
            <TextBox placeholder="Text" variant="small-long" />
          </div>

          {/* Middle row: enquiry + three small boxes */}
          <div className="flex flex-col gap-4">
            <label className="text-black">Enquiry Type</label>
            <Dropdown
              options={[
                "Membership & Recruitment",
                "Events",
                "Collaboration & Partnerships",
                "Wellbeing",
              ]}
              placeholder="Select an option"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-black">Extra 1</label>
            <TextBox placeholder="Text" variant="small" />
            <label className="text-black">Extra 2</label>
            <TextBox placeholder="Text" variant="small" />
            <label className="text-black">Extra 3</label>
            <TextBox placeholder="Text" variant="small" />
          </div>

          {/* Message spans full width at the bottom */}
          <div className="col-span-2 flex flex-col gap-2 mt-4">
            <label className="text-black">Message Here</label>
            <TextBox placeholder="Message Here" variant="big" />
          </div>
            
        </div>
      </div>
    </div>
  );
};
  export default Contact;
