import React from 'react';
import api from '../api';
import ComponentList from './ComponentList';

class BookmarkList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        components: []
};
}

componentDidMount() {
api.getBookmarkList()
.then(BookmarkList => {
  this.setState({
    components: BookmarkList._components
  })
})
.catch(err => console.log(err))
}

  render() {
    return (
      <div>
            <h2>My Bookmarks</h2>
            <ComponentList prevHost={false} components = {this.state.components}/>
            </div>
    );
  }
}

export default BookmarkList