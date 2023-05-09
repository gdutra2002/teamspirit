const Employee = require('./employee');

class Engineer {
      constructor(name, github ) {
        this.name = name;
        this.github = github;
      }
    
      // Method which prints all of the info of an engineer.
      printStats() {
        console.log(`Info for ${this.name} are as following:`);
        console.log(`View professional examples at ${this.github} repo.`);
        console.log('------------');
      }
    
      // Method which determines whether or not a character's "hitpoints" are less then zero
      // Returns true or false depending upon the outcome
      getRole() {
        if (this.id <= 0) {
          console.log(`${this.name} has been fired!`);
          return false;
        }
        return true;
      }
    }
    
    // Creates two unique employeers with the "Engineer" constructor
    const Mac = new Engineer('Mac', 'mac@apple.com');
    const BillyG = new Engineer('BillyG', 'bill@ms.com');
    
    Mac.printStats();
    BillyG.printStats();
    
    module.exports = Engineer;