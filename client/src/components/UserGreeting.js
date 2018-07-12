import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import api from '../api';

class UserGreeting extends Component{
    constructor(props) {
      super(props)
      this.state = {
        signed : true
      }
    }

      render(){
        const signed = this.props.signed;
        {if(signed===true){
            return
            {!api.isLoggedIn() && <Login className="d-flex justify-content-center" />}
        }else{
            return
            {!api.isLoggedIn() && <Signup className="d-flex justify-content-center"/>}
        }}
   }
}


export default UserGreeting;
