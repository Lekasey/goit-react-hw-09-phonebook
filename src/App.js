import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              exact
              path="/register"
              component={RegisterView}
              restricted
              redirectTo="/phonebook"
            />
            <PublicRoute
              exact
              path="/login"
              component={LoginView}
              restricted
              redirectTo="/phonebook"
            />
            <PrivateRoute
              exact
              path="/phonebook"
              component={PhonebookView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
