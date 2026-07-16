import React, { useState } from "react";

function ComplaintRegister() {

    const [employeeName, setEmployeeName] = useState("");
    const [complaint, setComplaint] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        const referenceNumber = Math.floor(Math.random() * 100000);

        alert(
            "Complaint Registered Successfully.\nReference Number : " +
            referenceNumber
        );
    };

    return (
        <div>

            <h1 style={{color:"red"}}>
                Ticket Raising Application
            </h1>

            <form onSubmit={handleSubmit}>

                <table>

                    <tbody>

                        <tr>

                            <td>Employee Name :</td>

                            <td>

                                <input
                                    type="text"
                                    value={employeeName}
                                    onChange={(e)=>setEmployeeName(e.target.value)}
                                    required
                                />

                            </td>

                        </tr>

                        <tr>

                            <td>Complaint :</td>

                            <td>

                                <textarea
                                    rows="5"
                                    cols="25"
                                    value={complaint}
                                    onChange={(e)=>setComplaint(e.target.value)}
                                    required
                                />

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

export default ComplaintRegister;