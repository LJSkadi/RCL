import React, { Component } from 'react';
import api from '../api';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import './App.css';
import {
  Col
} from 'reactstrap';

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toEdit: false,
      name: "",
      email: "",
      pictureUrl: "",
      github: "",
    }
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  componentDidMount() {
    api.getUser()
      .then(res => {
        console.log(res)
        this.setState({
          toEdit: false,
          name: res.user.name,
          email: res.user.email,
          pictureUrl: res.user.pictureUrl,
          github: res.user.github,
        })
      })
      .catch(err => console.log(err))
  }

  handleEditClick(event) {
            this.setState({
                toEdit: !this.state.toEdit
            })

}

handleSaveClick(stateFieldValues, event) {
  console.log("Arrived in the handleSaveClick", stateFieldValues)
  event.preventDefault();
  let newState = {
      name: stateFieldValues.name,
      github: stateFieldValues.github,
      pictureUrl: stateFieldValues.file
  }
  this.setState(newState)
  console.log("pictureUrl",this.state.pictureUrl)
  let data = {
      "name": this.state.name,
      "github": this.state.github,
      "picture": stateFieldValues.file
  }
  console.log("data ",data)
    api.editUser(data)
        .then(editedUser => {
          console.log("This is editedUser", editedUser)
                this.setState({
                toEdit: false,

            })
            this.props.history.push("/")  // Redirect to the home page
        })
        .catch(err => console.log(err))
        console.log(this.state)
}

handlehandleEditClick(){
  this.setState({
    toEdit: true,

})
}

  render() {
    return (
       <div>
        <h2 className="welcome">Welcome Developer!</h2>
        <Col className="d-flex justify-content-center">
            {!this.state.toEdit && 
            <Profile 
            name={this.state.name} 
            email={this.state.email} 
            github={this.state.github} 
            pictureUrl={this.state.pictureUrl} 
            toEdit={this.state.toEdit}
            handleClick={this.handleEditClick}/>}
            {this.state.toEdit && 
            <ProfileEdit 
            name={this.state.name} 
            email={this.state.email} 
            github={this.state.github}
            pictureUrl={this.state.pictureUrl} 
            toEdit={this.state.toEdit}
            handleSubmit={this.handleSaveClick}/>}
      </Col>
      </div>
    );
  }
}

export default Welcome;


