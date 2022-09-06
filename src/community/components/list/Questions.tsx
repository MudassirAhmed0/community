import React, { useState, useEffect } from 'react';
import Question from './Question';
import { SearchInput } from 'app/components/common/SearchInput';
import css from './CommunityList.module.scss';

type Props = {
  isSubmit: boolean;
};

const Questions = ({ isSubmit }: Props) => {
  const [allQuestions, setAllQuestions] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch('https://k4qd9qo877.execute-api.us-east-1.amazonaws.com/dev/community/MIT/question', {
        headers: {
          Authorization:
            ' eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijl1eHVzZGxobDB3VjlISVdDZXl3dSJ9.eyJuaWNrbmFtZSI6InRlc3QxIiwibmFtZSI6InRlc3QxQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yNDVjZjA3OTQ1NGRjOWEzMzc0YTdjMDc2ZGUyNDdjYz9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTA2VDEzOjAwOjI1Ljc3N1oiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9waW9uZWVycy1jb21tdW5pdHktdGVzdC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjMxNTM3YzhhNjZkMDZhMjM1MWRhYTRkIiwiYXVkIjoiNEpWaEFqM0cwNDN2YjExNXNkOUlmM0F4M2IzYXNHaVciLCJpYXQiOjE2NjI0NjkyMjYsImV4cCI6MTY2MjUwNTIyNiwic2lkIjoiVHdLWC03UHNuX2gtdi1PS3VhdVVXbVZjR085SGlYNTYiLCJub25jZSI6IlpUVlphME5UYmtWWFJIRkdZM0k0UVd0dGZqSlFWVEJsTWxGQ1ZGcHZkVVZpWlZocGFXMVFTbXBFZGc9PSJ9.iRyToD1k6ygQ_u9w-6zTI_lu2AY5R0XAXFe78fHVOgj15qx1NbfDzxKhNs_geyU8ckZmdeQIc-KIh33Jc15VxlDLVZNCZ3Bc6B-fthf7b8s-ZCYfOR_DlfqE5MrOfEqr-xxWjO-u8DqvVRqh-W5o2BeX3almcxxx9pKldFXyRObnrsOvGw55uXSSbsyhTnkgV_y7zzGCJfLs2H7OvFvaoKP56Z8n3buGY8jxIbdFmKTDMRdxY1tlV6_wrTS25024a-8kyVw3lZ4HO7D4hLaNURvU4PdHZOi5i0btgEgdA278PQ7AMnWFt2c8TIdk0m3AuyupxFlXG-EHdywJ-68nXQ',
        },
      });
      const {Items} = await result.json();
      setAllQuestions(Items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isSubmit]);

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
      {allQuestions?.map(question => (
        <div className={css.Questions} key={question.id}>
          <Question question={question}  />
        </div>
      ))}
    </div>
  );
};

export default Questions;
