import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook';
import { Col, Row } from 'react-bootstrap';

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = useCallback(
    () => dispatch(phonebookOperations.addContact(name, number)),
    [dispatch, name, number],
  );

  const submitHandler = e => {
    e.preventDefault();

    onSubmit();
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className="form-phone mx-auto mt-2" onSubmit={submitHandler}>
      <Row>
        <Col>
          <label className="label">
            Name
            <input
              className="form-control"
              placeholder="Mango"
              autoComplete="off"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={name}
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleInputChange}
            />
          </label>
        </Col>
        <Col>
          <label className="label">
            Number
            <input
              className="form-control"
              placeholder="1 111 111 11 11"
              autoComplete="off"
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              value={number}
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={handleInputChange}
            />
          </label>
        </Col>
      </Row>

      <button className="btn btn-primary d-block mx-auto" type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
