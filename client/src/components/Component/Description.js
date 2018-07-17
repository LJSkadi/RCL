import React, { Component } from 'react';
import {
    InputGroup, InputGroupAddon, InputGroupText, Input, Button
  } from 'reactstrap';



class License extends Component {

    render() {
        return (
                    <FormGroup row>
                        <Label for="description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                style={{ backgroundColor: '#3b3b3b',
                                         color: 'white',
                                         margin: '0 auto',
                                         maxWidth: 800 }}
                                value={this.props.description}
                            />
                            <FormText color="muted">
                                Please tell us a little bit more about your react component.
                            </FormText>
                        </Col>
                        <Button onSubmit={(e) => { this.props.handleInput("description", e) }}>Submit</Button>
                    </FormGroup>
        )
    }
}

export default License;