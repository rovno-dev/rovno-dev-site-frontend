import { Text, TextProps } from "@/components/core/data-display/typography/Text"
import { colorStyles } from "@/utils/styles/colors";
import { Box } from "@mui/material";
import Link, { LinkProps } from "next/link";
import { createElement, ElementType, useState } from "react";

export interface TextLinkProps extends Omit<TextProps, 'component'>, LinkProps {
  component?: ElementType | 'Heading' | 'Text' | 'Title',
}

function TextLink(
  {
    href, as, replace, scroll, shallow, passHref, prefetch, locale, legacyBehavior, onMouseEnter, onTouchStart, onClick, onNavigate,
    component, style, color = colorStyles['dark'].text.primary.default, children, ...other
  }: TextLinkProps,
) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        height: 'fit-content',
        width: 'fit-content',
        ...style
      }}
      {...{ href, as, replace, scroll, shallow, passHref, prefetch, locale, legacyBehavior, onTouchStart, onClick, onNavigate }}
    >
      {
        component ? createElement(
          component,
          {
            style: {
              color: color,
              ...style
            },
            ...other
          },
          children
        ) : (
          <Text
            variant="default"
            color={color}
            className={(hover ? 'underline' : 'no-underline') + " " + "transition-all duration-100"}
          >
            {children}
          </Text>
        )
      }
    </Link>
  )
}

export { TextLink }