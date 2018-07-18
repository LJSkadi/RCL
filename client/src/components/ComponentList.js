import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Table } from 'reactstrap';

class ComponentList extends Component {

    render() {
        let displayedComponents = this.props.components;
        console.log("This is displayedComponents", displayedComponents);
        return(
            <Table dark striped hover style = {{ margin: '20px auto', maxWidth: 800}}>
            <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                <tbody>
                    {displayedComponents.map((component, i) => {
                        return(
                            <tr>
                                    <th scope="row">{i+1}</th>
                                    <td key={i}><Link to={`/comp/${component._id}`} prevHost={this.props.prevHost} id={component._id}>{component.name}</Link></td>
                            </tr>
                        )
                    })
                    }
                 </tbody>
            </Table>
        )
    }
}

export default ComponentList;


