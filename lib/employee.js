class Employee {
      constructor(fullname, id, email ) {
        this.fullname = fullname;
        this.id = id;
        this.email = email;
        this.role = "Employee";
      }
    
      printInfo() {
        console.log(`This employee is called ${this.fullname} `);
        console.log(`This employee has an id of ${this.id}`);
        console.log(`This employee email is ${this.email}`);
      }

      getName() {
            // if (this.id <= 0) {
            //   console.log(`${this.fullname} is fired!`);
            //   return false;
            // }
            // return true;
            return this.fullname;
          }

          getId() {
            // if (this.id <= 0) {
            //   console.log(`${this.fullname} is fired!`);
            //   return false;
            // }
            // return true;
            return this.id;
          }

          getEmail() {
            // if (this.id <= 0) {
            //   console.log(`${this.fullname} is fired!`);
            //   return false;
            // }
            // return true;
            return this.email;
          
          }

          getRole() {
            // if (this.id <= 0) {
            //   console.log(`${this.fullname} is fired!`);
            //   return false;
            // }
            // return true;
            return this.role;
          }


    }
    module.exports = Employee;
    