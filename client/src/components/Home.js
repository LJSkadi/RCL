import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';
import api from '../api';

class Home extends Component {

  render() {                
    return (
      <div className="Home">
          {!api.isLoggedIn() && <Login className="d-flex justify-content-center" />}
          {api.isLoggedIn() && <Welcome className="d-flex justify-content-center" />}
      </div>
    );
  }
}

export default Home;
