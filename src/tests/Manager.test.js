const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Employee = require("./test/employee");

// class Manager extends Employee {
//   constructor(fullname, officeNumber, id, email) {
//     super(fullname, id, email);
//     this.role = "Manager";
//     this.officeNumber = officeNumber;
//     // this.managers = managers;
//   }
// }
//   useToot() {
//     console.log(this.sound);
//   }


describe("Manager", () => {
  test("should render html", () => {
    const expectedManager = ' manager ';
  expect(actualManager).toEqual(expectedManager);
});
});

test("should render an employee", () => {
  const expectedMax =
    'Max';
  const max = new MAX();
  expect(max.render()).toEqual(expectedMax);
});

  checkManagers() ; {
    if (this.managers.length > 2) {
      console.log(
        'You have too many managers!'
      );
    } else {
      console.log(`You have room for ${2 - this.managers.length} managers.`);
    }
  }


// const managerManagers = [
//   'Bob'
//   'Frank',
//   'Jim',
//   'Bo',
//   'Don',
// ];

const manager = 
new Manager("54", "M-105", "Bob", "superduper@hotmail.com");
new Manager("49", "M-106", "Frank", "franklin@aol.com");

console.log("---MANAGER---");
manager.printInfo();
// manager.useToot();
// manager.checkManagers();

// module.exports = Manager;
