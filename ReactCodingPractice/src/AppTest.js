/*
This example is to check how this keyword matter:

The variable userData declared outside of class means, this keyword can not access it as this keyword is always referrs to instance of class.

render log userName in console as undefined. If this removed, will log object in the console.

*/

import React from 'react';
import Parent from './parent';
import StateExample from './StateExample'
var userData={name:'test',id:1};
export default class AppTest extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=({userData:{}});
    }

    render(){
        var userName=this.userData;
        console.log("user name :"+userName);
        return (
        <div>
           <Parent/> 
           <StateExample/>

        </div>);
            }
}