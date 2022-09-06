import { LogoDesktop } from './LogoDesktop';
import { LogoMobile } from './LogoMobile';
import { useScreenSize } from 'app/shared/hooks/use-screen-size';
import { Link } from 'react-router-dom';

import css from './Logo.module.scss';

interface ILogoProps {
  withBeta?: boolean;
}

const Logo = ({ withBeta = false }: ILogoProps) => {
  const { isDesktop } = useScreenSize();

  return (
    <Link className={css.logo} to='/'>
      {isDesktop ? <LogoDesktop /> : <LogoMobile />}
      {withBeta && <span className={css.beta}>BETA</span>}
    </Link>
  );
};

export default Logo;
