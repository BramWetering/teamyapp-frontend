describe('login spec', () => {
    before(() => {
     cy.login();
    })

    it('should be logged in', () => {
        cy.visit('/');
    })
});