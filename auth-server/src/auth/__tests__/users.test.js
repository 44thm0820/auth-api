'use strict';

const { users } = require('../models'); 

describe('Testing the User Model', () => {

  test('User should have a role, and list of capabilities', async () => {
    let testUser = await users.create({ username: 'Jacob', password: 'test'});
    let testWriter = await users.create({ username: 'Ryan', password: 'secret', role: 'writer'})

    expect(testUser.role).toEqual('user');
    expect(testWrite.role).toEqual('writer');
    expect(testUser.capabilities).toBeTruthy();
  
    expect(testUser.capabilities.includes('read')).toEqual(true);
    expect(testUser.capabilities).toBeTruthy();
    expect(testUser.capabilities.includes('create')).toEqual(true);
    
  });

});