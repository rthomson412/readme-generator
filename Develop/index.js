// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: '(Required) Your Github username:',
    name: 'Github',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please provide your Github username.');
            return false;
        }
    }
},
{
    type: 'input',
    message: '(Required) Your preferred email:',
    name: 'Email',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please provide your email.');
            return false;
        }
    }
},
{
    type: 'input',
    message: '(Required) Your project title:',
    name: 'Title',
    validate: tittleInput => {
        if (tittleInput) {
            return true;
        } else {
            console.log('Please provide a project title!');
            return false;
        }
    }
},
{
    type: 'input',
    message: '(Required) Your project description:',
    name: 'Description',
    validate: descInput => {
        if (descInput) {
            return true;
        } else {
            console.log('Please provide a description about the project.');
            return false;
        }
    }
},
{
    type: 'input',
    message: '(Required) Installation requirements:',
    name: 'Installation',
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('Please detail installation requirements.');
            return false;
        }
    }
},
{
    type: 'input',
    message: '(Required) Guidance on using the application:',
    name: 'Usage',
    validate: useInput => {
        if (useInput) {
            return true;
        } else {
            console.log('Please detail how to use application.');
            return false;
        }
    }
},
{
    type: 'list',
    message: 'Licenses(s) for project:',
    name: 'License',
    choices: ["MIT", "Apache-2.0", "GPLv3"],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Add license(s) if applicable.');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Contributors to the project:',
    name: 'Contributing',
    validate: contInput => {
        if (contInput) {
            return true;
        } else {
            console.log('Contributors for project');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Guidance for testing application:',
    name: 'Test',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('Details for testing.');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Questions regarding application:',
    name: 'Questions',
    validate: quesInput => {
        if (quesInput) {
            return true;
        } else {
            console.log('Questions about application.');
            return false;
        }
    }
},
];


// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Congratulations, your README.md file is now ready for your new application!")
    });
}

// Function call to initialize app
async function init() {
    try {
        inquirer.prompt(questions).then((response) => {
            const responses = generateMarkdown(response);
            writeToFile('README.md', responses);
        });
    } catch (error) {
        console.log(error)
    }
}
init();