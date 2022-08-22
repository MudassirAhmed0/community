import React from 'react';

interface IIconSuccessProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export const IconSuccessGreen = (props: IIconSuccessProps) => {
  const { fill = 'none', className, width = 20, height = 20 } = props;
  return (
    <svg className={className} width={width} height={height} viewBox='0 0 20 20' fill={fill}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.4443 1.6853C6.08879 0.58649 8.02219 0 10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7363 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92894 17.0711C1.53041 15.6725 0.578004 13.8907 0.192152 11.9509C-0.193701 10.0111 0.00433284 8.00043 0.761209 6.17317C1.51809 4.3459 2.79981 2.78412 4.4443 1.6853ZM12.72 6.79L8.42999 11.09L6.77999 9.44C6.69034 9.33532 6.58002 9.2503 6.45596 9.19027C6.3319 9.13025 6.19676 9.09652 6.05904 9.0912C5.92132 9.08588 5.78399 9.10909 5.65567 9.15936C5.52734 9.20964 5.41079 9.28589 5.31334 9.38335C5.21589 9.4808 5.13963 9.59735 5.08935 9.72568C5.03908 9.854 5.01587 9.99133 5.02119 10.1291C5.02651 10.2668 5.06024 10.4019 5.12027 10.526C5.18029 10.65 5.26531 10.7604 5.36999 10.85L7.71999 13.21C7.81343 13.3027 7.92425 13.376 8.04608 13.4258C8.16792 13.4755 8.29838 13.5008 8.42999 13.5C8.69233 13.4989 8.94373 13.3947 9.12999 13.21L14.13 8.21C14.2237 8.11704 14.2981 8.00644 14.3489 7.88458C14.3997 7.76272 14.4258 7.63201 14.4258 7.5C14.4258 7.36799 14.3997 7.23728 14.3489 7.11542C14.2981 6.99356 14.2237 6.88296 14.13 6.79C13.9426 6.60375 13.6892 6.49921 13.425 6.49921C13.1608 6.49921 12.9074 6.60375 12.72 6.79Z'
        fill={className ? '' : fill}
      />
    </svg>
  );
};
