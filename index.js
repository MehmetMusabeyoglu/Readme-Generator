// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?",
    "What is your e-mail address?",
    "What is your project's name?",
    "What is your project's description?",
    "Which of the license options would you like to select for your project?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"];

const licenseChoices = ["Apache 2.0 License",
    "Boost Software License 1.0",
    "BSD 3-Clause License",
    "Creative Commons CC0",
    "Eclipse Public License 1.0",
    "GNU GPL v3",
    "The Hippocratic License 2.1",
    "IBM Public License Version 1.0",
    "ISC License (ISC)",
    "The MIT License",
    "Mozilla Public License 2.0",
    "Attribution License (BY)",
    "The Perl License",
    "SIL Open Font License 1.1",
    "The Unlicense",
    "The zlib/libpng License",
    "None"];


// TODO: Create a function to write README file
function writeToFile(fileName, userInputs) {
    fs.writeFile(fileName, generateMarkdown(userInputs), (err) =>
        err ? console.log(err) : console.log('Successfully created new Readme.md!')
    );
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'userName',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'userEmail',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'projectName',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: questions[3],
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: questions[4],
            choices: licenseChoices,
        },
        {
            type: 'input',
            name: 'dependenciesCommand',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'testCommand',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'usingRepo',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'contributingRepo',
            message: questions[8],
        }
    ])
    .then((userInputs) => {
        console.log(userInputs);
        writeToFile('generated/Generated-Readme.md', userInputs);
    });
}

// Function call to initialize app
init();

