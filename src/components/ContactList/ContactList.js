import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactListItem from '../ContactListItem';
import './ContactList.scss';

const ContactList = ({ contacts, onClick }) => (
  <ul className="contact-list">
    {contacts.map(({ name, number, id }) => (
      <ContactListItem
        name={name}
        number={number}
        key={id}
        onClick={() => onClick(id)}
      />
    ))}
  </ul>
);

const getFilteredContacts = (allContacts, filter) => {
  const lowercasedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(lowercasedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(contactsActions.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
