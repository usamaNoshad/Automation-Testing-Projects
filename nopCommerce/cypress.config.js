const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1100,
  viewportHeight: 700,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.nopcommerce.com/",
    watchForFileChanges: false,
  },
});
