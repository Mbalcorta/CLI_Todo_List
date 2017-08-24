const assert = require('chai').assert;
const {add, complete, deleted, list} = require('../app/tasks.js');


describe('prints add is exported',() => {
  it('should return add is exported string', () => {
    assert.equal(add(), 'add is exported', 'says add is exported');
  });
});


describe('prints complete is exported',() => {
  it('should return complete is exported string', () => {
    assert.equal(complete(), 'complete is exported', 'says complete is exported');
  });
});

describe('prints deleted is exported',() => {
  it('should return deleted is exported string', () => {
    assert.equal(deleted(), 'deleted is exported', 'says deleted is exported');
  });
});


describe('prints list is exported',() => {
  it('should return list is exported string', () => {
    assert.equal(list(), 'list is exported', 'says list is exported');
  });
});