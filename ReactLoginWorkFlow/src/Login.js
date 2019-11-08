import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:"",
  password:""
  }
 }

 handleClick(event){
    var apiBaseUrl = "http://localhost:59461/Login";
    // var apiBaseUrl="http://localhost:59461/geteligible"
    var self = this;
    
    var payload={
    "userid":this.state.username,
    "password":this.state.password
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        
      }
    };
    
    axios.post(apiBaseUrl,  "{\"userid\":\"aaauser\",\"password\":\"gorill@17\"}",axiosConfig
  
  )
    // axios.get(apiBaseUrl)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    // var uploadScreen=[];
    // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    alert("Login successfull")
    }
    else if(response.data.code == 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;