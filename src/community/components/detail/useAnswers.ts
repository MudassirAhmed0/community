import { usePost } from '@tribeplatform/react-sdk/hooks';
import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const useAnswers = (props: Props) => {
  const params: any = useParams();

  const { data: post } = usePost({
    variables: {
      id: `${params.id}`,
    },
    fields: 'withReply',
  });
  return post;
};

export default useAnswers;
