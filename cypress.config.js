const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b9unha',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});