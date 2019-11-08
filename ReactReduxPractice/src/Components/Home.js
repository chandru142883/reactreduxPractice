import React from 'react';
import ConversionrateWithReactRedux from '../Components/ConversionrateWithReactRedux'
import { connect } from 'react-redux';
import ViewLinks from './ViewLinks';
import ViewLinksThunk from './ViewLinksThunk'
 class Home extends React.Component
{
    constructor(props){
        super(props);
        this.state={counter:0}
    }

    

    handleClick=()=>{
        this.setState({counter:this.state.counter+1});
    }
    render(){
        return(<div><h1>Home Page</h1>
        {/* <ConversionRate rate={store.getState().rate}/> */}
        {/* <ConversionrateWithReactRedux rate={this.props.rate}/> */}
        <input type="text" value={this.state.counter}></input>
        <button onClick={this.handleClick}>Button CLick Count</button>
        {/* <ViewLinks/> */}
        <ViewLinksThunk/>
        </div>)
    }
}


export default connect(function(state,props){
    console.log('state', state);
    console.log('props', props);
    return{
        rate:state.rate
    }
})(Home)