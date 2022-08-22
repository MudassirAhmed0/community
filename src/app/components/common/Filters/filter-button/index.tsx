import React from 'react';
import cn from 'classnames';

import css from './FilterButton.module.scss';
import Button from 'app/ui-kit/Button';
import { IconFilter } from 'app/ui-kit/Icons/icon-filter';
import { EColor } from 'app/ui-kit/color.enum';
import { Tooltip } from 'antd';

interface IFilterButtonProps {
  btnCss?: string;
  filterCounter?: number;
  onClick: () => void;
}

const FilterButton = ({ btnCss, onClick, filterCounter }: IFilterButtonProps) => {
  const getToolTip = () => {
    if (!filterCounter) {
      return null;
    }
    if (filterCounter === 1) {
      return '1 active filter';
    }
    return `${filterCounter} active filters`;
  };

  return (
    <Tooltip title={getToolTip()}>
      <Button className={cn(css.filterButton, btnCss)} kind={'primary'} onClick={onClick}>
        <IconFilter fill={EColor.White} />
        <span>Filter</span>
        {!!filterCounter && <div className={css.filterCounter}>{filterCounter}</div>}
      </Button>
    </Tooltip>
  );
};

export default FilterButton;
