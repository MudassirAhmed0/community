import React, { useEffect, useState } from 'react';
import css from './CommunityDetail.module.scss';
import { IconChevron } from 'app/ui-kit/Icons/icon-chevron';
import { IconComment } from 'app/ui-kit/Icons/icon-comment';
import { Avatar, Button } from 'app/ui-kit';
import { useParams } from 'react-router-dom';

type Props = {};
type QuizParams = {
  id: string;
};
type DataTypes = {
  [key: string]: any;
};

const Question = (props: Props) => {
  const [data, setData] = useState<DataTypes>({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<QuizParams>();

  const fetchData = async () => {
    const result = await fetch(`https://k4qd9qo877.execute-api.us-east-1.amazonaws.com/dev/community/MIT/question/${id}`, {
      headers: {
        Authorization:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijl1eHVzZGxobDB3VjlISVdDZXl3dSJ9.eyJuaWNrbmFtZSI6InRlc3QxIiwibmFtZSI6InRlc3QxQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yNDVjZjA3OTQ1NGRjOWEzMzc0YTdjMDc2ZGUyNDdjYz9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTA2VDEzOjAwOjI1Ljc3N1oiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9waW9uZWVycy1jb21tdW5pdHktdGVzdC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjMxNTM3YzhhNjZkMDZhMjM1MWRhYTRkIiwiYXVkIjoiNEpWaEFqM0cwNDN2YjExNXNkOUlmM0F4M2IzYXNHaVciLCJpYXQiOjE2NjI0NjkyMjYsImV4cCI6MTY2MjUwNTIyNiwic2lkIjoiVHdLWC03UHNuX2gtdi1PS3VhdVVXbVZjR085SGlYNTYiLCJub25jZSI6IlpUVlphME5UYmtWWFJIRkdZM0k0UVd0dGZqSlFWVEJsTWxGQ1ZGcHZkVVZpWlZocGFXMVFTbXBFZGc9PSJ9.iRyToD1k6ygQ_u9w-6zTI_lu2AY5R0XAXFe78fHVOgj15qx1NbfDzxKhNs_geyU8ckZmdeQIc-KIh33Jc15VxlDLVZNCZ3Bc6B-fthf7b8s-ZCYfOR_DlfqE5MrOfEqr-xxWjO-u8DqvVRqh-W5o2BeX3almcxxx9pKldFXyRObnrsOvGw55uXSSbsyhTnkgV_y7zzGCJfLs2H7OvFvaoKP56Z8n3buGY8jxIbdFmKTDMRdxY1tlV6_wrTS25024a-8kyVw3lZ4HO7D4hLaNURvU4PdHZOi5i0btgEgdA278PQ7AMnWFt2c8TIdk0m3AuyupxFlXG-EHdywJ-68nXQ',
      },
    });
    const { Item } = await result.json();
    setIsLoading(false);
    setData(Item);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const deleteQuestionHandler = () => {
    fetch(`https://k4qd9qo877.execute-api.us-east-1.amazonaws.com/dev/community/MIT/question/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': ' application/json',

        Authorization:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijl1eHVzZGxobDB3VjlISVdDZXl3dSJ9.eyJuaWNrbmFtZSI6InRlc3QxIiwibmFtZSI6InRlc3QxQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yNDVjZjA3OTQ1NGRjOWEzMzc0YTdjMDc2ZGUyNDdjYz9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTA2VDEzOjAwOjI1Ljc3N1oiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9waW9uZWVycy1jb21tdW5pdHktdGVzdC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjMxNTM3YzhhNjZkMDZhMjM1MWRhYTRkIiwiYXVkIjoiNEpWaEFqM0cwNDN2YjExNXNkOUlmM0F4M2IzYXNHaVciLCJpYXQiOjE2NjI0NjkyMjYsImV4cCI6MTY2MjUwNTIyNiwic2lkIjoiVHdLWC03UHNuX2gtdi1PS3VhdVVXbVZjR085SGlYNTYiLCJub25jZSI6IlpUVlphME5UYmtWWFJIRkdZM0k0UVd0dGZqSlFWVEJsTWxGQ1ZGcHZkVVZpWlZocGFXMVFTbXBFZGc9PSJ9.iRyToD1k6ygQ_u9w-6zTI_lu2AY5R0XAXFe78fHVOgj15qx1NbfDzxKhNs_geyU8ckZmdeQIc-KIh33Jc15VxlDLVZNCZ3Bc6B-fthf7b8s-ZCYfOR_DlfqE5MrOfEqr-xxWjO-u8DqvVRqh-W5o2BeX3almcxxx9pKldFXyRObnrsOvGw55uXSSbsyhTnkgV_y7zzGCJfLs2H7OvFvaoKP56Z8n3buGY8jxIbdFmKTDMRdxY1tlV6_wrTS25024a-8kyVw3lZ4HO7D4hLaNURvU4PdHZOi5i0btgEgdA278PQ7AMnWFt2c8TIdk0m3AuyupxFlXG-EHdywJ-68nXQ',
      },
    }).then(response => {
      console.log(response)
      window.location.href = '/community';
    });
  };

  return (
    <>
      {isLoading && <span>Loading.......</span>}
      {isLoading || (
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
                <h4>{data?.title}</h4>
                <div className={css.questionAvatar}>
                  <Avatar size='xs' />
                  <div>
                    <span>{data?.author} </span> <span>{data?.date}</span>
                    <span
                      style={{ color: 'red', marginLeft: '30px', cursor: 'pointer' }}
                      onClick={deleteQuestionHandler}
                      className={css.tag_hot}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
              <Button kind='secondary'>Subscribe to Post</Button>
            </div>
            <div className={css.questionFooter}>
              {/* Question Tags */}
              <p>{data?.content}</p>
              <div className={css.tags}>
                <span className={css.tag + ' ' + css.tag_success}>Answered</span>
                <span className={css.tag + ' ' + css.tag_hot}>🔥 Hot</span>
                <span className={css.tag}>Students</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
