import React, { useState, useEffect } from 'react';

import s from './App.module.css';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'filter':
        setFilter(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    )
      return alert(`The name "${name}" is already in contacts.`);

    setContacts([{ id: uuidv4(), name: name, number: number }, ...contacts]);
    setName('');
    setNumber('');
  };

  const onDeleteBtn = e => {
    setContacts(contacts.filter(cont => cont.id !== e.nativeEvent.path[1].id));
  };

  useEffect(() => {
    const contactLocStorParsed = JSON.parse(localStorage.getItem('contacts'));

    if (contactLocStorParsed) {
      setContacts(contactLocStorParsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.App}>
      <h1>Phonebook</h1>
      <ContactForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={name}
        number={number}
      />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          {contacts.length > 1 && <Filter handleChange={handleChange} />}

          <ContactList
            contacts={contacts}
            filter={filter}
            onDeleteBtn={onDeleteBtn}
          />
        </>
      )}
    </div>
  );
}
