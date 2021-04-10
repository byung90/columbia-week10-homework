// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const Intern = require('../lib/intern');

describe("Intern", () => {
  describe("isIntern", () => {
    const intern = new Intern('Ethan', 0, 'byung90@gmail.com', 'The New School');

    // Intern should have a school
    it("should have school", () => {
      expect(intern.getSchool()).toEqual('The New School');
    });

    // Intern's role should be Intern
    it("role should be employee"), () => {
      expect(intern.getRole()).toEqual('Intern');
    }
  })
});