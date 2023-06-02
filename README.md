# Cypress-with-Typescript
This project contains end-to-end tests written in Cypress using TypeScript. It utilizes various tools and plugins to enhance the testing experience.

**Prerequisites**
Make sure you have the following software installed on your system:

- Node.js (minimum version 10)
- npm (Node Package Manager)

**Getting Started**
Clone the repository to your local machine:

git clone https://github.com/balaji2711/Cypress-with-Typescript.git
  
Install the project dependencies by navigating to the project directory and running:

> npm install

Set up the Cypress configuration file (cypress.json) according to your project requirements. Refer to the Cypress Configuration documentation for more details.

Run the tests using the following command:

> npx cypress run --reporter mochawesome --reporter-options reportDir="cypress/results"

This command will execute the Cypress tests and generate a Mochawesome report in the cypress/results directory.

After running the tests, merge the generated Mochawesome reports using the following command:

> npx mochawesome-merge "cypress/results/report.json" > mochawesome.json

Finally, generate a consolidated HTML report using the following command:

> npx marge mochawesome.json

This will create an HTML report (mochawesome.html) based on the merged Mochawesome JSON file.

**Additional Tools and Plugins**
This project utilizes the following additional tools and plugins:

Cypress Xpath (https://www.npmjs.com/package/cypress-xpath): Enables the usage of XPath selectors in Cypress tests.
Mochawesome (https://www.npmjs.com/package/mochawesome): Generates detailed HTML reports for Mocha tests.
Mochawesome Merge (https://www.npmjs.com/package/mochawesome-merge): Merges multiple Mochawesome JSON reports into a single file.
@testing-library/cypress (https://www.npmjs.com/package/@testing-library/cypress): Provides utilities for testing with Cypress in conjunction with the Testing Library ecosystem.

**Running Tests via Cypress UI**
To run the tests using the Cypress Test Runner UI, use the following command:

> npm run cypress:open

This command will open the Cypress Test Runner, where you can select and run individual tests or the entire test suite.
