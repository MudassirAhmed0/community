import React from 'react';
import cn from 'classnames';
import { Tooltip } from 'antd';
import css from './Tags.module.scss';

type ITagItem = string | number | JSX.Element;

interface ITags {
  items: ITagItem | ITagItem[];
  className?: string;
  itemClassName?: string;
}

const Tags = ({ items, className, itemClassName }: ITags) => {
  const classes = cn(css.container, className);

  const findTooltip = (item: ITagItem) => {
    switch (item) {
      case 'NC units':
        return 'No Credit';
      case 'ARR units':
        return 'Arranged Credits';
      default:
        return '';
    }
  };

  const createTag = (item: ITagItem, i: number) => {
    const tooltip = findTooltip(item);

    return (
      <Tooltip title={tooltip} placement='bottom' key={i}>
        <div className={cn(css.item, itemClassName)}>{item}</div>
      </Tooltip>
    );
  };

  const tagsContent = Array.isArray(items) ? items.map((item, i) => createTag(item, i)) : items;

  return <div className={classes+ " "+ css.item }>{tagsContent}</div>;
};

export default Tags;
