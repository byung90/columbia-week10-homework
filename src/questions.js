// Questions for all employees
const generalQuestions = [
  {
    type: 'input',
    name: 'employeeName',
    message: 'Employee Name:'
  },
  {
    type: 'input',
    name: 'employeeId',
    message: 'Employee ID:'
  },
  {
    type: 'input',
    name: 'employeeEmail',
    message: 'Employee Email:'
  },
  {
    type: 'list',
    name: 'employeeRole',
    message: 'Employee Role:',
    choices: ['Manager', 'Engineer', 'Intern']
  }
];

// Question for only manager
const managerQuestions = [
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Office Number:'
  }
];

// Question for only engineer
const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerGithub',
    message: "Engineer's github:"
  }
];

// Question for only intern
const internQuestions = [
  {
    type: 'input',
    name: 'internSchool',
    message: "Intern's school:"
  }
];

// Question to add more employee
const addEmployeeQuestion = {
  type: 'confirm',
  name: 'addMoreEmployee',
  message: 'Add more employee?'
}

module.exports = {
  generalQuestions: generalQuestions,
  managerQuestions: managerQuestions,
  engineerQuestions: engineerQuestions,
  internQuestions: internQuestions,
  addEmployeeQuestion: addEmployeeQuestion,
};