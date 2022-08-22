import cn from 'classnames';
import React from 'react';
import { SettingOutlined } from '@ant-design/icons';

import css from './Header.module.scss';
import Logo from 'app/components/common/Logo';
import { useScreenSize } from 'app/shared/hooks/use-screen-size';
import Tabbar from 'app/components/common/Tabbar';

interface IProps {
  title?: string | React.ReactNode;
  bottomShadow?: boolean;
  alignTitle?: 'left' | 'center' | 'right';
  containerCss?: string;
  isFixedToTop?: boolean;
  showFavorites?: boolean;
  isFavorite?: boolean;

  children?: React.ReactNode;
  childrenCss?: string;
  onBackHref?: string;
  showLogo?: boolean;

  onClose?(): void;

  onBack?(): void;
}

const Header = ({ title, bottomShadow = true, alignTitle = 'left', containerCss, isFixedToTop }: IProps) => {
  const { isDesktop } = useScreenSize();

  const containerStyles = cn(
    css.container,
    isFixedToTop && css.headerContainerFixed,
    bottomShadow === false && css.noshadow,
    css[`alignTitle_${alignTitle}`],
    containerCss,
  );

  return (
    <div className={containerStyles}>
      <div className={css.wrapper}>
        <div className={css.title}>
          <Logo withBeta={isDesktop} />
          {title}
        </div>
        {isDesktop && <Tabbar />}
        <div className={css.aloneButton}>
          <button className={css.userIcon} type='button' onClick={() => {}}>
            <SettingOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
