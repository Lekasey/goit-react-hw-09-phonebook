import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  submitHandler = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <label className="label">
          Name
          <input
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleInputChange}
          />
        </label>
        <label className="label">
          Number
          <input
            className="input"
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            value={number}
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={this.handleInputChange}
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(phonebookActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
