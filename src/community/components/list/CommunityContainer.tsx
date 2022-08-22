import React from 'react'
import Questions from './Questions'
import Sidebar from './Sidebar'
import css from './CommunityList.module.scss';

type Props = {}

const CommunityContainer = (props: Props) => {
  return (
    <div className={css.communityContainer}>
        <Questions/>
        <Sidebar/>
    </div>
  )
}

export default CommunityContainer