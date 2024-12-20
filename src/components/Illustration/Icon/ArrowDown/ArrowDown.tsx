import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

import { IIconProps } from './../Icon.controller';

const DEFAULT_SIZE = 24;

const ArrowDownIcon: React.FC<IIconProps> = ({
  color,
  height,
  width = DEFAULT_SIZE,
  ...props
}) => (
  <Svg
    fill="none"
    width={width}
    viewBox="0 0 24 24"
    height={height || width}
    {...props}
  >
    <Mask
      id="mask0_450_2763"
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
    <G mask="url(#mask0_450_2763)">
      <Path
        d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default ArrowDownIcon;
