import type { Meta, StoryObj } from "@storybook/nextjs"
import { fn } from "storybook/test"
import { Button } from "./Button"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    asLink: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Primary Variants
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
}

export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Small Primary",
  },
}

export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Large Primary",
  },
}

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled Primary",
  },
}

// Secondary Variants
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "Small Secondary",
  },
}

export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    size: "lg",
    children: "Large Secondary",
  },
}

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    children: "Disabled Secondary",
  },
}

// Link Buttons
export const LinkPrimary: Story = {
  args: {
    asLink: true,
    href: "https://example.com",
    variant: "primary",
    children: "Primary Link",
  },
}

export const LinkSecondary: Story = {
  args: {
    asLink: true,
    href: "https://example.com",
    variant: "secondary",
    children: "Secondary Link",
  },
}

export const LinkDisabled: Story = {
  args: {
    asLink: true,
    href: "https://example.com",
    variant: "primary",
    disabled: true,
    children: "Disabled Link",
  },
}

export const LinkExternal: Story = {
  args: {
    asLink: true,
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
    variant: "primary",
    children: "External Link",
  },
}

// Square Variants
export const Square: Story = {
  args: {
    variant: "square",
    children: "Square Button",
  },
}

export const SquareSmall: Story = {
  args: {
    variant: "square",
    size: "sm",
    children: "Small square",
  },
}

export const SquareLarge: Story = {
  args: {
    variant: "square",
    size: "lg",
    children: "Large Square",
  },
}

export const SquareDisabled: Story = {
  args: {
    variant: "square",
    disabled: true,
    children: "Disabled Square",
  },
}
