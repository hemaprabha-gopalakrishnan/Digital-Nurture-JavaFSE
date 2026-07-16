class Employee {
    constructor(id, name, email, phone){
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
    }
}

const EmployeesData=[
    new Employee(102,'Sam','sam@congizant.com', '9981184126'),

];

export default Employee;
export {EmployeesData};