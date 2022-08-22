import React, { KeyboardEvent, useState } from 'react';
import cn from 'classnames';

import IconPasswordEye from 'app/ui-kit/Icons/icon-password-eye.svg';
import { IInputProps } from 'app/shared/interfaces/input-props.interface';

import css from './Input.module.scss';

const ENTER_BTN_CODE = 'Enter';

const Input = ({
  id,
  title,
  errorLabel,
  type = 'text',
  fullWidth,
  onEnterKey,
  containerCss,
  inputCss,
  inputRef,
  ...rest
}: IInputProps) => {
  const [inputType, setInputType] = useState(type);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === ENTER_BTN_CODE && onEnterKey) {
      onEnterKey();
    }
  };

  const handleEyeClick = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const inputJsx = (
    <input
      {...rest}
      ref={inputRef}
      type={inputType}
      onKeyUp={handleKeyUp}
      className={cn(css.input, inputCss, { [css.fullWidth]: fullWidth, [css.error]: errorLabel })}
    />
  );

  return (
    <div className={cn(css.container, containerCss)}>
      <div className={css.field}>
        {title ? (
          <label>
            <span className={css.title}>{title}</span>
            {inputJsx}
          </label>
        ) : (
          inputJsx
        )}

        {type === 'password' && (
          <div className={cn(css.eye, inputType === 'text' && css.eyeClosed)} onClick={handleEyeClick}>
            <img src={IconPasswordEye} alt='' />
          </div>
        )}
      </div>
      {errorLabel && <div>{errorLabel}</div>}
    </div>
  );
};

export default Input;
