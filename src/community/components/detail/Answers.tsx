import React from 'react';
import Answer from './Answer';
import css from './CommunityDetail.module.scss';

type Props = {
  replies: any;
};

const Answers = ({ replies }: Props) => {
  return (
    <div className={css.answersContainer}>
      {replies?.map((reply: any) => (
        <Answer reply={reply} />
      ))}
    </div>
  );
};

export default Answers;
