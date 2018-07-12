import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

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
            (
            <div>
            <h3>Please login</h3>
            <Login />
            <p>You don't have an account?</p>
            <p>Create one</p>
            <button>Sign up</button>
            </div>
            )
        }else{
            return(
            <div>
            <Signup />
            </div>
            )

        }}
   }
}


export default UserGreeting;
