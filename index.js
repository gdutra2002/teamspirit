const jest = require('jest');

// TODO: Include packages needed for this application

const inquirer = require('inquirer');
// const fs = require('fs');

const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {
      return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your full legal?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation to apply for this job?',
    },
    {
      type: 'input',
      name: 'why',
      message: 'Why did you select to apply at this company?',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What was an example of a problem to solve in work or life?',
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'address',
      message: 'What is the url of your personal webpage or blog?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Add additional personel, colaboration, or institutions to give credit?',
    },
    {
      type: 'input',
      name: 'license',
      message: '(Managers only) Add at least one professional license information.',
    },
    {
      type: 'input',
      name: 'badges',
      message: '(Interns only) Enter a social media platform and user name.',
    },
    {
      type: 'checkbox',
      message: '(Engineers only) What main languages do you use to code?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'github', 'npm inquery', 'terminal', 'APIs', 'jQuery','JavaScript', 'MySQL', 
              'Node.js', 'Express.js', 'MERN', 'State','MongoDB','Python', 'Fetch', 'Handelbars' , 'React'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'github', 'Linked-In'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
};


const generateHTML = ({ name, motivation, why, problem, learn, address, credits, license, badges, stack, contact, github, email, linkedin }) =>

`# ${name}

## Description
* ${motivation}.
* ${why}.
* ${problem}.
* ${learn}.

## Installation
${address}

## Usage

![cat crch](develop/utils/screenshot.png)

## Credits
${credits}

## License
${license}   <br>
See MIT license


## Badges
${badges}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
![Github license](https://img.shields.io/badge/license-MIT-pink.svg)

## Features
${stack}

## How to Contribute
Prefered method of contact: ${contact}.  <br>
Link to source:
${github}    <br>
Contact author:
${email}   <br>
Profile
${linkedin}`;


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// .then((data) => {
//       const filename = `${data.name.toLowerCase().split('').join('')}.md`;
  
//       fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//       );
//     });
  

// TODO: Create a function to initialize app
// function init() {
      const init =() => {

      promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('teamspirit.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to teamspirit.html'))
      .catch((err) => console.error(err));
};

// Function call to initialize app
init();