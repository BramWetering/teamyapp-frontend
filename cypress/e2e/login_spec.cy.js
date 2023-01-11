describe('/login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/teamyapp/home')
  })

  it('TeamyApp', () => {
    cy.contains('h4', 'TeamyApp')
  })

  it('Greetings', () => {
    cy.contains('p', "Deze app vereist login om toegang te krijgen. Log alstublieft eerst in.")
  })
})

