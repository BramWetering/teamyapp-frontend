<reference types="cypress"/>

import Chance from 'chance';
const chance = new Chance();

describe('Starter', () => {
    const title = chance.title();
    const description = chance.description();

    beforeEach(() => {
        cry.visit('http://localhost:3000/teamyapp/home');
    })

    it('has a title', () => {
        cy.contains("Message");
        expect(2).to.equal(2);
    })
})