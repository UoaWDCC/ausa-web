import type { Meta, StoryObj } from "@storybook/nextjs"
import { fn } from "storybook/test"
import { CarouselPlayer } from "./CarouselPlayer"
import { CarouselCardProps } from "./CarouselCard"

// Mock data generator
const generateMockCards = (count: number): CarouselCardProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Card ${i + 1}`,
    description: `This is the description for card ${i + 1}. It contains some sample text to demonstrate the carousel functionality.`,
    image: `https://picsum.photos/seed/${i}/400/300`,
    link: `#card-${i + 1}`,
  }))

const meta = {
  title: "Composite/CarouselPlayer",
  component: CarouselPlayer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    carouselCards: {
      control: "object",
      description: "Array of carousel card data",
    },
    onPageChange: {
      description: "Callback when page changes",
    },
  },
  args: {
    onPageChange: fn(),
  },
} satisfies Meta<typeof CarouselPlayer>

export default meta
type Story = StoryObj<typeof meta>

// Basic Scenarios
export const Default: Story = {
  args: {
    carouselCards: generateMockCards(9),
  },
}

export const FewCards: Story = {
  args: {
    carouselCards: generateMockCards(3),
  },
}

export const ManyCards: Story = {
  args: {
    carouselCards: generateMockCards(15),
  },
}

export const SingleCard: Story = {
  args: {
    carouselCards: generateMockCards(1),
  },
}

// Edge cases
export const TwoCards: Story = {
  args: {
    carouselCards: generateMockCards(2),
  },
}

export const PartialPages: Story = {
  args: {
    carouselCards: generateMockCards(7),
  },
}

// Custom content
export const CustomCardContent: Story = {
  args: {
    carouselCards: [
      {
        title: "Featured Article",
        description:
          "Discover the latest trends in web development and design.",
        image: "https://picsum.photos/seed/featured/400/300",
        link: "#featured",
      },
      {
        title: "Tutorial Series",
        description: "Step-by-step guides to master modern frameworks.",
        image: "https://picsum.photos/seed/tutorial/400/300",
        link: "#tutorial",
      },
      {
        title: "Case Study",
        description: "Real-world examples of successful implementations.",
        image: "https://picsum.photos/seed/case/400/300",
        link: "#case-study",
      },
      {
        title: "Community Updates",
        description: "Latest news and updates from our community.",
        image: "https://picsum.photos/seed/community/400/300",
        link: "#community",
      },
      {
        title: "Resources",
        description: "Helpful tools and resources for developers.",
        image: "https://picsum.photos/seed/resources/400/300",
        link: "#resources",
      },
    ],
  },
}

// Empty state
export const EmptyCarousel: Story = {
  args: {
    carouselCards: [],
  },
}

// Large dataset
export const LargeDataset: Story = {
  args: {
    carouselCards: generateMockCards(20),
  },
}

// Cards with CTA buttons
export const CardsWithCTA: Story = {
  args: {
    carouselCards: generateMockCards(6).map((card) => ({
      ...card,
      ctaLabel: "Read More",
      onCtaClick: fn(),
    })),
  },
}

// Wide variant cards
export const WideCards: Story = {
  args: {
    carouselCards: generateMockCards(6).map((card) => ({
      ...card,
      variant: "wide" as const,
    })),
  },
}
