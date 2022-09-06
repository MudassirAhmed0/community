import {useState} from 'react';

import css from './Image.module.scss';

interface IImage {
  image: string;
}

const Image = ({ image }: IImage) => {
  const [loaded, setIsLoaded] = useState(false);
  const [failed, setIsFailed] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
  };

  const onError = () => {
    setIsLoaded(true);
    setIsFailed(true);
  };

  return !loaded || (loaded && !failed) ? <div className={css.container}>
      <img src={image} alt='' onLoad={onLoad} onError={onError} />
    </div>
    : <></>;
};

export default Image;
