import type { Meta, StoryObj } from "@storybook/nextjs"
import CarouselCard from "./CarouselCard"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Composite/CarouselCard",
  component: CarouselCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof CarouselCard>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultCarouselCard: Story = {
  args: {
    title: "LoL",
    description:
      "This is a sample description for the carousel card. It provides brief information about the content.",
    image:
      "https://www.fun-academy.fr/wp-content/uploads/2024/05/1715253705_Le-systeme-de-classement-LoL-explique-%E2%80%93-tous-les-classements.jpg",
    link: "https://example.com",
    variant: "thin",
  },
}

export const LongCarouselCard: Story = {
  args: {
    title: "LoL",
    description:
      "This is a sample description for the carousel card, which is much longer in order to test whether the button is confined within the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. It provides brief information about the content.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg",
    link: "https://example.com",
    variant: "thin",
  },
}
