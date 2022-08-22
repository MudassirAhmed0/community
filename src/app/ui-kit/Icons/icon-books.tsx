import React from 'react';

interface IIconBooksProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export const IconBooks = (props: IIconBooksProps) => {
  const { fill = '#0263E0', className, width = 22, height = 20 } = props;
  return (
    <svg className={className} width={width} height={height} viewBox='0 0 22 20' fill={fill} xmlns='http://www.w3.org/2000/svg'>
      <path d='M21.47 16.82L20.47 12.96L17.32 1.37003C17.2519 1.11437 17.0853 0.896104 16.8567 0.76303C16.628 0.629955 16.3559 0.592918 16.1 0.66003L12.23 1.66003C12.1376 1.55767 12.0251 1.47552 11.8995 1.41873C11.7739 1.36194 11.6379 1.33174 11.5 1.33003H1.5C1.23478 1.33003 0.98043 1.43539 0.792893 1.62292C0.605357 1.81046 0.5 2.06481 0.5 2.33003V18.33C0.5 18.5952 0.605357 18.8496 0.792893 19.0371C0.98043 19.2247 1.23478 19.33 1.5 19.33H11.5C11.7652 19.33 12.0196 19.2247 12.2071 19.0371C12.3946 18.8496 12.5 18.5952 12.5 18.33V10.33L14.7 18.55C14.7586 18.7682 14.8893 18.9601 15.0709 19.0945C15.2525 19.2288 15.4742 19.2978 15.7 19.29C15.7864 19.2999 15.8736 19.2999 15.96 19.29L20.79 18C20.9177 17.9659 21.0374 17.9068 21.1421 17.8261C21.2468 17.7454 21.3344 17.6448 21.4 17.53C21.5055 17.3088 21.5302 17.0576 21.47 16.82ZM5.47 17.37H2.47V15.37H5.47V17.37ZM5.47 13.37H2.47V7.37003H5.47V13.37ZM5.47 5.37003H2.47V3.37003H5.47V5.37003ZM10.47 17.37H7.47V15.37H10.47V17.37ZM10.47 13.37H7.47V7.37003H10.47V13.37ZM10.47 5.37003H7.47V3.37003H10.47V5.37003ZM12.72 3.63003L15.62 2.85003L16.14 4.78003L13.24 5.56003L12.72 3.63003ZM15.31 13.29L13.76 7.49003L16.66 6.71003L18.21 12.51L15.31 13.29ZM16.31 17.15L15.79 15.22L18.69 14.44L19.21 16.37L16.31 17.15Z' />
    </svg>
  );
};
