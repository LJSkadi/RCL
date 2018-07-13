import React, { Component } from 'react';
import Search from './Search';
import api from '../api';

class Welcome extends Component {

  render() {                
    return (
      <div>
        <h2>Welcome Developer!</h2>

        <p>If you want to search for a component, go <a href="/search">here</a></p>
      </div>
    );
  }
}

export default Welcome;
