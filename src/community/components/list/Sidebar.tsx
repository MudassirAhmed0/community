import { Button, Input } from 'app/ui-kit';
import { IconClose } from 'app/ui-kit/Icons/icon-close';
import React, { useState } from 'react'
import css from './CommunityList.module.scss';

type Props = {}

const Sidebar = (props: Props) => {
  const [isShowForm,setIsShowForm]  =useState(false)

  const [discussion,setDiscussion] = useState('')
  const [description,setDescription] = useState('')
  const [tags,setTags] = useState([])

  const handleDiscussionChange =(e:any)=>{
    setDiscussion(e.target.value)
    if(e.target.value.length > 0 ){
      setIsShowForm(true)
    }
  }
  
  const handleSubmit =(e:any)=>{
    e.preventDefault()
  }

  return (
    <div className={css.sidebar}>
        {/* Sidebar Text */}
        <p className={css.sidebarText}>
        Fider is an open platform to collect and prioritize customer feedback. Visit fider.io to learn more. <br /> <br /> We're on a mission to build the best open source feedback platform, but we know this is not possible without your help. We need your feedback on how to improve it!
        </p>
        {/* Sidebar Form */}
        <form onSubmit={handleSubmit} className={`${css.sidebarForm} ${ isShowForm && css.active}`}>
          <div>
            <label htmlFor="discussion" className={css.formLabel}>
                Add discussion
            </label>
            <div className={css.formInputWrapper}> 
             <input type="text"
              required
             value={discussion} onChange={handleDiscussionChange} className={css.formInput} placeholder='Enter Here' />
              <IconClose
              fill='#606F90'
              size={12}
              />
            </div>

          </div>
          <div>
            <label htmlFor="discussion" className={css.formLabel}>
                Add discussion
            </label>
            <div className={css.formInputWrapper}> 
             <textarea  required className={css.formInput} placeholder='Enter Here' />
               
            </div>

          </div>
          <div>
            <label htmlFor="discussion" className={css.formLabel}>
                Tags
            </label>
            <div className={css.sidebarTags}>
                <span className={css.sidebarTag}>
                  Students
                </span>
                <span className={css.sidebarAddTag}>
                  + Add Tag
                </span>
            </div>
            {/* <div className={css.formInputWrapper}> 
             <input type="text" className={css.formInput} placeholder='Enter Here' />
              <IconClose
              fill='#606F90'
              size={12}
              />
            </div> */}

          </div>
          <Button
          kind='primary'
          
          >
            Submit
          </Button>
        </form>
    </div>
  )
}

export default Sidebar