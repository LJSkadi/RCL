import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Countries from './Countries';
import AddCountry from './AddCountry';
import Secret from './Secret';
import Login from './Login';
import Signup from './Signup';
import api from '../api';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
    api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {                
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to RCL</h1>
          <p className="App-Subtitle"> RCL is an open React Component Library</p>
          
          <Link to="/">Home</Link> 
          {!api.isLoggedIn() && <Link to="/signup">Signup</Link> }
          {!api.isLoggedIn() && <Link to="/login">Login</Link> }
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link> }
          {api.isLoggedIn() && <Link to="/search" onClick={(e) => this.handleLogoutClick(e)}>Search</Link> }
          {api.isLoggedIn() && <Link to="/host" onClick={(e) => this.handleLogoutClick(e)}>Hosted Components</Link> }
          {api.isLoggedIn() && <Link to="/bm" onClick={(e) => this.handleLogoutClick(e)}>Bookmarks</Link> }
          <Link to="/secret">Secret</Link> 
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/add-country" component={AddCountry} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>        
      </div>
    );
  }
}

export default App;
