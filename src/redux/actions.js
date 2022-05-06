// import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
// import { addContact } from '../services/contact-api';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccsess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccsess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccsess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const changeFilter=createAction('contacts/changeFilter')


// eslint-disable-next-line import/no-anonymous-default-export
 
