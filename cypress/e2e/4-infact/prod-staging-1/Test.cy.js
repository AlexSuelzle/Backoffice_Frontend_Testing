/// <reference types="cypress" />

describe('Benutzer', () => {
    // Hier wird der Code für die Ausführung der Datei "login.cy.js" geschrieben
    beforeEach(() => {
        cy.login()
    })

    // Hier kannst du den Code schreiben, der nach der Ausführung von "login.cy.js" ausgeführt werden soll
    it('Benutzer aufrufen', () => {
        //cy.visit('https://infact5-prod-staging-1.herokuapp.com/admin')
        cy.get(seelect('users')).click()
        cy.get('.page-title').should('contain', 'Benutzer')
        cy.get('#query').type('Nikolaos {enter}')
        cy.get(':nth-child(1) > [data-columns="user-col-1"]').should('contain', 'Nikolaos')    
    })

    it('Geschäftspartner aufrufen', () => {
        cy.get(seelect("partners")).click()
        cy.get('.page-title').should('contain', 'Geschäftspartner')
        cy.get('#query').type('Deine Mudda oHG {enter}')
        cy.get(':nth-child(1) > [data-columns="business-partner-col-1"]').should('contain', 'Deine Mudda oHG')
    })

})

var seelect = function select(item) {
    cy.get(`[href="/admin/${item}"]`).click();
}
