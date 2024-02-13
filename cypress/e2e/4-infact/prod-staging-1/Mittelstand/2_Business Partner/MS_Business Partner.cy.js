describe('Benutzer', () => {

    beforeEach(() => {
        cy.login()
    })

    it('should load Geschäftspartner tab', () => {
        
        //open Geschäftspartner tab
        cy.contains('Geschäftspartner')
            .click()
        cy.url()
            .should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/partners')
        cy.get('.page-title')
            .should('contain', 'Geschäftspartner')
        
        //search for busness partner
        cy.get('#query')
            .type('M872567')
        cy.get('.filter-row > .btn')
            .should('contain', 'Filtern')
            .click()
        cy.get('#f061b53c-98f1-11ee-992b-d7106614042b > :nth-child(4)')
            .should('contain', 'NRDS GmbH')   
        
        //use Display all button
        cy.get('.btn-group > :nth-child(1)')
            .should('contain', 'Display all')
            .click()
        cy.get('#partners_table-col-7')
            .should('contain', 'Steuernummer')
        
        //create new business partner (Juristische Person)
        cy.get('#new-bp-button')
            .should('contain', 'Geschäftspartner hinzufügen')
            .click()
        cy.get('#bp-search')
            .type('Techno Union')
        cy.get('#not-found')
            .check()
        cy.get('#open-bp-form-btn-new')
            .should('contain', 'Neuen Mandanten anlegen')
            .click()
        cy.get('.m-l-5 > a')
            .should('contain', 'Juristische Person')
            .click()
        cy.get('#business_partner_company')
            .type('Techno Union')
        cy.get('#select2-business_partner_legal_form-container')
            .click()
        cy.get('.select2-search__field')
            .type('UG {enter}')
        cy.contains('UG (haftungsbeschränkt)')
        cy.get('#select2-business_partner_registration_source-container')
            .type('Infact {enter}')
        cy.contains('Infact Finetrading')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > .col-xs-7 > #business_partner_contact_data_attributes_line1')
            .type('Musterstraße 5')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .col-xs-2 > #business_partner_contact_data_attributes_zip')
            .type('09123')
        
    })

})