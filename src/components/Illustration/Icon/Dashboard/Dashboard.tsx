import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

const DashboardIcon = ({ color, ...props }) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_2004_913"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={25}
      height={24}
    >
      <Rect x={0.600006} width={24} height={24} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_2004_913)">
      <Path
        d="M13.8 8.39998V3.59998H21V8.39998H13.8ZM4.20001 13.2V3.59998H11.4V13.2H4.20001ZM13.8 20.4V10.8H21V20.4H13.8ZM4.20001 20.4V15.6H11.4V20.4H4.20001ZM6.00001 11.4H9.60001V5.39998H6.00001V11.4ZM15.6 18.6H19.2V12.6H15.6V18.6ZM15.6 6.62498H19.2V5.39998H15.6V6.62498ZM6.00001 18.6H9.60001V17.4H6.00001V18.6Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default DashboardIcon;
