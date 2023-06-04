import React from "react"
class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form action="" className="ui form">
                    <div className="field">
                        <label htmlFor="Name">Name</label>
                        <input type="text" name="name" placeholder="name"/>
                    </div>
                    <div className="field">
                        <label htmlFor="Name">email</label>
                        <input type="text" name="email" placeholder="email"/>
                    </div>
                        <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact