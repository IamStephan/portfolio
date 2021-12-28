/**
 * Inspiration:
 * https://dev.to/frehner/polymorphic-button-component-in-typescript-c28
 */

import React from 'react'
import dynamic from 'next/dynamic'

import type { Props as ExternalLinkProps } from '@/components/external_link'
import type { Props as ButtonProps } from '@/components/button'
import type { Props as LinkProps } from '@/components/link'

/**
 * This only imports the necessary code for each clickable instance. Because
 * this is rendered on the server as well, links and external links will
 * still behave as they should when hydration hasn't yet happened.
 *
 * The buttons will not work before hydration but in cases like these it'll
 * likely depend on the client to be hydrated for interactivity (i.e. forms with
 * client side validation)
 */
const Link = dynamic(() => import('@/components/link'))
const ExternalLink = dynamic(() => import('@/components/external_link'))
const Button = dynamic(() => import('@/components/button'))

// Keeping this here just to be explicit
interface BaseProps {}

type ClickableAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    /**
     * This forces the link component as the default container
     */
    as?: 'link'
  }

type ClickableAsExternal = BaseProps &
  Omit<ExternalLinkProps, keyof BaseProps> & {
    as: 'externalLink'
  }

type ClickableAsButton = BaseProps &
  Omit<ButtonProps, keyof BaseProps> & {
    as: 'button'
  }

// Overloading Props with a discriminating prop (props.as)
export type Props = ClickableAsLink | ClickableAsButton | ClickableAsExternal

const Clickable: React.FC<Props> = (props) => {
  /**
   * Each case within the switch creates a, sort of, fence around the (type) definition of props.
   * By looking at the discriminating prop the compiler can safely determine which case
   * will require which set of props.
   *
   * (i.e. when props.as is equal to "link" then the definition of props,
   * as a whole, should be LinkProps)
   */
  switch (props.as) {
    case 'externalLink': {
      const { children, ...rest } = props

      return <ExternalLink {...rest}>{children}</ExternalLink>
    }

    case 'button': {
      const { children, ...rest } = props

      return <Button {...rest}>{children}</Button>
    }

    case 'link':
    default: {
      const { children, ...rest } = props

      return <Link {...rest}>{children}</Link>
    }
  }
}

export default Clickable
