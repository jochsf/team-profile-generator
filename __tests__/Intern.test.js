const Intern = require('../lib/Intern');

test('gets school name', () => {
    const intern = new Intern('Jordan', 1, 'email@gmail.com', 'Employee', 'UT');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('change role to intern', () => {
    const intern = new Intern('Jordan', 1, 'email@gmail.com', 'Intern', 'UT');

    expect(intern.getRole()).toBe('Intern')
})