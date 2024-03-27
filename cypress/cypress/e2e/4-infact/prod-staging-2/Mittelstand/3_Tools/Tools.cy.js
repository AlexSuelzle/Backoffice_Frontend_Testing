describe('Tools', () => {

    beforeEach(() => {
        cy.login() //login.js
        cy.Tools() //tabs.js
    })

    afterEach(() => {
        cy.logout() //login.js
    })

    //Note for me: create list in json file in fixtures folder
    it('Use the Mail Status Filter', () => {
        cy.get('#mail_status')
            .select('accepted')
        cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            .should('contain', 'accepted')
        //cy.get('#mail_status') -> no data available
            //.select('staging')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]') 
            //.should('contain', 'accepted')
        cy.get('#mail_status')
            .select('failed')
        cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            .should('contain', 'failed')
        cy.get('#mail_status')
            .select('sent')
        cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            .should('contain', 'sent')
        //cy.get('#mail_status') -> no data available
            //.select('sent_successful')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            //.should('contain', 'sent_successful')
        //cy.get('#mail_status') -> no data available
            //.select('open')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            //.should('contain', 'open')
        //cy.get('#mail_status') -> no data available
            //.select('click')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            //.should('contain', 'click')
        //cy.get('#mail_status') -> no data available
            //.select('bounce')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            //.should('contain', 'bounce')
        //cy.get('#mail_status') -> no data available
            //.select('spam')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            //.should('contain', 'spam')
        //cy.get('#mail_status') -> no data available
            //.select('blocked')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            //.should('contain', 'blocked')
        //cy.get('#mail_status') -> no data available
            //.select('unsub')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            //.should('contain', 'unsub')
        //cy.get('#mail_status') -> no data available
            //.select('cancelled')
        //cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            //.should('contain', 'cancelled')
        cy.get('#mail_status')
            .select('failed_emailbrief')
        cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            .should('contain', 'failed')
    })

    it('Search the External_id', () => {
        cy.get('[name="external_id"]')
            .type('afc931b6-77dc-11ee-9f63-abdccabd23c0 {enter}')
        cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            .should('contain', 'Jürgen Lehmann')
        cy.get('[class="details-control text-success sorting_1"]')
            .click()
        cy.contains('"to": "afc931b6-77dc-11ee-9f63-abdccabd23c0"')
    })

    it('Full text search', () => {
        cy.get('[placeholder="Volltextsuche"]')
            .type('57a787f0-94f9-11ee-aaac-0f5577fb2a5f {enter}')
        cy.get('[class="dataTables_wrapper dt-bootstrap5 no-footer"]')
            .should('contain', 'Jürgen Lehmann')
        cy.get('[class="details-control text-success sorting_1"]')
            .click()
        cy.contains('"id": "57a787f0-94f9-11ee-aaac-0f5577fb2a5f"')
    })
})