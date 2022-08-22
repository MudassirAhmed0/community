import React, { useState, useEffect } from 'react'
import Question from './Question'
import { SearchInput } from 'app/components/common/SearchInput';
import css from './CommunityList.module.scss';
import {simplifyPaginatedResult} from "@tribeplatform/react-sdk/utils";
import {useFeed, useSpaces } from "@tribeplatform/react-sdk/hooks";
import {TribeClient} from "@tribeplatform/gql-client"

type Props = {}

const Questions = (props: Props) => {
    const [searchQuery, setSearchQuery] = useState(null);
    var questions = []
    const handleSearchChanged = (searchQueryValue: string) => {
      setSearchQuery(searchQueryValue);
    };

    // const client = new TribeClient({
    //   graphqlUrl: 'https://app.tribe.so/graphql',
    //   accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFQUDo6cnFnaFQ1WmZNajRlIiwibmV0d29ya0lkIjoiRmtNS3F4ZTRMdCIsInRva2VuVHlwZSI6IkxJTUlURUQiLCJlbnRpdHlJZCI6IkZrTUtxeGU0THQiLCJwZXJtaXNzaW9uQ29udGV4dCI6Ik5FVFdPUksiLCJwZXJtaXNzaW9ucyI6WyIqIl0sImlhdCI6MTY2MTE2ODc4MCwiZXhwIjoxNjYzNzYwNzgwfQ.anvoIkNLNs92QCX_73vGgoHA2YcMOuBBqvLWYuQUfHg',
    // })
    // client.posts.list({ limit: 5 }, "basic").then(spaces => {
    //   console.log('List of 5 posts:', spaces)
    // })

    // Fetching All Posts (Questions)
    const {data: posts } = useFeed({
      fields: {
        owner: { member: 'all' },
        reactions: { variables: { limit: 5 }, fields: 'basic' },
      },
      variables: {
          limit: 10,
      }
    })
    const {nodes: latestPosts} = simplifyPaginatedResult(posts)
    questions = latestPosts

    
    
    // Fetching All Spaces (Collections)
    const { data: spaces } = useSpaces({ fields: { image: 'basic' } })
    const {nodes: latestSpaces} = simplifyPaginatedResult(spaces)


    // console.log(questions)


  return (
    <div className={css.QuestionsContainer}>
        {/* Filter */}
        <div className={css.search}>
          <SearchInput placeholder='Search previous posts' onChange={(query)=> handleSearchChanged(query)}  />
        </div>
        {/* Question */}
        <div className={css.Questions}>
          {
            questions?.map((item:any) => <Question key={item.id} data={item} /> )
          }
        </div>
    </div>
  )
}

export default Questions