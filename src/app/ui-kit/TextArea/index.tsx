import css from './TextArea.module.scss';

interface ITextArea {
  title?: string;
  placeholder?: string;
  onChange?(e: any): void;
  value?: string;
}

const TextArea = ({ title, placeholder, onChange, value = '' }: ITextArea) => {
  const textareaJsx = (
    <textarea className={css.input} placeholder={placeholder} onChange={onChange}>
      {value}
    </textarea>
  );

  return (
    <div className={css.container}>
      {title ? (
        <label>
          <span className={css.title}>{title}</span>
          {textareaJsx}
        </label>
      ) : (
        textareaJsx
      )}
    </div>
  );
};

export default TextArea;
