const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('gets office number', () => {
    const manager = new Manager('69B');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String))
})

test('change role to manager', () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toBe('Manager')
})