describe('Tools', () => {

    beforeEach(() => {
        cy.login() //login.js
        cy.Settings() //tabs.js
    })

    afterEach(() => {
        cy.logout() //login.js
    })

    it('Abort the process of creating new bank account', () => {
        cy.AbortNewBankAccountProcess() //settings.js
    })
    
    it('Create new Verrechnungskonto', () => {
        cy.CreateNewVerrechnungskonto() //settings.js
    })
    
    it('Edit new Verrechnungskonto', () => {
        cy.EditNewVerrechnungskonto() //settings.js
    })

    it('Deactivate new Verrechnungskonto', () => {
        cy.DeactivateVerrechnungskonto() //settings.js
    })

    it('Create new Hauptkonto (unfinished)', () => {
    })

    it('Edit a Hauptkonto (first version)', () => {
        cy.EditHauptkonto() //settings.js
    })

    it('Deactivate new Hauptkonto (unfinished)', () => {
    })

})