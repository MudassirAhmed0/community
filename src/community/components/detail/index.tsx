import React,{useState} from 'react'
import { Section } from 'app/ui-kit';
import Breadcrumbs from 'app/components/common/Breadcrumbs';
import css from './CommunityDetail.module.scss'
import { useHistory } from 'react-router-dom';
import { IconFile } from 'app/ui-kit/Icons/icon-file'; 
import Question from './Question';
import LeaveComment from './LeaveComment';
import Answers from './Answers';

type Props = {}

const CommunityDetail = (props: Props) => {
  const [isSubmit, setIsSubmit] = useState(true);

  
  const history = useHistory();
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
        <Question/>
        <LeaveComment setIsSubmit = {setIsSubmit}/>
        <Answers isSubmit={isSubmit}/>
      </Section>
    </Section>
  )
}

export default CommunityDetail