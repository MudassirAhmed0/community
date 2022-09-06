import cn from 'classnames';

import css from './Avatar.module.scss';
import { useState } from 'react';

interface IAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  image?: string;
  name?: string;
  className?: string;
}

const Avatar = ({ size = 'md', image, name, className, ...rest }: IAvatarProps) => {
  const [loaded, setIsLoaded] = useState(false);
  const [failed, setIsFailed] = useState(false);

  const classes = cn(css.avatar, css[`size_${size}`], className);

  const onLoad = () => {
    setIsLoaded(true);
  };

  const onError = () => {
    setIsLoaded(true);
    setIsFailed(true);
  };

  const letters =
    name &&
    name
      .split(' ')
      .map(letter => letter[0])
      .join('');

  return (
    <div className={classes} {...rest}>
      {(image && !loaded) || (image && loaded && !failed) ? (
        <img src={image} alt='' onLoad={onLoad} onError={onError} />
      ) : (
        <div className={css.letters}>{letters?.substring(0, 2)}</div>
      )}
    </div>
  );
};

export default Avatar;
