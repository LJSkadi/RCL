import React from 'react';
import api from '../api';
import ComponentList from './ComponentList';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class HostList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        components: []
};
}

componentDidMount() {
api.getHostList()
.then(hostList => {
  this.setState({
    components: hostList._components
  })
})
.catch(err => console.log(err))
}

  render() {
    return (
      <div>
            <h2>Hosted Components</h2>
            <ComponentList prevHost={true} components = {this.state.components}/>
            <Button outline color="primary"><Link to="/comp/add">ADD A COMPONENT</Link></Button>
      </div>
    );
  }
}

export default HostList