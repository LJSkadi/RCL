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
            onNpm: false,
            nextIsName: false,
            nextInfo: false,
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
        this.handleNameBtnClick = this.handleNameBtnClick.bind(this)
        this.handleNameInput = this.handleNameInput.bind(this)
        this.handleInfoSubmit = this.handleInfoSubmit.bind(this)
    }

    handleInput(stateFieldName, event) {
        this.setState({
            [stateFieldName]: event.target.value,
        })
    }

    handleNameBtnClick(stateFieldName, event) {
        console.log(event)
        this.setState({
            [stateFieldName]: event.target.value,
            nextIsName: !this.state.nextIsName
        })
    }

    handleNameInput(newName, event) {
        event.preventDefault();
        if (this.state.onNpm) {
            console.log("I'm here", newName)
            api.npmInfo(newName)
                .then(res => {
                    if (res.npmInfo !== undefined) {
                        console.log("The npmInfo is", res.npmInfo);
                        let startUrl = res.npmInfo.url.indexOf('h')
                        let repoURL = res.npmInfo.url.substring(startUrl)
                        this.setState({
                            name: res.npmInfo.name,
                            description: res.npmInfo.description,
                            hashtags: res.npmInfo.hashtags,
                            repo: repoURL,
                            license: res.npmInfo.license,
                            npmLink: `https://npmjs.com/package/${res.npmInfo.name}`
                        })
                        console.log("This is state", this.state);
                        this.setState({
                            nextInfo: true
                        })
                    } else {
                        this.setState({
                            onNpm: false,
                            nextInfo: true,
                            message: "Couldn't find your module on NPM"
                        })
                    }
                })
                .catch(err => console.log(err))
        }
    }

    handleInfoSubmit(stateFieldValues, event) {
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
        api.addComponent(data)
            .then(createdComponent => {
                console.log("This is newComponent.id", createdComponent._id)
                this.props.history.push(`/host`)
            })
            .catch(err => console.log(err))
        console.log(this.state)
    }

    render() {
        return (
            <div className="flex-column">
                <Col className="d-flex justify-content-center">
                    <Card className="Card" style={{ width: '20rem' }} >
                        <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>
                            <div>Is your module or component already an NPM?</div>
                            <div><Button color="success" value={true} onClick={(e) => { this.handleNameBtnClick("onNpm", e) }}>Yes</Button>{' '}
                                <Button color="danger" value={false} onClick={(e) => { this.handleNameBtnClick("onNpm", e) }}>No</Button>
                            </div>
                        </CardHeader>
                        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
                            <CardText className="text-center" style={{ padding: '10px 10px 10px 10px' }}>
                                <div className="AddBullet">
                                    {(this.state.nextIsName) && <NameInsert onNpm={this.state.onNpm} handleInput={this.handleNameInput} />}
                                </div>
                                {(this.state.nextInfo) && <div className="AddBullet">
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
                                </div>}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}


export default CompAdd;
