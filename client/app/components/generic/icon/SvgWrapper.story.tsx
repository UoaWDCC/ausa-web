import type { Meta, StoryObj } from "@storybook/nextjs"
import { fn } from "storybook/test"

import SvgWrapper from "./SvgWrapper"

const meta = {
  title: "Example/Regular/SvgWrapper",
  component: SvgWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number" },
    stroke: { control: "color" },
    fill: { control: "color" },
    strokeWidth: { control: "number" },
    viewBox: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SvgWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const ExternalLinkIcon: Story = {
  args: {
    size: 25,
    stroke: "#8C8C8C",
    strokeWidth: 1.25,
    viewBox: "0 0 25 25",
    children: (
      <>
        <path
          d="M7.5 17.5L17.5 7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 7.5H17.5V17.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
}

export const LargeRedIcon: Story = {
  args: {
    size: 48,
    stroke: "#ff5555",
    strokeWidth: 2,
    viewBox: "0 0 25 25",
    children: (
      <>
        <path
          d="M7.5 17.5L17.5 7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 7.5H17.5V17.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
}

export const FilledHeartIcon: Story = {
  args: {
    size: 32,
    fill: "#ea49f2",
    stroke: "#d946ef",
    strokeWidth: 1,
    viewBox: "0 0 24 24",
    children: (
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
}

export const CustomSizeIcon: Story = {
  args: {
    width: 60,
    height: 30,
    stroke: "#34ba32",
    strokeWidth: 1.5,
    viewBox: "0 0 25 25",
    children: (
      <>
        <path
          d="M7.5 17.5L17.5 7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 7.5H17.5V17.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
}
