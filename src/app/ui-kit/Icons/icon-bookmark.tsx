interface IIconBookmarkProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  stroke?: string;
}

export const IconBookmark = (props: IIconBookmarkProps) => {
  const { fill = 'none', stroke = '#0263E0', className, width = 20, height = 20 } = props;
  return (
    <svg className={className} width={width} height={height} viewBox='0 0 20 20' fill={fill} stroke={stroke}>
      <path
        d='M9.49952 14.7066L5.16666 17.2112V4.16625C5.16666 3.76862 5.32465 3.38724 5.60593 3.10601C5.88722 2.82478 6.26877 2.66675 6.66666 2.66675H13.3333C13.7312 2.66675 14.1128 2.82478 14.394 3.10601C14.6753 3.38724 14.8333 3.76862 14.8333 4.16625V17.2112L10.5005 14.7066L9.99999 14.4173L9.49952 14.7066ZM4.60974 18.176L4.99969 17.5005L4.60974 18.176ZM4.99999 17.5L5 17.4999L5.00004 17.5L5.00016 17.5002L5.41666 18.2218L5 17.501L4.9997 17.5005L4.99999 17.5Z'
        strokeWidth='2'
      />
    </svg>
  );
};
