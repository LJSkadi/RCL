import React, { Component } from 'react';
import View from './Profile-view';
import Edit from './Profile-edit';
import Delete from './Profile-delete';
import api from '../api';

class Profile extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: "",
    //         email:"",
    //         github: "",
    //         pictureUrl: "",
    //         //password: "",
    //     }

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // componentDidMount() {
    //     api.getComponent()
    //       .then(component => {
    //         console.log(component)
    //         this.setState({
    //             name: component.name,
    //             githubRepo: component.githubRepo,
    //             npmLink: component.npmLink,
    //             hashtags: component.hashtags, //Array
    //             tutorial: component.tutorial,   //Array
    //             description: component.description, //Array
    //         })
    //       })
    //       .catch(err => console.log(err))
    //   }
  render() {                
    return (
      <div className="Profile">
          {api.isLoggedIn() && <View className="d-flex justify-content-center" />}
          {this.props.edit && <Edit className="d-flex justify-content-center" />}
          {this.props.delete && <Delete className="d-flex justify-content-center" />}
      </div>
    );
  }
}

export default Profile;