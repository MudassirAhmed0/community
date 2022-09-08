import React, { useState, useEffect } from 'react';
import Question from './Question';
import { SearchInput } from 'app/components/common/SearchInput';
import css from './CommunityList.module.scss';
import useFetchQuestions from './useFetchQuestions';

type Props = {
   questions:any
};

const Questions = (props: Props) => {
  
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSearchChanged = (searchQueryValue: string) => {
    setSearchQuery(searchQueryValue);
  };

  return (
    <div className={css.QuestionsContainer}>
      {/* Filter */}
      <div className={css.search}>
        <SearchInput placeholder='Search previous posts' onChange={query => handleSearchChanged(query)} />
      </div>
      {/* Question */}
      {props.questions?.map((question: any) => (
        <div className={css.Questions} key={question.id}>
          <Question question={question} />
        </div>
      ))}
    </div>
  );
};

export default Questions;
