// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')
// TODO: Create an array of questions for user input
const questions = ['What is your projec Title?', 'Give a short project Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];
const [title, description, table, installation, usage, license, contributing, tests, question] = questions


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt([
      {
        type: 'input',
        message: title.questions,
        name: 'title',
      },
     {
          type: 'input',
          message: description.questions,
          name: 'description',
        },
        {
          type: 'input',
          message: installation.questions,
          name: 'installation',
        },
        {
          type: 'input',
          message: usage.questions,
          name: 'usage',
        },
        {
            type: 'input',
            message: license.questions,
            name: 'license',
          },
          {
            type: 'input',
            message: contributing.questions,
            name: 'contribute',
          },
          {
            type: 'input',
            message: tests.questions,
            name: 'tests',
          },
          {
            type: 'input',
            message: question.questions,
            name: 'question',
          },
    ])
    .then((response) =>  {
    fs.writeFile('README1.md',`# Title
     ${response.title}
## Description
    ${response.description}
## Table of Contents
[Installation](#installation)

[Usage](#usage)

[License](#License)

[Contributing](#Contrbuting)

[testing](#tests)

[Questions](#Questions)
### Istallation
     ${response.installation}
### Usage
     ${response.usage}
### License
     ${response.license}
### Contributing
     ${response.contribute}
### tests
     ${response.tests}
### Questions
     ${response.question}
     `, (err) =>
    err ? console.error(err) : console.log('Commit logged!'))
    });}
// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
writeToFile()