import React, { ReactNode, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

import Header from 'app/components/common/Header';

import css from './Modal.module.scss';

interface IModalProps {
  title?: string | ReactNode;
  bottomShadow?: boolean;
  isShowing: boolean;
  showLogo?: boolean;
  children: ReactNode;
  onBackHref?: string;
  alignTitle?: 'left' | 'center' | 'right';
  headerChildren?: React.ReactNode;
  showFavorites?: boolean;

  onBack?(): void;

  onClose?(): void;
}

const ESC_BTN_CODE = 'Escape';

const Modal = ({
  title,
  bottomShadow,
  showLogo,
  isShowing,
  onBack,
  onClose,
  children,
  showFavorites,
  alignTitle,
  headerChildren = null,
  onBackHref,
}: IModalProps) => {
  const keyboardListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === ESC_BTN_CODE && onClose) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isShowing) {
      document.addEventListener('keyup', keyboardListener);
      document.querySelector('body')?.classList.add('no-scroll');
    }
    return () => {
      if (isShowing) {
        document.removeEventListener('keyup', keyboardListener);
        document.querySelector('body')?.classList.remove('no-scroll');
      }
    };
  }, [isShowing, keyboardListener]);

  return isShowing
    ? ReactDOM.createPortal(
        <div className={css.wrapper}>
          <div className={css.content}>
            <Header
              onClose={onClose}
              bottomShadow={bottomShadow}
              onBack={onBack}
              onBackHref={onBackHref}
              title={title}
              showFavorites={showFavorites}
              alignTitle={alignTitle}
              showLogo={showLogo}
            >
              {headerChildren}
            </Header>
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
