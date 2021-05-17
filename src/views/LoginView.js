import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h1 className="visually-hidden">Login Page</h1>
        <form
          className="form mx-auto mt-5"
          onSubmit={this.handleSubmit}
          style={styles.form}
        >
          <h2 className="h3 text-center d-block mb-4">Sign in</h2>
          <label className="label mx-auto" style={styles.label}>
            Email
            <input
              className="form-control mt4"
              type="email"
              name="email"
              value={email}
              placeholder="Example@email.com"
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus="on"
            />
          </label>
          <label className="label mx-auto py2" style={styles.label}>
            Password
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary d-block mt-4 mx-auto"
          >
            Log in
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
