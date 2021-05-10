import React, { Component } from 'react';

const styles = {
  form: {
    width: 320,
    outline: 'none',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

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
        <h1>Register Page</h1>
        <form className="form" onSubmit={this.handleSubmit} style={styles.form}>
          <label className="label" style={styles.label}>
            Name{' '}
            <input
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className="label" style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className="label" style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </>
    );
  }
}

export default RegisterView;
