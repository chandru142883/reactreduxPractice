import React, {Component} from 'react';
import { strict } from 'assert';
 class Header extends Component{
    
    render(){
        return <h1> {this.props.title}</h1>;
    }

}

class Welcome extends Component{
    render(){
        return (<h1>Welcome, {this.props.name}</h1>)
    }
}

function ConditionalRendering (props)
{
    const isNameNotNull=props.name!='';
    return(
        <div>
      {isNameNotNull && <h1>Welcome to Platform: {props.name}</h1>}</div>
        
    );
}

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }

export {Header, Welcome, ConditionalRendering, WarningBanner};