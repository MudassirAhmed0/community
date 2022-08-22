import css from './Main.module.scss';
import { Section } from 'app/ui-kit';
import SecondaryHeader from 'app/components/common/SecondaryHeader';

export const Main = () => {
  return (
    <Section kind={'root'}>
      <Section kind={'content'}>
        <SecondaryHeader title={'Main'} titleCss={css.title} childrenPosition={'in-title'} />
        <div className={css.inner}>Content</div>
      </Section>
    </Section>
  );
};
