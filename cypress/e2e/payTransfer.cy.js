describe('Transfer', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('/')
      cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.valid.username)
      cy.get('#senha').click().type(credentials.valid.password)
    })
    cy.contains('button', 'Entrar').click()
  })
  it('It should transfer when I provide valid data and a valid amount.', () => {
    cy.get('label[for="conta-origem"]').parent().as('originAccount')
    cy.get('@originAccount').click()
    cy.get('@originAccount').contains('João da Silva').click()

    cy.get('label[for="conta-destino"]').parent().as('destinationAccount')
    cy.get('@destinationAccount').click()
    cy.get('@destinationAccount').contains('Maria Oliveira').click()

    cy.get('#valor').click().type('11')

    cy.contains('button', 'Transferir').click()

    cy.get('.toast').should('have.text', 'Transferência realizada!')
})
})
