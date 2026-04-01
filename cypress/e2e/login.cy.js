describe('Login', () => {
  it('Login with valid credentials must permit access', () => {
    //Arrange
    cy.visit('http://localhost:4000')

    //Act
    cy.get('#username').click().type('luiz.neto')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})
