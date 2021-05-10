import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { phonebookOperations } from '../redux/phonebook';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getContacts, getIsLoading, getError } from '../redux/phonebook';
import { Alert } from 'react-bootstrap';

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, isLoading, error } = this.props;
    return (
      <div>
        {
          error && <Alert className="text-center bg-danger">{error}</Alert>

          // <div className="Notify">
          //   <h2 className="Notify__text">{error}</h2>
          // </div>
        }
        <h1 className="visually-hidden">Phonebook</h1>

        <Form />
        <div className="mx-auto mt-4">
          <h2 className="text-center">Contacts</h2>
          <div className="d-flex">
            {contacts.length > 0 && <Filter />}
            {isLoading && (
              <Loader type="Puff" color="#00BFFF" height={25} width={25} />
            )}
          </div>
          {contacts.length > 0 ? (
            <ContactList className="mx-auto" />
          ) : (
            <p className="d-block text-center">Here will be your contacts</p>
          )}
        </div>
      </div>
    );
  }
}
PhonebookView.defaultProps = {
  contacts: PropTypes.array,
};

PhonebookView.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
