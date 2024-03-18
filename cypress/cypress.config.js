const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', (details) => {
      // implement node event listeners here
    })
  },
    baseUrl: "https://infact5-prod-staging-2.herokuapp.com",
  },
});
