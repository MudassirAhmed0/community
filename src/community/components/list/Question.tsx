import React from 'react'
import css from './CommunityList.module.scss' 
import { IconChevron } from 'app/ui-kit/Icons/icon-chevron';
import { Tags } from 'app/ui-kit';
import { Badge } from 'antd';
import { IconComment } from 'app/ui-kit/Icons/icon-comment';

type Props = {}

const Question = (props: Props) => {
  return (
    <div className={css.question}>
        {/* Question Rating */}
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
        {/* Question Quick Detail */}
        <div className={css.questionDetail}>
            {/* Question Heading */}
            <h4>
            Local sendmail as email send provider 
            </h4>
            {/* Question Excert */}
              <p>
              For small environments it would be nice to be able to send emails with local sendmail and not over SMTP or Mailgun.
              </p>
            <div className={css.questionFooter}>
                {/* Question Tags */}
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
                {/* Question Comments */}
                <div className={css.comments}>
                    <IconComment
                      size={18}
                      fill='#D3D9EB'
                    />
                    <span>
                      8
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question