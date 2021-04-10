// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const Manager = require('../lib/manager');

describe("Manager", () => {
  describe("isManager", () => {
    const manager = new Manager('Ethan', 0, 'byung90@gmail.com', '555-555-5555');

    // Manager's role should be Manager
    it("role should be manager"), () => {
      expect(manager.getRole()).toEqual('Manager');
    }
  })
});