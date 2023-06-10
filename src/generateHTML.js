const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const MAX = require("./max");

function generateHTML(data) {
  return `# ${data.title}
    
    `;
}

module.exports = generateHTML;

// function generateHTML(data) {
//       return `# ${data.title}

//     `;
//     }

//     module.exports = generateHTML;
