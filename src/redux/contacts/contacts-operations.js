import axios from 'axios';
import contactsActions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(contactsActions.deleteContactSuccess(id));
    })
    .catch(error => dispatch(contactsActions.deleteContactError(error)));
};

const contactsOperations = {
  addContact,
  deleteContact,
};

export default contactsOperations;
