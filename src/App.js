import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.scss';
import contactsOperations from './redux/contacts/contacts-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <h1 className="app-title">Phonebook</h1>

        <ContactForm />

        <h2 className="section-title">Contacts</h2>

        <Filter />

        <ContactList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

App.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
