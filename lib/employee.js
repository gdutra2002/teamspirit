class Employee {
      constructor(name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;
      }
    
      printInfo() {
        console.log(`This employee is called ${this.name} `);
        console.log(`This employee has an id of ${this.id}`);
        console.log(`This employee email is ${this.email}`);
      }

      getName() {
            if (this.id <= 0) {
              console.log(`${this.name} is fired!`);
              return false;
            }
            return true;
          }

          getId() {
            if (this.id <= 0) {
              console.log(`${this.name} is fired!`);
              return false;
            }
            return true;
          }

          getEmail() {
            if (this.id <= 0) {
              console.log(`${this.name} is fired!`);
              return false;
            }
            return true;
          }

          getRole() {
            if (this.id <= 0) {
              console.log(`${this.name} is fired!`);
              return false;
            }
            return true;
          }


    }
    module.exports = Employee;
    