import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import FriendsList from './Components/FriendsList';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/friends' component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
