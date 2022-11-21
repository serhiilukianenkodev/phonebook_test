import { ContactForm } from 'components/ContactForm/ContactForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';

import { Contacts } from 'components/Contacts/Contacts';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  //  hasContact = (contact) => {
  //   return
  // }
  addContact = data => {
    const hasContact = this.state.contacts.some(
      contact => contact.name === data.name
    );

    if (hasContact) return alert('такой пользователь уже сцществует');

    const id = nanoid();
    const contact = { ...data, id };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  changeFilter = evt => {
    const value = evt.target.value;
    this.setState({ filter: value });
  };

  getFiltered() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return [...contacts];
    }

    return contacts.filter(contact => {
      return contact.name.toUpperCase().includes(filter.toUpperCase());
    });
  }

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts].filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.addContact} />

        <Filter value={this.state.filter} onFilterChange={this.changeFilter} />
        <Contacts
          contacts={this.getFiltered()}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
