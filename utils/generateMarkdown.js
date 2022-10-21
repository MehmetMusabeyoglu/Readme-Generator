// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseInput) {
  let badge = "";

  switch (licenseInput) {
    case "Apache 2.0 License":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3-Clause License":
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Creative Commons CC0":
      badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU GPL v3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "The Hippocratic License 2.1":
      badge = "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
      break;
    case "IBM Public License Version 1.0":
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "ISC License (ISC)":
      badge = "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "The MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Attribution License (BY)":
      badge = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      break;
    case "The Perl License":
      badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "SIL Open Font License 1.1":
      badge = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      break;
    case "The Unlicense":
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "The zlib/libpng License":
      badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      break;
    case "None":
      badge = "";
      break;
    default:
      console.log("There is an unexpected problem in rendering the license badge!");
      break;
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseInput) {
  let link = "";

  switch (licenseInput) {
    case "Apache 2.0 License":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost Software License 1.0":
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD 3-Clause License":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Creative Commons CC0":
      link = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Eclipse Public License 1.0":
      link = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU GPL v3":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "The Hippocratic License 2.1":
      link = "https://firstdonoharm.dev";
      break;
    case "IBM Public License Version 1.0":
      link = "https://opensource.org/licenses/IPL-1.0";
      break;
    case "ISC License (ISC)":
      link = "https://opensource.org/licenses/ISC";
      break;
    case "The MIT License":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla Public License 2.0":
      link = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Attribution License (BY)":
      link = "https://opendatacommons.org/licenses/by/";
      break;
    case "The Perl License":
      link = "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "SIL Open Font License 1.1":
      link = "https://opensource.org/licenses/OFL-1.1";
      break;
    case "The Unlicense":
      link = "http://unlicense.org/";
      break;
    case "The zlib/libpng License":
      link = "https://opensource.org/licenses/Zlib";
      break;
    case "None":
      link = "";
      break;
    default:
      console.log("There is an unexpected problem in rendering the license link!");
      break;
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInput) {
  // let badge = renderLicenseBadge(licenseInput);
  let link = renderLicenseLink(licenseInput);
  let licenseSelection = "";
  
  if(licenseInput === "None"){
    licenseSelection = "This project has no license!";
  }
  else{
    licenseSelection = `This project is licensed under the [${licenseInput}](${link})`;
  }

  return licenseSelection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInputs) {
  // var licenseSelection = renderLicenseSection(licenseInput);

  return `

# ${userInputs.projectName}
${renderLicenseBadge(userInputs.projectLicense)}

## Description
${userInputs.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${userInputs.dependenciesCommand}
 
## Usage
${userInputs.usingRepo}

## License 
${renderLicenseSection(userInputs.projectLicense)}

## Contributing
${userInputs.contributingRepo}


## Tests
${userInputs.testCommand}

## Questions 
If you have any questions about repo, open an issue or contact me directly at [${userInputs.userEmail}](mailto:${userInputs.userEmail}) You can find more of my work at [GitHub](https://github.com/${userInputs.userName}).

`;
}

module.exports = generateMarkdown;
