import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import css from './CommunityDetail.module.scss'; 

type Props = {
  answers?: any;
  
};
 

const Answers = ({ answers }: Props) => { 
  return (
    <div className={css.answersContainer}>
      {answers?.map((answer:any) => (
        <Answer key={answer.id} answer={answer} />
      ))}
    </div>
  );
};

export default Answers;
