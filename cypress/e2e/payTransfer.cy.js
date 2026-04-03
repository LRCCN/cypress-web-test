describe('Transfer', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.doLoginWithValidCredentials()
    })
    it('It should transfer when I provide valid data and a valid amount.', () => {
        //Act
        cy.doTransfer('João da Silva', 'Maria Oliveira', '11')

        //Assert
        cy.verifyToastMessage('Transferência realizada!')
    })

    it('Must show error message when attempt to transfer more than 5K without token.', () => {
        //Act
        cy.doTransfer('Maria Oliveira', 'João da Silva', '5000.01') 

        //Assert
        cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})
