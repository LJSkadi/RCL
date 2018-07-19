import React, { Component } from 'react';
import './App.css';
import {
    Container, Col, Row,Form, Input, Button
} from 'reactstrap';



class NameInsert extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
        this.handleInput = this.handleInput.bind(this)
    }

handleInput(event){
    this.setState({
        name: event.target.value
    })
}

    render() {
        return (
            <Container className="text-center">
                {this.props.onNpm && <div>Under which name is the module or component published on NPM?</div>}
                {!this.props.onNpm && <div>What is the name of the module or component?</div>}
                <Form row className="d-flex justify-content-center" outline color="primary" onSubmit={(e) => this.props.handleInput(this.state.name, e)}>
                <Col sm={10}>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        style={{
                            backgroundColor: '#3b3b3b',
                            color: 'white',
                        }}
                        onChange={this.handleInput}
                    />
               <Button style={{margin: '20px 20px 20px 20px'}} type="submit" >Submit Name</Button>
                </Col>
                </Form>
            </Container>
        )
    }
}

export default NameInsert;