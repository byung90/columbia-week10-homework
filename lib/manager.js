const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, phone) {
    super(name, id, email);
    this.phone = phone;
  }

  getPhoneNumber() {
    console.log(`Phone: ${this.phone}`);
    return this.phone;
  }

  getRole() {
    console.log(`Role: ${this.constructor.name}`);
    return this.constructor.name;
  }
}

module.exports = Manager;