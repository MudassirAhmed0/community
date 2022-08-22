import cn from 'classnames';

import { Flex } from 'app/ui-kit';
import { IconArrowDown } from 'app/ui-kit/Icons/icon-arrow-down';
import css from './ProgressBar.module.scss';
import { EColor } from 'app/ui-kit/color.enum';

interface IProgressBarProps {
  min?: number;
  max?: number;
  result: number;
  simple?: boolean;
  className?: string;
  size?: 'big' | 'small';
  postfix?: string;
  isBorder?: boolean;
  onNextClick?(): void;
  title?: string;
  showArrow?: boolean;
  hideLabel?: boolean;
}

const ProgressBar = ({
  min,
  max,
  result,
  simple = false,
  className,
  size = 'big',
  postfix = '',
  isBorder,
  onNextClick,
  title,
  showArrow,
  hideLabel = false,
}: IProgressBarProps) => {
  const width = max ? (result * 100) / max : result > 100 ? 100 : result;
  const isFull = width === max || width === 100;

  const classes = cn(css.container, simple && css.simple, isBorder && css.withBorder, className);
  const wrapperCss = cn(css.wrapper, {
    [css.wrapperBig]: size === 'big',
    [css.wrapperSmall]: size === 'small',
  });

  const getLabel = () => {
    return max ? `${result} / ${max} ${postfix}` : `${result} ${postfix}`;
  };

  return (
    <Flex className={classes}>
      {title && <span className={css.title}>{title}</span>}
      {!simple && <div className={css.text}>{min}</div>}
      <div className={wrapperCss}>
        <div className={cn(css.bar, isFull && css.barFull)} style={{ width: `${width}%` }} />
      </div>
      {!simple && <div className={css.text}>{max}</div>}
      <div className={cn(css.label, isFull && css.labelFull)}>{hideLabel || getLabel()}</div>
      {(showArrow || onNextClick) && (
        <div className={css.arrow} onClick={onNextClick}>
          <IconArrowDown fill={EColor.Blue40} />
        </div>
      )}
    </Flex>
  );
};

export default ProgressBar;
