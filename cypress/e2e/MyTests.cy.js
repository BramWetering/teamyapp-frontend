describe('', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/teamyapp-frontend/test')
    })
  
    it('Test', () => {
      expect(true).to.equal(true)
    })

    it('Test', () => {
      cy.get('#submit_happening')
      cy.get('#title').type('Hello, World')
      cy.get('#happening').type('Message Test')
      cy.get('#submit_happening').click()

    })

  })
  
  