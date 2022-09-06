import cn from 'classnames';
import React from 'react';

import { Title } from 'app/ui-kit';

import css from './SecondaryHeader.module.scss';

interface IProps {
  title: string | React.ReactNode;
  titleCss?: string;
  children?: React.ReactNode;
  childrenPosition?: 'title-sibling' | 'in-title';
}

const SecondaryHeader = ({ children, childrenPosition = 'title-sibling', title, titleCss }: IProps) => {
  return (
    <div className={cn(css.header)}>
      <Title className={cn(css.headerTitle, titleCss)} as='h2' margin={false}>
        {title}
        {childrenPosition === 'in-title' && children}
      </Title>
      {childrenPosition === 'title-sibling' && children}
    </div>
  );
};

export default SecondaryHeader;
