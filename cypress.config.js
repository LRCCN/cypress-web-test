module.exports = {
  allowCypressEnv: false,

  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: 'http://localhost:4000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
};
