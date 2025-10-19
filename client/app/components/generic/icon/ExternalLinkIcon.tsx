import SvgWrapper, {
  SvgWrapperConsumerProps,
} from "@/app/components/generic/icon/SvgWrapper"

export const ExternalLinkIcon = (props: SvgWrapperConsumerProps) => (
  <SvgWrapper {...props}>
    <path d="M7.5 17.5L17.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 7.5H17.5V17.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgWrapper>
)
