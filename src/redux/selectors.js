import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;
export const getLoading = state => state.contacts.loading;


export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({name}) =>
      name&&name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const getLoader = state => state.contacts.loading;