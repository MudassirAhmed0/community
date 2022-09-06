import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CommunityList from './components/list';
import CommunityDetail from './components/detail';

type Props = {}

const Community = (props: Props) => {
  return (
    <Switch>
      <Route path='/community' exact>
        <CommunityList />
      </Route>
      <Route path='/community/:id'>
        <CommunityDetail />
      </Route>
    </Switch>
  )
}

export default Community

 

 
