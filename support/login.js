//Login
Cypress.Commands.add('login', () => {
    cy.visit('/sign_in')
    cy.fixture('login').then((user) => {
        cy.get('#identity_email').type(user.email)
        cy.get('#identity_password').type(user.password)
    })
    cy.get('.btn').click()
    cy.log('Erfolgreich eingeloggt')
})

//Logout
Cypress.Commands.add('logout', () => {
    cy.get('[href="/sign_out"]')
        .click()
    cy.url('https://infact5-prod-staging-2.herokuapp.com/sign_in')
})