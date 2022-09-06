import { Slider } from 'antd';
import { useEffect, useState } from 'react';

import { timeFormat } from 'app/shared/helpers/time-format';

import css from './FiltersSlider.module.scss';

interface IFiltersSliderProps {
  title: string;
  range: [number, number];
  value: [number, number];
  onChange: (newValue: [number, number]) => void;
  step?: number;
  isTime?: boolean;
}

export const FiltersSlider = (props: IFiltersSliderProps) => {
  const { onChange, range, value, step = 0.1 } = props;
  const [localRating, setLocalRating] = useState(value);

  const rangeToTime = (v: number) => {
    if (props.isTime) {
      return timeFormat(v);
    }
    return v;
  };

  const marks: { [key: number]: number | string } = {
    [range[0]]: rangeToTime(range[0]),
    [range[1]]: rangeToTime(range[1]),
  };

  useEffect(() => {
    const isValueChanged = value[0] !== localRating[0] || value[1] !== localRating[1];
    if (isValueChanged) {
      setLocalRating(range);
    }
  }, [value]);

  return (
    <>
      <div className={css.sliderTitle}>{props.title}</div>
      <Slider
        value={localRating}
        onChange={setLocalRating}
        onAfterChange={onChange}
        step={step}
        range
        marks={marks}
        min={range[0]}
        max={range[1]}
        defaultValue={value}
        tipFormatter={rangeToTime}
      />
    </>
  );
};
