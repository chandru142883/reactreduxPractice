import React, { Component } from 'react';

import Child from './child';

export default class Parent extends Component{

state={counter:0}

handleClick=()=>{
    this.setState({counter:this.state.counter+1});
}

  render(){
    return(
      <div>
          <input type="text" value={this.state.counter}/>
      <button onClick={this.handleClick}>click asdasd</button>
      <Child value={this.state.counter} />
      </div>
    )
  }
};