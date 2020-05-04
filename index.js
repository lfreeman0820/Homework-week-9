const {prompt} = require('inquirer');
const fs = require('fs');
const questions = [
    {
        message: "What is your github username?",
        name: "github",
        default: "lfreeman0820"
    },
    {
        message: "What is your project name?",
        name: "readme",
        default: "Lonni's Awesome Project"
    },
    {
        message: "Please write a short description of your project.",
        name: "description",
        default: "This is the greatest and coolest app in the world!"
    },
    {
        message: "What license would you like on your project?",
        type: 'list',
        name: "license",
        choices: ['MIT', 'GNU', 'Apache', 'None'],
        default: "MIT"
    },
    {
        message: "How should the user install the app?",
        name: "install",
        default: "npm install"
    },
    {
        message: "How should the user run the app?",
        name: "usage",
        default: "npm start"
    },
    {
        message: "Who are the contributors of this app? (please enter github usernames separated by commas)",
        name: "contributing",
        default: "lfreeman0820"
    },
    {
        message: "How should the user test the app?",
        name: "test",
        default: "npm run test"
    },
    {
        message: "What would you like to include in the Table of Contents?",
        name: "toc",
        type: 'checkbox',
        choices: ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        default: ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
    },
];
    async function init() {
    const response = await prompt(questions);
    console.log(response);
    const license = response.license === "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" :
    response.license === "GNU" ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" :
    response.license === "Apache" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" :
    "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    const md = `# ${response.readme}
## Table of Contents
    * Description
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions
## Description
${response.description}
## Installation
- ${response.install}
## Usage
- ${response.usage}
## Licensed Under The ${response.license} License
${license}
## Contributing
[lfreeman0820]
## Testing
- ${response.test}
## Questions
You can find me at [lfreeman0820]
`
    fs.writeFile(`${response.github}.md`, md, (err)=> console.log(err || 'success!'))
}
init();

function writeToFile(fileName, data) {
}

function init() {

}

init();
