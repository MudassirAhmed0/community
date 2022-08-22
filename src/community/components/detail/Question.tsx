import React from 'react'
import css from './CommunityDetail.module.scss'
import { IconChevron } from 'app/ui-kit/Icons/icon-chevron'; 
import { IconComment } from 'app/ui-kit/Icons/icon-comment';
import { Avatar, Button } from 'app/ui-kit';

type Props = {}

const Question = (props: Props) => {
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
                        Ability to hide first and last names of users
                        </h4>
                        <div className={css.questionAvatar}>
                            <Avatar
                            size='xs'
                            />
                            <div>
                                <span>Jenny Wilson •  </span> <span>October 19, 2017</span>
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
                    <p>
                    To prevent a leak of information, please, make possible to hide names of users!
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