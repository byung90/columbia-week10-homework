const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const questions = require('./src/questions');
const renderHTML = require('./src/renderHTML');

let teamMembers = [];

console.log(questions)

function askAdditionalEmployee() {
  inquirer
    .prompt(questions.addEmployeeQuestion)
    .then(addEmployeeResponse => {
      addEmployeeResponse.addMoreEmployee ? addEmployee() : renderHTML(teamMembers);
    });
}

function addEmployee() {
  inquirer
    .prompt(questions.generalQuestions)
    .then(generalEmployeeResponse => {
      switch (generalEmployeeResponse.employeeRole) {
        case 'Manager':
          inquirer
            .prompt(questions.managerQuestions)
            .then(managerResponse => {
              const teamMember = new Manager(generalEmployeeResponse.employeeName, generalEmployeeResponse.employeeId, generalEmployeeResponse.employeeEmail, managerResponse.officeNumber);
              teamMembers.push(teamMember);
              askAdditionalEmployee();
            });
          break;
        case 'Engineer':
          inquirer
            .prompt(questions.engineerQuestions)
            .then(engineerResponse => {
              const teamMember = new Engineer(generalEmployeeResponse.employeeName, generalEmployeeResponse.employeeId, generalEmployeeResponse.employeeEmail, engineerResponse.engineerGithub);
              teamMembers.push(teamMember);
              askAdditionalEmployee();
            })
          break;
        case 'Intern':
          inquirer
            .prompt(questions.internQuestions)
            .then(internResponse => {
              const teamMember = new Intern(generalEmployeeResponse.employeeName, generalEmployeeResponse.employeeId, generalEmployeeResponse.employeeEmail, internResponse.internSchool);
              teamMembers.push(teamMember);
              askAdditionalEmployee();
            })
          break;
      }
    })
}

// function addEmployee() {
//   inquirer
//     .prompt(questions.generalQuestions)
//     .then(generalEmployeeResponse => {
//       switch (generalEmployeeResponse.employeeRole) {
//         case 'Manager':
//           inquirer
//             .prompt(questions.managerQuestions)
//             .then(managerResponse => {
//               const teamMember = new Manager(generalEmployeeResponse.employeeName, generalEmployeeResponse.employeeId, generalEmployeeResponse.employeeEmail, managerResponse.officeNumber);
//               teamMembers.push(teamMember);
//               askAdditionalEmployee();
//             });
//           break;
//         case 'Engineer':
//           inquirer
//             .prompt(questions.engineerQuestions)
//             .then(engineerResponse => {
//               const teamMember = new Engineer(generalEmployeeResponse.employeeName, generalEmployeeResponse.employeeId, generalEmployeeResponse.employeeEmail, engineerResponse.engineerGithub);
//               teamMembers.push(teamMember);
//               askAdditionalEmployee();
//             })
//           break;
//         case 'Intern':
//           inquirer
//             .prompt(questions.internQuestions)
//             .then(internResponse => {
//               const teamMember = new Intern(generalEmployeeResponse.employeeName, generalEmployeeResponse.employeeId, generalEmployeeResponse.employeeEmail, internResponse.internSchool);
//               teamMembers.push(teamMember);
//               askAdditionalEmployee();
//             })
//           break;
//       }
//     })
// }

addEmployee();