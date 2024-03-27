describe('Tools', () => {

    beforeEach(() => {
        cy.login() //login.js
        cy.Export() //tabs.js
    })

    afterEach(() => {
        cy.logout() //login.js
    })

    //Note for me: create list in json file in fixtures folder
    it('Filter usage', () => {
        //Exporttyp
        cy.get('#export_menu') //Filter: All Orders
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item')
            .should('contain', 'All Orders')
            .click()
        cy.get('.card-body')
            .should('contain', 'All Orders')
        cy.get('#export_menu') //Filter: Datev Bookings
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item')
            .should('contain', 'Datev Bookings')
            .click()
        cy.get('.card-body')
            .should('contain', 'Datev Bookings')
        cy.get('#export_menu') //Filter: Buchungen für Navision
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(3) > .dropdown-item')
            .should('contain', 'Buchungen für Navision')
            .click()
        cy.get('.card-body')
            .should('contain', 'Buchungen für Navision')
        cy.get('#export_menu') //Filter: Datev Stammdaten
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(4) > .dropdown-item')
            .should('contain', 'Datev Stammdaten')
            .click()
        cy.get('.card-body')
            .should('contain', 'Datev Stammdaten')
        cy.get('#export_menu') //Filter: Offene Aufträge
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(5) > .dropdown-item')
            .should('contain', 'Offene Aufträge')
            .click()
        cy.get('.card-body')
            .should('contain', 'Offene Aufträge')
        cy.get('#export_menu') //Filter: Targao Kreditoren
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(6) > .dropdown-item')
            .should('contain', 'Targao Kreditoren')
            .click()
        cy.get('.card-body')
            .should('contain', 'Targao Kreditoren')
        cy.get('#export_menu') //Filter: Factoringumsatzvolumen
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(7) > .dropdown-item')
            .should('contain', 'Factoringumsatzvolumen')
            .click()
        cy.get('.card-body')
            .should('contain', 'Factoringumsatzvolumen')
        cy.get('#export_menu') //Filter: Provisions Export
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(8) > .dropdown-item')
            .should('contain', 'Provisions Export')
            .click()
        cy.get('.card-body')
            .should('contain', 'Provisions Export')
        cy.get('#export_menu') //Filter: Aktive Kunden
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(9) > .dropdown-item')
            .should('contain', 'Aktive Kunden')
            .click()
        cy.get('.card-body')
            .should('contain', 'Aktive Kunden')
        cy.get('#export_menu') //Filter: Passive Kunden
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(10) > .dropdown-item')
            .should('contain', 'Passive Kunden')
            .click()
        cy.get('.card-body')
            .should('contain', 'Passive Kunden')
        cy.get('#export_menu') //Filter: Erstmals aktive Kunden
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(11) > .dropdown-item')
            .should('contain', 'Erstmals aktive Kunden')
            .click()
        cy.get('.card-body')
            .should('contain', 'Erstmals aktive Kunden')
        cy.get('#export_menu') //Filter: Ehemalige Kunden
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(12) > .dropdown-item')
            .should('contain', 'Ehmalige Kunden')
            .click()
        cy.get('.card-body')
            .should('contain', 'Ehmalige Kunden')
        cy.get('#export_menu') //Filter: Kunden werben Kunden
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(13) > .dropdown-item')
            .should('contain', 'Kunden werben Kunden')
            .click()
        cy.get('.card-body')
            .should('contain', 'Kunden werben Kunden')
        cy.get('#export_menu') //Filter: Partnerexport ausgehende Rechnungen
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(14) > .dropdown-item')
            .should('contain', 'Partnerexport ausgehende Rechnungen')
            .click()
        cy.get('.card-body')
            .should('contain', 'Partnerexport ausgehende Rechnungen')
        cy.get('#export_menu') //Filter: Partnerexport eingehende Rechnungen
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(15) > .dropdown-item')
            .should('contain', 'Partnerexport eingehende Rechnungen')
            .click()
        cy.get('.card-body')
            .should('contain', 'Partnerexport eingehende Rechnungen')
        cy.get('#export_menu') //Filter: Duplikatsprüfung Mandanten
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(16) > .dropdown-item')
            .should('contain', 'Duplikatsprüfung Mandanten')
            .click()
        cy.get('.card-body')
            .should('contain', 'Duplikatsprüfung Mandanten')
        cy.get('#export_menu') //Filter: Beispiel PDFs
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(17) > .dropdown-item')
            .should('contain', 'Beispiel PDFs')
            .click()
        cy.get('.card-body')
            .should('contain', 'Beispiel PDFs')
        cy.get('#export_menu') //Filter: OCR Auswertung
            .click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(18) > .dropdown-item')
            .should('contain', 'OCR Auswertung')
            .click()
        cy.get('.card-body')
            .should('contain', 'OCR Auswertung')
        //cy.get('#export_menu') //Filter: OP Listen -> no data available
            //.click()
        //cy.get('.btn-group > .dropdown-menu > :nth-child(19) > .dropdown-item')
            //.should('contain', 'OP Listen')
            //.click()
        //cy.get('.card-body')
            //.should('contain', 'OP Listen')
    })

    it('Calendar usage', () => {
        //Note: using of variable date
        //Calendar
        //manually range
        cy.get('#range')
            .click()
        cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > :nth-child(1) > .today') //range is from today's date to today's date
            .dblclick()
        cy.reload()
        //Heute
        cy.get('#range')
            .click()
        cy.get('[data-index="0"]')
            .should('contain', 'Heute')
            .click()
        cy.reload()
        //Gestern
        cy.get('#range')
            .click()
        cy.get('[data-index="1"]')
            .should('contain', 'Gestern')
            .click()
        cy.reload()
        //Letzten 7 Tage
        cy.get('#range')
            .click()
        cy.get('[data-index="2"]')
            .should('contain', 'Letzten 7 Tage')
            .click()
        cy.reload()
        //Letzten 30 Tage
        cy.get('#range')
            .click()
        cy.get('[data-index="3"]')
            .should('contain', 'Letzten 30 Tage')
            .click()
        cy.reload()
        //Dieser Monat
        cy.get('#range')
            .click()
        cy.get('[data-index="4"]')
            .should('contain', 'Dieser Monat')
            .click()
        cy.reload()
        //Letzter Monat
        cy.get('#range')
            .click()
        cy.get('[data-index="5"]')
            .should('contain', 'Letzter Monat')
            .click()
        cy.reload()
        //Dieses Jahr
        cy.get('#range')
            .click()
        cy.get('[data-index="6"]')
            .should('contain', 'Diese Jahr')
            .click()
        cy.reload()
        //Letztes Jahr
        cy.get('#range')
            .click()
        cy.get('[data-index="7"]')
            .should('contain', 'Letztes Jahr')
            .click()
        cy.reload()
        //Gesamter Zeitraum
        cy.get('#range')
            .click()
        cy.get('[data-index="8"]')
            .should('contain', 'Gesamter Zeitraum')
            //.click() -> getting error message
        cy.reload()
    })
})