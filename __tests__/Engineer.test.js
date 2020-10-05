const Engineer = require('../lib/Engineer');

test('gets github username', () => {
    const engineer = new Engineer('Jordan', 1, 'email@gmail.com', 'Employee', 'jochsf');

    expect(engineer.getGitHub()).toEqual(expect.any(String))
})

test('change role to Engineer', () => {
    const engineer = new Engineer('Jordan', 1, 'email@gmail.com', 'Engineer', 'jochsf');

    expect(engineer.getRole()).toBe('Engineer')
})