import type { Meta, StoryObj } from "@storybook/nextjs"
import ResourcesSection from "./ResourcesSection"
import ResourcesLink from "./ResourcesLink"

const meta: Meta<typeof ResourcesSection> = {
  title: "Components/Contacts/ContactsLeft",
  component: ResourcesSection,
  parameters: {
    layout: "fullscreen",
  },