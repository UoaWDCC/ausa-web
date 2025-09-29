import type { Meta, StoryObj } from "@storybook/nextjs"
import QuizProgressBar from "./QuizProgressBar"

const meta: Meta<typeof QuizProgressBar> = {
  title: "Components/Quiz/QuizProgressBar",
  component: QuizProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    totalSections: {
      control: { type: "range", min: 1, max: 20 },
      description: "Total number of questions/sections",
    },
    currentSection: {
      control: { type: "range", min: 0, max: 19 },
      description: "Current active section (0-indexed)",
    },
    width: {
      control: { type: "number" },
      description: "Width of the entire progress bar in pixels",
    },
    height: {
      control: { type: "number" },
      description: "Height of the progress bar in pixels",
    },
    gap: {
      control: { type: "number" },
      description: "Gap between individual sections in pixels",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default story - 5 questions, currently on question 2
export const Default: Story = {
  args: {
    totalSections: 5,
    currentSection: 2,
  },
}

// Individual segment size (158x11 as requested)
export const IndividualSegment: Story = {
  args: {
    totalSections: 1,
    currentSection: 0,
    width: 158,
    height: 11,
  },
}

// Multiple individual segments
export const MultipleSegments: Story = {
  args: {
    totalSections: 4,
    currentSection: 1,
    width: 158 * 4 + 12, // 4 segments with gaps
    height: 11,
  },
}

// Long single bar (650x11 as requested)
export const LongBar: Story = {
  args: {
    totalSections: 10,
    currentSection: 6,
    width: 650,
    height: 11,
  },
}

// Starting state - no progress
export const Starting: Story = {
  args: {
    totalSections: 8,
    currentSection: -1, // Before first question
    width: 650,
    height: 11,
  },
}

// Completed state
export const Completed: Story = {
  args: {
    totalSections: 6,
    currentSection: 5, // Last question completed
    width: 650,
    height: 11,
  },
}

// Custom styling example
export const CustomHeight: Story = {
  args: {
    totalSections: 5,
    currentSection: 2,
    width: 500,
    height: 20,
    gap: 8,
  },
}

// No gaps - continuous bar
export const ContinuousBar: Story = {
  args: {
    totalSections: 10,
    currentSection: 4,
    width: 650,
    height: 11,
    gap: 0,
  },
}
