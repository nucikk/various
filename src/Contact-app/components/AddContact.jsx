import  { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Please enter both name and email");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
  };

  useEffect(() => {
    const storedName = localStorage.getItem("contactName");
    const storedEmail = localStorage.getItem("contactEmail");

    if (storedName && storedEmail) {
      setName(storedName);
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
  }, [name, email]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

AddContact.propTypes = {
  addContactHandler: PropTypes.func.isRequired,
};

export default AddContact;
