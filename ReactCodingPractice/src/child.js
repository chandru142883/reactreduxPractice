import React, { Component } from 'react';

import child from './child';

export default class App extends Component{

state={counter:0}

  render(){
    return(
      <div>
      <button onClick={this.handleClick}>click</button>
      <child value={this.state.counter} />
      </div>
    )
  }
};