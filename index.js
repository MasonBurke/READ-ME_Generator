const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        name: "github",
        type: "input",
        message: "What is your github username?"
    }, {
        name: "license",
        message: "What kind of license should your project have?",
        type: "list", choices: ["ISC", "MIT", "JPL3.0", "APACHE2.0", "None"]
    },
    {
        name: "title",
        message: "What is your projects name?",
        type: "input"
    },
{
        name: "description",
        message: "Write a brief description",
        type: "input"
    },
        {
        name: "installation",
        message: "What command should be run to install dependencies",
        type: "input",
        default: "npm i"
    },
            {
        name: "usage",
        message: "What does the user need to know about using the repo",
        type: "input"
    },
                {
        name: "contributing",
        message: "What does the user need to know about contributing to the repo",
        type: "input"
    },
                    {
        name: "test",
        message: "What command should be used to run test",
        type: "input",
        default: "npm test"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then(responses => {
        api.getUser(responses.github).then(({ data }) => {
            writeToFile("README.md", generateMarkdown({ ...responses, ...data }))
        })
    })

}

init();
