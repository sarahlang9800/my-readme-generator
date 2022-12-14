// Creates a license badge for the users selected badge
licenses = license => {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;

        case 'APACHE_2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;

        case 'GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;

        case 'BSD_3':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;

        case 'None':
            const none = '';
            return none
            break;
    }
}

// Function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    if (license === 'None') {
        return '';
    } else {
        return '* [License](#license)'
    }
}

// Function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `## License

this application is being covered under ${license} license`;
    }
 }

// Function generates markdown for README
function generateMarkDown(data) {
    return `# ${data.title}

${licenses(data.license)}

## Description 

${data.description}

## Table of Content

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Test](#test)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Test

${data.test}

## Questions

For any additional questions 

you can reach me at ${data.email}

or you can see more of my work on GitHub @[${data.username}](https://github.com/${data.username})
`;
}
module.exports = generateMarkDown;