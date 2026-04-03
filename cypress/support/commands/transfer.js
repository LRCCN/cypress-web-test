Cypress.Commands.add('doTransfer', (origin, destination, amount) => {
    cy.selectComboboxOption('conta-origem', origin)
    cy.selectComboboxOption('conta-destino', destination)
    cy.get('#valor').click().type(amount)
    cy.contains('button', 'Transferir').click()
})