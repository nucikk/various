import React from "react";
import PropTypes from "prop-types";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please enter");
      return;
    }
    this.props.addContactHendler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form action="" className="ui form" onSubmit={this.add}>
          <div className="field">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="Name">email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContactHendler: PropTypes.func.isRequired,
};

export default AddContact;
