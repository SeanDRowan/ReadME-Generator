// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ['What is your project Title?', 'Give a short project Description', 'Installation instructions', 'Usage instructions and examples', 'License', 'How can others contribute?', 'Tests', 'what is your github username?','what is your email?'];
const [title, description, installation, usage, license, contributing, tests, github, email] = questions


// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile(`${response.title}.md`,` ${generateMarkdown(response)}`, (err) =>
    err ? console.error(err) : console.log('README created!'))
    ;}
// TODO: Create a function to initialize app
function init() {
   inquirer.prompt([
      {
        type: 'input',
        message: title,
        name: 'title',
      },
     {
          type: 'input',
          message: description,
          name: 'description',
        },
        {
          type: 'input',
          message: installation,
          name: 'installation',
        },
        {
          type: 'input',
          message: usage,
          name: 'usage',
        },
        {
          type: 'checkbox', 
          name: 'license',
          choices: ["MIT", "GPLv3", "Mozilla Public License 2.0"],
          message: license,
          },
          {
            type: 'input',
            message: contributing,
            name: 'contribute',
          },
          {
            type: 'input',
            message: tests,
            name: 'tests',
          },
          {
            type: 'input',
            message: github,
            name: 'github',
          },
          {
            type: 'input',
            message: email,
            name: 'email',
          },
    ])
    .then((response) =>  {writeToFile(response)})
}

// Function call to initialize app
init();
