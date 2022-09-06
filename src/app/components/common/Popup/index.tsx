import { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import IconClose from 'app/ui-kit/Icons/icon-close.svg';
import cn from 'classnames';

import css from './Popup.module.scss';

interface IPosition {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

interface IPopupProps {
  shadow?: boolean;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'full';
  position?: 'center' | 'right' | 'bottom' | 'click' | 'full';
  isOpened: boolean;
  children: ReactNode;
  backHref?: string;
  title?: string;
  closeAfterClick?: boolean;
  isOverlayDark?: boolean;
  cords?: number[];
  titleComponent?: ReactNode;
  onBack?(): void;
  onClose?(): void;
}
const ESC_BTN_CODE = 'Escape';

const Popup = ({
  shadow,
  size = 'full',
  position = 'bottom',
  onClose,
  children,
  isOpened = false,
  title,
  closeAfterClick = true,
  isOverlayDark = true,
  cords = [],
  titleComponent,
}: IPopupProps) => {
  const refOverlay = useRef(null);
  const classes = cn(
    css.container,
    shadow && css.hasShadow,
    size && css[`size_${size}`],
    position && css[`position_${position}`],
  );
  const overlayClasses = cn(css.overlay, isOverlayDark && css[`overlay--dark`]);

  useEffect(() => {
    const currentRef = refOverlay?.current;

    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === ESC_BTN_CODE && onClose && closeAfterClick) {
        onClose();
      }
    };

    const handleClick = () => {
      if (closeAfterClick && onClose) {
        onClose();
      }
    };

    if (isOpened) {
      document.addEventListener('keyup', handleKeyboard);
      currentRef?.addEventListener('click', handleClick);
      document.querySelector('body')?.classList.add('no-scroll');
    }
    return () => {
      if (isOpened) {
        document.removeEventListener('keyup', handleKeyboard);
        currentRef?.removeEventListener('click', handleClick);
        document.querySelector('body')?.classList.remove('no-scroll');
      }
    };
  }, [isOpened, closeAfterClick, onClose]);

  const getStyles = () => {
    const styles: IPosition = {};
    if (cords.length) {
      cords[0] > window.innerWidth / 2 ? (styles.right = window.innerWidth - cords[0]) : (styles.left = cords[0]);
      cords[1] > window.innerHeight / 2 ? (styles.bottom = window.innerHeight - cords[1]) : (styles.top = cords[1]);
    }
    return styles;
  };

  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={css.wrapper}>
      <div className={overlayClasses} ref={refOverlay} />
      <div className={classes} style={getStyles()}>
        {(!!title || !!titleComponent) && (
          <div className={cn(css.title, !!titleComponent && css.titleIsClickable)}>
            {!!titleComponent ? titleComponent : title}
            <button type='button' className={css.close} onClick={onClose}>
              <img src={IconClose} alt='close' />
            </button>
          </div>
        )}

        <div className={css.content}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Popup;
