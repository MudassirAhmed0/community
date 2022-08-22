import { Checkbox } from 'antd';

import css from './FiltersCheckboxesList.module.scss';

interface IFiltersValuesListProps {
  title: string;
  values: string[];
  selected: string[];
  disabled?: string[];
  renderValue?: (v: string) => string;
  isHidden?: boolean;
  isHeightAuto?: boolean;
  toggleAll?(): void;

  toggle(item: string): void;
}

export const FiltersCheckboxesList = ({
  isHeightAuto = true,
  isHidden,
  title,
  values,
  selected,
  disabled,
  renderValue,
  toggle,
}: IFiltersValuesListProps) => {
  if (isHidden) {
    return null;
  }

  return (
    <>
      <div className={css.horizontalSection} style={{ alignItems: 'baseline' }}>
        <div className={css.filtersTitle}>{title}</div>
        {/* <Button kind='secondary' onClick={toggleAll}>
          Toggle All
        </Button> */}
      </div>
      <div className={!isHeightAuto ? css.checkboxesList : ''}>
        {values.map(item => (
          <Checkbox
            key={item}
            style={{ marginLeft: 0 }}
            onChange={() => toggle(item)}
            checked={selected.includes(item)}
            disabled={disabled?.includes(item)}
          >
            {renderValue ? renderValue(item) : item}
          </Checkbox>
        ))}
      </div>
    </>
  );
};
