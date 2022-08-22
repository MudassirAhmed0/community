import { ReactNode, useState } from 'react';

import css from './HideableSection.module.scss';
import { IconArrow } from 'app/ui-kit/Icons/icon-arrow';
import cn from 'classnames';

interface IHidableSectionProps {
  title: string;
  children: ReactNode;
  isTitleBold?: boolean;
  titleCss?: string;
}
export const HidableSection = (props: IHidableSectionProps) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={css.hideableSection}>
      <div
        className={cn(css.hideableTitle, props.isTitleBold && css.titleBold, props.titleCss)}
        onClick={() => setIsHidden(!isHidden)}
      >
        {props.title} <IconArrow direction={isHidden ? 'down' : 'up'} className={css.hideableIcon} />
      </div>
      {!isHidden && <div className={css.hideableChildren}>{props.children}</div>}
    </div>
  );
};
