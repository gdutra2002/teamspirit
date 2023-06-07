const Employee = require("./lib/employee");
const { manager } = require("./lib/manager");
const { intern } = require("./lib/intern");
const { engineer } = require("./lib/engineer");

const employee = new Employee("The Company", manager, intern, engineer);
// ^^^

// employee.welcome();

// var questions

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
// const { generateHTML } = require("fs", writeFile);
const { writeFile } = require("fs").promises;

// TODO: Create an array of questions for user input
// const questions = [];

class CLI {
  run() {
    // const promptUser = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "fullname",
          message: "What is your full legal?",
        },
        {
          type: "input",
          name: "motivation",
          message: "What was your motivation to apply for this job?",
        },
        {
          type: "input",
          name: "why",
          message: "Why did you select to apply at this company?",
        },
        {
          type: "input",
          name: "problem",
          message: "What was an example of a problem to solve in work or life?",
        },
        {
          type: "input",
          name: "learn",
          message: "What did you learn?",
        },
        {
          type: "input",
          name: "address",
          message: "What is the url of your personal webpage or blog?",
        },
        {
          type: "input",
          name: "credits",
          message:
            "Add additional personel, colaboration, or institutions to give credit?",
        },
        {
          type: "input",
          name: "license",
          message:
            "(Managers only) Add at least one professional license information.",
        },
        {
          type: "input",
          name: "badges",
          message:
            "(Interns only) Enter a social media platform and user name.",
        },
        {
          type: "checkbox",
          message: "(Engineers only) What main languages do you use to code?",
          name: "stack",
          choices: [
            "HTML",
            "CSS",
            "github",
            "npm inquery",
            "terminal",
            "APIs",
            "jQuery",
            "JavaScript",
            "MySQL",
            "Node.js",
            "Express.js",
            "MERN",
            "State",
            "MongoDB",
            "Python",
            "Fetch",
            "Handelbars",
            "React",
          ],
        },
        {
          type: "list",
          message: "What is your preferred method of communication?",
          name: "contact",
          choices: ["email", "github", "Linked-In"],
        },
        {
          type: "input",
          name: "github",
          message: "(Engineers only) Enter your GitHub Username",
        },
        {
          type: "input",
          name: "email",
          message: "Enter your email address",
        },
        {
          type: "input",
          name: "id",
          message: "Enter your 6 digit DOB.",
        },
      ])





  }
}

module.exports = CLI;
