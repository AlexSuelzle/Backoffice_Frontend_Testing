//Business Partner-Tab
Cypress.Commands.add('BusinessPartner', () => {
    cy.contains('Geschäftspartner')
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/partners')
    cy.contains('Geschäftspartner')
})

//User-Tab
Cypress.Commands.add('User', () => {
    cy.contains('Benutzer')
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/users')     
    cy.get('.page-title')
        .should('contain', 'Benutzer')
})

//Tools-Tab
Cypress.Commands.add('Tools', () => {
    cy.contains('Tools')
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/outgoing_messages/index')
    cy.contains('Kommunikations-Log')
})

//Export-Tab
Cypress.Commands.add('Export', () => {
    cy.contains('Export')
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/export')
    cy.contains('Export')
})

//Einstellungen-Tab
Cypress.Commands.add('Settings', () => {
    cy.contains('Einstellungen')
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/settings')
    cy.contains('Einstellungen Mittelstand')
})