import React, { Component } from 'react';
import NameInsert from './NameInsert';
import ShowInfo from './ShowInfo';
import api from '../api';
import './App.css';
import { Col, Card, CardHeader, CardBody, CardText, Button } from 'reactstrap';

class CompAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            repo: "",
            npmLink: "",
            docLink: "",
            hashtags: [],
            tutorial: "",
            description: ["Please tell us a little bit more about your react component."],
            license: "",
            message: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleInfoSubmit = this.handleInfoSubmit.bind(this)
    }

    handleInput(stateFieldName, event) {
        this.setState({
            [stateFieldName]: event.target.value,
        })
    }

    handleInfoSubmit(stateFieldValues, event) {
        event.preventDefault();
        let newState = {
            name: this.state.name,
            repo: stateFieldValues.repo,
            npmLink: stateFieldValues.npmLink,
            docLink: stateFieldValues.docLink,
            hashtags: stateFieldValues.hashtags,
            tutorial: stateFieldValues.tutorial,
            description: stateFieldValues.description,
            license: stateFieldValues.license,
        }
        this.setState(newState)
        let data = {
            "name": this.state.name,
            "repo": this.state.repo,
            "npmLink": this.state.npmLink,
            "docLink": this.state.docLink,
            "hashtags": this.state.hashtags,
            "tutorial": this.state.tutorial,
            "description": this.state.description,
            "license": this.state.license,
        }
        console.log(data)
        api.editComponent(data)
            .then(editedComponent => {
                console.log("This is editedComponent.id", editedComponent._id)
                this.props.history.push(`/comp/${editedComponent._id}`)
            })
            .catch(err => console.log(err))
        console.log(this.state)
    }

    render() {
        return (
            <div className="flex-column">
            Edit your React Component
                <Col className="d-flex justify-content-center">
                    <Card className="Card" style={{ width: '20rem' }} >
                        <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>
                            {this.state.name}
                        </CardHeader>
                        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
                            <CardText className="text-center" style={{ padding: '10px 10px 10px 10px' }}>
                                    <ShowInfo
                                        name={this.state.name}
                                        repo={this.state.repo}
                                        npmLink={this.state.npmLink}
                                        docLink={this.state.docLink}
                                        hashtags={this.state.hashtags}
                                        tutorial={this.state.tutorial}
                                        description={this.state.description}
                                        license={this.state.license}
                                        handleSubmit={this.handleInfoSubmit} />
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}

            
export default ComponentEdit;