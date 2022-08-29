import React from 'react';
import { Section } from 'app/ui-kit';
import Breadcrumbs from 'app/components/common/Breadcrumbs';
import css from './CommunityDetail.module.scss';
import { useHistory, useParams } from 'react-router-dom';
import { IconFile } from 'app/ui-kit/Icons/icon-file';
import Question from './Question';
import LeaveComment from './LeaveComment';
import Answers from './Answers';
import { usePost } from '@tribeplatform/react-sdk/hooks';
import useAnswers from './useAnswers';

type Props = {};

const CommunityDetail = (props: Props) => {
  const history = useHistory();
  const answer =useAnswers(props)

  return (
    <Section kind='root'>
      <Section kind='content'>
        <Breadcrumbs
          className={css.breadcrumbs}
          links={[
            {
              name: 'Community',
              onClick: history.goBack,
              icon: <IconFile className={css.breadcrumbsIcon} />,
            },
            { name: 'Add discussion' },
          ]}
        />
        <Question post={answer} />
        <LeaveComment  />
        <Answers replies={answer?.replies?.nodes} />
      </Section>
    </Section>
  );
};

export default CommunityDetail;
