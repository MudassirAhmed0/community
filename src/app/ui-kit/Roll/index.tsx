import {useHistory} from 'react-router-dom';
import cn from 'classnames';

import css from './Roll.module.scss';

import IconArrow from 'app/ui-kit/Icons/icon-arrow-destination-right.svg';

interface IRollProps {
  disableArrows?: boolean;
  size?: 'small' | 'normal';
  type?: 'list' | 'cards';
  children: React.ReactNode;
}

const Roll = ({ disableArrows, size = 'normal', type = 'list', children, ...rest }: IRollProps) => {
  const classes = cn(
    css.roll,
    disableArrows && css.disableArrows,
    size && css[`size_${size}`],
    css[type],
  );

  return (
    <ul className={classes} {...rest}>{children}</ul>
  );
};

interface IRollItemProps {
  flex?: boolean;
  showIcon?: boolean;
  children?: React.ReactNode;
  arrowTop?: boolean;
}

const RollItem = ({ flex, showIcon, children, arrowTop = false }: IRollItemProps) => {
  const classes = cn(
    css.content,
    flex && css.flex,
  );

  return (
    <>
      <span className={classes}>{children}</span>
      {showIcon && (
        <span className={cn(css.icon, { [css.arrowTop]: arrowTop })}>
          <img src={IconArrow} alt='' />
        </span>
      )}
    </>
  );
};

interface IRollItemWrapper {
  href?: string;
  flex?: boolean;
  children?: React.ReactNode;
  arrowTop?: boolean;
  onClick?(): void;
}

const RollItemWrapper = ({ href, flex, onClick, children, arrowTop = false }: IRollItemWrapper) => {
  const history = useHistory();
  let onClickModernized = onClick;

  const isClickable = href || onClick;
  const classes = cn(
    css.item,
    isClickable && css.link,
  );

  if (href) {
    onClickModernized = () => {
      if (onClick) { onClick(); }
      history.push(href);
    };
  }

  return (
    <li className={classes} onClick={onClickModernized}>
      {(isClickable) ? (
        // eslint-disable-next-line
        <a><RollItem flex={flex} showIcon={Boolean(isClickable)} arrowTop={arrowTop}>{children}</RollItem></a>
      ) : (
        <RollItem flex={flex}>{children}</RollItem>
      )}
    </li>
  );
};

Roll.Item = RollItemWrapper;

export default Roll;
