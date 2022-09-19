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
    fetch(`https://0rjgb20xo8.execute-api.us-east-1.amazonaws.com/dev/question/${id}/answer/${answer.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': ' application/json',
        Authorization:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRmUHd3d2liY0VZVHF2a1VTbEJodSJ9.eyJuaWNrbmFtZSI6ImJlZ3VuLmRhdmlkIiwibmFtZSI6ImJlZ3VuLmRhdmlkQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jMWUxMmUwZDNmOTU1NWZhMGMyMzEwZmU5MmNkNjMzOT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmJlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTE5VDAxOjE5OjAwLjI3OVoiLCJlbWFpbCI6ImJlZ3VuLmRhdmlkQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9kZXYtMnpiejRsaHEudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYyY2YyZjVmNTM0NTg5NzZkNjYzZmQ0OSIsImF1ZCI6IlJKM25hUzlaVjBTTkRhdlNDWkN6amp4Y1U1M083YURlIiwiaWF0IjoxNjYzNTUwMzQxLCJleHAiOjE2NjM1ODYzNDEsInNpZCI6IjlxaGZfdDRIdEhxRWJ4MHV3Qmhrdkc5Ync4OFU3NHVwIiwibm9uY2UiOiJibkJoVDNnMFdHcEZkRXRVYTFWeWJUaEtlREZqU2tkTE5HVjNSMU5KWW14VVpXUnRSeTQ1Vm1sdFNnPT0ifQ.eE8GZQdNbSNjZtixSpyuLyM3NOkzvGhFFOfO0FFxizRn_OzF4IQpYqNdjESn1-wtQVIQ5HQhu84EmBWyUsg8er3tpG4WGbnrOAM-M3XdCybxhKobdYaWrExPoAjXRIMXl66hFgL7VTK9WNa77WyEcNqOw3FeXFqtWe-Bw6Gu6SArJNzXdcnoEBKAaxyG2qbzPWMWmSqLUb1ono8VEUuWzSOGYxL7LXRT_wd2uv0g3bXFRF2xhY0s_Jed8RO9j_5Sjk-tQ4hjpHRMH68oI2EvuDFsVHfMXOL5dco1nKO4J1aliDOAbiyqEHkHC-zH3iRuUYdyd0qNWl0HRN-MC3Iiyg',
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
