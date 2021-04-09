import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const itemsReducer = createReducer([], {
  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [contactsActions.filterContactsByName]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
