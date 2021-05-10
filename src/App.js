import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import PhonebookView from './Views/PhonebookView';

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
