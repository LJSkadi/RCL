import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

class Profile extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: "",
    //         email:"",
    //         github: "",
    //         pictureUrl: "",
    //         //password: "",
    //     }

    //     this.handleClick = this.handleClick.bind(this);
    // }

    // componentDidMount() {
    //     api.getUser()
    //       .then(user => {
    //         console.log(user)
    //         this.setState({
    //             name: user.name,
    //             email:user.email,
    //             github: user.github,
    //             pictureUrl: user.pictureUrl
    //         })
    //       })
    //       .catch(err => console.log(err))
    //   }

    //   handleClick(e){
    //       let value = event.target.value
    //   }

  render() {
    return (
      <ListGroup>
      <h2>{this.props.name}</h2>
        <ListGroupItem>
            email: {this.props.email}
        </ListGroupItem>
        <ListGroupItem>
            github-Profile: <a href={this.props.github}>{this.props.github}</a>
        </ListGroupItem>
        <Button 
      color = "success" 
      value = "edit"
      onClick = {this.handleClick}>Edit my Profile</Button>{' '}
      <Button 
      color = "danger"
      value = "delete"
      onClick={this.handleClick}>Delete my Profile</Button>{' '}
      </ListGroup>
    );
  }
}

export default Profile;