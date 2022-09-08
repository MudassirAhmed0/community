import React, { useEffect, useState } from 'react';

const useFetchQuestionDetail = (url: string,token:string) => {
  const [questionDetail, setQuestionDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuestiondetail = async () => {
    const result = await fetch(url, {
      headers: {
        'Content-Type': ' application/json',
        Authorization:
        token
      },
    });
    const { Item } = await result.json();
    setQuestionDetail(Item);
    setIsLoading(false)
  };
  useEffect(() => {
    fetchQuestiondetail();
  }, []);
  return [questionDetail , isLoading];
};

export default useFetchQuestionDetail;
