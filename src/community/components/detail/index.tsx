import React from 'react'
import { Section } from 'app/ui-kit';
import Breadcrumbs from 'app/components/common/Breadcrumbs';
import css from './CommunityDetail.module.scss'
import { useHistory, useParams } from 'react-router-dom';
import { IconFile } from 'app/ui-kit/Icons/icon-file'; 
import Question from './Question';
import LeaveComment from './LeaveComment';
import Answers from './Answers';
import {usePost} from "@tribeplatform/react-sdk/hooks";

type Props = {}

const CommunityDetail = (props: Props) => {
  const history = useHistory();
  const params: any= useParams();
  // const postId: string = id
  
  
   console.log(params.id as string)
   const {data: post} = usePost({ variables: {
    id: `${params.id}`
   } , fields: "withReply"})
  
   
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
        <Question post={post} />
        <LeaveComment/>
        <Answers replies={post?.replies?.nodes}/>
        
        
      </Section>
    </Section>
  )
}

export default CommunityDetail