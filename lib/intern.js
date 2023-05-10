const Employee = require('./employee');

// Constructor function called 'Developer' that takes in 'name' and 'tech'
// Includes a method called 'introduction()'
class Intern extends Employee {
  constructor(Fullname, school ) {
      this.Fullname = Fullname;
      this.school = school;
      this.introduction = () => {
        console.log(`Hi, my name is ${this.Fullname} and I love ${this.school}!`);
      };
    }
    }
    
    // Creates a new object using the 'Developer' constructor
    const claudia = new Intern('Claudia', 'UC Davis');
    
    // Calls the 'introduction()' method on the new object
    claudia.introduction();

    Claudia.printStats();

    module.exports = Intern;