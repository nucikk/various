import { useState } from "react";
import "./App.css";
import AddContact from "./Contact-app/components/AddContact";
import ContactList from "./Contact-app/components/ContactList";
import Header from "./Contact-app/components/Header";

// import GalleryHome from './Gallery/GalleryHome'
// import TechStory from './tailwind/TechStory'

function App() {
const [contacts, setContacts] = useState([]);

const addContactHendler = (contact) => {
  setContacts([...contacts, contact]);
}
  return (
    <>
      {/* <GalleryHome />
      <TechStory/> */}
      <div className="ui container">
        <Header />
        <AddContact addContactHendler={addContactHendler} />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
