import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header,WarningBanner} from './Header';
import AppTest from './AppTest';
// import PropsCompo from './PropsComponennt';
import {TestFunction, Counter, Parent} from './library';
export default class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={Name:'', Desc:'', Country:'',showWarning: true};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handleCountryChange=this.handleCountryChange.bind(this);
    this.handleToggleClick=this.handleToggleClick.bind(this);
  }


  handleChange(e){
    this.setState({Name:e.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.Name);
    event.preventDefault();
  }

  handleTextChange(event)
  {
    this.setState({Desc:event.target.value});
  }

  handleCountryChange(event)
  {
    this.setState({Country:event.target.value});
  }


  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render(){
    return (
    <div>
      <Header/>
      <AppTest/>
      <TestFunction/>
      <Counter/>
      <Parent/>
    <h1>Name : {this.state.Name}</h1>
    <form onSubmit={this.handleSubmit}>
      <label>
        Name : 
        <input type="text"  value={this.state.Name} onChange={this.handleChange}/>
      </label>
      <textarea value={this.state.Desc} onChange={this.handleTextChange}/>

      <select value={this.state.Country} onChange={this.handleCountryChange}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <input type='submit' value="Submit"/>
      <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hidessssssssssss' : 'Showsssssssss'}
        </button>
    </form>
    </div>);
  }
}

