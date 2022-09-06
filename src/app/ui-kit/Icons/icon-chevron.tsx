
import React from 'react';

interface IIconArrowProps {
  direction: 'up' | 'down' | 'right' | 'left';
  size?: number;
  fill?: string;
  className?: string;
}

export const IconChevron = (props: IIconArrowProps) => {
  const { fill = '#606F90', className, size = 24, direction } = props;
  const rotateAngles = {
    left: -90,
    right: 90,
    up: 0,
    down: 180,
  };
  return (
     
  <svg 
    className={className}
    style={{ transform: `rotate(${rotateAngles[direction]}deg)` }}
    width={size}
    height={size}
    fill={fill}
   viewBox="0 0 12 9"  xmlns="http://www.w3.org/2000/svg">
  <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#606F90"/>
  </svg>
  
  
  );
};
