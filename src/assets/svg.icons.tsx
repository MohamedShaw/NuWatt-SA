import React from 'react';

import Svg, {SvgProps, Circle, Path, Ellipse, Rect} from 'react-native-svg';


export const ArrowBack = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Rect width={32} height={32} fill="#F7F8F8" rx={8} />
    <Path
      stroke="#1D1617"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M18.333 20.667 13.667 16l4.666-4.667"
    />
  </Svg>
);


