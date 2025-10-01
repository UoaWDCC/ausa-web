import type { Meta, StoryObj } from "@storybook/nextjs"
import QuizButton from "./QuizButton"

const meta: Meta<typeof QuizButton> = {
  title: "Components/Quiz/QuizButton",
  component: QuizButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
      description: "The text to display inside the button",
    },
    onClick: {
      action: "clicked",
      description: "Function called when button is clicked",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    text: "Quiz Answer",
  },
}

// Different text examples
export const ShortAnswer: Story = {
  args: {
    text: "A",
  },
}

export const LongAnswer: Story = {
  args: {
    text: "This is a very long quiz answer that might wrap to multiple lines in the button",
  },
}

export const MultipleChoice: Story = {
  args: {
    text: "B) The mitochondria is the powerhouse of the cell",
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    text: "Disabled Answer",
    disabled: true,
  },
}

// Interactive story to test hover effects
export const Interactive: Story = {
  args: {
    text: "Hover over me to see the blue border!",
  },
  parameters: {
    docs: {
      description: {
        story: "Hover over this button to see the light blue border effect.",
      },
    },
  },
}
