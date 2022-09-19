import React, { useEffect, useState } from 'react';
import { Section } from 'app/ui-kit';
import Breadcrumbs from 'app/components/common/Breadcrumbs';
import css from './CommunityDetail.module.scss';
import { useHistory } from 'react-router-dom';
import { IconFile } from 'app/ui-kit/Icons/icon-file';
import Question from './Question';
import LeaveComment from './LeaveComment';
import Answers from './Answers';
import { useParams } from 'react-router-dom';
import useFetchQuestionDetail from './useFetchQuestionDetail';
import useFetchAnswers from './useFetchAnswers';

type Props = {};
type RouteParams = {
  id: string;
};

const CommunityDetail = (props: Props) => {
  const { id } = useParams<RouteParams>();
  const [token, setToken] = useState(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRmUHd3d2liY0VZVHF2a1VTbEJodSJ9.eyJuaWNrbmFtZSI6ImJlZ3VuLmRhdmlkIiwibmFtZSI6ImJlZ3VuLmRhdmlkQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jMWUxMmUwZDNmOTU1NWZhMGMyMzEwZmU5MmNkNjMzOT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmJlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTE5VDAxOjE5OjAwLjI3OVoiLCJlbWFpbCI6ImJlZ3VuLmRhdmlkQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9kZXYtMnpiejRsaHEudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYyY2YyZjVmNTM0NTg5NzZkNjYzZmQ0OSIsImF1ZCI6IlJKM25hUzlaVjBTTkRhdlNDWkN6amp4Y1U1M083YURlIiwiaWF0IjoxNjYzNTUwMzQxLCJleHAiOjE2NjM1ODYzNDEsInNpZCI6IjlxaGZfdDRIdEhxRWJ4MHV3Qmhrdkc5Ync4OFU3NHVwIiwibm9uY2UiOiJibkJoVDNnMFdHcEZkRXRVYTFWeWJUaEtlREZqU2tkTE5HVjNSMU5KWW14VVpXUnRSeTQ1Vm1sdFNnPT0ifQ.eE8GZQdNbSNjZtixSpyuLyM3NOkzvGhFFOfO0FFxizRn_OzF4IQpYqNdjESn1-wtQVIQ5HQhu84EmBWyUsg8er3tpG4WGbnrOAM-M3XdCybxhKobdYaWrExPoAjXRIMXl66hFgL7VTK9WNa77WyEcNqOw3FeXFqtWe-Bw6Gu6SArJNzXdcnoEBKAaxyG2qbzPWMWmSqLUb1ono8VEUuWzSOGYxL7LXRT_wd2uv0g3bXFRF2xhY0s_Jed8RO9j_5Sjk-tQ4hjpHRMH68oI2EvuDFsVHfMXOL5dco1nKO4J1aliDOAbiyqEHkHC-zH3iRuUYdyd0qNWl0HRN-MC3Iiyg',
  );
  const [communityId, setCommunity] = useState('MIT');
  const [questionDetail, isLoading] = useFetchQuestionDetail(
    `https://0rjgb20xo8.execute-api.us-east-1.amazonaws.com/dev/community/${communityId}/question/${id}`,
    token,
  );

  const [allAnswers, setAllAnswers] = useState([]);
  const [answers] = useFetchAnswers(`https://0rjgb20xo8.execute-api.us-east-1.amazonaws.com/dev/question/${id}/answer`, token);

  useEffect(() => {
    answers && setAllAnswers([...answers]);
  }, [answers]);

  const loadNewAnswers = async () => {
    let url = `https://0rjgb20xo8.execute-api.us-east-1.amazonaws.com/dev/question/${id}/answer`;
    const result = await fetch(url, {
      headers: {
        'Content-Type': ' application/json',
        Authorization: token,
      },
    });
    const { Items } = await result.json();
    setAllAnswers([...Items]);
  };

  const history = useHistory();
  return (
    <Section kind='root'>
      <Section kind='content'>
        <Breadcrumbs
          className={css.breadcrumbs}
          links={[
            {
              name: 'Community',
              onClick: history.goBack,
              icon: <IconFile className={css.breadcrumbsIcon} />,
            },
            { name: 'Add discussion' },
          ]}
        />
        <Question id={id} communityId={communityId} token={token} questionDetail={questionDetail} isLoading={isLoading} />
        <LeaveComment loadNewAnswers={loadNewAnswers} id={id} token={token} />
        <Answers answers={allAnswers} />
      </Section>
    </Section>
  );
};

export default CommunityDetail;
