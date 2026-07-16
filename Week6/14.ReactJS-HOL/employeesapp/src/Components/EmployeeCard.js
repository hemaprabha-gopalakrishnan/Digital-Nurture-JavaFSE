import { useContext } from "react";

import ThemeContext from "../ThemeContext";

function EmployeeCard({ employee }) {

    const theme = useContext(ThemeContext);

    const handleEdit = () => {
        alert(`Edit employee: ${employee.name}`);
    };

    return(

        <div>

            <h2>Employee Details</h2>

            {employee ? (
                <>
                    <div>ID: {employee.id}</div>
                    <div>Name: {employee.name}</div>
                    <div>Email: {employee.email}</div>
                    <div>Phone: {employee.phone}</div>
                    <button type="button" className={theme} onClick={handleEdit}>
                        Edit
                    </button>
                </>
            ) : (
                <div>No employee data available.</div>
            )}

        </div>

    );

}

export default EmployeeCard;