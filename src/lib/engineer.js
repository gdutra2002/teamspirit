const Employee = require("./employee");

class Engineer extends Employee {
  constructor(fullname, github, id, email) {
    super(fullname, id, email);
    this.fullname = fullname;
    this.role = "Engineer";
    this.github = github;
  }

  printStats() {
    console.log(`Info for ${this.fullname} are as following:`);
    console.log(`View professional examples at ${this.github} repo.`);
    console.log("------------");
  }

  getRole() {
    if (this.id <= 0) {
      console.log(`${this.fullname} has been fired!`);
      return false;
    }
    return true;
  }
}

// const Mac = new Engineer('Mac', '123', 'gitRdun.git', 'mac@apple.com');
// const BillyG = new Engineer('BillyG', '321', 'gitShawty', 'bill@ms.com');

console.log("---ENGINEER---");

// Mac.printStats();
// BillyG.printStats();

module.exports = Engineer;
