import { Button, Input } from 'app/ui-kit';
import { IconClose } from 'app/ui-kit/Icons/icon-close';
import React, { useState, useEffect } from 'react'
import css from './CommunityList.module.scss';
import {useAddPost} from "@tribeplatform/react-sdk/hooks";
import {PostMappingTypeEnum} from "@tribeplatform/gql-client/types";
import {TribeClient} from "@tribeplatform/gql-client"


type Props = {}

const Sidebar = (props: Props) => {
  const [isShowForm,setIsShowForm]  =useState(false)

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [tags,setTags] = useState([])

  const handleTitleChange =(e:any)=>{
    setTitle(e.target.value)
    if(e.target.value.length > 0 ){
      setIsShowForm(true)
    }
  }

  const {mutateAsync: addPost} = useAddPost()

 
  // const client = new TribeClient({
  //     graphqlUrl: 'https://app.tribe.so/graphql',
  //     accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFQUDo6cnFnaFQ1WmZNajRlIiwibmV0d29ya0lkIjoiRmtNS3F4ZTRMdCIsInRva2VuVHlwZSI6IkxJTUlURUQiLCJlbnRpdHlJZCI6IkZrTUtxeGU0THQiLCJwZXJtaXNzaW9uQ29udGV4dCI6Ik5FVFdPUksiLCJwZXJtaXNzaW9ucyI6WyIqIl0sImlhdCI6MTY2MTE2ODc4MCwiZXhwIjoxNjYzNzYwNzgwfQ.anvoIkNLNs92QCX_73vGgoHA2YcMOuBBqvLWYuQUfHg',
  //   })
  

  
  const handleSubmit =(e:any)=>{
    e.preventDefault()
    addPost({
      spaceId: 'tSRFilJqiLGa',
      input: {
          postTypeId: 'BX4z4oj6hLcmCrc',
          publish: true,
          mappingFields: [
              {
                  key: 'title',
                  type: PostMappingTypeEnum.text,
                  value: JSON.stringify(title)
              },
              {
                  key: 'content',
                  type: PostMappingTypeEnum.html,
                  value: JSON.stringify(description),
              }
          ]
      }
    }).then((res) => {
        setTitle("")
        setDescription("")
    }).catch((err)=> {
      console.log(err);
    })
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
              value={title} onChange={handleTitleChange} className={css.formInput} placeholder='Enter Here' />
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
             <textarea value={description} onChange={(e)=> setDescription(e.target.value)} name='discussion' required className={css.formInput} placeholder='Enter Here' />
               
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
            type='submit'
          >
            Submit
          </Button>
        </form>
    </div>
  )
}

export default Sidebar