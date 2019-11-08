
import React from 'react';
export default class ConversionrateWithReactRedux extends React.Component{

    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange=(e)=>{
        var rate=e.target.value;
        //this.setState({rate:rate})
        console.log("test ",e.target.value);
        this.props.dispatch({type:'rate',data:{rate:e.target.value}})
    }

    render(){
        console.log('props ',this.props);

    return(
    <div>
        <input type='text' onChange={this.handleChange}/>
        <h1>{this.props.rate}</h1>
    </div>
    )
    }
}