const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkDown = require("./utils/generateMarkDown")

const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE_2.0', 'GPLv3', 'BSD_3', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependancies',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to test',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo',
        name: 'usage',
    },
]


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then((response) => {
        return generateMarkDown({ ...response })
    }).then((data) => {
        writeToFile("README.md", data)
    })
}

init()