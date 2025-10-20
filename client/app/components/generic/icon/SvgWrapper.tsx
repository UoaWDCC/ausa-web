import React from "react"
import { cn } from "@/utils/cn"

interface SvgWrapperProps {
  /** The SVG content without the wrapping <svg> tags */
  children: React.ReactNode
  /** Size of the SVG (width and height) */
  size?: number | string
  /** Width of the SVG */
  width?: number | string
  /** Height of the SVG */
  height?: number | string
  /** ViewBox attribute for the SVG */
  viewBox?: string
  /** Fill color for SVG elements */
  fill?: string
  /** Stroke color for SVG elements */
  stroke?: string
  /** Stroke width for SVG elements */
  strokeWidth?: number | string
  /** Additional CSS classes */
  className?: string
  /** Click handler */
  onClick?: () => void
}

export type SvgWrapperConsumerProps = Omit<SvgWrapperProps, "children">

const SvgWrapper: React.FC<SvgWrapperProps> = ({
  children,
  size = 24,
  width,
  height,
  viewBox = "0 0 25 25",
  fill = "none",
  stroke = "currentColor",
  strokeWidth,
  className,
  onClick,
  ...props
}) => {
  const svgWidth = width ?? size
  const svgHeight = height ?? size

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", onClick && "cursor-pointer", className)}
      onClick={onClick}
      style={
        {
          "--svg-stroke": stroke,
          "--svg-stroke-width": strokeWidth,
          "--svg-fill": fill,
        } as React.CSSProperties
      }
      {...props}
    >
      <g stroke={stroke} strokeWidth={strokeWidth} fill={fill}>
        {children}
      </g>
    </svg>
  )
}

export default SvgWrapper
