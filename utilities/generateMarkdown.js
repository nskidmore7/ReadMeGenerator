function generateMarkdown(data) {
    let license = "License";
    let licenseBadge = "";
    switch (data.license) {
        case "None":
            license = "";
        case "Apache License 2.0":
            licenseBadge =
                "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "BSD 2-Clause License":
            licenseBadge =
                "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        case "BSD 3-Clause License":
            licenseBadge =
                "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        case "CC0 1.0 Universal":
            licenseBadge =
                "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
        case "Eclipse Public License 2.0":
            licenseBadge =
                "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        case "GNU GPL v2":
            licenseBadge =
                "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        case "GNU GPL v3":
            licenseBadge =
                "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        case "GNU AGPL v3":
            licenseBadge =
                "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        case "GNU LGPL v3":
            licenseBadge =
                "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        case "MIT License":
            licenseBadge =
                "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Mozilla Public License 2.0":
            licenseBadge =
                "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        case "The Unlicense":
            licenseBadge =
                "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }


    return 
  `${data.title}
  ${license}
  ${licenseBadge}
  Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Testing](#Testing)
  * [Contact](#Contact)
  Description
  ${data.description}
  Installation
  ${data.installation}
  Usage 
  (${data.usage})
  Contribution
  ${contribution}
  Testing
  ${data.test}
  Contact
    Please feel free to contact me at ${data.userEmail} or @${data.githubUsername} on github.;
`}

module.exports = generateMarkdown;