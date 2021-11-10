import React, { Component } from 'react';

import s from './App.module.css';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-3', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === this.state.name.toLowerCase(),
      )
    )
      return alert(`${this.state.name} is already in contacts.`);

    this.setState({
      contacts: [
        {
          id: uuidv4(),
          name: this.state.name,
          number: this.state.number,
        },
        ...this.state.contacts,
      ],
      name: '',
      number: '',
    });
  };

  onDeleteBtn = e => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(
            cont => cont.id !== e.nativeEvent.path[1].id,
          ),
        ],
      };
    });
  };

  // // // // // // // сохранение в localeStorage

  componentDidMount() {
    // console.log('App conponentDidMount()');

    const contactsOfLocalStorage = localStorage.getItem('contacts');
    const contactOfLocStorParsedJSON = JSON.parse(contactsOfLocalStorage);
    // console.log(contactOfLocStorParsedJSON);

    if (contactOfLocStorParsedJSON) {
      this.setState({
        contacts: contactOfLocStorParsedJSON,
      });
    }
  }

  // позволяет сравнивать состояние до и посля обновения
  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(this.state);

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    // console.log('App render');
    return (
      <div className={s.App}>
        <h1>Phonebook</h1>
        <ContactForm
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        {this.state.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            {this.state.contacts.length > 1 && (
              <Filter handleChange={this.handleChange} />
            )}

            <ContactList
              contacts={this.state.contacts}
              filter={this.state.filter}
              onDeleteBtn={this.onDeleteBtn}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
