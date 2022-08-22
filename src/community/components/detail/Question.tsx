import React from 'react'
import css from './CommunityDetail.module.scss'
import { IconChevron } from 'app/ui-kit/Icons/icon-chevron'; 
import { IconComment } from 'app/ui-kit/Icons/icon-comment';
import { Avatar, Button } from 'app/ui-kit';
import {useDeletePost} from "@tribeplatform/react-sdk/hooks";

type Props = {
    post?: any
}

const Question = ({post}: Props) => {
    const {mutate: deletePost} = useDeletePost()

    const deleteQuestion = ()=> {
        try{
            deletePost({id: post.id})
            window.location.href = "/community"
        }catch(error){
            console.log(error)
        }
        //  alert("post has been deleted")
         
    }
  return (
       <div className={css.question}>
            {/* Question Rating */}
        
            {/* Question Quick Detail */}
            <div className={css.questionDetail}>

                {/* Question Heading */}
                <div className={css.questionHeader}>
                <div className={css.rating}>
                <IconChevron
                    direction='up'
                    fill='#606F90'
                    size={16}
                />
                <span>
                24
                </span>
            </div>
                    <div>
                        <h4>
                        {post?.title}
                        </h4>
                        <div className={css.questionAvatar}>
                            <Avatar
                            size='xs'
                            />
                            <div>
                                <span>Jenny Wilson •  </span> <span>October 19, 2017  </span> <span style={{color: "red", marginLeft: "30px", cursor: "pointer"}} onClick={()=> deleteQuestion()} className={css.tag_hot}>Delete</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        kind='secondary'
                    >
                        Subscribe to Post
                    </Button>
                    
                </div>
                <div className={css.questionFooter}>
                    {/* Question Tags */}
                    <p dangerouslySetInnerHTML={{__html: post?.mappingFields[1]?.value}} >
                    </p>
                    <div className={css.tags}> 
                        <span className={css.tag +" " + css.tag_success }>
                            Answered
                        </span>
                        <span className={css.tag +" " + css.tag_hot }>
                        🔥 Hot
                        </span>
                        <span className={css.tag  }>
                            Students
                        </span>
                    </div>
                        
                    
                </div>
                
                
            </div>
       </div>
        
  )
}

export default Question