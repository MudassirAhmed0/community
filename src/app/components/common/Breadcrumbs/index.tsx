import React from 'react';
import cn from 'classnames';

import css from './Breadcrumbs.module.scss';

interface ILink {
  name: string;
  icon?: React.ReactNode;
  onClick?(): void;
}

interface IPBreadcrumbsProps {
  links: ILink[];
  className?: string;
}

const Breadcrumbs = ({ links, className }: IPBreadcrumbsProps) => {
  return (
    <div className={cn(css.breadcrumbs, className)}>
      {links.map((link, index) => (
        <span key={link.name} className={css.breadcrumb} onClick={link.onClick}>
          {index !== 0 && <span className={css.breadcrumbSpacer}>/</span>}
          {link.icon}
          {link.name}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
