class Employee {
      constructor(Fullname, id, email ) {
        this.Fullname = Fullname;
        this.id = id;
        this.email = email;
      }
    
      printInfo() {
        console.log(`This employee is called ${this.Fullname} `);
        console.log(`This employee has an id of ${this.id}`);
        console.log(`This employee email is ${this.email}`);
      }

      getName() {
            if (this.id <= 0) {
              console.log(`${this.Fullname} is fired!`);
              return false;
            }
            return true;
          }

          getId() {
            if (this.id <= 0) {
              console.log(`${this.Fullname} is fired!`);
              return false;
            }
            return true;
          }

          getEmail() {
            if (this.id <= 0) {
              console.log(`${this.Fullname} is fired!`);
              return false;
            }
            return true;
          }

          getRole() {
            if (this.id <= 0) {
              console.log(`${this.Fullname} is fired!`);
              return false;
            }
            return true;
          }


    }
    module.exports = Employee;
    