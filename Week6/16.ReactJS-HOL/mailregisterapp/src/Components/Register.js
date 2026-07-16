import React, { useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateName = (value) => {

        setName(value);

        if (value.length < 5) {
            setNameError("Name should contain minimum 5 characters");
        } else {
            setNameError("");
        }
    };

    const validateEmail = (value) => {

        setEmail(value);

        if (!(value.includes("@") && value.includes("."))) {
            setEmailError("Enter a valid Email");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (value) => {

        setPassword(value);

        if (value.length < 8) {
            setPasswordError("Password should contain minimum 8 characters");
        } else {
            setPasswordError("");
        }
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        if (
            name.length >= 5 &&
            email.includes("@") &&
            email.includes(".") &&
            password.length >= 8
        ) {

            alert("Registration Successful");

        } else {

            alert("Please Enter Valid Details");

        }

    };

    return (

        <div className="container">

            <h2>Register here !!!</h2>

            <form onSubmit={handleSubmit}>

                <table>

                    <tbody>

                        <tr>

                            <td>Name</td>

                            <td>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) =>
                                        validateName(e.target.value)
                                    }
                                />

                            </td>

                        </tr>

                        <tr>

                            <td></td>

                            <td className="error">

                                {nameError}

                            </td>

                        </tr>

                        <tr>

                            <td>Email</td>

                            <td>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        validateEmail(e.target.value)
                                    }
                                />

                            </td>

                        </tr>

                        <tr>

                            <td></td>

                            <td className="error">

                                {emailError}

                            </td>

                        </tr>

                        <tr>

                            <td>Password</td>

                            <td>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        validatePassword(e.target.value)
                                    }
                                />

                            </td>

                        </tr>

                        <tr>

                            <td></td>

                            <td className="error">

                                {passwordError}

                            </td>

                        </tr>

                        <tr>

                            <td></td>

                            <td>

                                <button type="submit">

                                    Submit

                                </button>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </form>

        </div>

    );

}

export default Register;