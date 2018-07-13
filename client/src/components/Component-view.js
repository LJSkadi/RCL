import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props)
        super(props)
        this.state = {
            name: "",
            githubRepo: "",
            npmLink: "",
            hashtags: [],
            tutorial: [],
            description: [],
            message: null
        }
    }

    componentDidMount() {
        api.getComponent()
          .then(component => {
            console.log(component)
            this.setState({
                name: component.name,
                githubRepo: component.githubRepo,
                npmLink: component.npmLink,
                hashtags: component.hashtags, //Array
                tutorial: component.tutorial,   //Array
                description: component.description, //Array
            })
          })
          .catch(err => console.log(err))
      }

  render() {
    return (
      <ListGroup>
      <h2>{this.props.name}</h2>
        <ListGroupItem>
            github-Repo: <a href={this.props.githubRepo}>{this.props.githubRepo}</a>
        </ListGroupItem>
        <ListGroupItem>
            npmLink: <a href={this.props.npmLink}>{this.props.npmLink}</a>
        </ListGroupItem>
        <ListGroupItem>
            Description: {this.props.description}
        </ListGroupItem>
        <ListGroupItem>
            Tutorial: {this.props.tutorial}
        </ListGroupItem>
        <ListGroupItem>
            Hashtags: {this.props.hashtags}
        </ListGroupItem>
        <Button 
      color="success" 
      onClick={(e) => this.handleClick(e)}>Edit</Button>{' '}
      <Button 
      color="danger"
      onClick={(e) => this.handleClick(e)}>Delete</Button>{' '}
      </ListGroup>
    );
  }
}