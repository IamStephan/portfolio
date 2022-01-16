import React from 'react'
import { spring } from 'react-flip-toolkit'

import LogoBase, { Props as BaseProps } from './_logo_base'

interface Props extends BaseProps {
  shouldExit?: boolean
}

const _handleExit = (element: HTMLElement) => {
  spring({
    values: {
      opacity: [1, 0],
      transform: [0, 25],
    },
    onUpdate({ opacity, transform }: any) {
      if (!element.getAttribute('moved')) {
        document.body.appendChild(element)
        element.setAttribute('moved', '')

        element.style.top = `${element.getAttribute('rect-top') as any}px`
        element.style.left = `${element.getAttribute('rect-left') as any}px`
        element.style.position = 'fixed'
      }

      element.style.opacity = opacity
      element.style.transform = `translateY(${transform}px)`
    },
    onComplete() {
      element.remove()
    },
  })
}

const Wings: React.FC<Props> = ({
  flipId = 'logo-wings',
  shouldExit,
  ...rest
}) => {
  return (
    <LogoBase
      flipId={flipId}
      divRef={(ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          ref.setAttribute('rect-top', `${rect.y}`)
          ref.setAttribute('rect-left', `${rect.x}`)
        }
      }}
      onExit={shouldExit ? _handleExit : undefined}
      className="h-auto"
      {...rest}
    >
      <svg
        className="w-full h-auto"
        viewBox="0 0 815 177"
        fill="none"
        preserveAspectRatio="xMaxYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17_216)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M302.241 176.845H200.938V176.834C183.801 176.955 172.46 176.476 162.822 172.759C152.993 168.947 145.406 161.982 136.019 149.217L122.85 131.335C115.618 130.825 109.658 129.758 104.239 127.664C94.4032 123.852 86.8158 116.887 77.43 104.123L64.2356 86.213C57.1591 85.6939 51.302 84.626 45.9693 82.559C36.1338 78.7576 28.5458 71.7981 19.1532 59.0337L0 33.0093H302.241L302.241 176.845ZM294.422 86.6609V90.1397L284.423 101.371L130.905 104.93L284.423 108.499L294.422 119.734V123.198H119.602C114.817 122.667 110.73 121.785 107.059 120.362C98.8107 117.177 92.1895 110.993 83.7443 99.4938L74.2506 86.6165C77.3087 86.6631 80.575 86.6615 84.0843 86.6345V86.6609H294.422ZM142.361 131.74C138.976 131.764 135.818 131.764 132.855 131.721L142.334 144.588C150.786 156.082 157.401 162.256 165.641 165.456C174.081 168.725 184.706 169.121 200.931 169.01L200.938 168.999H294.422V164.825L284.409 153.578L184.025 150.024L284.409 146.481L294.422 135.23V131.755H142.361V131.74ZM294.422 78.1038H61.3042C56.5324 77.5729 52.452 76.693 48.7819 75.2726C40.5402 72.067 33.9264 65.8983 25.467 54.3993L15.4955 40.8598H294.422V45.0422L284.423 56.2657L69.7808 59.8351L284.423 63.4045L294.422 74.628V78.1038Z"
            fill="#FAFAFA"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M692.159 131.333C699.389 130.822 705.35 129.756 710.773 127.665C720.599 123.848 728.19 116.887 737.572 104.119L750.761 86.2105C757.843 85.6922 763.703 84.625 769.04 82.5565C778.867 78.7541 786.459 71.7934 795.847 59.03L815 33.0078H512.755V78.0998H512.754V131.755H512.756V176.847H614.063V176.836C631.201 176.956 642.536 176.474 652.172 172.756C662.012 168.945 669.595 161.98 678.98 149.216L692.159 131.333ZM730.914 86.6561H520.572V90.1361L530.577 101.374L684.097 104.932L530.577 108.5L520.572 119.742V123.2H695.357C700.16 122.668 704.262 121.786 707.949 120.359C716.188 117.173 722.81 110.993 731.259 99.4919L740.747 86.6129C737.689 86.6594 734.423 86.658 730.914 86.6314V86.6561ZM520.57 131.755H672.647V131.738C676.026 131.762 679.18 131.763 682.139 131.72L672.672 144.589C664.218 156.082 657.598 162.254 649.352 165.457C640.915 168.726 630.287 169.12 614.069 169.011L614.063 169H520.57V164.836L530.593 153.578L630.978 150.024L530.593 146.481L520.57 135.219V131.755ZM753.716 78.0998C758.483 77.569 762.559 76.6903 766.223 75.2737C774.458 72.0659 781.072 65.8979 789.531 54.3978L799.513 40.8603H520.57V45.0353L530.575 56.2681L745.205 59.8364L530.575 63.4047L520.57 74.6375V78.0998H753.716Z"
            fill="#FAFAFA"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_216">
            <rect width="815" height="177" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </LogoBase>
  )
}

export default Wings
