const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('./../employee');

describe("Employee", () => {
  describe("isEmployee", () => {
    const employee = new Employee('Ethan', 0, 'byung90@gmail.com');

    // Employee shoul have a name
    it("should have name", () => {
      expect(employee.getName()).toEqual('Ethan');
    })
  })


});