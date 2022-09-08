import { Avatar, Button } from 'app/ui-kit';
import { IconFile2 } from 'app/ui-kit/Icons/icon-file2';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './CommunityDetail.module.scss';
import useFetchQuestionDetail from './useFetchQuestionDetail';

type Props = {
  id: string;
  token: string;
  loadNewAnswers:any
};

const LeaveComment = ({ id, token,loadNewAnswers }: Props) => {
  const [answer, setAnswer] = useState('');

  const handleChange = (event: any) => {
    setAnswer(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    const answers = {
      author: 'usama',
      answer: answer,
    };
    fetch(`https://k4qd9qo877.execute-api.us-east-1.amazonaws.com/dev/question/${id}/answer`, {
      method: 'POST',
      body: JSON.stringify(answers),
      headers: {
        'Content-Type': ' application/json',
        Authorization: token,
      },
    }).then(res => {
      setAnswer('');
      loadNewAnswers()
    });
  };

  return (
    <div className={css.leaveComment}>
      <div className={css.avatar}>
        <Avatar size='xs' />
        <span>
          <span>Usama</span> • October 19, 2017{' '}
        </span>
      </div>
      <div className={css.leaveInput}>
        <input type='text' placeholder='Leave Comment' value={answer} onChange={handleChange} />
        <Button kind='secondary'>
          <IconFile2 />
          Add File
        </Button>
        <Button kind='primary' onClick={submitHandler}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LeaveComment;
