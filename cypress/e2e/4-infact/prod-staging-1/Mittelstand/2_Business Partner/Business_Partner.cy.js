describe('Geschäftspartner', () => {

    beforeEach(() => {
        cy.login() //login.js
        cy.BusinessPartner() //tabs.js
    })

    it('Search a existent business partner', () => {
        cy.SearchBusinessPartner() //business_partner.js
    })

    it('Abort the process of creating a business partner (legal entity)', () => {
        cy.BusinessPartnerModal() //business_partner.js
        cy.LegalEntityTab() //business_partner.js
        cy.BusinessPartnerCancel() //business_partner.js
    })

    it('Abort the process of creating a business partner (natural person)', () => {
        cy.BusinessPartnerModal() //business_partner.js
        cy.NaturalPersonTab() //business_partner.js
        cy.BusinessPartnerCancel() //business_partner.js
    })

    it('create new business partner (legal entity)', () => {
        cy.BusinessPartnerModal()

        //create new business partner (legal entity)
        cy.LegalEntityTab() //business_partner.js
        cy.CreateLegalEntity() //business_partner.js

        //search the new business partner (legal entity)
        cy.BusinessPartner()
        cy.SearchNewBusinessPartner() //business_partner.js

        //edit new business partner (legal entity)

        //delete the new business partner (legal entity)
        cy.DeleteBusinessPartner() //business_partner.js
    })

    it('create new business partner (legal entity - office)', () => {
        cy.BusinessPartnerModal()

        //create new business partner (legal entity - office)
        cy.LegalEntityTab()
        cy.BusinessPartnerCancel() //placeholder

        //edit new business partner (legal entity office)

        //delete the new business partner (legal entity office)
        //cy.DeleteBusinessPartner()
    })

    it('create new business partner (natural person)', () => {
        cy.BusinessPartnerModal()

        //create new business partner (natural person)
        cy.NaturalPersonTab()
        cy.CreateNaturalPerson() //business_partner.js

        //edit new business partner (natural person)

        //delete the new business partner (natural person)
        cy.DeleteBusinessPartner()     
    })

})