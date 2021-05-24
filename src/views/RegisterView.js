import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () =>
    dispatch(authOperations.register({ name, email, password }));

  const handleSubmit = e => {
    e.preventDefault();

    onRegister();

    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
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
      <h1 className="visually-hidden">Register Page</h1>
      <form className="form mx-auto mt-4" onSubmit={handleSubmit}>
        <h2 className="h3 text-center d-block mb-4">Sign Up</h2>
        <label className="label">
          Name
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <button type="submit" className="btn btn-primary d-block mt-4 mx-auto">
          Registration
        </button>
      </form>
    </>
  );
}
