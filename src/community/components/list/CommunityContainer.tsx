import React, { useState } from 'react'
import Questions from './Questions'
import Sidebar from './Sidebar'
import css from './CommunityList.module.scss';

type Props = {}

const CommunityContainer = (props: Props) => {
  const [isSubmit, setIsSubmit] = useState(true);
 
  return (
    <div className={css.communityContainer}>
      
        <Questions isSubmit = {isSubmit}/>
        <Sidebar setIsSubmit = {setIsSubmit}/>
      
    </div>
  )
}

export default CommunityContainer