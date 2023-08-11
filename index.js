// Required packages
const inquirer = require("inquirer");
const fs = require("fs");

// Function to create a formatted readme
const generateReadme = ({
  title,
  description,
  installation,
  usage,
  contributes,
  license,
  githubUser,
  email,
}) =>
  `# ${title}

  ## Description

  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## Credits

  ${contributes}

  ## License

  ${license}

  ## Questions

  [Link to my github](https://github.com/${githubUser})

  For any questions I can be reached at ${email}.

  `;

// Asks user questions when file is ran in order to get content for readme
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Type in your description",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps to installing the project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What are the intructions for using this project?",
    },
    {
      type: "input",
      name: "contributes",
      message: "List any contributers, if none just say no contributers",
    },
    {
      type: "list",
      name: "license",
      message: "What is the license for this project?",
      choices: [
        "MIT License",
        "Apache License 2.0",
        "Creative Commons Zero v1.0 Universal",
      ],
    },
    {
      type: "input",
      name: "githubUser",
      message: "What's your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What's your email?",
    },
  ])
  .then((answers) => {
    // Takes answers object from prompts and inputs responses as parameters for generateReadme
    const markdownContent = generateReadme(answers);
    // Creates readme file with content from markdownContent
    fs.writeFile("README.md", markdownContent, (err) => {
      err ? console.log(err) : console.log("Successfully created readme!");
    });
  });
