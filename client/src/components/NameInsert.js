import React, { Component } from 'react';
import {
    Container, Col, Form, FormGroup, Label, Input, Button
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
            <Container>
                {this.props.onNpm && <div>Under which name is the module or component published on NPM?</div>}
                {!this.props.onNpm && <div>What is the name of the module or component?</div>}
                <Col sm={10}>
                <Form outline color="primary" style={{margin: '10px 0 10px 0'}} onSubmit={(e) => this.props.handleInput(this.state.name, e)}>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Components Name"
                        style={{
                            backgroundColor: '#3b3b3b',
                            color: 'white',
                            margin: '0 auto',
                            maxWidth: 800
                        }}
                        onChange={this.handleInput}
                    />
                <Button type="submit" >Submit Name</Button>
                </Form>
                </Col>
            </Container>
        )
    }
}

export default NameInsert;