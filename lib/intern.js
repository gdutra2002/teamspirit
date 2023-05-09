const Employee = require('./employee');

// Constructor function called 'Developer' that takes in 'name' and 'tech'
// Includes a method called 'introduction()'
function Intern(name, school) {
      this.name = name;
      this.school = school;
      this.introduction = () => {
        console.log(`Hi, my name is ${this.name} and I love ${this.school}!`);
      };

   
    }
    
    // Creates a new object using the 'Developer' constructor
    const claudia = new Intern('Claudia', 'UC Davis');
    
    // Calls the 'introduction()' method on the new object
    claudia.introduction();

    Claudia.printStats();

    module.exports = Intern;