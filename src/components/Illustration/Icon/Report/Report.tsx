import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

const ReportIcon = ({ color, ...props }) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_2004_1523"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={25}
      height={24}
    >
      <Rect x={0.799988} width={24} height={24} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_2004_1523)">
      <Path
        d="M8.79999 12V10H16.8V12H8.79999ZM8.79999 8V6H16.8V8H8.79999ZM6.79999 14H14.3C14.7833 14 15.2333 14.1042 15.65 14.3125C16.0667 14.5208 16.4167 14.8167 16.7 15.2L18.8 17.95V4H6.79999V14ZM6.79999 20H17.85L15.125 16.425C15.025 16.2917 14.9042 16.1875 14.7625 16.1125C14.6208 16.0375 14.4667 16 14.3 16H6.79999V20ZM18.8 22H6.79999C6.24999 22 5.77915 21.8042 5.38749 21.4125C4.99582 21.0208 4.79999 20.55 4.79999 20V4C4.79999 3.45 4.99582 2.97917 5.38749 2.5875C5.77915 2.19583 6.24999 2 6.79999 2H18.8C19.35 2 19.8208 2.19583 20.2125 2.5875C20.6042 2.97917 20.8 3.45 20.8 4V20C20.8 20.55 20.6042 21.0208 20.2125 21.4125C19.8208 21.8042 19.35 22 18.8 22Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default ReportIcon;
