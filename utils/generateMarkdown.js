function generateProjectUrl (github, title){
  const caseTitle = title.toLowerCase().split(" ").join("-")
  return `https://github.com/${github}/${caseTitle}`
}

function renderLicenseSection (license){
  if(license !== "None" ) {
    return (`
    ## License 

    this project is licensed under the ${license} license
    `)
  }
  return ""
}

function renderBadge(license,github,title){
  if(license !== "None"){
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})` 
  }
  return ""
}



function generateMarkdown(data) {
  return `
# ${data.title}
${renderBadge(data.license, data.github, data.title)}

## description

${data.description}

## table of contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
${data.installation}

## usage
${data.usage}

${renderLicenseSection(data.license)}

## contributing
${data.contributing}

## tests
to run tests run the following commands
${data.test}

## questions
<img src="${data.avatar_url}" style="border-radius: 16px;" width="30"/>
if you have any questions about the repo, open an issue or contact ${data.github} ${data.url} directly at ${data.email}

`;
}

module.exports = generateMarkdown;

// write out a function that will render a license badge 
// a function that generates projects URL, takes in github and title 
// a function to render a section to put license in, call in generate markdown function
// documentation for getting badge off of github