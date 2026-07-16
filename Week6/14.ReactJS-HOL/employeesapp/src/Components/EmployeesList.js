import EmployeeCard from "./EmployeeCard";
import { EmployeesData } from "../Employee";

function EmployeeList() {

    return(

        <div>

            {EmployeesData.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}

        </div>

    );

}

export default EmployeeList;