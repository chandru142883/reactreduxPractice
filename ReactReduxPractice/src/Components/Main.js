import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import LogIn from './LogIn'
import DashBoard from './DashBoard'
import Contact from './Contact'
const Main = () => (
     <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/LogIn' component={LogIn}/>
    </Switch>
)

export default Main
