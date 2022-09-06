import css from './ContextMenu.module.scss';
import Popup from 'app/components/common/Popup';
import { useScreenSize } from 'app/shared/hooks/use-screen-size';

interface IOption {
  icon?: React.ReactNode;
  name: string;
  onClick(): void;
}

interface IContextMenuProps {
  isOpened: boolean;
  options?: IOption[];
  children?: React.ReactNode;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'full';
  cords?: number[];
  onClose(): void;
}

const ContextMenu = ({ options, children, isOpened, size = 'xxs', cords = [0, 0], onClose }: IContextMenuProps) => {
  const { isDesktop } = useScreenSize();

  const renderOptionsList = () => {
    return (
      <div className={css.contextMenu}>
        {options.map((option, index) => (
          <div className={css.option} key={index} onClick={option.onClick}>
            {!!option.icon && <div className={css.icon}>{option.icon}</div>}
            {option.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Popup isOverlayDark={false} cords={cords} size={size} position='click' isOpened={isOpened} onClose={onClose}>
      {options?.length > 0 ? renderOptionsList() : children}
    </Popup>
  );
};

export default ContextMenu;
