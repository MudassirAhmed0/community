import css from './ConfirmPopup.module.scss';
import { useScreenSize } from 'app/shared/hooks/use-screen-size';
import Popup from 'app/components/common/Popup/index';
import { Button } from 'app/ui-kit';

interface IProps {
  isOpened: boolean;
  title: string;
  description?: string;
  agreeBtnTitle?: string;
  onConfirm(): void;
  onCancel?(): void;
  onClose(): void;
}

const ConfirmPopup = ({
  title,
  description = 'This action cannot be canceled.',
  onConfirm,
  onClose,
  onCancel,
  isOpened,
  agreeBtnTitle = 'Delete',
}: IProps) => {
  const { isDesktop } = useScreenSize();

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    onClose();
  };

  return (
    <Popup onClose={onClose} isOpened={isOpened} size='md' position={isDesktop ? 'center' : 'bottom'} title={title}>
      <div className={css.confirmContent}>
        {description}
        <div className={css.confirmControls}>
          <Button onClick={handleCancel} className={css.confirmControl} kind='primary' fullWidth>
            Cancel
          </Button>
          <Button onClick={onConfirm} className={css.confirmControl} kind='secondary-danger' fullWidth>
            {agreeBtnTitle}
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default ConfirmPopup;
