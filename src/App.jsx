import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import "./App.css";
import AddContact from "./Contact-app/components/AddContact";
import ContactList from "./Contact-app/components/ContactList";
import Header from "./Contact-app/components/Header";


const LOCAL_STORAGE_KEY = "contacts";


function App() {
  const [contacts, setContacts] = useState([]);


  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { IDcontact: uuid(), ...contact }]);
  };

  const removelContactHandler = (IDcontact) => { 
    const newContactList = contacts.filter((contact) => {
      return contact.IDcontact !== IDcontact;
    });
  setContacts(newContactList);
  } 

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
        <ContactList contacts={contacts} getContactId={removelContactHandler} />
      </div>
    </>
  );
}

export default App;
