import { useState } from 'react';
import cn from 'classnames';

import { Flex } from 'app/ui-kit';
import { ReactComponent as IconRating } from 'app/ui-kit/Icons/icon-rating.svg';

import css from './Rating.module.scss';

interface IRatingProps {
  value?: number;
  size?: 'small' | 'large';
  align?: 'left' | 'center';
  readOnly?: boolean;
  onChange?: (value: number) => void;
}

const Rating = ({ value = 1, onChange, size = 'small', align = 'left', readOnly = false }: IRatingProps) => {
  const [rating, setRating] = useState(Math.round(value));
  const [selectedRating, setSelectedRating] = useState(null);

  const onMouseLeave = () => {
    if (!readOnly) {
      if (selectedRating === null) {
        setRating(0);
      } else {
        setRating(selectedRating);
      }
    }
  };

  const onClick = () => {
    if (!readOnly) {
      setSelectedRating(rating);
      onChange(rating);
    }
  };

  const onMouseEnter = (rate: number) => {
    if (!readOnly) {
      setRating(rate);
    }
  };

  return (
    <Flex
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      // @ts-ignore
      justifyContent={css[align]}
    >
      {[...new Array(5)].map((item, index) =>
        <div className={cn(css.wrapper, css[size])} key={index} onMouseEnter={() => onMouseEnter(index + 1)}>
          <IconRating
            className={cn(css.icon, rating >= index + 1 && css.selected)}
          />
        </div>
      )}
    </Flex>
  );
};

export default Rating;
