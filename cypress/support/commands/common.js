Cypress.Commands.add('verifyToastMessage', message => {
    cy.get('.toast').should('have.text', message)
})

Cypress.Commands.add('selectComboboxOption', (fieldLabel, option) => {
    cy.get(`label[for="${fieldLabel}"]`).parent().as(`campo-${fieldLabel}`)
    cy.get(`@campo-${fieldLabel}`).click()
    cy.get(`@campo-${fieldLabel}`).contains(option).click()
})
