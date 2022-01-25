import React from 'react'

import LogoBase, { Props as BaseProps } from './_logo_base'

const Letter: React.FC<BaseProps> = ({ flipId = 'logo-letter', ...rest }) => {
  return (
    <LogoBase flipId={flipId} {...rest}>
      <svg
        className="w-full h-full"
        viewBox="0 0 138 177"
        fill="none"
        preserveAspectRatio="xMaxYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17_218)">
          <path
            d="M33.7697 32.825V69.4342H86.6928C87.1969 69.4342 87.449 69.6894 87.7007 69.9402V69.4342H121.47V177H64.2635L55.6952 143.163H87.7007V102.765C87.449 103.016 87.1969 103.271 86.6928 103.271H1.76374C1.00748 103.271 0.252087 102.514 0.252087 101.502V32.825L29.7372 0H138.356L121.722 32.825H33.7697ZM44.8585 143.163L53.931 177H0V143.163H44.8585Z"
            fill="#FAFAFA"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_218">
            <rect width="138" height="177" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </LogoBase>
  )
}

export default Letter
