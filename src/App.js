import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Form from './Components/Form';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  isContactPresent = newContact => {
    const normalizedNewContact = newContact.name.toLowerCase();
    const nameSearch = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedNewContact),
    );
    nameSearch.length === 0
      ? this.addContact(newContact)
      : alert(`${newContact.name} is already in contacts`);
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.isContactPresent} />
        <div className="wrapper">
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          {contacts.length > 0 ? (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
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
  filter: PropTypes.string,
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string,
};

export default App;
