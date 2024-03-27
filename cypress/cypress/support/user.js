//formular of user creation
//UserModal
Cypress.Commands.add('UserModal', () => {
    cy.get('[href="/admin/users/new"]')
            .click()
        cy.contains('Neuer Benutzer')
        cy.get('#email_identity_user_attributes_name')
            .type('Gandalf der Graue')
        cy.get('#email_identity_email')
            .type("gandalf@mittelerde.de")
        cy.get('#email_identity_user_attributes_phone')
            .type("09578951862")
        cy.get('[id="email_identity_user_attributes_admin"]')
            .check()
        cy.get('[id="email_identity_user_attributes_agency"]')
            .check()
})

//cancel button for formular of user creation
//UserModalCancel
Cypress.Commands.add('UserModalCancel', () => {
    cy.get('[class="btn btn-secondary"]')
            .should('contain', 'Abbrechen')
            .click()
})

//save button for formular of user creation
//UserModalSave
Cypress.Commands.add('UserModalSave', () => {
    cy.get('[class="btn btn-primary"]')
            .should('contain', 'Speichern')
            .click()
})

//query for user
//QueryUser
Cypress.Commands.add('QueryUser', () => {
    cy.get('#query')
            .type('gandalf')
        cy.get('.btn-primary')
            .should('contain', 'Filtern')
            .click()
        cy.get('tbody > :nth-child(1) > :nth-child(3)')
            .should('contain', 'gandalf@mittelerde.de')
})

//open new user view
//UserView
Cypress.Commands.add('UserView', () => {
    cy.get('[class="svg-inline--fa fa-pen-to-square"]')
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/users/’')
})

//dropdown menu in user view
//UserViewDropdown
Cypress.Commands.add('UserViewDropdown', () => {
    cy.get('[class="btn btn-transparent dropdown-toggle"]')
            .should('contain', 'Login freigeschaltet')
            .click()
})

//delete user
//UserDelete
Cypress.Commands.add('UserDelete', () => {
    cy.get('[id="remove-submit"]')
            .should('contain', 'Benutzer löschen')
            .click({force: true})
    cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/users') //user is deleted
})

//edit user
//UserEdit
Cypress.Commands.add('UserEdit', () => {
    cy.get(':nth-child(3) > .ts-wrapper > .ts-control')
            .type('intern {enter}')
            .should('contain', 'intern')
        cy.get('#user_agency')
            .uncheck()
        cy.get('[class="btn btn-secondary"]')
            .should('contain', 'Benutzer speichern')
            .click()
        cy.get('.flash-message-component')
            .should('contain', 'Benutzer erfolgreich gespeichert')
})