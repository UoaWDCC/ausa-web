import type { Meta, StoryObj } from "@storybook/nextjs"
import ResourcesSection from "./ResourcesSection"

const meta: Meta<typeof ResourcesSection> = {
  title: "Components/Resources/ResourcesSection",
  component: ResourcesSection,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof ResourcesSection>

export const Default: Story = {
  args: {
    sectionTitle: "Mental Health Resources",
    sectionDescription:
      "Explore trusted resources and organizations that support student wellbeing.",
    resources: [
      {
        title: "Lifeline New Zealand",
        description:
          "Free 24/7 helpline for anyone feeling distressed or in need of someone to talk to.",
        url: "https://www.lifeline.org.nz/",
      },
      {
        title: "Youthline",
        description:
          "A safe space for young people to get help with anything that’s worrying them.",
        url: "https://www.youthline.co.nz/",
      },
    ],
  },
}
