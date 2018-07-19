import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import api from '../api';
import {
    Col, Card, CardText, CardBody,
    CardHeader, CardFooter, CardLink,
    InputGroup, InputGroupAddon, InputGroupText, Input, Button
} from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(stateFieldName, event) {
        let newState = {}
        newState[stateFieldName] = event.target.value
        this.setState(newState)
    }

    handleClick(e) {
        e.preventDefault()
        console.log(this.state)
        api.login(this.state.email, this.state.password)
            .then(result => {
                console.log('SUCCESS!')
                this.props.history.push("/")  // Redirect to the home page
            })
            .catch(err => {
                console.log('ERROR', err)
            })
    }

    render() {
        return (
            <Col className="d-flex justify-content-center">
                <Card className="Card" style={{ width: '20rem' }} >
                    <CardHeader className="CardHeader" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>Login</CardHeader>
                    <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
                        <CardText className="text-center">
                            <Form outline color="primary">
                                <FormGroup row className="d-flex justify-content-center">
                                    <Label for="email" sm={10}>Email</Label>
                                    <Col sm={10}>
                                        <Input
                                            type="text"
                                            name="email"
                                            style={{ backgroundColor: '#3b3b3b', color: 'white' }}
                                            value={this.state.email}
                                            onChange={(e) => { this.handleInputChange("email", e) }} />
                                    </Col>
                                </FormGroup>
                                <br />
                                <FormGroup row className="d-flex justify-content-center">
                                    <Label for="password" sm={10}>Password</Label>
                                    <Col sm={10}>
                                        <Input valid
                                            type="password"
                                            name="password"
                                            style={{ backgroundColor: '#3b3b3b', color: 'white' }}
                                            value={this.state.password}
                                            onChange={(e) => { this.handleInputChange("password", e) }} />
                                    </Col>
                                </FormGroup>
                                <br />
                                <Button onClick={this.handleClick}>Login</Button>
                            </Form>
                        </CardText>
                    </CardBody>
                    <CardFooter
                        className="CardFooter text-primary"
                        style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>You don't have an account?<br />
                        <CardLink href="/signup" >Sign up!</CardLink>
                    </CardFooter>
                </Card>
            </Col>
        );
    };
}
export default Login;