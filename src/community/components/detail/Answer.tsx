import { Avatar } from 'app/ui-kit';
import React, { useEffect, useState } from 'react';
import css from './CommunityDetail.module.scss';

type Props = {
  reply: any;
};

const Answer = ({ reply }: Props) => {
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    let cleanText = reply?.shortContent.replace(/<\/?[^>]+(>|$)/g, '');
    setContent(cleanText);
    setImg(reply?.owner?.member?.profilePicture?.url);
    if (reply?.createdAt) {
      let splitted = reply?.createdAt.split('T');
      let splitted2 = splitted[0]?.split('-');
      let month = '';
      switch (splitted2[1]) {
        case '01':
          month = 'January';
          break;
        case '02':
          month = 'Feburary';
          break;
        case '03':
          month = 'March';
          break;
        case '04':
          month = 'April';
          break;
        case '05':
          month = 'May';
          break;
        case '06':
          month = 'June';
          break;
        case '07':
          month = 'July';
          break;
        case '08':
          month = 'August';
          break;
        case '09':
          month = 'September';
          break;
        case '10':
          month = 'October';
          break;
        case '11':
          month = 'November';
          break;
        case '12':
          month = 'December';
          break;
      }
      setCreatedAt(`${splitted2[2]} ${month}, ${splitted2[0]}`);
    }
  }, [reply]);
  return (
    <div className={css.answer}>
      <div className={css.avatar}>
        <Avatar size='xs' image={img} />
        <span>
          <span>{reply?.owner?.member?.name}</span> • {createdAt}{' '}
        </span>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Answer;
