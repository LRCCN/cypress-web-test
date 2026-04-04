# Cypress Web Test

End-to-end test automation project for the Banco web application using Cypress and JavaScript.

## Project Goal

This project validates the main web flows of the bank app through automated E2E tests.
The automation strategy focuses on:

- Reusable custom commands for common interactions
- Test data externalization through fixtures
- Clear Arrange/Act/Assert structure in specs
- HTML reporting with `cypress-mochawesome-reporter`

## Tech Stack

- JavaScript (CommonJS + Cypress support files)
- Cypress
- cypress-mochawesome-reporter

All dependencies are managed in `package.json`.

## Prerequisites

To execute the tests successfully, the following applications must be running:

1. Bank API: https://github.com/juliodelimas/banco-api
2. Bank Web: https://github.com/juliodelimas/banco-web

Also ensure:

- Node.js 18+ (recommended)
- npm installed

## Project Components

```text
cypress-web-test/
|-- cypress.config.js                # Cypress config, baseUrl and reporter
|-- package.json                     # Scripts and dependencies
|-- cypress/
|   |-- e2e/
|   |   |-- login.cy.js              # Login scenarios
|   |   `-- payTransfer.cy.js        # Transfer scenarios
|   |-- fixtures/
|   |   `-- credentials.json         # Valid/invalid login credentials
|   |-- support/
|   |   |-- e2e.js                   # Global support imports + reporter register
|   |   |-- commands.js              # Centralized custom command imports
|   |   `-- commands/
|   |       |-- common.js            # Shared commands (toast, combobox)
|   |       |-- login.js             # Login commands
|   |       `-- transfer.js          # Transfer command
|   `-- reports/                     # Generated mochawesome report artifacts
|-- screenshots/                     # Cypress screenshots
`-- videos/                          # Cypress videos
```

## Installation Guide

1. Clone this repository:

```bash
git clone https://github.com/LRCCN/cypress-web-test.git
cd cypress-web-test
```

2. Install project dependencies:

```bash
npm install
```

3. Confirm Banco API and Banco Web are both running.

4. Verify target URL configured in `cypress.config.js`:

- Current `baseUrl`: `http://localhost:4000`

## Execution Guide

### Open Cypress (interactive mode)

```bash
npm run cy:open
```

### Run all tests (headless)

```bash
npm run cy:run
```

or

```bash
npm test
```

### Run all tests in headed browser mode

```bash
npm run cy:headed
```

### Additional scripts available

```bash
npm run test-qa
npm run test-prod
```

Note: In the current configuration, `test-qa` and `test-prod` execute the same command as `cy:run`. You can later extend them with environment-specific settings.

## Reporter

The project uses `cypress-mochawesome-reporter` configured in:

- `cypress.config.js` (reporter + plugin)
- `cypress/support/e2e.js` (reporter register)

After execution, HTML report artifacts are generated under:

- `cypress/reports/html`

Open `cypress/reports/html/index.html` in a browser to inspect test results.

## Automated Tests

### Login - `cypress/e2e/login.cy.js`

1. Valid credentials should allow access to the transfer screen.
2. Invalid credentials should show the login error toast.

### Transfer - `cypress/e2e/payTransfer.cy.js`

1. Valid transfer data should complete transfer successfully.
2. Transfer above 5000 without token should show authentication-required error message.

## Custom Commands Documentation

Custom commands are organized by domain and imported via `cypress/support/commands.js`.

### Common commands - `cypress/support/commands/common.js`

- `cy.verifyToastMessage(message)`
Checks that `.toast` contains exactly the expected message.

- `cy.selectComboboxOption(fieldLabel, option)`
Finds a combobox by label `for` attribute, opens it, and selects an option.

### Login commands - `cypress/support/commands/login.js`

- `cy.doLoginWithValidCredentials()`
Loads valid credentials from fixture and performs login.

- `cy.doLoginWithInvalidCredentials()`
Loads invalid credentials from fixture and performs login.

### Transfer command - `cypress/support/commands/transfer.js`

- `cy.doTransfer(origin, destination, amount)`
Selects origin and destination accounts, fills amount, and submits transfer.

## Test Data

Fixture file used by login tests:

- `cypress/fixtures/credentials.json`

Structure:

- `valid.username`
- `valid.password`
- `invalid.username`
- `invalid.password`

## Notes

- Keep API and Web services running during test execution.
- Update fixtures if test accounts/passwords change.
- Keep custom commands focused and reusable to reduce duplication in specs.
