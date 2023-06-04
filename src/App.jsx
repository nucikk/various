import "./App.css";
import AddContact from "./Contact-app/components/AddContact";
import ContactList from "./Contact-app/components/ContactList";
import Header from "./Contact-app/components/Header";

// import GalleryHome from './Gallery/GalleryHome'
// import TechStory from './tailwind/TechStory'

function App() {
  const contacts = [
    { 
      id: "1",
      name: 'nuci',
      email: 'nuci@gmail.com'
    },
    { 
      id: "2",
      name: 'vika',
      email: 'vikaucxo@gmail.com'
    },
  ]
  return (
    <>
      {/* <GalleryHome />
      <TechStory/> */}
      <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
