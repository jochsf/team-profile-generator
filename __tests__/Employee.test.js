const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Jordan', 1, 'email@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'))
})

test('gets name', () => {
    const employee = new Employee('Jordan');

    expect(employee.getName()).toEqual(expect.any(String))
})

test('gets id', () => {
    const employee = new Employee('1');

    expect(employee.getId()).toEqual(expect.any(Number))
})

test('gets email', () => {
    const employee = new Employee('email@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('@'))
})

test('gets role', () => {
    const employee = new Employee('Employee')

    expect(employee.getRole()).toBe('Employee')
})