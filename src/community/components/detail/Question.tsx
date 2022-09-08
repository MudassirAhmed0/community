import React, { useEffect, useState } from 'react';
import css from './CommunityDetail.module.scss';
import { IconChevron } from 'app/ui-kit/Icons/icon-chevron';
import { IconComment } from 'app/ui-kit/Icons/icon-comment';
import { Avatar, Button } from 'app/ui-kit';
import useFetchQuestionDetail from './useFetchQuestionDetail';
import Community from 'community';
import Skeleton from 'app/components/common/Skeleton';

type Props = {
  isLoading: any;
  questionDetail: any;
  id: string;
  token: string;
  communityId: string;
};

const Question = ({ questionDetail, isLoading, token, id, communityId }: Props) => {
  const deleteQuestionHandler = () => {
    fetch(`https://k4qd9qo877.execute-api.us-east-1.amazonaws.com/dev/community/${communityId}/question/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': ' application/json',

        Authorization: token,
      },
    }).then(response => {
      console.log(response);
      window.location.href = '/community';
    });
  };

  return (
    <>
      <div className={css.question}>
        {/* Question Rating */}

        {/* Question Quick Detail */}
        <div className={css.questionDetail}>
          {/* Question Heading */}
          <div className={css.questionHeader}>
            <div className={css.rating}>
              <IconChevron direction='up' fill='#606F90' size={16} />
              <span>24</span>
            </div>
            <div>
              <h4>
                {questionDetail?.title} {isLoading && <Skeleton width={300} />}
              </h4>
              {isLoading ? (
                <Skeleton width={240} />
              ) : (
                <div className={css.questionAvatar}>
                  <Avatar size='xs' />
                  <div>
                    <span>{questionDetail?.author} </span> <span>{questionDetail?.date}</span>
                    <span
                      style={{ color: 'red', marginLeft: '30px', cursor: 'pointer' }}
                      onClick={deleteQuestionHandler}
                      className={css.tag_hot}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              )}
            </div>
            <Button kind='secondary'>Subscribe to Post</Button>
          </div>
          <div className={css.questionFooter}>
            {/* Question Tags */}
          { isLoading? <Skeleton width={700} height={50}/> : <p>{questionDetail?.content}</p>}
            <div className={css.tags}>
              <span className={css.tag + ' ' + css.tag_success}>Answered</span>
              <span className={css.tag + ' ' + css.tag_hot}>🔥 Hot</span>
              <span className={css.tag}>Students</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
