// Function for license links and badges
function generateLicense(license) {
  if (license == 'MIT') {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license == 'Apache 2.0') {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license == 'GPLv3') {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Screenshot](#screenshot)
  * [Deployment](#deployment)
  </br>
  </br>
  
  ## Description
  ${data.Description}
  </br>
  
  ## To use this application, please install:
  * ${data.Installation}
  </br>
  
  ## Usage
  ${data.Usage}
  </br>
  
  ## License 
  ${generateLicense(data.License)}
  </br>
  
  ## Test
  ${data.Test}
  </br>
  
  ## Contributing
  ${data.Contributing}
  </br>
  </br>
  
  # CONTACT:
  Github: ${data.Github}
  Email: ${data.Email}
  `;
  }
  
  module.exports = generateMarkdown;