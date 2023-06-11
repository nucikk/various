import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (IDcontact) => {
    // eslint-disable-next-line react/prop-types
    props.getContactId(IDcontact)
  };

  // eslint-disable-next-line react/prop-types
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard key={contact.IDcontact} contact={contact} clickHandler={deleteContactHandler} />
    ;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
