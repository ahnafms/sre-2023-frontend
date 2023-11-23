import React, { SVGAttributes } from 'react';

function YellowStart(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='39'
      height='39'
      fill='none'
      viewBox='0 0 39 39'
      {...props}
    >
      <g filter='url(#filter0_i_2640_3803)'>
        <path
          fill='#E8BA00'
          d='M16.524 3.327c.446-3.493 5.506-3.493 5.952 0l1.2 9.402a3 3 0 002.595 2.596l9.402 1.2c3.493.445 3.493 5.505 0 5.95l-9.402 1.2a3 3 0 00-2.596 2.596l-1.2 9.402c-.445 3.493-5.505 3.493-5.95 0l-1.2-9.402a3 3 0 00-2.596-2.596l-9.402-1.2c-3.493-.445-3.493-5.505 0-5.95l9.402-1.2a3 3 0 002.596-2.596l1.2-9.402z'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_i_2640_3803'
          width='37.586'
          height='41.586'
          x='0.707'
          y='0.707'
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feBlend
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          ></feBlend>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          ></feColorMatrix>
          <feOffset dy='4'></feOffset>
          <feGaussianBlur stdDeviation='2'></feGaussianBlur>
          <feComposite
            in2='hardAlpha'
            k2='-1'
            k3='1'
            operator='arithmetic'
          ></feComposite>
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'></feColorMatrix>
          <feBlend in2='shape' result='effect1_innerShadow_2640_3803'></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default YellowStart;
