import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

class ComponentList extends Component {

    render() {
        let displayedComponents = this.props.components;
        console.log("This is displayedComponents", displayedComponents);
        return(
            <Table dark striped hover style = {{ margin: '20px auto', opacity: 0.9, maxWidth: 400}}>
            <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                <tbody>
                    {displayedComponents.map((component, i) => {
                        return(
                            <tr>
                                    <td key={i}><Link style = {{ color: '#00d8ff'}} to={`/comp/${component._id}`} prevHost={this.props.prevHost} id={component._id}>{component.name}</Link>
                                    <img className="member-avatar" src={component._owner.pictureUrl} alt={`${component._owner.name}`}/>
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


