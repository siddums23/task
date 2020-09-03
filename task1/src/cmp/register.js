import React, { Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', role: 'admin', selection: '' };
    }

    usernameChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    roleChangeHandler = (event) => {
        this.setState({ role: event.target.value });
    }

    selectChangeHandler = (event) => {
        this.setState({ selection: event.target.value });
    }

    handleSubmit = () => {
        //console.log("Username: " + this.state.username);
        //console.log("Password: " + this.state.password); //ch
        //console.log("Role: " + this.state.role);

        // to save data to db server
        fetch('http://localhost:9000/testAPI_mongo', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json()
            console.log("Added Succesfully");
            alert("Added Succesfully");
            window.location.reload(false);
        })

    }

    render() {


        return (
            <div>
                <form noValidate >
                    <label>Username:&nbsp;
                        <input type="text" name="username" onChange={this.usernameChangeHandler} />
                    </label><br />
                    <label>Password:&nbsp;
                        <input type="password" name="password" onChange={this.passwordChangeHandler} />
                    </label><br />
                    <label>Select role:&nbsp;
                        <select onChange={this.roleChangeHandler}>
                            <option value="admin">Admin</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                    </label><br />
                    <label>Verified from:&nbsp;
                    <input
                        onChange={this.selectChangeHandler}
                        type="checkbox"
                        name="selection"
                        value="company"
                    />Company
                    <input
                        onChange={this.selectChangeHandler}
                        type="checkbox"
                        name="selection"
                        value="college"
                    />College
                    </label><br />
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );

    }

}

export default Register;