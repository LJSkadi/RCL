import React, { Component } from 'react';
import {
    InputGroup, Input
  } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    render() {
        return (
            <div
            style = {{
                            margin: '20px auto',
                        }}>
                <InputGroup>
                    <Input
                        placeholder = "search"
                        name = "searchTerm"
                        onChange = {this.props.onSearch}
                        style = {{
                            backgroundColor: '#3b3b3b', 
                            color: 'white',
                            margin: '0 auto',
                            maxWidth: 800
                        }} />
                   
                </InputGroup>
            </div>
        )
    }
}

export default SearchBar;