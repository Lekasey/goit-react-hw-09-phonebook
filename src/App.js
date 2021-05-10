import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PhonebookView from './views/PhonebookView';

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/phonebook" component={PhonebookView} />
        </Switch>
      </Container>
    );
  }
}

export default App;
