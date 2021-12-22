// Write your solution in this file!
const employee = {
    name:'Bob',
    streetAddress: 'Java Street',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]= value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}







/*
const employee = {
    name: "John",
    streetAddress: "15 W Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) { 
   const updatedEmployee = {...employee};
   updatedEmployee[key] = value;
   return updatedEmployee;
    /*
    return {
        ...employee,
        [key]: value,
    };
    */

/*    
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};
*/