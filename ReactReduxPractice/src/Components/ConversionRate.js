
import React from 'react';
import store from '../store/configureStore'
export default class ConversionRate extends React.Component{

    constructor(props){
        super(props);
        this.state={rate:0}
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange=(e)=>{
        var rate=e.target.value;
        //this.setState({rate:rate})
        store.dispatch({type:'rate',data:{rate:rate}})
    }

    render(){

    return(
    
    <div>
        <input type='text' value={this.props.rate} onChange={this.handleChange}/>
        <h1>{this.props.rate}</h1>
    </div>
    )
    }
}