// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

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


const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your e-mail address?",
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "What is your project's description?",
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Which of the license options would you like to select for your project?",
        choices: licenseChoices,
    },
    {
        type: "input",
        name: "dependenciesCommand",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "testCommand",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "usingRepo",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributingRepo",
        message: "What does the user need to know about contributing to the repo?",
    }];





// TODO: Create a function to write README file
function writeToFile(fileName, userInputs) {
    fs.writeFile(fileName, generateMarkdown(userInputs), (err) =>
        err ? console.log(err) : console.log('Successfully created new Readme.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((userInputs) => {
            console.log(userInputs);
            writeToFile('generated/Generated-Readme.md', userInputs);
        });
}

// Function call to initialize app
init();

