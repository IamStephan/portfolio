/**
 * Inspiration:
 * https://dev.to/frehner/polymorphic-button-component-in-typescript-c28
 */

import React from 'react'

// Keeping this here just to be explicit
interface BaseProps {}

type InputAsText = BaseProps &
  Omit<React.HTMLProps<HTMLInputElement>, keyof BaseProps> & {
    /**
     * This forces the link component as the default container
     */
    as?: 'input'
  }

type InputAsArea = BaseProps &
  Omit<React.HTMLProps<HTMLTextAreaElement>, keyof BaseProps> & {
    as: 'area'
  }

// Overloading Props with a discriminating prop (props.as)
export type Props = InputAsArea | InputAsText

const InputContainer: React.FC<Props> = (props) => {
  switch (props.as) {
    case 'area': {
      return <textarea {...props} />
    }

    case 'input':
    default: {
      return <input {...props} />
    }
  }
}

//* Done
export default InputContainer
