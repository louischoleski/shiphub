import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

const ArrowForwardIcon = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_53_275"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <Rect width={24} height={24} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_53_275)">
      <Path
        d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default ArrowForwardIcon;
