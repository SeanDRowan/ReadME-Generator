// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let licenseKey = response.license
let yourLicense = ''
if(licenseKey === 'MIT') {
  yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (licenseKey === 'GPLv3') {
  yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
} else if (licenseKey === 'GPL') {
  yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
} else {
  license.license = ''
}
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
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
