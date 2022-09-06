import { Avatar, Button } from 'app/ui-kit';
import { IconFile2 } from 'app/ui-kit/Icons/icon-file2';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './CommunityDetail.module.scss';

type Props = {
  setIsSubmit: any;
};
type QuizParams = {
  id: string;
};

const LeaveComment = ({ setIsSubmit }: Props) => {
  const { id } = useParams<QuizParams>();

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
        Authorization:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijl1eHVzZGxobDB3VjlISVdDZXl3dSJ9.eyJuaWNrbmFtZSI6InRlc3QxIiwibmFtZSI6InRlc3QxQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yNDVjZjA3OTQ1NGRjOWEzMzc0YTdjMDc2ZGUyNDdjYz9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTA2VDEzOjAwOjI1Ljc3N1oiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9waW9uZWVycy1jb21tdW5pdHktdGVzdC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjMxNTM3YzhhNjZkMDZhMjM1MWRhYTRkIiwiYXVkIjoiNEpWaEFqM0cwNDN2YjExNXNkOUlmM0F4M2IzYXNHaVciLCJpYXQiOjE2NjI0NjkyMjYsImV4cCI6MTY2MjUwNTIyNiwic2lkIjoiVHdLWC03UHNuX2gtdi1PS3VhdVVXbVZjR085SGlYNTYiLCJub25jZSI6IlpUVlphME5UYmtWWFJIRkdZM0k0UVd0dGZqSlFWVEJsTWxGQ1ZGcHZkVVZpWlZocGFXMVFTbXBFZGc9PSJ9.iRyToD1k6ygQ_u9w-6zTI_lu2AY5R0XAXFe78fHVOgj15qx1NbfDzxKhNs_geyU8ckZmdeQIc-KIh33Jc15VxlDLVZNCZ3Bc6B-fthf7b8s-ZCYfOR_DlfqE5MrOfEqr-xxWjO-u8DqvVRqh-W5o2BeX3almcxxx9pKldFXyRObnrsOvGw55uXSSbsyhTnkgV_y7zzGCJfLs2H7OvFvaoKP56Z8n3buGY8jxIbdFmKTDMRdxY1tlV6_wrTS25024a-8kyVw3lZ4HO7D4hLaNURvU4PdHZOi5i0btgEgdA278PQ7AMnWFt2c8TIdk0m3AuyupxFlXG-EHdywJ-68nXQ',
      },
    }).then(res => {
      setIsSubmit((prev: boolean) => !prev);
      setAnswer('');
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
