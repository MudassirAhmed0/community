import React from 'react';
import { EColor } from 'app/ui-kit/color.enum';

interface IIconDotsProps {
  size?: number;
  fill?: string;
}

export const IconDots = ({ fill = EColor.Gray60, size = 24 }: IIconDotsProps) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill={fill}>
      <path d='M12 10C11.6044 10 11.2178 10.1173 10.8889 10.3371C10.56 10.5568 10.3036 10.8692 10.1522 11.2346C10.0009 11.6001 9.96126 12.0022 10.0384 12.3902C10.1156 12.7781 10.3061 13.1345 10.5858 13.4142C10.8655 13.6939 11.2219 13.8844 11.6098 13.9616C11.9978 14.0387 12.3999 13.9991 12.7654 13.8478C13.1308 13.6964 13.4432 13.44 13.6629 13.1111C13.8827 12.7822 14 12.3956 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM5 10C4.60444 10 4.21776 10.1173 3.88886 10.3371C3.55996 10.5568 3.30362 10.8692 3.15224 11.2346C3.00087 11.6001 2.96126 12.0022 3.03843 12.3902C3.1156 12.7781 3.30608 13.1345 3.58579 13.4142C3.86549 13.6939 4.22186 13.8844 4.60982 13.9616C4.99778 14.0387 5.39992 13.9991 5.76537 13.8478C6.13082 13.6964 6.44318 13.44 6.66294 13.1111C6.8827 12.7822 7 12.3956 7 12C7 11.4696 6.78929 10.9609 6.41422 10.5858C6.03914 10.2107 5.53043 10 5 10ZM19 10C18.6044 10 18.2178 10.1173 17.8889 10.3371C17.56 10.5568 17.3036 10.8692 17.1522 11.2346C17.0009 11.6001 16.9613 12.0022 17.0384 12.3902C17.1156 12.7781 17.3061 13.1345 17.5858 13.4142C17.8655 13.6939 18.2219 13.8844 18.6098 13.9616C18.9978 14.0387 19.3999 13.9991 19.7654 13.8478C20.1308 13.6964 20.4432 13.44 20.6629 13.1111C20.8827 12.7822 21 12.3956 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10Z' />
    </svg>
  );
};
