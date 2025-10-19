import Image from "next/image"
import { CarouselCardProps } from "@/app/components/composite/carousel/CarouselCard"
import { CarouselPlayer } from "@/app/components/composite/carousel/CarouselPlayer"
interface MentalWellbeingProps {
  // TODO: define correct type for card items
  carouselItems?: CarouselCardProps[]
  heading: string
}

export const MentalWellbeing = ({
  heading,
  carouselItems = [],
}: MentalWellbeingProps) => (
  <section className="horizontal-clipping flex flex-col items-start w-full gap-5 lg:px-0 px-2 relative min-h-[60svh] overflow-visible pb-10 md:pb-[10svh]">
    <h2 className="text-primary-emphasis text-3xl md:text-4xl">{heading}</h2>
    <CarouselPlayer carouselCards={carouselItems} />
    {/** Important: the big cloud needs to be ~2.5x bigger than the small one */}
    <span className="-z-10 absolute xl:-right-70 lg:-right-32 -right-24 -top-[10svh] md:-top-[15svh] xl:-top-[18svh]">
      <Image
        className="max-w-[680px] w-[60svw] h-full"
        src="/cloud-big.png"
        width={600}
        height={500}
        alt=""
      />
    </span>
    {/** Important: do not use negative `bottom`*/}
    <span className="-z-10 absolute bottom-0 xl:-left-32 md:-left-10 -left-1">
      <Image
        className="max-w-[280px] w-[25svw] h-full"
        src="/cloud-small.png"
        width={300}
        height={300}
        alt=""
      />
    </span>
  </section>
)
