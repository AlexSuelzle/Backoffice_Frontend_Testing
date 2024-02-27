//Business Partner-Tab
Cypress.Commands.add('BusinessPartner', () => {
    cy.contains('Geschäftspartner')
            .click()
        cy.url()
            .should('eq', 'https://infact5-prod-staging-2.herokuapp.com/admin/partners')
        cy.contains('Geschäftspartner')
})

//User-Tab
Cypress.Commands.add('User', () => {
    cy.contains('Benutzer').click()
        cy.url()
            .should('eq', 'https://infact5-prod-staging-2.herokuapp.com/admin/users')        
        cy.get('.page-title')
            .should('contain', 'Benutzer')
})