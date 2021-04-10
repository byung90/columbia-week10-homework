// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const Employee = require('../lib/employee');

describe("Employee", () => {
  describe("isEmployee", () => {
    const employee = new Employee('Ethan', 0, 'byung90@gmail.com');

    // Employee should have a name
    it("should have name", () => {
      expect(employee.getName()).toEqual('Ethan');
    });

    // Employee should have an ID 
    it("should have id", () => {
      expect(employee.getId()).toEqual(0);
    });

    // Employee should have email
    it("should have email", () => {
      expect(employee.getEmail()).toEqual('byung90@gmail.com');
    });

    // Employee's role should be Employee
    it("role should be employee"), () => {
      expect(employee.getRole()).toEqual('Employee');
    }
  })
});