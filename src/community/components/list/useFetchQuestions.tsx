import React, { useEffect, useState } from 'react';

const useFetchQuestions = (url: string, token: string) => {
  const [allQuestions, setAllQuestions] = useState(null);

  const fetchQuestions = async () => {
    const result = await fetch(url, {
      headers: {
        'Content-Type': ' application/json',
        Authorization: token,
      },
    });
    const { Items } = await result.json();
    setAllQuestions(Items);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return [allQuestions];
};

export default useFetchQuestions;
