import user from "../contact-image/user.png";
import PropTypes from "prop-types";

const ContactCard = (props) => {
  const { name, email } = props.contact;

  return (
    <>
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{name}</div>

          <div>{email}</div>
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "10px" }}
            // eslint-disable-next-line react/prop-types, no-undef
            onClick={() => props.clickHandler(props.contact.IDcontact)}

          ></i>
        </div>
      </div>
    </>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactCard;
