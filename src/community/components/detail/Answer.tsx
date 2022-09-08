import { Avatar } from 'app/ui-kit';
import React, { useEffect, useState } from 'react';
import css from './CommunityDetail.module.scss';
import { useParams } from 'react-router-dom';

type Props = {
  answer: any;
  key: any;
};
type QuizParams = {
  id: string;
};

const Answer = ({ answer }: Props) => {
  const { id } = useParams<QuizParams>();

  const deleteAnswerHandler = (type: any) => {
    fetch(`https://k4qd9qo877.execute-api.us-east-1.amazonaws.com/dev/question/${id}/answer/${answer.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': ' application/json',
        Authorization:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijl1eHVzZGxobDB3VjlISVdDZXl3dSJ9.eyJuaWNrbmFtZSI6InRlc3QxIiwibmFtZSI6InRlc3QxQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yNDVjZjA3OTQ1NGRjOWEzMzc0YTdjMDc2ZGUyNDdjYz9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTA4VDEyOjMzOjE5LjEzNFoiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9waW9uZWVycy1jb21tdW5pdHktdGVzdC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjMxNTM3YzhhNjZkMDZhMjM1MWRhYTRkIiwiYXVkIjoiNEpWaEFqM0cwNDN2YjExNXNkOUlmM0F4M2IzYXNHaVciLCJpYXQiOjE2NjI2NDA0MDAsImV4cCI6MTY2MjY3NjQwMCwic2lkIjoiTVlaMzFwZVVLSHo2NTRnclhlLURpdjR2OFZ2ZVNBU2YiLCJub25jZSI6ImRXZ3VjVFpJZFRoWVdXSkRWak41U1ZFMVNuWk5WM1YwVlV0QmJURjRNRVZpWWtSTE1VaGZWbkJIWXc9PSJ9.LFbQVTtLq_Jm7-sS8w-qXq7k4K2nJnOhJoaFDkYj995bV7SxY8UsZknQ6VqCnB-66yjslp8tmH0Bre7YfSRECMlTJfI3l1qEKqdjeCFq78wEx_QwDkhJk1zkuJjYDPbQnm9lRQKxTHf6K-p1hjxvWgth1H6xQGn35ntW9DGxt9YckWh9hiFmrjE6A3Z7JBRwiBaIN3KFY-Py6ssMQvAAOl969SK4KwFQ6U2_NgP408UjwmdfEybzYuUQN-U1WK2HSOX_sa5zXyuhHgwfobJ1EkssG8T9nloMNNT7meEgwP9dUIaLdVLbwBvRIpniweQ2QkDT9dexdzNhsLbtqLuP-A',
      },
    }).then(response => {});
  };

  return (
    <div className={css.answer}>
      <div className={css.avatar}>
        <Avatar size='xs' />
        <span>
          <span>{answer?.author}</span> • October 19, 2017
        </span>
        <span
          style={{ color: 'red', marginLeft: '30px', cursor: 'pointer' }}
          onClick={deleteAnswerHandler}
          className={css.tag_hot}
        >
          Delete
        </span>
      </div>
      <p>{answer.answer}</p>
    </div>
  );
};

export default Answer;
