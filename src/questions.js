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

const managerQuestions = [
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Office Number:'
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerGithub',
    message: "Engineer's github:"
  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'internSchool',
    message: "Intern's school:"
  }
];

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