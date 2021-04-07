import React, { Component } from 'react';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Form from './Components/Form';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
    console.log(idToDelete);
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
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          {contacts.length > 0 ? (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            'No contacts added yet'
          )}
        </div>
      </div>
    );
  }
}

export default App;
