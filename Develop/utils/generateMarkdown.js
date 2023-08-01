// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
let licenseKey = license.toString()
console.log(licenseKey)
let yourLicense = ''
if(licenseKey === 'MIT') {
  yourLicense = `![MIT Link](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (licenseKey === 'GPLv3') {
  yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
} else if (licenseKey === 'Mozilla Public License 2.0') {
  yourLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
} else {
  yourLicense = ''
}console.log(yourLicense)
return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseKey = license.toString()
// console log to find out what lisence keys value is if nothing is selceted, then put it in render licsense section.
let yourLicense = ''
if(licenseKey === 'MIT') {
  yourLicense = `[MIT License Link](https://mit-license.org/)`
} else if (licenseKey === 'GPLv3') {
  yourLicense = `[GPLv3 license Link](https://www.gnu.org/licenses/gpl-3.0.en.html#Preamble)`
} else if (licenseKey === 'Mozilla Public License 2.0') {
  yourLicense = `[Mozilla 2.0 license Link](https://spdx.org/licenses/MPL-2.0.html)`
} else {
  yourLicense = ''
}console.log(yourLicense)
return yourLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 let licenseKey = license.toString()
  let licenseSection = ''
  if (licenseKey){
    licenseSection = `### License 
This project is using the ${licenseKey} license, for more information about this license follow the link here. ${renderLicenseLink(license)}`
  }
  console.log(licenseSection)
  return licenseSection;
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

[License](#license)

[Contributing](#contributing)

[testing](#tests)

[Questions](#questions)
### Installation
     ${data.installation}
### Usage
     ${data.usage}

${renderLicenseSection(license)}
### Contributing
     ${data.contribute}
### Tests
     ${data.tests}
### Questions
for additional questions, please reach out to me on github
[${data.github}](https://github.com/${data.github})
    or by email at
<${data.email}>
     `;}


module.exports = generateMarkdown;
