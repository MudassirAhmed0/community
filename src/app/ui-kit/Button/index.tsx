import { ButtonHTMLAttributes, ReactElement } from 'react';
import css from './Button.module.scss';
import getElementType from 'app/shared/helpers/getElementType';
import classNames from 'classnames';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'primary-danger' | 'secondary' | 'standard' | 'secondary-danger' | 'ghost' | 'ghost-danger';
  fullWidth?: boolean;
  align?: 'left' | 'center' | 'right';
  href?: string;
  as?: string;
  target?: string;
  className?: string;
  icon?: string;
  iconElement?: ReactElement;
}

const Button = (props: IButtonProps) => {
  const { children, as, kind = 'standard', align = 'center', fullWidth = false, icon, iconElement, className, ...rest } = props;
  const ElementType = getElementType(Button, props);
  const classes = classNames(
    css.button,
    kind && css[kind],
    fullWidth && css.fullWidth,
    icon && css.icon,
    icon && children && css.labeled,
    align && css[align],
    className,
  );

  return (
    <ElementType className={classes} {...rest}>
      {icon && <img src={icon} alt='' />}
      {iconElement}
      {children}
    </ElementType>
  );
};

Button.defaultProps = {
  as: 'button',
  kind: 'standard',
};

export default Button;
