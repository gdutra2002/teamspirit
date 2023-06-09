const { writeFile } = require("fs").promises;

class MAX {
  constructor() {
    this.employeeElement = "";
  }

  render() {
                return {
          // .then((answers) =>
          // writeFile("teamspirit.html", generateHTML(answers))
        // )
        // .then(() => {
          // console.log("Successfully wrote to teamspirit.html");
          // promptUser();
        // })

    // .then(() => {

    setEmployee(employee) {
      this.employeeElement = employee.render();
    },
    
    const: generateHTML() = ({
      fullname,
      motivation,
      why,
      problem,
      learn,
      address,
      credits,
      license,
      badges,
      stack,
      contact,
      github,
      email,
      id,
    }) =>
      `
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Teamspirit</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./src/spirit.css">
</head>
<body>
<header>
    <div id= "Welcome"> </div>
    <h1> Welcome to the Company! </h1>
    <h2> <a href= "https://gdutra2002.github.io/Portfolio/">Company Showcase</h2>
</header>

<div class="hero">
    <nav class="navbar">
      <h1 class="Title"><a class="Title"> Current Team Members </a></h1>
      <ul>
          <li><a href="#Employees/">Employees </a></li>
          <li><a href="#Engineers/"> Engineers </a></li>
          <li><a href="#Managers/"> Managers </a></li>
          <li><a href="#Interns/"> Interns </a></li>
    </ul>
    </nav>
</div>

<div id="Employees/" class="container">
    <section class="project-section">
      <button>
          <a href="https://github.com/gdutra2002">Employees</a>
      </button>
      <h1>Link to all Employees </h1>    
      ${fullname}  
      <h2> ${email} </h2>
    </section>
</div>

<div id="Engineers/" class="container">
    <section class="project-section">
      <button>
          <a href="https://gdutra2002.github.io/Project1/"> Engineers </a>
      </button>
      <h1>Design / Build somthing Cool</h1>
      <h1> ${stack} </h1>
      ${github} 
    </section>
</div>

<div id="Managers/" class="container">
    <section class="project-section">
      <button>
          <a href="https://gdutra2002.github.io/Horiseon/">Managers</a>
      </button>
      <h1>Money Marketing and Monkey Business</h1>
      <h2> ${license} </h2>
      <h3> ${id} </h3>
    </section>
</div>

<div id="Interns/" class="container">
    <section class="project-section">
      <button>
          <a href="https://gdutra2002.github.io/prework-study-guide/">Interns</a>
      </button>
      <h1>Quick basic social media genius</h1> 
      <h3> ${badges} </h3>     
    </section>
</div>

<!-- testing -->
<div class="flex-container">
<a href="#" class="flex-item employee">
<div class="col-lg-9 pb-3">
  <section
    id="employee"
    class="mt-3"
    role="region"
    aria-live="polite"
  ></section>
</div>
<div>
  <h3>Today's Roster</h3>
  <span> ${fullname} </span>
  <span> ${address} </span>
  ${contact}
  <h2> ${email} </h2>
</div>
</a>       
</div>

<section>
    <div class="hero">
          <nav class="navbar">
    <!-- <img src= "/assets/transk8.jfif"> -->
    
    <div class="container img">
          <h1><a class="Title" href="#Welcome"> Company Showcase </a></h1>
          <p></p>    
          <div>
          <h2> Link to Bio ...</h2>
          <p> ${credits} </p>
          <h2> ... to get in contact!</h2>
          Description
          * ${motivation}.
          * ${why}.
          * ${problem}.
          * ${learn}.

          </div>    
    </div>
          </nav>
    </div>
</section>
<footer>
          <nav class="navbar">
    <h1 class="Title"><a class="Title"></a></h1>
    <ul>
          <li><a href="https://linkedin.com/in/gary-e-dutra-15357940">Bio / Contact </a></li>
          <li>  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath) </li>
          <li>  ![Github license](https://img.shields.io/badge/license-MIT-pink.svg) </li>
    </ul>
          </nav>
</footer>
</body>
</html>

`,

    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}

    // .then((data) => {
    //       const filename = `${data.name.toLowerCase().split('').join('')}.md`;

    //       fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //         err ? console.log(err) : console.log('Success!')
    //       );
    //     });

    // TODO: Create a function to initialize app
    // }

    // .then(() => {
    // function init() {
      const : init = () => {

      promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function

        .then((answers) => writeFile("teamspirit.html", generateHTML(answers)))
        .then(() => {
          console.log("Successfully wrote to teamspirit.html");
          // promptUser();
        })

        .catch((err) => console.error(err));
    }

    // Function call to initialize app
    ,init(){}
    // });
  }
}
}

module.exports = MAX;
