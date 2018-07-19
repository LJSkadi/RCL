import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

class ComponentList extends Component {

    render() {
        let pathBeginning = this.props.pathBeginning ? this.props.pathBeginning : "/comp";
        let displayedComponents = this.props.components;
        console.log("This is displayedComponents", displayedComponents);
        return(
            <Table dark striped hover style = {{ margin: '0px auto', opacity: 0.9, maxWidth: 400}}>
            <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                <tbody>
                    {displayedComponents.map((component, i) => {
                        return(
                            <tr>
                                    <td key={i} className="text-left">
                                    <img className="member-avatar" src={component._owner.pictureUrl} alt={`${component._owner.name}`}/>{' '}
                                    <Link style = {{ color: '#00d8ff'}} to={`${pathBeginning}/${component._id}`} id={component._id}> {component.name} </Link>
                                    
                                    </td>
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