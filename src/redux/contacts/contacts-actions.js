import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));
const deleteContact = createAction('contacts/delete');
const filterContactsByName = createAction('contacts/filter');

const contactsActions = {
  addContact,
  deleteContact,
  filterContactsByName,
};

export default contactsActions;
