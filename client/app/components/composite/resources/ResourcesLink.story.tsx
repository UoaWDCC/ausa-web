import type { Meta, StoryObj } from "@storybook/nextjs"
import ResourcesLink from "./ResourcesLink"

const meta: Meta<typeof ResourcesLink> = {
  title: "Components/Resources/ResourcesLink",
  component: ResourcesLink,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof ResourcesLink>

export const Default: Story = {
  args: {
    title: "Mental Health Foundation",
    description:
      "Access articles, support lines, and tools designed to help students manage stress and emotional wellbeing.",
    url: "https://www.mentalhealth.org.nz/",
  },
}
