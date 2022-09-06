import { Link } from 'react-router-dom';
import cn from 'classnames';

import css from './Card.module.scss';

interface ICardProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (props: any) => any;
  isCardShadow?: boolean;
}

const Card = ({ href, children, className, onClick, isCardShadow = true }: ICardProps) => {
  const classes = cn(css.container, className, isCardShadow && css.hasShadow);

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
