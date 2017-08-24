const assert = require('chai').assert;
const {sayHello} = require('../app/tasks.js');

describe('prints hello',() => {
  it('should return hello world string', () => {
    assert.equal(sayHello(), 'Hello World', 'says hello world')
  })
})