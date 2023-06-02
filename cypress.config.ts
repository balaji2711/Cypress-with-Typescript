import { defineConfig } from "cypress";

export default defineConfig({
  "reporter": "mochawesome",
   "reporterOptions": {
      "reportFilename": "report",
      "charts": true,
      "reportDir": "cypress/results",
      "overwrite": false,
      "html": false,
      "json": true
   },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
