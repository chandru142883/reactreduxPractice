import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link,BrowserRouter, NavLink, Switch } from 'react-router-dom';
import Home from './Components/Home'
import Profiles from './Components/Profiles'
import Customers from './Components/Customers'
import Error from './Components/Error'
import Contact from './Components/Contact'
import ConversionrateWithReactRedux from './Components/ConversionrateWithReactRedux'
import { connect } from 'react-redux';
import LogIn from './Components/LogIn'
import DashBoard from './Components/DashBoard'
import Header from './Components/Header'
import Main from './Components/Main'
class App extends React.Component{


  render(){
    return(
      <div className='App'>
        <Header/>
        <Main/>
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authed: state.authed
})

export default connect(mapStateToProps)(App);