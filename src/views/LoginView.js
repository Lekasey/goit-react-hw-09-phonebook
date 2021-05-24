import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h1 className="visually-hidden">Login Page</h1>
      <form className="form mx-auto mt-5" onSubmit={handleSubmit}>
        <h2 className="h3 text-center d-block mb-4">Sign in</h2>
        <label className="label mx-auto">
          Email
          <input
            className="form-control mt4"
            type="email"
            name="email"
            value={email}
            placeholder="Example@email.com"
            onChange={handleChange}
            autoComplete="off"
            autoFocus="on"
          />
        </label>
        <label className="label mx-auto py2">
          Password
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <button type="submit" className="btn btn-primary d-block mt-4 mx-auto">
          Log in
        </button>
      </form>
    </>
  );
}
