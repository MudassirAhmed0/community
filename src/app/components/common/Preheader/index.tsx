import React from 'react';
import IconBack from 'app/ui-kit/Icons/icon-back.svg';
import css from './Preheader.module.scss';

interface IPreheaderProps {
  title: string;
  onBackClick?(): void;
  RightIcon?: React.ReactNode;
  onIconClick?(): void;
}

const Preheader = ({ title, onBackClick, RightIcon, onIconClick }: IPreheaderProps) => {
  return (
    <div className={css.preheader}>
      {onBackClick && (
        <button onClick={onBackClick}>
          <img src={IconBack} alt='back' className={css.preheaderBack} />
        </button>
      )}
      <h4 className={css.preheaderTitle}>{title}</h4>
      {RightIcon && (
        <button onClick={onIconClick} className={css.preheaderIcon}>
          {RightIcon}
        </button>
      )}
    </div>
  );
};

export default Preheader;
