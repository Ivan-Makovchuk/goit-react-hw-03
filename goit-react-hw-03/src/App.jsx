import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contact, setContact] = useState(() => {
    if (JSON.parse(localStorage.getItem("Contacts")) !== null) {
      return JSON.parse(localStorage.getItem("Contacts"));
    }
    return initialContacts;
  });
  const [searchContact, setSearchContact] = useState("");

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contact));
  }, [contact]);

  const addContact = (newContact) => {
    setContact((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContact((prev) => prev.filter((user) => user.id !== contactId));
    console.log(contactId);
  };

  const visibileContacts = contact.filter((user) =>
    user.name.toLowerCase().includes(searchContact.toLocaleLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox search={searchContact} onSearch={setSearchContact} />

      <ContactList contacts={visibileContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
