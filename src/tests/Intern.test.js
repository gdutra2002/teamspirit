const Employee = require("./employee");

// Constructor function called 'Developer' that takes in 'name' and 'tech'
// Includes a method called 'introduction()'
class Intern extends Employee {
  constructor(fullname, id, school, email) {
    super(fullname, id, email);
    this.fullname = fullname;
    this.role = "Intern";
    this.school = school;
    this.introduction = () => {
      console.log(`Hi, my name is ${this.fullname} and I love ${this.school}!`);
    };
  }
}

// Creates a new object using the 'Developer' constructor
const claudia = new Intern("Claudia", "69", "UC Davis", "sassy1@ratchet.com");

// Intern.printStats();
console.log("---INTERN---");
claudia.printInfo();

// Calls the 'introduction()' method on the new object
claudia.introduction();

module.exports = Intern;
