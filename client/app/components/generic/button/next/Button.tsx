import React, { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { ExternalLinkIcon } from "@/app/components/generic/icon/ExternalLinkIcon"

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center font-thin cursor-pointer rounded-full  font-light transition-colors disabled:pointer-events-none disabled:opacity-50 text-primary",
  {
    variants: {
      variant: {
        primary: [
          "bg-btn-primary-bg",
          "hover:bg-btn-primary-bg-hover",
          "active:bg-btn-primary-bg-press",
          "disabled:bg-btn-primary-bg-disabled",
          "disabled:text-btn-primary-fg-disabled",
        ],
        secondary: [
          "bg-btn-secondary-bg",
          "hover:bg-btn-secondary-bg-hover",
          "active:bg-btn-secondary-bg-press",
          "disabled:bg-btn-secondary-bg-disabled",
          "disabled:text-btn-secondary-fg-disabled",
        ],
        square: [
          /**
           * Same as primary but with square corners
           */
          "rounded-sm",
          "bg-btn-primary-bg",
          "hover:bg-btn-primary-bg-hover",
          "active:bg-btn-primary-bg-press",
          "disabled:bg-btn-primary-bg-disabled",
          "disabled:text-btn-primary-fg-disabled",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

interface ButtonAsButton extends BaseButtonProps {
  asLink?: false
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: "button" | "submit" | "reset"
}

interface ButtonAsLink extends BaseButtonProps {
  asLink: true
  href: string
  target?: string
  rel?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, children, disabled, ...props }, ref) => {
    const baseClasses = cn(buttonVariants({ variant, size, className }))

    if (props.asLink) {
      const { href, target, rel, onClick, ...linkProps } = props
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={disabled ? undefined : href}
          target={target}
          rel={rel}
          onClick={disabled ? undefined : onClick}
          className={cn(baseClasses, disabled && "cursor-not-allowed")}
          aria-disabled={disabled}
          {...linkProps}
        >
          {children}
          <span className="max-w-5 max-h-5 flex items-center ml-1">
            <ExternalLinkIcon height={"100%"} width={"100%"} />
          </span>
        </a>
      )
    }

    const { onClick, type = "button", ...buttonProps } = props
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(baseClasses)}
        {...buttonProps}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonProps }
