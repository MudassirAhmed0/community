interface IIconLinkedinProps {
  className?: string;
  size?: number;
  stroke?: string;
  fill?: string;
}

export const IconLinkedin = ({ size = 16, fill = '#3691FA' }: IIconLinkedinProps) => {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.6328 13.633H11.2621V9.92029C11.2621 9.03497 11.2463 7.89529 10.0291 7.89529C8.79431 7.89529 8.60538 8.85991 8.60538 9.85585V13.6327H6.23475V5.99798H8.51056V7.04135H8.54244C8.77019 6.65191 9.09931 6.33154 9.49474 6.11436C9.89017 5.89717 10.3371 5.79131 10.7879 5.80804C13.1908 5.80804 13.6338 7.38854 13.6338 9.44466L13.6328 13.633ZM3.55975 4.95441C2.79994 4.95454 2.18387 4.33866 2.18375 3.57885C2.18362 2.81904 2.79944 2.20298 3.55925 2.20285C4.31906 2.20266 4.93512 2.81854 4.93525 3.57835C4.93532 3.94323 4.79044 4.29319 4.53248 4.55125C4.27453 4.80931 3.92463 4.95433 3.55975 4.95441ZM4.74512 13.633H2.37194V5.99798H4.74506V13.633L4.74512 13.633ZM14.8146 0.00116449H1.18069C0.536312 -0.0060855 0.007875 0.510102 0 1.15448V14.8453C0.007625 15.49 0.536 16.0067 1.18062 15.9999H14.8146C15.4606 16.0079 15.9911 15.4912 16 14.8453V1.15341C15.9908 0.507789 15.4603 -0.0083355 14.8146 0.000101993'
        fill={fill}
      />
    </svg>
  );
};
