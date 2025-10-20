import type { Meta, StoryObj } from "@storybook/nextjs"
import SkeletonCarouselCard from "./SkeletonCarouselCard"

const meta = {
  title: "Composite/SkeletonCarouselCard",
  component: SkeletonCarouselCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SkeletonCarouselCard>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSkeletonCarouselCard: Story = {
  args: {
    variant: "thin",
  },
}

export const WideSkeletonCarouselCard: Story = {
  args: {
    variant: "wide",
  },
}
