import React, { useState } from 'react'
import Question from './Question'
import { SearchInput } from 'app/components/common/SearchInput';
import css from './CommunityList.module.scss';

type Props = {}

const Questions = (props: Props) => {
    const [searchQuery, setSearchQuery] = useState(null);

    const handleSearchChanged = (searchQueryValue: string) => {
        
        setSearchQuery(searchQueryValue);
       
      };

  return (
    <div className={css.QuestionsContainer}>
        {/* Filter */}
        <div className={css.search}>
          <SearchInput placeholder='Search previous posts' onChange={(query)=> handleSearchChanged(query)}  />
        </div>
        {/* Question */}
        <div className={css.Questions}>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
 
        </div>
    </div>
  )
}

export default Questions