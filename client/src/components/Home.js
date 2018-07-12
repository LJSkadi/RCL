import React, { Component } from 'react';
import UserGreeting from './UserGreeting';

class Home extends Component {
   constructor(props) {
     super(props)
     this.state = {
       signuped : true
     }
   }

  render() {                
    return (
      <div className="Home">
        <h2>Welcome Developer!</h2>
          <UserGreeting signed={this.props.signuped} />
      </div>
    );
  }
}

export default Home;
