import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBarComp from './components/AppBar/AppBar';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsPage}
          />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
