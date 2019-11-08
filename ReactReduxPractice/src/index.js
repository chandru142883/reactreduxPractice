
// const routing = (   
//     <BrowserRouter>
//       <div>
//           <ul>
//               <li>
//                   <Link to="/">Home</Link>
//               </li>
//               <li>
//               <Link to="/Profiles">Profiles</Link>
//               </li>
//               <li>
//               <Link to="/Customers">Customers</Link>
//               </li>
//                 <li>
//                     <NavLink exact to="/" activeClassName="active">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/Profiles" activeClassName="active">Profiles</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/Customers" activeClassName="active">Customers</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
//                 </li>

//           </ul>
//           <switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/Profiles" component={Profiles} />
//         <Route path="/Customers" component={Customers} />
//         <Route path="/Contact" component={Contact} />
//         <Route component={Error} />
//         </switch>
//       </div>
//     </BrowserRouter>
// )
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import authReducer from './reducers/authReducer'
import errorReducer from './reducers/errorReducer'
import viewLinkReducer from './reducers/ViewLinkReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Route, Link,BrowserRouter, NavLink, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk'
import ViewLinkReducer from './reducers/ViewLinkReducer';
const reducer=combineReducers({
    authed:authReducer,
    errors:errorReducer,
    links:ViewLinkReducer
})

const store=createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
// serviceWorker.unregister();

