import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (IDcontact) => {
    // eslint-disable-next-line react/prop-types
    props.getContactId(IDcontact);
  };

  const contacts = [
    {
      id: "1",
      name: "nini",
      email: "nini@gmail.com",
    },
  ];

  // eslint-disable-next-line react/prop-types
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.IDcontact}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });
  return (
    <div className="main">
      <h2>Contact List </h2>  
      <div className="ui celled list">{renderContactList}</div>
    </div>
  )
  
};

export default ContactList;
