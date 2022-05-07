import axios from 'axios';
import * as actions from './actions';




export const addContact = (name,number)=>dispatch => {
    const contact = {
        name,
        number
        };

    dispatch(actions.addContactRequest());
     
    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch( actions.addContactSuccess(data) ))
        .catch(error => dispatch(actions.addContactError(error)));
    
};

export const deleteContact = contactId  => dispatch => {
    
    dispatch(actions.deleteContactRequest());

       axios
        .delete(`/contacts/${contactId}`)
        .then(() =>
            dispatch(actions.deleteContactSuccess(contactId)))
        .catch(error => dispatch(actions.deleteContactError(error)));
};

export const fetchContacts = () =>async dispatch => {
  dispatch(actions.fetchContactRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(actions.fetchContactSuccess(data));
    }catch (error) {
        dispatch(actions.fetchContactError(error));
  }

};
