import React, { Component } from 'react';
import { createHashHistory } from 'history';
import { Route, Link, Switch } from 'react-router-dom';
import { Tooltip } from 'reactstrap';
import Home from './Home';
import Countries from './Countries';
import AddCountry from './AddCountry';
import CompDetail from './CompDetail';
import CompAdd from './CompAdd';
import Login from './Login';
import Signup from './Signup';
//import Profile from './Profile';
import Search from './Search';
import HostList from './HostList';
import BookmarkList from './BookmarkList';
import api from '../api';
import logo from '../logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, fas, far)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltipOpenHome: false,
      tooltipOpenSearch: false,
      tooltipOpenHost: false,
      tooltipOpenBM: false,
      tooltipOpenLogout: false,
    }
    api.loadUser();
    this.toggle = this.toggle.bind(this);
  }

  handleLogoutClick(e) {
    api.logout()
  }

  toggle(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = !this.state[stateFieldName]

    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to RCL</h1>
          <p className="App-Subtitle"> Open React Component Library</p>

          <Link to="/" style={{ margin: '15px 15px' }} id="homeIcon"><FontAwesomeIcon icon="home" /></Link> {' '}
          <Tooltip placement="bottom" isOpen={this.state.tooltipOpenHome} target="homeIcon" toggle={(e) => this.toggle("tooltipOpenHome", e) }>Home</Tooltip>
          {api.isLoggedIn() && <Link to="/search" style={{ margin: '15px 15px' }} id="searchIcon"><FontAwesomeIcon icon="search" /></Link>}{' '}
          {api.isLoggedIn() && <Tooltip placement="bottom" isOpen={this.state.tooltipOpenSearch} target="searchIcon" toggle={(e) => this.toggle("tooltipOpenSearch", e)}>Search</Tooltip>}
          {api.isLoggedIn() && <Link to="/host" style={{ margin: '15px 15px' }} id="bookIcon"><FontAwesomeIcon icon="book" /></Link>}{' '}
          {api.isLoggedIn() && <Tooltip placement="bottom" isOpen={this.state.tooltipOpenHost} target="bookIcon" toggle={(e) => this.toggle("tooltipOpenHost", e)}>My Components</Tooltip>}
          {api.isLoggedIn() && <Link to="/bm" style={{ margin: '15px 15px' }} id="bookmarkIcon"><FontAwesomeIcon icon="bookmark" /></Link>}{' '}
          {api.isLoggedIn() && <Tooltip placement="bottom" isOpen={this.state.tooltipOpenBM} target="bookmarkIcon" toggle={(e) => this.toggle("tooltipOpenBM", e)}>My Bookmarks</Tooltip>}
          {api.isLoggedIn() && <Link to="/" style={{ margin: '15px 15px' }} id="signoutaltIcon" onClick={(e) => this.handleLogoutClick(e)}><FontAwesomeIcon icon="sign-out-alt" /></Link>}{' '}
          {api.isLoggedIn() && <Tooltip placement="bottom" isOpen={this.state.tooltipOpenLogout} target="signoutaltIcon" toggle={(e) => this.toggle("tooltipOpenLogout", e)}>Logout</Tooltip>}
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/search" component={Search} />
          <Route path="/host" component={HostList} />
          <Route path="/comp/add" component={CompAdd} />
          <Route path="/comp/:id" component={CompDetail} />
          <Route path="/bm" component={BookmarkList} />
          <Route path="/countries" component={Countries} />
          <Route path="/add-country" component={AddCountry} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}
export const history = createHashHistory();
export default App;

//<Route path="/profile" component={Profile} />