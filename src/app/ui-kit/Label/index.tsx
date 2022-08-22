import cn from 'classnames';

import css from './Label.module.scss';

interface ILabel {
  color?: 'blue' | 'green';
  children: React.ReactNode;
}

const Label = ({ color = 'blue', children }: ILabel) => {
  const classes = cn(
    css.label,
    css[color]
  )
  return (
    <div className={classes}>{children}</div>
  )
}

export default Label;