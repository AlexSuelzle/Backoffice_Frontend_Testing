//Search a existent business partner
//SearchBusinessPartner
Cypress.Commands.add('SearchBusinessPartner', () => {
    cy.get('#query')
            .type('employa')
        cy.get('[id="3c9f14cc-330a-11eb-9751-8baed46def4a"]')
            .should('contain', 'M40124')
        cy.get('[href="/admin/partners/M40124"]')
            .click()
        cy.url()
            .should('eq', 'https://infact5-prod-staging-2.herokuapp.com/admin/partners/M40124')
})

//Search the new business partner
//SearchNewBusinessPartner
Cypress.Commands.add('SearchNewBusinessPartner', () => {
    cy.get('#query')
        .type('ringgemeinschaft')
    cy.get('[class="  nowrap"]')
        .should('contain', 'Ringgemeinschaft')
    cy.get('a')
        .eq(22)
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/partners/’')
    cy.contains('Nutzer: Ringgemeinschaft')
})

//formular of business partner creation
//BusinessPartnerModal
Cypress.Commands.add('BusinessPartnerModal', () => {
    cy.get('.mb-4 > .btn') //use the button for creating a new business partner
            .should('contain', 'Geschäftspartner hinzufügen')
            .click()
        cy.get('#bp-search') //search and create the new business partner
            .type('Ringgemeinschaft')
        cy.get('#not-found')
            .check({force: true})
        cy.get('#open-bp-form-btn-new')
            .should('contain', 'Neuen Mandanten anlegen')
            .click()
})

//switch to legal entity tab
//LegalEntityTab
Cypress.Commands.add('LegalEntityTab', () => {
    cy.get('.nav > :nth-child(2) > .nav-link') //click on the button for creating a new legal entity
            .should('contain', 'Neue Juristische Person')
            .click()
})

//switch to natural person tab
//NaturalPersonTab
Cypress.Commands.add('NaturalPersonTab', () => {
    cy.get('.nav > :nth-child(1) > .nav-link') //click on the button for creating a new natural person
            .should('contain', 'Neue Natürliche Person')
            .click()
})

//abort the process of creating a business partner
//BusinessPartnerCancel
Cypress.Commands.add('BusinessPartnerCancel', () => {
    cy.get('[class="btn-close"]')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/partners')
})

//create new business partner (legal entity)
//CreateLegalEntity
Cypress.Commands.add('CreateLegalEntity', () => {
    cy.get('#business_partner_company') //company name
            .type('Ringgemeinschaft')
        cy.get(':nth-child(1) > #business_partner_legal_form') //legal form
            .select("ug")
        cy.contains('UG (haftungsbeschränkt)')
        cy.get('.modal-body > #business_partner_registration_source') //registration source
            .select("infact_factoring_business")
        cy.contains('Factoring Mitteltstand')
        cy.get('.col-7 > #business_partner_contact_data_attributes_line1') //adress
            .type('Musterstraße 5')
        cy.get('.col-2 > #business_partner_contact_data_attributes_zip')
            .type('09123')
        cy.get(':nth-child(7) > :nth-child(2) > #business_partner_contact_data_attributes_city')
            .type('Musterstadt')
        cy.get('.modal-footer > .btn')
            .should('contain', 'Juristische Person speichern')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/partners/’') //new business partner is created
        cy.contains('Ringgemeinschaft')
})

//create new business partner (natural person)
//CreateNaturalPerson
Cypress.Commands.add('CreateNaturalPerson', () => {
    cy.get('[id="business_partner_first_name"]:empty') //first name
        .type('Frodo')
    cy.get('[id="business_partner_last_name"]:empty') //last name
        .type('Beutlin')
    cy.get('#business_partner_date_of_birth:empty') //date of birth
        .type('2000-01-01')
    cy.get('.mb-3 > .ts-wrapper > .ts-control > .item') //legal form
        .should('contain', 'Privatperson / Verbraucher')
        .type('Freiberufler {enter}')
    cy.contains('Freiberufler')
    cy.get('.mb-3 > #business_partner_contact_data_attributes_phone:empty') //phone number
        .type('093657862648')
    cy.get('.mb-3 > #business_partner_contact_data_attributes_email:empty') //email
        .type('frodo.beutlin@mittelerde.de')
    cy.get('.mb-3 > #business_partner_contact_data_attributes_line1:empty') //address
        .type('Hobbitstraße 5D')
    cy.get('.mb-3 > #business_partner_contact_data_attributes_zip:empty') //zip code
        .type('12345')
    cy.get('.mb-3 > #business_partner_contact_data_attributes_city:empty') //city
        .type('Hobbingen')
    cy.get(':nth-child(8) > :nth-child(3) > .ts-wrapper > .ts-control > .item') //country
        .should('contain', 'Deutschland')
    cy.get('#business_partner_registration_source') //registration source
        .select('Infact Finetrading')
    cy.contains('Infact Finetrading')
    cy.get('.mb-3 > .btn')
        .should('contain', 'Natürliche Person speichern')
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/partners/’') //new business partner is created
    cy.contains('Nutzer: Frodo Beutlin')
})

//delete business partner in his view
//DeleteBusinessPartner
Cypress.Commands.add('DeleteBusinessPartner', () => {
    cy.get('[class="remove-submit btn btn-block btn-danger btn-sm"]')
            .should('contain', 'Löschen')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/partners')
})