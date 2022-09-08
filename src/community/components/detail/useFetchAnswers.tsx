import React, { useEffect, useState } from 'react';

const useFetchAnswers = (url: string, token: string) => {
  const [answers, setAnswers] = useState(null);

  const fetchAnswers = async () => {
    const result = await fetch(url, {
      headers: {
        'Content-Type': ' application/json',
        Authorization: token,
      },
    });
    const { Items } = await result.json();
    setAnswers(Items);
  };
  useEffect(() => {
    fetchAnswers();
  }, []);
  return [answers];
};

export default useFetchAnswers;
