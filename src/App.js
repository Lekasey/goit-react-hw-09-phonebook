import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Form from './Components/Form';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <div className="wrapper">
          <h2>Contacts</h2>
          <Filter />
          {this.props.contacts.length > 0 ? (
            <ContactList />
          ) : (
            <p className="noContacts">No contacts added yet</p>
          )}
        </div>
      </div>
    );
  }
}
App.defaultProps = {
  contacts: PropTypes.array,
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({ contacts: state.phonebook.contacts });

export default connect(mapStateToProps)(App);
