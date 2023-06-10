const Employee = require("./employee");

class Manager extends Employee {
  constructor(fullname, officeNumber, id, email) {
    super(fullname, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }
}

// const manager = new Manager('54', 'M-105', 'Bob', 'superduper@hotmail.com' );

console.log("---MANAGER---");
// manager.printInfo();

module.exports = Manager;
