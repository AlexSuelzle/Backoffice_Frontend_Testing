describe('PDF - Mittelstand Mahnungen', () => {

    beforeEach(() => {
        cy.login() //login.js
        cy.Export() //tabs.js
        cy.PDFButton() //export.js
    })

    afterEach(() => {
        cy.PDFParamsGeneral() //export.js
        cy.PDFParamsMS() //export.js
        cy.DebugParams() //export.js
        cy.PrecheckButton() //export.js
        cy.ApplyButton() //export.js
    
        //Recovery old parameters
        cy.RecovPDFParamsGeneral() //export.js
        cy.RecovPDFParamsMS() //export.js
        cy.RecovDebugParams() //export.js
        cy.PrecheckButton()
        cy.ApplyButton()
        cy.logout() //login.js
    })

    it('Mittelstand Mahnungen - Zahlungserinnerung', () => {
        cy.get('[href="/admin/pdf/viewer/businessdunning-firstreminderpdf"]') //Zahlungserinnerung of Mittelstand Mahnungen
            .should('contain', 'Zahlungserinnerung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/businessdunning-firstreminderpdf')
        cy.get('.embed-responsive-item') //Zahlungserinnerung-PDF
    })

    it('Mittelstand Mahnungen - Mahnung', () => {
        cy.get('[href="/admin/pdf/viewer/businessdunning-secondreminderpdf"]') //Mahnung of Mittelstand Mahnungen
            .should('contain', 'Mahnung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/businessdunning-secondreminderpdf')
        cy.get('.embed-responsive-item') //Mahnung-PDF
    })

    it('Mittelstand Mahnungen - Letzte Mahnung', () => {
        cy.get('[href="/admin/pdf/viewer/businessdunning-thirdreminderpdf"]') //Letzte Mahnung of Mittelstand Mahnungen
            .should('contain', 'Letzte Mahnung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/businessdunning-thirdreminderpdf')
        cy.get('.embed-responsive-item') //Letzte Mahnung-PDF
    })

    it('Mittelstand Mahnungen - Eskalationsschreiben', () => {
        cy.get('[href="/admin/pdf/viewer/businessdunning-fourthreminderpdf"]') //Eskalationsschreiben of Mittelstand Mahnungen
            .should('contain', 'Eskalationsschreiben')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/businessdunning-fourthreminderpdf')
        cy.get('.embed-responsive-item') //Eskalationsschreiben-PDF
    })
})