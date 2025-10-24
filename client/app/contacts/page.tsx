"use client"
import React from "react"
import TextBox from "../components/composite/text-box/TextBox"
import Dropdown from "../components/composite/dropdown/Dropdown"
import emailjs from "@emailjs/browser"
import { useState } from "react"
import ContactsLeft from "../components/composite/contacts/ContactsLeft"
import background from "../components/composite/contacts/contacts background.jpeg"

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    yearLevel: "",
    email: "",
    enquiryType: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all required fields!")
      return
    }

    emailjs
      .send(
        "service_vo27jod",
        "template_q845yhw",
        formData,
        "DPs78eLGecvnCMXH1",
      )
      .then(
        () => {
          alert("Message sent successfully!")
          setFormData({
            firstName: "",
            lastName: "",
            idNumber: "",
            yearLevel: "",
            email: "",
            enquiryType: "",
            message: "",
          })
        },
        (error) => {
          console.error(error)
          alert("Failed to send message. Try again later.")
        },
      )
  }

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
              backgroundImage={background}
            />
          </div>

          {/* RHS form */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-10">
            {/* column 1 */}
            <div className="flex flex-col gap-4">
              <h3 className=" text-2xl text-[#043873]">First Name</h3>
              <TextBox
                placeholder="Text"
                variant="small"
                value={formData.firstName}
                onChange={(val) => handleChange("firstName", val)}
              />
              <h3 className=" text-2xl text-[#043873]">ID Number</h3>
              <TextBox
                placeholder="Text"
                variant="small"
                value={formData.idNumber}
                onChange={(val) => handleChange("idNumber", val)}
              />
            </div>
            {/* column 2 */}
            <div className="flex flex-col gap-4">
              <h3 className=" text-2xl text-[#043873]">Last Name</h3>
              <TextBox
                placeholder="Text"
                variant="small"
                value={formData.lastName}
                onChange={(val) => handleChange("lastName", val)}
              />
              <h3 className=" text-2xl text-[#043873]">Year Level</h3>
              <TextBox
                placeholder="Text"
                variant="small"
                value={formData.yearLevel}
                onChange={(val) => handleChange("yearLevel", val)}
              />
            </div>

            {/* email */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <h3 className="text-2xl text-[#043873]">Email</h3>
              <TextBox
                placeholder="Text"
                variant="small-long"
                value={formData.email}
                onChange={(val) => handleChange("email", val)}
              />
            </div>

            {/* enquiry Type */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-[#043873]">Enquiry Type</h3>
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

            {/* message */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2 mt-4">
              <h3 className="text-2xl text-[#043873]">Message Here</h3>
              <TextBox
                placeholder="Message Here"
                variant="big"
                value={formData.message}
                onChange={(val) => handleChange("message", val)}
              />
            </div>

            {/* submit button */}
            <div className="col-span-1 md:col-span-2 flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-3 rounded-full hover:bg-[#2563eb]/70 bg-[#2563eb] cursor-pointer duration-300 whitespace-nowrap text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contacts
