// libraries

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// generate html page 
const generateHTML = require('./src/generate-html')

// initialize list
employeeList = [];

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false
                }
            }
        }, {
            type: 'input',
            name: 'id',
            message: "What is your employee ID? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
    ]
    )
        .then((response) => {

            const manager = new Manager(response.name, response.id, response.email, response.role, response.officeNumber)
            
            manager.role = 'Manager'

            employeeList.push(manager)

            addMenu();
        })
}

// add other members
const addMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select type of member to add to your team.',
            choices: ["Engineer", "Intern"]
        }
    ])
        .then((response) => {
            if (response.role === "Engineer") {
                addEngineer()
            } else {
                addIntern()
            }
        })
}

const addPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: "Would you like to add more employees?",
            choices: ['Yes', 'No']
        }
    ])
        .then(response => {
            switch (response.add) {
                case 'Yes':
                    addMenu();
                    break;
                case 'No':
                    teamHTML();
                    break;
            }
        })


}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the engineer?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee ID of the engineer?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address of the engineer?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the github username of the engineer?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a github username!');
                    return false;
                }
            }
        },
    ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.role, response.gitHub);

            engineer.role = "Engineer"
            employeeList.push(engineer);

            addPrompt();
        })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the intern?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee ID of the intern?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address of the intern?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the school!');
                    return false;
                }
            }
        },
    ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.role, response.school);

            intern.role = 'Intern'

            employeeList.push(intern);

            addPrompt();
        })
}

const teamHTML = () => {
    fs.writeFile('./dist/index.html', generateHTML(employeeList), err => {
        if (err) {
            console.log(err)
        }
    })
    fs.copyFile('./src/style.css', './dist/style.css', (err) => {
        if (err) {
            console.log(err)
        }
    })

    console.log('Team Page Generated!')
}

managerPrompt()