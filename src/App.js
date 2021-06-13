import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import contactsOperations from './redux/contacts/contacts-operations';
import AppBarComp from './components/AppBar/AppBar';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  render() {
    return (
      <>
        <AppBarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          {/* <Route path="/contacts" component={ContactsPage} /> */}
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;
