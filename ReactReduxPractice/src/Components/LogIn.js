import React, { Component } from 'react';

import { Link, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class LogIn extends React.Component{

    constructor(props){
        super(props)
        this.state={userName:'',password:''}
        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentWillMount(){
        this.props.dispatch({type:'NO_ERROR_RECEIVED'});
    }

    handleOnChange(e){


        this.setState({[e.target.name]:e.target.value})
        // this.props.dispatch({type:'formInput',data:})
    }

    handleSubmit(e){
        this.props.dispatch({type:'NO_ERROR_RECEIVED'});
        e.preventDefault();
        console.log('clicked');
        const userValue=this.getUsername.value;
        const pswdValue=this.getPassword.value;

        console.log('userValue',userValue);
        console.log('pswdValue',pswdValue);

        if(userValue==='aaauser'&&pswdValue==='Winter#1')
        {
            this.props.history.push('/');
        }
        else{
            this.props.dispatch({type:'ERROR_RECEIVED',message:'combination not matching'})
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input required type='text' ref={(input)=>this.getUsername=input} name='userName' onChange={this.handleOnChange} value={this.state.userName} placeholder='User Name' />
                    <input required type='text' ref={(input)=>this.getPassword=input} name='password' onChange={this.handleOnChange} value={this.state.password} placeholder='Password' />
                    <label>name: <input type='text' value=''/></label>
                    <button>Submit</button>
                    {this.props.errors?<p>Error Messages: {this.props.errors.message}</p>:''}
                </form>
            </div>

        );
    }
}

const mapStateToProps=(state)=>({errors:state.errors});

export default connect(mapStateToProps)(LogIn)