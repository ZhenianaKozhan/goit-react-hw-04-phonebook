import { useLocalStorage } from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useLocalStorage('filter', '');

  const visibleContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  const handleSubmit = (values, { resetForm }) => {
    const existingContact = contacts.some(
      contact => contact.name === values.name
    );
    if (existingContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      values.id = nanoid();
      setContacts([values, ...contacts]);
    }
    resetForm();
  };

  const handleChangeFilter = e => setFilter(e.target.value);

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts</h2>
      {contacts.length !== 0 && (
        <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      )}
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
