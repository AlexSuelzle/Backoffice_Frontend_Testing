describe('PDF - Accounting', () => {

    beforeEach(() => {
        cy.login() //login.js
        cy.Export() //tabs.js
        cy.PDFButton() //export.js
    })

    afterEach(() => {
        cy.PDFParamsGeneral() //export.js
        //cy.PDFParamsAcc() //export.js
        cy.DebugParams() //export.js
        cy.PrecheckButton() //export.js
        cy.ApplyButton() //export.js
    
        //Recovery old parameters
        cy.RecovPDFParamsGeneral() //export.js
        //cy.RecovPDFParamsAcc() //export.js
        cy.RecovDebugParams() //export.js
        cy.PrecheckButton() //export.js
        cy.ApplyButton() //export.js
        cy.logout() //login.js
    })

    it('Accounting - Zusammenfassung', () => {
        cy.get('[href="/admin/pdf/viewer/accounting-summarypdf"]') //Zusammenfassung of Accounting
            .should('contain', 'Zusammenfassung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/accounting-summarypdf')
        cy.get('.embed-responsive-item') //Zusammenfassung-PDF
    })

    it('Accounting - Abrechnungsliste', () => {
        cy.get('[href="/admin/pdf/viewer/accounting-debtspdf"]') //Abrechnungsliste of Accounting
            .should('contain', 'Abrechnungsliste')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/accounting-idebtspdf')
        cy.get('.embed-responsive-item') //Abrechnungsliste-PDF
    })

    it('Accounting - Gebührenrechnung', () => {
        cy.get('[href="/admin/pdf/viewer/accounting-feespdf"]') //Gebührenrechnung of Accounting
            .should('contain', 'Gebührenrechnung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/accounting-feespdf')
        cy.get('.embed-responsive-item') //Gebührenrechnung-PDF
    })

    it('Accounting - Anlage: Zinsabrechnung', () => {
        cy.get('[href="/admin/pdf/viewer/accounting-interestspdf"]') //Anlage: Zinsabrechnung of Accounting
            .should('contain', 'Anlage: Zinsabrechnung')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer/accounting-interestspdf')
        cy.get('.embed-responsive-item') //Anlage: Zinsabrechnung-PDF
    })

})