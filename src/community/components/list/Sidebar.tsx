import Item from 'antd/lib/list/Item';
import { Button, Input } from 'app/ui-kit';
import { IconClose } from 'app/ui-kit/Icons/icon-close';
import React, { useEffect, useState } from 'react';
import css from './CommunityList.module.scss';

type Props = {
  communityId:string,
  token:string,
  loadNewQuestions:any
};

const Sidebar = ({token,communityId,loadNewQuestions}: Props) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [state, setState] = useState({
    title: '',
    discussion: '',
  });

  const [tags, setTags] = useState([]);

  const handleChange = (e: any) => {
    setIsShowForm(true);
    setState(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const Items = {
      author: 'usama',
      content: state.discussion,
      created_time: new Date(),
      title: state.title,
      upVotes: 1,
    };

    fetch(`https://k4qd9qo877.execute-api.us-east-1.amazonaws.com/dev/community/${communityId}/question`, {
      method: 'POST',
      body: JSON.stringify(Items),
      headers: {
        'Content-Type': ' application/json',
        Authorization: token,
      },
    }).then(() => {
      setState({ title: '', discussion: '' });
      loadNewQuestions()
      setIsSubmitting(false);
      scrollToTop();
    });
  };

  return (
    <div className={css.sidebar}>
      {/* Sidebar Text */}
      <p className={css.sidebarText}>
        Fider is an open platform to collect and prioritize customer feedback. Visit fider.io to learn more. <br /> <br /> We're
        on a mission to build the best open source feedback platform, but we know this is not possible without your help. We need
        your feedback on how to improve it!
      </p>
      {/* Sidebar Form */}
      <form onSubmit={handleSubmit} className={`${css.sidebarForm} ${isShowForm && css.active}`}>
        <div>
          <label htmlFor='discussion' className={css.formLabel}>
            Add discussion
          </label>
          <div className={css.formInputWrapper}>
            <input
              type='text'
              required
              value={state.title}
              onChange={handleChange}
              id='title'
              className={css.formInput}
              placeholder='Enter Here'
            />
            <IconClose fill='#606F90' size={12} />
          </div>
        </div>
        <div>
          <label htmlFor='discussion' className={css.formLabel}>
            Add discussion
          </label>
          <div className={css.formInputWrapper}>
            <textarea
              required
              id='discussion'
              className={css.formInput}
              placeholder='Enter Here'
              value={state.discussion}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor='discussion' className={css.formLabel}>
            Tags
          </label>
          <div className={css.sidebarTags}>
            <span className={css.sidebarTag}>Students</span>
            <span className={css.sidebarAddTag}>+ Add Tag</span>
          </div>
          {/* <div className={css.formInputWrapper}> 
             <input type="text" className={css.formInput} placeholder='Enter Here' />
              <IconClose
              fill='#606F90'
              size={12}
              />
            </div> */}
        </div>
        <Button disabled={isSubmitting == true ? true : false} kind='primary'>
          {isSubmitting == true ? 'Submitting' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default Sidebar;
