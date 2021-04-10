const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    console.log(`School: ${this.school}`);
    return this.school;
  }

  getRole() {
    console.log(`Role: ${this.constructor.name}`);
    return this.constructor.name;
  }
}

module.exports = Intern;