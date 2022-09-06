import Item from 'antd/lib/list/Item';
import { Button, Input } from 'app/ui-kit';
import { IconClose } from 'app/ui-kit/Icons/icon-close';
import React, { useEffect, useState } from 'react';
import css from './CommunityList.module.scss';

type Props = {
  setIsSubmit:any
};

const Sidebar = ({setIsSubmit}: Props) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [state, setState] = useState({
    title: '',
    discussion: '',
  });

  const [tags, setTags] = useState([]);

  const handleChange = (e: any) => {
    setIsShowForm(true);
    setState(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  

  const handleSubmit =  (e: any) => {
    e.preventDefault();
    setIsSubmitting(true)
    const Items = 
      
        {
          author:'usama',
          content: state.discussion,
          created_time: new Date(),
          title: state.title,
          upVotes: 1,
        }
    
       fetch('https://k4qd9qo877.execute-api.us-east-1.amazonaws.com/dev/community/MIT/question',{
        method:'POST',
        body:JSON.stringify(Items),
        headers:{
          "Content-Type":" application/json",
          Authorization:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijl1eHVzZGxobDB3VjlISVdDZXl3dSJ9.eyJuaWNrbmFtZSI6InRlc3QxIiwibmFtZSI6InRlc3QxQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yNDVjZjA3OTQ1NGRjOWEzMzc0YTdjMDc2ZGUyNDdjYz9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTA2VDEzOjAwOjI1Ljc3N1oiLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9waW9uZWVycy1jb21tdW5pdHktdGVzdC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjMxNTM3YzhhNjZkMDZhMjM1MWRhYTRkIiwiYXVkIjoiNEpWaEFqM0cwNDN2YjExNXNkOUlmM0F4M2IzYXNHaVciLCJpYXQiOjE2NjI0NjkyMjYsImV4cCI6MTY2MjUwNTIyNiwic2lkIjoiVHdLWC03UHNuX2gtdi1PS3VhdVVXbVZjR085SGlYNTYiLCJub25jZSI6IlpUVlphME5UYmtWWFJIRkdZM0k0UVd0dGZqSlFWVEJsTWxGQ1ZGcHZkVVZpWlZocGFXMVFTbXBFZGc9PSJ9.iRyToD1k6ygQ_u9w-6zTI_lu2AY5R0XAXFe78fHVOgj15qx1NbfDzxKhNs_geyU8ckZmdeQIc-KIh33Jc15VxlDLVZNCZ3Bc6B-fthf7b8s-ZCYfOR_DlfqE5MrOfEqr-xxWjO-u8DqvVRqh-W5o2BeX3almcxxx9pKldFXyRObnrsOvGw55uXSSbsyhTnkgV_y7zzGCJfLs2H7OvFvaoKP56Z8n3buGY8jxIbdFmKTDMRdxY1tlV6_wrTS25024a-8kyVw3lZ4HO7D4hLaNURvU4PdHZOi5i0btgEgdA278PQ7AMnWFt2c8TIdk0m3AuyupxFlXG-EHdywJ-68nXQ',
    
        }
      }).then(()=>{
        setState({title:'',discussion:''})
        setIsSubmit((prev:boolean)=> !prev)
        setIsSubmitting(false)
        scrollToTop()


      })


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
        <Button disabled={isSubmitting==true?true:false} kind='primary' >{isSubmitting==true?"Submitting":"Submit" }</Button>
      </form>
    </div>
  );
};

export default Sidebar;
