import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./Contact-app/components/AddContact";
import ContactList from "./Contact-app/components/ContactList";
import Header from "./Contact-app/components/Header";

const LOCAL_STORAGE_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
