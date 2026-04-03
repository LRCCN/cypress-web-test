describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000')
  })

  it('Login with valid credentials must permit access', () => {
    //Act
    cy.get('#username').click().type('luiz.neto')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
  it('Login with invalid credentials must show error message', () => {
    //Act
    cy.get('#username').click().type('luiz.neto')
    cy.get('#senha').click().type('12312312')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('be.visible').and('contain', 'Erro no login. Tente novamente.')
  })
})
