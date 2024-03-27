describe('PDF - Mahnungen: Stilles Echtes Factoring', () => {

    beforeEach(() => {
        cy.login() //login.js
        cy.Export() //tabs.js
        cy.PDFButton() //export.js
    })

    afterEach(() => {
        cy.DebugParams() //export.js
        //cy.PrecheckButton() //export.js
        //cy.ApplyButton() //export.js -> 500er
    
        //Recovery old parameters
        //cy.RecovDebugParams() //export.js
        //cy.PrecheckButton()
        //cy.ApplyButton() -> 500er
        cy.logout() //login.js
    })

    it('Mahnungen: Stilles Echtes Factoring - Zahlungserinnerung', () => {
        cy.get('[href="/admin/pdf/viewer/reminders-silentfactoring-templatepdf?legal_group=group_one&reminder_type=payment_reminder"]') //Zahlungserinnerung of Mahnungen: Stilles Echtes Factoring
            .should('contain', 'Zahlungserinnerung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/reminders-silentfactoring-templatepdf?legal_group=group_one&reminder_type=payment_reminder')
        cy.get('.embed-responsive-item') //Zahlungserinnerung-PDF
    })

    it('Mahnungen: Stilles Echtes Factoring - Mahnung', () => {
        cy.get('[href="/admin/pdf/viewer/reminders-silentfactoring-templatepdf?legal_group=group_one&reminder_type=first_reminder"]') //Mahnung of Stilles Echtes Factoring
            .should('contain', 'Mahnung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/reminders-silentfactoring-templatepdf?legal_group=group_one&reminder_type=first_reminder')
        cy.get('.embed-responsive-item') //Mahnung-PDF
    })

    it('Mahnungen: Stilles Echtes Factoring - Letzte Mahnung', () => {
        cy.get('[href="/admin/pdf/viewer/reminders-silentfactoring-templatepdf?legal_group=group_one&reminder_type=last_reminder"]') //2. Mahnung of Stilles Echtes Factoring
            .should('contain', 'Letzte Mahnung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/reminders-silentfactoring-templatepdf?legal_group=group_one&reminder_type=last_reminder')
        cy.get('.embed-responsive-item') //Letzte Mahnung-PDF
    })

    it('Mahnungen: Stilles Echtes Factoring - Eskalation und Offenlegung', () => {
        cy.get('[href="/admin/pdf/viewer/reminders-silentfactoring-templatepdf?legal_group=group_one&reminder_type=escalation"]') //Mahnbescheid of Stilles Echtes Factoring
            .should('contain', 'Eskalation und Offenlegung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/reminders-silentfactoring-templatepdf?legal_group=group_one&reminder_type=escalation')
        cy.get('.embed-responsive-item') //Eskalation und Offenlegung-PDF
    })
})