const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('gets office number', () => {
    const manager = new Manager('Jordan', 1, 'email@gmail.com', 'Employee', '69D');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String))
})

test('change role to manager', () => {
    const manager = new Manager('Jordan', 1, 'email@gmail.com', 'Manager', '69D');

    expect(manager.getRole()).toBe('Manager')
})