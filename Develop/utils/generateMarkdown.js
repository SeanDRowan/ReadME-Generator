// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
let licenseKey = license.toString()
console.log(licenseKey)
let yourLicense = ''
if(licenseKey === 'MIT') {
  yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (licenseKey === 'GPLv3') {
  yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
} else if (licenseKey === 'GPL') {
  yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
} else {
  yourLicense = ''
}console.log(yourLicense)
return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license
  return `# ${data.title}
  ${renderLicenseBadge(license)}
## Description
    ${data.description}
## Table of Contents
[Installation](#installation)

[Usage](#usage)

[License](#License)

[Contributing](#Contributing)

[testing](#tests)

[Questions](#Questions)
### Istallation
     ${data.installation}
### Usage
     ${data.usage}
### License
     
### Contributing
     ${data.contribute}
### tests
     ${data.tests}
### Questions
for additional questions, please reach out to me on github
[${data.github}](https://github.com/${data.github})
    or by email at
<${data.email}>
     `;}


module.exports = generateMarkdown;
