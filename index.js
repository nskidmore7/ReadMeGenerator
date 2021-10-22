const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utilities/generateMarkdown");
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Briefly describe your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What modules did you use?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the link to the project?",
        name: "usage",
    },
    {
        type: "input",
        message: "How does your project work? Do you need anything for this project to work?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "githubUsername",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "userEmail",
    },
    {
        type: "list",
        message: "What type of license do you need?",
        name: "license",
        choices: [
            "None",
            "Apache License 2.0",
            'BSD 2-Clause License',
            'BSD 3-Clause License',
            "CC0 1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU GPL v2",
            "GNU GPL v3",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "MIT License",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
    },
];

function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile('README.md', generateMd(response), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
}

init();