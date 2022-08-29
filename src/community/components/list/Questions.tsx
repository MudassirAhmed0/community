import React, { useState, useEffect } from 'react';
import Question from './Question';
import { SearchInput } from 'app/components/common/SearchInput';
import css from './CommunityList.module.scss';
import { TribeClient } from '@tribeplatform/gql-client';
import useCommunityFeed from './useCommunityFeed';

type Props = {};

const Questions = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const handleSearchChanged = (searchQueryValue: string) => {
    setSearchQuery(searchQueryValue);
  };
  const questions = useCommunityFeed();

  return (
    <div className={css.QuestionsContainer}>
      {/* Filter */}
      <div className={css.search}>
        <SearchInput placeholder='Search previous posts' onChange={query => handleSearchChanged(query)} />
      </div>
      {/* Question */}
      <div className={css.Questions}>
        {questions?.map((item: any) => (
          <Question key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
