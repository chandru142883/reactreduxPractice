import React,{Form} from 'react';
import {connect} from 'react-redux'
 class Contact extends React.Component{

    onSubmit = () => {
        this.props.history.push('/Profiles')
      }
      render() {
        return (
          <form>
            <input placeholder="name" type="name" />
            <input placeholder="email" type="email" />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        )
      }
}
export default connect()(Contact);