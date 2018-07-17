import React from 'react';
import api from '../api';
import ComponentList from './ComponentList';

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
            <ComponentList components = {this.state.components}/>
            </div>
    );
  }
}

export default HostList