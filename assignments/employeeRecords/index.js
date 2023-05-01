let employees = [];

function Employee(name, jobTitle, salary, status = "Full Time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
}

Employee.prototype.printEmployeeForm = function () {
  console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
};

let employee1 = new Employee("John Doe", "Web Developer", "$75,000");
let employee2 = new Employee("Jane Smith", "Marketing Manager", "$90,000", "Part Time");
let employee3 = new Employee("Bob Johnson", "Sales Representative", "$60,000");
employee3.status = "Contract";

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

employees.push(employee1, employee2, employee3);

function printAllEmployees() {
  employees.forEach(function(employee) {
    employee.printEmployeeForm();
  });
}

printAllEmployees();

function getTotalSalary() {
  let totalSalary = 0;
  employees.forEach(function(employee) {
    totalSalary += parseInt(employee.salary.replace(/[^0-9.-]+/g,""));
  });
  return totalSalary;
}

console.log("Total Salary: $" + getTotalSalary().toLocaleString());
