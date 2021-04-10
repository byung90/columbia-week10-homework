const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    console.log(`Office Number: ${this.officeNumber}`);
    return this.officeNumber;
  }

  getRole() {
    console.log(`Role: ${this.constructor.name}`);
    return this.constructor.name;
  }
}

module.exports = Manager;