"use client";
import React from "react";
import TextBox from "../components/composite/text-box/TextBox";
import Dropdown from "../components/composite/dropdown/Dropdown";
import Button from "../components/generic/button/regular/Button";
import emailjs from "@emailjs/browser";
import { useState } from 'react'
import ContactsLeft from "../components/composite/contacts/ContactsLeft";
import Image from "next/image";
import background from "../components/composite/contacts/contacts background.jpeg";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    yearLevel: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill in all required fields!");
      return;
    }

    emailjs
      .send(
        "service_vo27jod",
        "template_q845yhw",
        formData,
        "DPs78eLGecvnCMXH1"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            idNumber: "",
            yearLevel: "",
            email: "",
            enquiryType: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-16 px-5 md:p-10">
      <form
        className="w-full max-w-[1500px] max-h-[1500px] p-5 md:p-10 mt-5 md:mt-[30px] flex flex-col md:flex-row gap-6 md:gap-10"
        onSubmit={sendEmail}
      >
        {/* LHS picture */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full bg-white rounded-lg shadow-lg">
          <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center items-center rounded-r-lg">
            <ContactsLeft
              title1="Have any Questions?"
              title2="Reach out!"
              subtitle="We're here to listen and support you. Whether you have a question, need guidance, or just want to connect with our team, you can reach out anytime."
              backgroundImage={background}
            />
          </div>

          {/* RHS form */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-10">
            {/* column 1 */}
            <div className="flex flex-col gap-4">
              <label className="h3 text-2xl text-[#043873]">First Name</label>
              <TextBox
                placeholder="Text"
                variant="small"
                value={formData.firstName}
                onChange={(val) => handleChange("firstName", val)}
              />
              <label className="h3 text-2xl text-[#043873]">ID Number</label>
              <TextBox
                placeholder="Text"
                variant="small"
                value={formData.idNumber}
                onChange={(val) => handleChange("idNumber", val)}
              />
            </div>
              {/* column 2 */}
            <div className="flex flex-col gap-4">
              <label className="h3 text-2xl text-[#043873]">Last Name</label>
              <TextBox
                placeholder="Text"
                variant="small"
                value={formData.lastName}
                onChange={(val) => handleChange("lastName", val)}
              />
              <label className="h3 text-2xl text-[#043873]">Year Level</label>
              <TextBox
                placeholder="Text"
                variant="small"
                value={formData.yearLevel}
                onChange={(val) => handleChange("yearLevel", val)}
              />
            </div>

            {/* email */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label className="h3 text-2xl text-[#043873]">Email</label>
              <TextBox
                placeholder="Text"
                variant="small-long"
                value={formData.email}
                onChange={(val) => handleChange("email", val)}
              />
            </div>

            {/* enquiry Type */}
            <div className="flex flex-col gap-4">
              <label className="h3 text-2xl text-[#043873]">Enquiry Type</label>
              <Dropdown
                options={[
                  "Membership & Recruitment",
                  "Events",
                  "Collaboration & Partnerships",
                  "Wellbeing",
                ]}
                placeholder="Select an option"
                value={formData.enquiryType}
                onChange={(val) => handleChange("enquiryType", val)}
              />
            </div>

            {/* action buttons */}
            <div className="flex flex-col gap-4 mt-4 md:mt-10 col-span-1 md:col-span-2">
              <div className="flex flex-wrap gap-4">
                <Button 
                  label="Action 1" 
                  backgroundColor="#1a61b1" 
                />
                <Button 
                  label="Action 2" 
                  backgroundColor="#1a61b1"
                  />
                <Button 
                  label="Action 3" 
                  backgroundColor="#1a61b1"
                  />
              </div>
            </div>

            {/* message */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2 mt-4">
              <label className="h3 text-2xl text-[#043873]">Message Here</label>
              <TextBox
                placeholder="Message Here"
                variant="big"
                value={formData.message}
                onChange={(val) => handleChange("message", val)}
              />
            </div>

            {/* submit button */}
            <div className="col-span-1 md:col-span-2 flex justify-end mt-6">
              <Button label="Submit" backgroundColor="#2563eb" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
