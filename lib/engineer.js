const Employee = require('./employee');

class Engineer extends Employee {
      constructor(fullname, github, id, email ) {
        super(fullname, id, email);
        this.fullname = fullname;
        this.role = "Engineer";
        this.github = github;
      }
    
      // Method which prints all of the info of an engineer.
      printStats() {
        console.log(`Info for ${this.fullname} are as following:`);
        console.log(`View professional examples at ${this.github} repo.`);
        console.log('------------');
      }
    
      // Method which determines whether or not a character's "hitpoints" are less then zero
      // Returns true or false depending upon the outcome
      getRole() {
        if (this.id <= 0) {
          console.log(`${this.fullname} has been fired!`);
          return false;
        }
        return true;
      }
    }
    
    // Creates two unique employeers with the "Engineer" constructor
    const Mac = new Engineer('Mac', '123', 'gitRdun.git', 'mac@apple.com');
    const BillyG = new Engineer('BillyG', '321', 'gitShawty', 'bill@ms.com');
    

    console.log('---ENGINEER---');

    Mac.printStats();
    BillyG.printStats();
    
    module.exports = Engineer;