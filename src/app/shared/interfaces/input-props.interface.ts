import React from 'react';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  title?: string;
  errorLabel?: string;
  type?: string;
  fullWidth?: boolean;
  containerCss?: string;
  inputCss?: string;
  inputRef?: string;
  onEnterKey?(): void;
}
