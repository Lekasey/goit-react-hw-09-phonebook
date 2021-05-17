import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({
      name: '',
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
    const { name, email, password } = this.state;

    return (
      <>
        <h1 className="visually-hidden">Register Page</h1>
        <form className="form mx-auto mt-4" onSubmit={this.handleSubmit}>
          <h2 className="h3 text-center d-block mb-4">Sign Up</h2>
          <label className="label">
            Name
            <input
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Mango"
              autoComplete="off"
              autoFocus="on"
            />
          </label>
          <label className="label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Example@email.com"
              autoComplete="off"
            />
          </label>
          <label className="label">
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
            Registration
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
