const Employee = require("./employee");

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

// const claudia = new Intern('Claudia', '69', 'UC Davis', 'sassy1@ratchet.com');

console.log("---INTERN---");
// claudia.printInfo();
// claudia.introduction();

module.exports = Intern;
