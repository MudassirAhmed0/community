import cn from 'classnames';

import css from './Flex.module.scss';

interface IFlex {
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  alignItems?: 'top' | 'center' | 'bottom',
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Flex = ({
  justifyContent = 'flex-start',
  alignItems = 'center',
  className,
  children,
  onClick = () => {},
  ...rest
}: IFlex) => {
  const classes = cn (
    css.flex,
    css[`justifyContent_${justifyContent}`],
    className,
    css[`alignItems_${alignItems}`]
  );

  return (
    <div className={classes} onClick={onClick} {...rest}>{children}</div>
  )
}

export default Flex;