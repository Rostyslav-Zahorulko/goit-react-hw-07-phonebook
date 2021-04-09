import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const deleteContact = createAction('contacts/delete');
const filterContactsByName = createAction('contacts/filter');

const contactsActions = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  filterContactsByName,
};

export default contactsActions;
