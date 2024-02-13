import { qase } from "cypress-qase-reporter/dist/mocha"

describe('Benutzer', () => {
    // Hier wird der Code für die Ausführung der Datei "login.cy.js" geschrieben
    qase([1, 2]), beforeEach(() => {
        cy.login()
    })

    // Hier kannst du den Code schreiben, der nach der Ausführung von "login.cy.js" ausgeführt werden soll
    it('Benutzer aufrufen', () => {
        cy.get('.navigation-menu > :nth-child(1) > a')
            .should('contain', 'Benutzer')
            .click()
        cy.url().should('contain', '/admin/users')
        cy.get('.page-title')
            .should('contain', 'Benutzer')
        cy.get('#query')
            .type('Nikolaos {enter}')
        cy.get(':nth-child(1) > [data-columns="user-col-1"]')
            .should('contain', 'Nikolaos')    
    })

    it('Geschäftspartner aufrufen', () => {
        cy.get('.navigation-menu > :nth-child(2) > a')
            .should('contain', 'Geschäftspartner')
            .click()
        cy.get('.page-title')  
            .should('contain', 'Geschäftspartner')
        cy.get('#query')
            .type('mg print {enter}')
        cy.get('#cd2630ce-98f7-11ee-bd19-3bcc02a41565 > :nth-child(4)')
            .should('contain', 'MG Print')
    })
})