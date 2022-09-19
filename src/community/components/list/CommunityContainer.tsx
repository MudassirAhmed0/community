import React, { useEffect, useState } from 'react';
import Questions from './Questions';
import Sidebar from './Sidebar';
import css from './CommunityList.module.scss';
import useFetchQuestions from './useFetchQuestions';

type Props = {};

const CommunityContainer = (props: Props) => {
  const [token, setToken] = useState(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRmUHd3d2liY0VZVHF2a1VTbEJodSJ9.eyJuaWNrbmFtZSI6ImJlZ3VuLmRhdmlkIiwibmFtZSI6ImJlZ3VuLmRhdmlkQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jMWUxMmUwZDNmOTU1NWZhMGMyMzEwZmU5MmNkNjMzOT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmJlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTE5VDAxOjE5OjAwLjI3OVoiLCJlbWFpbCI6ImJlZ3VuLmRhdmlkQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9kZXYtMnpiejRsaHEudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYyY2YyZjVmNTM0NTg5NzZkNjYzZmQ0OSIsImF1ZCI6IlJKM25hUzlaVjBTTkRhdlNDWkN6amp4Y1U1M083YURlIiwiaWF0IjoxNjYzNTUwMzQxLCJleHAiOjE2NjM1ODYzNDEsInNpZCI6IjlxaGZfdDRIdEhxRWJ4MHV3Qmhrdkc5Ync4OFU3NHVwIiwibm9uY2UiOiJibkJoVDNnMFdHcEZkRXRVYTFWeWJUaEtlREZqU2tkTE5HVjNSMU5KWW14VVpXUnRSeTQ1Vm1sdFNnPT0ifQ.eE8GZQdNbSNjZtixSpyuLyM3NOkzvGhFFOfO0FFxizRn_OzF4IQpYqNdjESn1-wtQVIQ5HQhu84EmBWyUsg8er3tpG4WGbnrOAM-M3XdCybxhKobdYaWrExPoAjXRIMXl66hFgL7VTK9WNa77WyEcNqOw3FeXFqtWe-Bw6Gu6SArJNzXdcnoEBKAaxyG2qbzPWMWmSqLUb1ono8VEUuWzSOGYxL7LXRT_wd2uv0g3bXFRF2xhY0s_Jed8RO9j_5Sjk-tQ4hjpHRMH68oI2EvuDFsVHfMXOL5dco1nKO4J1aliDOAbiyqEHkHC-zH3iRuUYdyd0qNWl0HRN-MC3Iiyg',
  );
  const [communityId, setCommunity] = useState('MIT');
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions] = useFetchQuestions(
    `https://0rjgb20xo8.execute-api.us-east-1.amazonaws.com/dev/community/${communityId}/question`,
    token,
  );

  useEffect(() => {
    questions && setAllQuestions([...questions]);
  }, [questions]);

  const loadNewQuestions = async () => {
    let url = `https://0rjgb20xo8.execute-api.us-east-1.amazonaws.com/dev/community/${communityId}/question`;
    const result = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const { Items } = await result.json();
    setAllQuestions([...Items]);
  };

  return (
    <div className={css.communityContainer}>
      <Questions questions={allQuestions} />
      <Sidebar loadNewQuestions={loadNewQuestions} token={token} communityId={communityId} />
    </div>
  );
};

export default CommunityContainer;
