// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  describe("isEngineer", () => {
    const enginner = new Engineer('Ethan', 0, 'byung90@gmail.com', 'byung90');

    // Engineer should have a github account
    it("should have github account", () => {
      expect(enginner.getGithub()).toEqual('byung90');
    });

    // Engineer's role should be Engineer
    it("role should be employee", () => {
      expect(enginner.getRole()).toEqual('Engineer');
    })
  })
});