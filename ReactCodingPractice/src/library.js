import React from 'react'
import ReactDOM from 'react-dom';
class TestFunction extends React.Component{

    handClick(){
        console.log("click call");
    };

    render(){
        console.log("render call");
        return(
            
            <div><button onClick={this.handClick}>Submit</button></div>
        )
    };
}


class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={count:0}
    }

    inCount=()=>{
        this.setState({count:this.state.count+1});
        var value=this.state.count;
        console.log("value inccount: "+value);

    }

    componentWillMount(){
        var value=this.state.count;
        console.log("value : "+value);
    }

    render(){
        return(
            <div><button onClick={this.inCount}> Count++</button></div>
        );
    }
}

Counter.defaultProps={count:-1}

 class GrandChild extends React.Component {

  componentDidMount() {
    console.log('GrandChild did mount.');
  }

  value() {
    return ReactDOM.findDOMNode(this.refs.input).value;
  }

  render() {
    return (
      <div>
        GrandChild
        <input ref="input" type="text" defaultValue="foo" />
      </div>
    );
  }
}

class Child extends React.Component {

  componentDidMount() {
    console.log('Child did mount.');
  }

  value() {
    return this.refs.grandChild.value();
  }

  render() {
    return (
      <div>
        Child
        <GrandChild ref="grandChild" />
      </div>
    );
  }
}

 class Parent extends React.Component {

  componentDidMount() {
    console.log('Parent did mount.');
    console.log('Child value:', this.refs.child.value());
  }

  render() {
    return (
      <div>
        Parent
        <Child ref="child" />
      </div>
    );
  }
}

export {TestFunction, Counter, Parent}