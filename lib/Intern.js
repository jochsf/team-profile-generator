const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);

        this.school = school;
        this.role = role;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;