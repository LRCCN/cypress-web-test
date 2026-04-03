describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('/')
    cy.screenshot('login-page')
  })

  it('Login with valid credentials must permit access', () => {
    //Act
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.valid.username)
      cy.get('#senha').click().type(credentials.valid.password)
    })
    cy.screenshot('login-credentials')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
  it('Login with invalid credentials must show error message', () => {
    //Act
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.invalid.username)
      cy.get('#senha').click().type(credentials.invalid.password)
    })  
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('be.visible').and('contain', 'Erro no login. Tente novamente.')
  })
})
