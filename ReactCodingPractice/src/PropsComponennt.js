/* 
This is to understand props flow.
The control displayed in the order mentioned. The result is as below.

The conditional rendering will display the value if not empty

Hello
Hello : {name passed}

*/
import React from 'react';

class Hello extends React.Component{
    render(){
        return(<div>Hello</div>);
    }
}

class HelloWorld extends React.Component
{
    render(){
        var name=this.props.name!='';
        return(
            <div><Hello></Hello>
            {name && <div>Hello : {this.props.name}</div>}

            </div>
        );
    }
}

export default HelloWorld;