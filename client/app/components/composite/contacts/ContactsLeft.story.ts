import type { Meta, StoryObj } from "@storybook/nextjs"
import ContactsLeft from "./ContactsLeft"
import background from "../contacts/contacts background.jpeg"

const meta: Meta<typeof ContactsLeft> = {
  title: "Components/Contacts/ContactsLeft",
  component: ContactsLeft,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title1: { control: { type: "text" }, description: "The main title text" },
    title2: {
      control: { type: "text" },
      description: "Optional second title text",
    },
    subtitle: {
      control: { type: "text" },
      description: "Optional subtitle/description text",
    },
    backgroundImage: {
      control: { type: "text" },
      description: "URL for background image",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default
export const Default: Story = {
  args: {
    title1: "Have any Questions?",
    title2: "Reach out!",
    subtitle:
      "We're here to listen and support you. Whether you have a question, need guidance, or just want to connect with our team, you can reach out anytime.",
  },
}

// Title only
export const TitleOnly: Story = {
  args: {
    title1: "Have any Questions? Reach out!",
  },
}

// With custom background image
export const CustomBackground: Story = {
  args: {
    title1: "Have any Questions? Reach out!",
    subtitle:
      "We're here to listen and support you. Whether you have a question, need guidance, or just want to connect with our team, you can reach out anytime.",
  },
}
