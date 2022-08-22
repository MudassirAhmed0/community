import React from 'react';

import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const WAIT_INTERVAL = 700;
const ENTER_KEY = 13;

export interface ISearchInputProps {
  placeholder?: string;
  onChange: (value: string) => void;
  css?: string;
  divStyle?: React.CSSProperties;
}

export const SearchInput = (props: ISearchInputProps) => {
  const [value, setValue] = React.useState('');
  const [timer, setTimer] = React.useState(null);
  const { onChange, divStyle, css, placeholder } = props;

  const triggerChange = () => {
    onChange(value);
  };

  const handleChange = (event: any) => {
    clearTimeout(timer);
    const newValue = event.target.value;
    setTimer(setTimeout(() => onChange(newValue), WAIT_INTERVAL));

    setValue(newValue);
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(timer);
      triggerChange();
    }
  };

  const handleClickClearSearch = () => {
    setValue('');
    clearTimeout(timer);
    onChange('');
  };

  const handleMouseClearSearch = (event: any) => {
    event.preventDefault();
  };

  return (
    <div style={divStyle} className={css}>
      <Input
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder={placeholder || 'Name, code, or professor name...'}
        prefix={<SearchOutlined />}
        suffix={value && <CloseOutlined onClick={handleClickClearSearch} onMouseDown={handleMouseClearSearch} />}
      />
    </div>
  );
};
