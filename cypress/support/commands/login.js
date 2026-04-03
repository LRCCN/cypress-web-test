Cypress.Commands.add('doLoginWithValidCredentials', () => {
cy.fixture('credentials').then(credentials => {
    cy.get('#username').click().type(credentials.valid.username)
    cy.get('#senha').click().type(credentials.valid.password)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('doLoginWithInvalidCredentials', () => {
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.invalid.username)
      cy.get('#senha').click().type(credentials.invalid.password)
    })  
    cy.contains('button', 'Entrar').click()
})