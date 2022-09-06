import cn from 'classnames';

import css from './Section.module.scss';

interface IProps {
  kind?: 'root' | 'content' | 'content-white' | 'block' | '';
  noMarginTop?: boolean;
  noShadowTop?: boolean;
  children: React.ReactNode;
  fixed?: 'top' | 'bottom';
  className?: string;
  style?: { [key: string]: string | number };
}

const Section = ({ kind = '', noMarginTop = false, noShadowTop = false, children, fixed, className = '', ...rest }: IProps) => {
  const classes = cn(
    css.section,
    kind && css[`${kind}`],
    noMarginTop && css.noMarginTop,
    noShadowTop && css.noShadowTop,
    fixed && css[`fixed_${fixed}`],
    className,
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Section;
