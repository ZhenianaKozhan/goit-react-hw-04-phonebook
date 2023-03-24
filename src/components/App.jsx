import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (values, { resetForm }) => {
    const existingContact = this.state.contacts.some(
      contact => contact.name === values.name
    );
    if (existingContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      values.id = nanoid();
      this.setState({ contacts: [values, ...this.state.contacts] });
    }
    resetForm();
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  handleChangeFilter = e => {
    return this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        {this.state.contacts.length !== 0 && (
          <Filter
            filter={this.state.filter}
            handleChangeFilter={this.handleChangeFilter}
          />
        )}
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
