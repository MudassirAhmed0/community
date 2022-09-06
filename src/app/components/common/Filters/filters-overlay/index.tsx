import React from 'react';

import Button from 'app/ui-kit/Button';
import Popup from 'app/components/common/Popup';
import { useScreenSize } from 'app/shared/hooks/use-screen-size';

import css from './FiltersOverlay.module.scss';

interface IFiltersOverlayProps {
  children: React.ReactNode;
  isOpened: boolean;
  onFiltersClose(): void;
  onClearFilters?(): void;
}

export const FiltersOverlay = (props: IFiltersOverlayProps) => {
  const { isDesktop } = useScreenSize();

  return (
    <Popup onClose={props.onFiltersClose} isOpened={props.isOpened} position={isDesktop ? 'right' : 'bottom'} title='Filters'>
      <div className={css.filtersPanel}>
        {props.children}
        <div className={css.filtersControl}>
          {props.onClearFilters && (
            <Button onClick={props.onClearFilters} className={css.controlBtn} kind='standard' fullWidth>
              Clear Filters
            </Button>
          )}
          <Button onClick={props.onFiltersClose} className={css.controlBtn} kind='primary' fullWidth>
            Apply Filters
          </Button>
        </div>
      </div>
    </Popup>
  );
};
