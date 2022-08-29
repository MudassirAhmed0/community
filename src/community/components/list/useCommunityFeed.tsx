import React, { useEffect, useState } from 'react';
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import { useFeed, useSpaces } from '@tribeplatform/react-sdk/hooks';

const useCommunityFeed = () => {
  // const [questions,setQuestions] = useState([]
  var questions = [];
  const { data: posts } = useFeed({
    fields: {
      owner: { member: 'all' },
      reactions: { variables: { limit: 5 }, fields: 'basic' },
    },
    variables: {
      limit: 10,
    },
  });
  const { nodes: latestPosts } = simplifyPaginatedResult(posts);
  questions = latestPosts;

  return questions;
};

export default useCommunityFeed;
