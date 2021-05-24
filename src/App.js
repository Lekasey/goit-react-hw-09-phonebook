import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute
            exact
            path="/register"
            restricted
            redirectTo="/phonebook"
          >
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted redirectTo="/phonebook">
            <LoginView />
          </PublicRoute>
          <PrivateRoute exact path="/phonebook" redirectTo="/login">
            <PhonebookView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
