import css from './Layout.module.scss';
import Tabbar from 'app/components/common/Tabbar';
import Header from 'app/components/common/Header';
import { useScreenSize } from 'app/shared/hooks/use-screen-size';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const { isDesktop } = useScreenSize();

  return (
    <div className={css.layout}>
      <Header />
      {children}
      {!isDesktop && <Tabbar />}
    </div>
  );
}
