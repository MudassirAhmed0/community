import React, { useEffect, useState } from 'react'
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
    const [createdAt,setCreatedAt] = useState('')
    const [img,setImg] = useState('')
     
    useEffect(()=>{
        setImg(post?.owner?.member?.profilePicture?.url)
        if(post?.createdAt){
            let splitted= post?.createdAt.split('T')
            let splitted2 = splitted[0]?.split('-')
            let month = '' 
            switch (splitted2[1]) {
                case '01':
                    month = "January"
                    break;
                case '02':
                    month = "Feburary"
                    break;
                case '03':
                    month = "March"
                    break;
                case '04':
                    month = "April"
                    break;
                case '05':
                    month = "May"
                    break;
                case '06':
                    month = "June"
                    break;
                case '07':
                    month = "July"
                    break;
                case '08':
                    month = "August"
                    break;
                case '09':
                    month = "September"
                    break;
                case '10':
                    month = "October"
                    break;
                case '11':
                    month = "November"
                    break;
                case '12':
                    month = "December"
                    break;
            
            } 
            setCreatedAt(`${splitted2[2]} ${month}, ${splitted2[0]}`)
        } 

    },[post])
    // console.log(today.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
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
                            image={img}
                            />
                            <div>
                                <span>{post?.owner?.member?.name} •  </span> <span>{createdAt} </span> <span style={{color: "red", marginLeft: "30px", cursor: "pointer"}} onClick={()=> deleteQuestion()} className={css.tag_hot}>Delete</span>
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