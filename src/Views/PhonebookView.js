import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import Form from '../Components/Form';
import { connect } from 'react-redux';
import { phonebookOperations } from '../redux/phonebook';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getContacts, getIsLoading, getError } from '../redux/phonebook';

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, isLoading } = this.props;
    return (
      <div>
        {/* {error && (
          <div className="Notify">
            <h2 className="Notify__text">{error}</h2>
          </div>
        )} */}
        <h1>Phonebook</h1>

        <Form />
        <div className="wrapper">
          <h2>Contacts</h2>
          <div className="flexbox">
            <Filter />
            {isLoading && (
              <Loader type="Puff" color="#00BFFF" height={25} width={25} />
            )}
          </div>
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <p className="noContacts">No contacts added yet</p>
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
