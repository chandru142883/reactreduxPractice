import React from 'react';
import {Route, Link} from 'react-router-dom'
export default class Profiles extends React.Component
{
    render(){
        const Profile = ({ match }) => <p>{match.params.id}</p>
        const { url } = this.props.match
        return(<div>
            <h1>Profiles Page</h1>
            <h1>{url.id}</h1>
            <ul>
                <li >
                <Link to="/Profiles/1">Profiles 1 </Link>
                </li>
                <li >
                <Link to="/Profiles/2">Profiles 2 </Link>
                </li>
                <li >
                <Link to="/Profiles/3">Profiles 3 </Link>
                </li>
            </ul>
            <Route path="/Profiles/:id" Component={Profile}></Route>
        </div>)
    }
}