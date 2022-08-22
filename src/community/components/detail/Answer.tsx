import { Avatar } from 'app/ui-kit'
import React from 'react'
import css from './CommunityDetail.module.scss'

type Props = {}

const Answer = (props: Props) => {
  return (
    <div className={css.answer}>
        <div className={css.avatar}>
            <Avatar
            size='xs'
            />
            <span><span>Jenny Wilson</span> •  October 19, 2017 </span>
            
        </div>
         <p>
         On the career front the program at CBS is well designed and I would highly recommend it to anybody interested in Finance and Consulting. The major consulting companies all recruit on campus and the alumni base in finance is incredibly active. Many students have internships during the school year because there are no classes on Fridays. Getting that chance to work for a hedge fund during class can be the difference for many in getting the job they want at graduation. The school is also strengthening the tech/ entrepreneurship offerings with a new startup lab. The venture market is New York is growing rapidly and many students start a business with their classmates before reaching graduation.
         </p>
    </div>
  )
}

export default Answer