import { PostMappingTypeEnum } from '@tribeplatform/gql-client/types';
import { useAddReply } from '@tribeplatform/react-sdk/hooks';
import { Avatar, Button } from 'app/ui-kit';
import { IconFile2 } from 'app/ui-kit/Icons/icon-file2';
import React, { useState } from 'react';
import css from './CommunityDetail.module.scss';

type Props = { 
};

const LeaveComment = (props: Props) => {
  const [comment, setComment] = useState('');

  const handleComment = (e: any) => {
    setComment(e.target.value);
  };
   
  return (
    <div className={css.leaveComment}>
      <div className={css.avatar}>
        <Avatar size='xs' />
        <span>
          <span>Jenny Wilson</span> • October 19, 2017{' '}
        </span>
      </div>
      <div className={css.leaveInput}>
        <input onChange={handleComment} value={comment} type='text' placeholder='Leave Comment' />
        <Button kind='secondary'>
          <IconFile2 />
          Add File
        </Button>
        <Button kind='primary'  >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LeaveComment;
