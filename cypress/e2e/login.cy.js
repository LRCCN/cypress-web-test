describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('/')
    cy.screenshot('login-page')
  })

  it('Login with valid credentials must permit access', () => {
    //Act
    cy.doLoginWithValidCredentials()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
  it('Login with invalid credentials must show error message', () => {
    //Act
    cy.doLoginWithInvalidCredentials()

    //Assert
    cy.verifyToastMessage('Erro no login. Tente novamente.')
  })
})
