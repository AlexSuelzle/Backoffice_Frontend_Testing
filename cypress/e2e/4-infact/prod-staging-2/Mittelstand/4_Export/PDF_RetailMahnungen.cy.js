describe('PDF - Retail Mahnungen', () => {

    beforeEach(() => {
        cy.login() //login.js
        cy.Export() //tabs.js
        cy.PDFButton() //export.js
    })

    afterEach(() => {
        cy.PDFParamsGeneral() //export.js
        cy.PDFParamsRetail() //export.js
        cy.DebugParams() //export.js
        cy.PrecheckButton() //export.js
        cy.ApplyButton() //export.js
    
        //Recovery old parameters
        cy.RecovPDFParamsGeneral() //export.js
        cy.RecovPDFParamsRetail() //export.js
        cy.RecovDebugParams() //export.js
        cy.PrecheckButton()
        cy.ApplyButton()
        cy.logout() //login.js
    })

    it('Retail Mahnungen - Zahlungserinnerung', () => {
        cy.get('[href="/admin/pdf/viewer/dunning-firstreminderpdf?reminder_kind=first_reminder"]') //Zahlungserinnerung of Retail Mahnungen
            .should('contain', 'Zahlungserinnerung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/dunning-firstreminderpdf?reminder_kind=first_reminder')
        cy.get('.embed-responsive-item') //Zahlungserinnerung-PDF
    })
})