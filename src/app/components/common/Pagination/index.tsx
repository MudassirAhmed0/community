import React from 'react';
import { Pagination as AntdPagination, PaginationProps } from 'antd';

import css from './Pagination.module.scss';
import { useScreenSize } from 'app/shared/hooks/use-screen-size';
import { IconArrow } from 'app/ui-kit/Icons/icon-arrow';

interface IPaginationProps extends PaginationProps {
  current: number;
  pageSize?: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
}

export const Pagination = (props: IPaginationProps) => {
  const { isMobile, isDesktop } = useScreenSize();

  const prevIcon = (
    <div>
      <IconArrow direction={'left'} /> {isDesktop && 'Previous Page'}
    </div>
  );
  const nextIcon = (
    <div>
      {isDesktop && 'Next Page'} <IconArrow direction={'right'} />
    </div>
  );

  return (
    <AntdPagination
      className={css.pagination}
      prevIcon={prevIcon}
      nextIcon={nextIcon}
      responsive={false}
      showSizeChanger={false}
      showLessItems={isMobile}
      totalBoundaryShowSizeChanger={30}
      {...props}
    />
  );
};
