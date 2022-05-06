import { useState} from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import {addContact} from '../../redux/operations';
import s from './NameForm.module.css';

export default function Nameform() {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setPhone] = useState('');

      const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setPhone(value);
                break;
            default: return;
        };
    };

    const resetinput = () => {
        setName('');
        setPhone('');


    }

    const checkRepeatName = name => {
        return contacts.find(contact =>contact.name&& contact.name.toLowerCase() === name.toLowerCase())
    };  

    const checkRepeatPhone = number => { return contacts.find(contact => contact.number === number) };

    const handleSubmit = event => {
        event.preventDefault();
       
        if (checkRepeatName(name)) {
         alert(`${name} is already added.`)
        }
        else if (checkRepeatPhone(number)) {
            alert(`${number} is already added.`)
        }
        else if (name.trim() === '' || number.trim() === '') {
            alert('All of inputs must be not empty')
            }
        else {
            dispatch(addContact(name,number));
        }
        resetinput();

        
    };
    
    const nameInputId = shortid.generate();
    const phoneInputId = shortid.generate();

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.container}>
                    <label className={s.label}>
                        Name
                            <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={handleChange}
                            id={nameInputId}
                        />
                    </label >
                    <label className={s.label}>
                        Phone
                             <input
                            type="text"
                            name='number'
                            value={number}
                            onChange={handleChange}
                            id={phoneInputId}
                        />
                    </label>
                    <div>
                        <button className={s.button} type='submit'>Add contact</button>
                        </div>
                </div>
              
            </form>
        </>
    );


};