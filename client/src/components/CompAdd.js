import React, { Component } from 'react';
import NameInsert from './NameInsert';
import api from '../api';

import { Col, Form, Button, Label } from 'reactstrap';

class CompAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onNpm: false,
            iteration: 0,
            name: "",
            repo: "",
            npmLink: "",
            hashtags: [],
            tutorial: [],
            description: [],
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleInput(stateFieldName, event) {
        let newState = {}
        let prevIteration = this.state.iteration;
        this.setState({
            [stateFieldName] : event.target.value,
            iteration : (prevIteration + 1)
        })
    }

    handleBtnClick(stateFieldName, event) {
        let newState = {}
        newState[stateFieldName] = event.target.value
        this.setState(newState)
    }

    handleNameInput(stateFieldName, event) {
        let newState = {}
        newState[stateFieldName] = event.target.value
        this.setState(newState)
        if(this.state.onNpm===true){
        api.npmInfo(this.state.name)
        .then(res => {
          console.log("The response is", res);
          console.log("The npmInfo is", res.npmInfo);
          let startUrl = res.npmInfo.url.indexOf('h')
          let repoURL = res.npmInfo.url.substring(startUrl)
          this.setState({
                name: res.npmInfo.name,
                description: res.npmInfo.description,
                hashtags: res.npmInfo.hashtags,
                repo: repoURL
        })
        })
    }
    }

    handleClick(e) {
        e.preventDefault()
        api.login(this.state.email, this.state.password)
            .then(result => {
                console.log('SUCCESS!')
                this.props.history.push("/") // Redirect to the home page
            })
            .catch(err => {
                console.log('ERROR')
            })
    }

    render() {
        return (
            <Col className="d-flex justify-content-center">
                <Form>
                <Label for="onNPM" sm={2}>Is your module or component already an NPM?</Label>
                <Button color="success" name="onNpm" value="true" onClick={this.handleBtnClick}>Yes</Button>{' '}
                <Button color="danger" name="onNpm" value="false" onClick={this.handleBtnClick}>No</Button>

                {(this.state.iteration === 1) && <NameInsert onNpm ={this.state.onNpm} handleName = {this.handleNameInput}/>}
                </Form>
            </Col>
            );
        }
    }
            
            
export default CompAdd;
