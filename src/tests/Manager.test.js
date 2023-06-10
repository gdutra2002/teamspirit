const Employee = require("./employee");

class Manager extends Employee {
  constructor(fullname, officeNumber, id, email) {
    super(fullname, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;

    // this.managers = managers;
  }
}
//   useToot() {
//     console.log(this.sound);
//   }

//   checkManagers() {
//     if (this.managers.length > 4) {
//       console.log(
//         'You have too many managers!'
//       );
//     } else {
//       console.log(`You have room for ${4 - this.managers.length} managers.`);
//     }
//   }
// }

// const managerManagers = [
//   'Bob'
//   'Frank',
//   'Jim',
//   'Bo',
//   'Don',
// ];

const manager = new Manager("54", "M-105", "Bob", "superduper@hotmail.com");

console.log("---MANAGER---");
manager.printInfo();
// manager.useToot();
// manager.checkManagers();

module.exports = Manager;
