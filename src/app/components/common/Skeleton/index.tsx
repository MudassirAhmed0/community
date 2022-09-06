import css from './Skeleton.module.scss';

interface ISkeletonProps {
  width?: number;
  height?: number;
  bottomGap?: number;
  isRound?: boolean;
  styles?: any;
}

const Skeleton = ({ width, height, bottomGap, isRound = false, styles }: ISkeletonProps) => {
  const getStyles = () => {
    return {
      width: width || '',
      height: height || '',
      marginBottom: bottomGap || 16,
      borderRadius: isRound ? width / 2 : 8,
      ...styles,
    };
  };

  return <div className={css.skeleton} style={getStyles()} />;
};

export default Skeleton;
