import { ReactNode } from 'react';
import classNames from 'classnames';

import getElementType from 'app/shared/helpers/getElementType';

import css from './Title.module.scss';

interface IProps {
  as?: string;
  className?: string;
  margin?: boolean;
  icon?: string;
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
  onClick?: () => void;
}

const Title = (props: IProps) => {
  const {
    as,
    className = '',
    margin = true,
    icon,
    align = 'left',
    children,
    onClick
  } = props;

  const ElementType = getElementType(Title, props);

  const classes = classNames(
    css.title,
    className,
    as && css[as],
    margin && css.margin,
    icon && css.icon,
    css[align],
    onClick && css.pointer
  );

  return (
    <ElementType className={classes} {...{onClick: onClick || null}}>
      {icon && (<img src={icon} alt='' />)}
      {children}
    </ElementType>
  );
};

Title.defaultProps = {
  as: 'h1'
};

export default Title;
