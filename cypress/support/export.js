//PDF-Button
Cypress.Commands.add('PDFButton', () => {
    cy.get('.col-12 > .btn') //PDF Dokumente anzeigen & erstellen-Button
            .should('contain', 'PDF Dokumente anzeigen & erstellen')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer')
        cy.get('[class="page-title"]')
            .should('contain', 'PDF Dokumente')
})