import React, { Component } from 'react';
import NameInsert from './NameInsert';
import ShowInfo from './ShowInfo';
import api from '../api';
import './App.css';
import { Col, Card, CardHeader, CardBody, CardText, Button } from 'reactstrap';

class CompEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            repo: "",
            npmLink: "",
            docLink: "",
            hashtags: [],
            tutorial: "",
            description: [],
            license: "",
            message: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleEditSubmit = this.handleEditSubmit.bind(this)
    }

    componentDidMount() {
        let compId = this.props.match.params.id;
        api.getComponent(compId)
            .then(res => {
                this.setState({
                    toEdit: false,
                    id: compId,
                    name: res.component.name,
                    owner: res.component._owner,
                    repo: res.component.repo,
                    npmLink: res.component.npmLink,
                    hashtags: res.component.hashtags, //Array
                    tutorial: res.component.tutorial,   //Array
                    description: res.component.description, //Array
                    license: res.component.license,
                    image: res.component._owner.pictureUrl,
                })
    })
}

    handleInput(stateFieldName, event) {
        this.setState({
            [stateFieldName]: event.target.value,
        })
    }

    handleEditSubmit(stateFieldValues, event) {
        event.preventDefault();
        let newState = {
            name: stateFieldValues.name,
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
            .then(updatedComponent => {
                console.log("This is the updatedComponent.id", updatedComponent._id)
                this.props.history.push(`/comp/${updatedComponent._id}`)
            })
            .catch(err => console.log(err))
        console.log(this.state)
    }

    render() {
        return (
            <div className="flex-column">
                <Col className="d-flex justify-content-center">
                    <Card className="Card" style={{ width: '20rem' }} >
                        <CardHeader className="CardHeader welcome" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>
                            <div>{this.state.name}</div>
                        </CardHeader>
                        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
                            <CardText className="text-center" style={{ padding: '10px 10px 10px 10px' }}>
                                    <ShowInfo handleSubmit={(e) => this.handleEditSubmit(this.state, e)}
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
            
export default CompEdit;