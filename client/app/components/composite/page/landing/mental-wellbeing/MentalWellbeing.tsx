import Image from "next/image"
interface MentalWellbeingProps {
  // TODO: define correct type for card items
  items?: never
  heading: string
}

export const MentalWellbeing = ({ heading }: MentalWellbeingProps) => (
  <section className="horizontal-clipping flex flex-col items-start w-full lg:px-0 px-2 relative min-h-[60svh] overflow-visible">
    <h2 className="text-primary-emphasis text-3xl md:text-4xl">{heading}</h2>
    {/** Important: the big cloud needs to be ~2.5x bigger than the small one */}
    <span className="absolute xl:-right-70 lg:-right-32 -right-24 -top-[10svh] md:-top-[15svh] xl:-top-[18svh]">
      <Image
        className="max-w-[680px] w-[60svw] h-full"
        src="/cloud-big.png"
        width={600}
        height={500}
        alt="Big cloud image (decoration)"
      />
    </span>
    {/** Important: do not use negative `bottom`*/}
    <span className="absolute bottom-0 xl:-left-32 md:-left-10 -left-1">
      <Image
        className="max-w-[280px] w-[25svw] h-full"
        src="/cloud-small.png"
        width={300}
        height={300}
        alt="Big cloud image (decoration)"
      />
    </span>
  </section>
)
