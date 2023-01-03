//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")
//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'repoLink',
        message: 'Enter Repository Link:',
      },
      {
        type: 'input',
        name: 'liveLink',
        message: 'Enter your Live Link:',
      },
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contributing:',
      },
      {
          type: 'input',
          name: 'tests',
          message: 'Enter tests:',
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Enter usage information:',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your license:',
        choices: [
            {name: "GNU AGPLv3", value: "AGPL%20v3-blue"},
            {name: "GNU GPLv3", value: "GPLv3-blue"},
            {name: "GNU LGPLv3", value: "LGPL%20v3-blue"},
            {name: "Mozilla Public 2.0", value: "MPL%202.0-brightgreen"},
            {name: "Apache 2.0", value: "Apache%202.0-blue"},
            {name: "MIT",value: "MIT-yellow"},
            {name: "Boost Software 1.0", value: "Boost%201.0-lightblue"},
            {name: "The Unlicense", value: "Unlicense-blue"},
            "none",
        ]
      },
];

//function to write README file
function writeReadMe(fileName, data) {
    
    return fs.writeFile(path.join(__dirname, "/dist/", fileName), data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
    
        console.log(`Wrote to ${fileName}`);
      });
    }


//function to initialize app

function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
   // const readMePageContent = writeReadMe(answers);

    writeReadMe('README.md', generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created readMe.md!')
    );
  });
}

// Function call to initialize app
init();
