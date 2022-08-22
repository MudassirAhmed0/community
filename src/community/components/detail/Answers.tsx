import React from 'react'
import Answer from './Answer'
import css from './CommunityDetail.module.scss'

type Props = {}

const Answers = (props: Props) => {
  return (
    <div className={css.answersContainer}>
        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>
    </div>
  )
}

export default Answers