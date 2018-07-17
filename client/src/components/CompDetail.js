import React from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

class CompDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            githubRepo: "",
            npmLink: "",
            hashtags: [], //Array
            tutorial: [],   //Array
            description: [], //Array
        }
    }

    

    componentDidMount() {
        console.log("Comp didmount", this.props.match.params.id)
        api.getComponent(this.props.match.params.id)
          .then(res => {
            console.log(res)
            this.setState({
                name: res.component.name,
                githubRepo: res.component.githubRepo,
                npmLink: res.component.npmLink,
                hashtags: res.component.hashtags, //Array
                tutorial: res.component.tutorial,   //Array
                description: res.component.description, //Array
            })
          })
          .catch(err => console.log(err))
      }

  render() {
    console.log(this.props)
    return (
        
      <ListGroup>
      <h2>{this.props.name}</h2>
        <ListGroupItem>
            github-Repo: <Link to={this.state.githubRepo}>{this.state.githubRepo}</Link>
        </ListGroupItem>
        <ListGroupItem>
            npmLink: <a target="_blank" to={this.state.npma}>{this.state.npmLink}</a>
        </ListGroupItem>
        <ListGroupItem>
            Description: {this.state.description}
        </ListGroupItem>
        <ListGroupItem>
            Tutorial: {this.state.tutorial}
        </ListGroupItem>
        <ListGroupItem>
            Hashtags: {this.state.hashtags}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default CompDetail;


        {/* <Button 
      color="success" 
      onClick={(e) => this.handleClick(e)}>Edit</Button>{' '}
      <Button 
      color="danger"
      onClick={(e) => this.handleClick(e)}>Delete</Button>{' '} */}