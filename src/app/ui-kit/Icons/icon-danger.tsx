interface IIconDangerProps {
  className?: string;
  size?: number;
  stroke?: string;
  fill?: string;
}

export const IconDanger = ({ size = 20, fill = '#D9382B', ...props }: IIconDangerProps) => {
  return (
    <svg className={props.className} width={size} height={size} viewBox='0 0 25 24' fill={fill}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.9443 3.6853C8.58879 2.58649 10.5222 2 12.5 2C13.8132 2 15.1136 2.25866 16.3268 2.7612C17.5401 3.26375 18.6425 4.00035 19.5711 4.92893C20.4997 5.85752 21.2363 6.95991 21.7388 8.17317C22.2413 9.38642 22.5 10.6868 22.5 12C22.5 13.9778 21.9135 15.9112 20.8147 17.5557C19.7159 19.2002 18.1541 20.4819 16.3268 21.2388C14.4996 21.9957 12.4889 22.1937 10.5491 21.8079C8.60929 21.422 6.82746 20.4696 5.42894 19.0711C4.03041 17.6725 3.078 15.8907 2.69215 13.9509C2.3063 12.0111 2.50433 10.0004 3.26121 8.17317C4.01809 6.3459 5.29981 4.78412 6.9443 3.6853ZM16.5 11H8.5C8.23478 11 7.98043 11.1054 7.79289 11.2929C7.60536 11.4804 7.5 11.7348 7.5 12C7.5 12.2652 7.60536 12.5196 7.79289 12.7071C7.98043 12.8946 8.23478 13 8.5 13H16.5C16.7652 13 17.0196 12.8946 17.2071 12.7071C17.3946 12.5196 17.5 12.2652 17.5 12C17.5 11.7348 17.3946 11.4804 17.2071 11.2929C17.0196 11.1054 16.7652 11 16.5 11Z'
      />
    </svg>
  );
};