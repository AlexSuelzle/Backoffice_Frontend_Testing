describe('Benutzer', () => {

    beforeEach(() => {
        cy.login()
    })

    it('should load Benutzer tab', () => {
        //open Benutzer tab
        cy.contains('Benutzer').click()
        cy.url()
            .should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/users')
        cy.get('.page-title')
            .should('contain', 'Benutzer')
        //search for user
        cy.get('#query')
            .type('Nikolaos')
        cy.get('.btn-primary')
            .should('contain', 'Filtern')
            .click()
        cy.get(':nth-child(1) > [data-columns="user-col-1"]')
            .should('contain', 'Nikolaos')   
        cy.get('.btn-group > :nth-child(1)')
        //use Display all button
            .should('contain', 'Display all')
            .click()
        //use Display button
        cy.get('.btn-group > .dropdown-toggle')
            .should('contain', 'Display')
            .click()
      })
})
