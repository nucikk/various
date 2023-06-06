import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard key={"k"} contact={contact} />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
