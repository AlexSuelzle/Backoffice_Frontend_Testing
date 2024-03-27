//PDF-Button
Cypress.Commands.add('PDFButton', () => {
    cy.get('.col-12 > .btn') //PDF Dokumente anzeigen & erstellen-Button
            .should('contain', 'PDF Dokumente anzeigen & erstellen')
            .click()
        cy.url('https://infact5-prod-staging-2.herokuapp.com/admin/pdf/viewer')
        cy.get('[class="page-title"]')
            .should('contain', 'PDF Dokumente')
})

//PDF Viewer
//General Parameters
Cypress.Commands.add('PDFParamsGeneral', () => {
    cy.get('[data-bs-target="#pdf-params"]')
        .should('contain', 'Parameter')
        .click()
    cy.get('#pdf_params_locale') //language
        .select('en')
    cy.get('#pdf_params_recipient_company') //recipient company
        .should('not.have.value')
        .type('Testunternehmen GmbH')
    cy.get('#pdf_params_recipient_name') //recipient name
        .should('have.value', 'Hans Meier')
        .clear()
        .type('Max Mustermann')
    cy.get('#pdf_params_recipient_address1') //recipient address line 1
        .should('have.value', 'Musterweg 12')
        .clear()
        .type('Musterstraße 123')
    cy.get('#pdf_params_recipient_address2') //recipient address line 2
        .should('not.have.value')
        .type('Appartement 7B')
    cy.get('#pdf_params_recipient_postcode') //recipient postcode
        .should('have.value', '01234')
        .clear()
        .type('12345')
    cy.get('#pdf_params_recipient_city') //recipient city
        .should('have.value', 'Musterhausen')
        .clear()
        .type('Musterstadt')
    cy.get('#pdf_params_recipient_country') //recipient country
        .should('have.value', 'Germany')
        .clear()
        .type('Austria')
    cy.get('#pdf_params_account_holder') //account holder
        .should('have.value', 'aifinyo TEST PDF')
        .clear()
        .type('aifinyo docs')
    cy.get('#pdf_params_iban') //IBAN
        .should('have.value', 'DE0070000000001234')
        .clear()
        .type('DE0070000000004321')
    cy.get('#pdf_params_bic') //BIC
        .should('have.value', 'BIC0XXXXX000')
        .clear()
        .type('BIC0XXXXX321')
    cy.get('#pdf_params_credit_institute') //invoice number
        .should('have.value', 'DEUTSCHE TEST BANK')
        .clear()
        .type('New Bank')
})

//PDF Viewer
//Parameters of Mittelstand Mahnungen & Stilles Echtes Factoring
Cypress.Commands.add('PDFParamsMS', () => {
    cy.get('#pdf_params_client_name') //client name
        .should('have.value', 'Benjamin Blümchen')
        .clear()
        .type('Johann Johannson')
    cy.get('#pdf_params_sender_company') //sender company
        .should('have.value', 'aifinyo finance GmbH')
        .clear()
        .type('test finance GmbH')
    cy.get('#pdf_params_sender_name') //sender name
        .should('not.have.value')
        .type('Bernd Banker')
    cy.get('#pdf_params_sender_address1') //sender address
        .should('have.value', 'Tiergartenstraße 8')
        .clear()
        .type('Tiergartenstraße 20')
    cy.get('#pdf_params_sender_postcode') //sender postcode
        .should('have.value', '01219')
        .clear()
        .type('01234')
    cy.get('#pdf_params_sender_city') //sender city
        .should('have.value', 'Dresden')
        .clear()
        .type('Berlin')
    cy.get('#pdf_params_sender_country') //sender country
        .should('not.have.value')
        .type('Germany')
})

//PDF Viewer
//Parameters of Retail Mahnungen
Cypress.Commands.add('PDFParamsRetail', () => {
    cy.get('#pdf_params_reminder_kind') //reminder kind
        .should('have.value', 'first_reminder')
        .clear()
        .type('Zahlungserinnerung')
    cy.get('#pdf_params_invoice_date') //invoice date
        .should('have.value', '2024-03-25')
        .clear()
        .type('2030-12-31')
    cy.get('#pdf_params_invoice_number') //invoice number
        .should('have.value', '12234')
        .clear()
        .type('12345')
    cy.get('#pdf_params_denomination') //denomination
        .should('have.value', 'Rechnungssteller')
    cy.get('#pdf_params_partner_name') //partner name
        .should('have.value', 'Benjamin Blümchen')
        .clear()
        .type('Johann Johannson')
    cy.get('#pdf_params_order_id') //order id
        .should('not.have.value')
    cy.get('#pdf_params_open_amount') //open amount
        .should('have.value', '123.45')
        .clear()
        .type('100')
    cy.get('#pdf_params_first_reminder') //first reminder
        .should('not.have.value')
    cy.get('#pdf_params_new_target_date') //new target date
        .should('have.value', '2024-04-01')
        .clear()
        .type('2030-12-31')
    cy.get('#pdf_params_collection_mail') //collection mail
        .should('have.value', 'collection@aifinyo.de')
        .clear()
        .type('mahnungen@aifinyo.de') 
})

//PDF Viewer
//Parameters of Accounting
Cypress.Commands.add('PDFParamsAcc', () => {
    cy.get('#pdf_params_accounting_number') //accounting number
        .should('have.value', '1234567890')
        .clear()
        .type('54321')
    cy.get('#pdf_params_mandate_reference') //mandate reference
        .should('have.value', 'M12345')
        .clear()
        .type('M54321')
    cy.get('#pdf_params_accounting_date') //accounting date
        .should('have.value', '2024-03-27')
        .clear()
        .type('2030-12-31')
    cy.get('#pdf_params_old_balance') //old balance
        .should('have.value', '0.0')
        .clear()
        .type('10.90')
    cy.get('#pdf_params_total_payout') //total payout
        .should('have.value', '16840.03')
        .clear()
        .type('20000.00')
    cy.get('#pdf_params_total_deposit') //total deposit
        .should('have.value', '-0.0')
        .clear()
        .type('-11.11')
    cy.get('#pdf_params_total_payment_settlement') //total payment settlement
        .should('have.value', '0.0')
        .clear()
        .type('123.45')
    cy.get('#pdf_params_sum_changed_balance') //sum changed balance
        .should('have.value', '57.03')
        .clear()
        .type('20.00')
    cy.get('#pdf_params_new_balance') //new balance
        .should('have.value', '57.03')
        .clear()
        .type('30.00')
})

//PDF Viewer
//Debug Parameters
Cypress.Commands.add('DebugParams', () => {
    cy.get('[data-bs-target="#debug-params"]')
        .should('contain', 'Entwickler Optionen')
        .click()
    cy.get('#pdf_params_debug_params_grid_enabled') //Grid enabled
        .should('contain', 'ja')
        .select('no')
    cy.get('#pdf_params_debug_params_grid_size') //Grid size
        .should('have.value', '1cm')
        .clear()
        .type('2cm')
    cy.get('#pdf_params_debug_params_horizontal_ruler_enabled') //Horizontal ruler enabled
        .should('contain', 'nein')
        .select('yes')
    cy.get('#pdf_params_debug_params_horizontal_ruler_offset') //Horizontal ruler offset
        .should('have.value', '1cm')
        .clear()
        .type('2cm')
    cy.get('#pdf_params_debug_params_vertical_ruler_enabled') //Vertical ruler enabled
        .should('contain', 'nein')
        .select('yes')
    cy.get('#pdf_params_debug_params_vertical_ruler_offset') //Vertical ruler offset
        .should('have.value', '1cm')
        .clear()
        .type('2cm')
    cy.get('#pdf_params_debug_params_stroke_bounds') //Stroke bounds
        .should('not.have.value')
})

//PDF Viewer
//Recovers old parameters (general)
Cypress.Commands.add('RecovPDFParamsGeneral', () => {
    cy.get('[data-bs-target="#pdf-params"]')
        .should('contain', 'Parameter')
        .click()
    cy.get('#pdf-params > .accordion-body > :nth-child(1) > .ts-wrapper > .ts-control') //language
        .type('de {enter}')
    cy.get('#pdf_params_recipient_company') //recipient company
        .clear()
    cy.get('#pdf_params_recipient_name') //recipient name
        .clear()
        .type('Hans Meier')
    cy.get('#pdf_params_recipient_address1') //recipient address line 1
        .clear()
        .type('Musterweg 12')
    cy.get('#pdf_params_recipient_address2') //recipient address line 2
        .clear()
    cy.get('#pdf_params_recipient_postcode') //recipient postcode
        .clear()
        .type('01234')
    cy.get('#pdf_params_recipient_city') //recipient city
        .clear()
        .type('Musterhausen')
    cy.get('#pdf_params_recipient_country') //recipient country
        .clear()
        .type('Germany')
    cy.get('#pdf_params_account_holder') //account holder
        .clear()
        .type('aifinyo TEST PDF')
    cy.get('#pdf_params_iban') //IBAN
        .clear()
        .type('DE0070000000001234')
    cy.get('#pdf_params_bic') //BIC
        .clear()
        .type('BIC0XXXXX000')
    cy.get('#pdf_params_credit_institute') //credit institute
        .clear()
        .type('DEUTSCHE TEST BANK')
})

//PDF Viewer
//Recovers old parameters of Mittelstand Mahnungen & Stilles Echtes Factoring
Cypress.Commands.add('RecovPDFParamsMS', () => {
    cy.get('#pdf_params_client_name') //client name
        .clear()
        .type('Bejaming Blümchen')
    cy.get('#pdf_params_sender_company') //sender company
        .clear()
        .type('aifinyo finance GmbH')
    cy.get('#pdf_params_sender_name') //sender name
        .clear()
    cy.get('#pdf_params_sender_address1') //sender address
        .clear()
        .type('Tiergartenstraße 8')
    cy.get('#pdf_params_sender_postcode') //sender postcode
        .clear()
        .type('01219')
    cy.get('#pdf_params_sender_city') //sender city
        .clear()
        .type('Dresden')
    cy.get('#pdf_params_sender_country') //sender country
        .clear()
})

//PDF Viewer
//Recovers old parameters of Retail Mahnungen
Cypress.Commands.add('RecovPDFParamsRetail', () => {
    cy.get('#pdf_params_reminder_kind') //reminder kind
        .clear()
        .type('first_reminder')
    cy.get('#pdf_params_invoice_date') //invoice date
        .clear()
        .type('2024-03-25')
    cy.get('#pdf_params_invoice_number') //invoice number
        .clear()
        .type('12234')
    cy.get('#pdf_params_denomination') //denomination
        .should('have.value', 'Rechnungssteller')
    cy.get('#pdf_params_partner_name') //partner name
        .clear()
        .type('Benjamin Blümchen')
    cy.get('#pdf_params_order_id') //order id
        .should('not.have.value')
    cy.get('#pdf_params_open_amount') //open amount
        .clear()
        .type('123.45')
    cy.get('#pdf_params_first_reminder') //first reminder
        .should('not.have.value')
    cy.get('#pdf_params_new_target_date') //new target date
        .clear()
        .type('2024-04-01')
    cy.get('#pdf_params_collection_mail') //collection mail
        .clear()
        .type('collection@aifinyo.de') 
})

//PDF Viewer
//Recovers old parameters of Accounting
Cypress.Commands.add('RecovPDFParamsAcc', () => {
    cy.get('#pdf_params_accounting_number') //accounting number
        .clear()
        .type('1234567890')
    cy.get('#pdf_params_mandate_reference') //mandate reference
        .clear()
        .type('M12345')
    cy.get('#pdf_params_accounting_date') //accounting date
        .clear()
        .type('2024-03-27')
    cy.get('#pdf_params_old_balance') //old balance
        .clear()
        .type('0.0')
    cy.get('#pdf_params_total_payout') //total payout
        .clear()
        .type('16840.03')
    cy.get('#pdf_params_total_deposit') //total deposit
        .clear()
        .type('-0.0')
    cy.get('#pdf_params_total_payment_settlement') //total payment settlement
        .clear()
        .type('0.0')
    cy.get('#pdf_params_sum_changed_balance') //sum changed balance
        .clear()
        .type('57.03')
    cy.get('#pdf_params_new_balance') //new balance
        .clear()
        .type('57.03')
})

//PDF-Viewer
//Recovers Debug Parameters
Cypress.Commands.add('RecovDebugParams', () => {
    cy.get('[data-bs-target="#debug-params"]')
        .should('contain', 'Entwickler Optionen')
        .click()
    cy.get('#debug-params > .accordion-body > :nth-child(1) > .ts-wrapper > .ts-control') //Grid enabled
        .type('ja {enter}')
    cy.get('#pdf_params_debug_params_grid_size') //Grid size
        .clear()
        .type('1cm')
    cy.get(':nth-child(3) > .ts-wrapper > .ts-control') //Horizontal ruler enabled
        .type('nein {enter}')
    cy.get('#pdf_params_debug_params_horizontal_ruler_offset') //Horizontal ruler offset
        .clear()
        .type('1cm')
    cy.get(':nth-child(5) > .ts-wrapper > .ts-control') //Vertical ruler enabled
        .type('nein {enter}')
    cy.get('#pdf_params_debug_params_vertical_ruler_offset') //Vertical ruler offset
        .clear()
        .type('1cm')
    cy.get('#pdf_params_debug_params_stroke_bounds') //Stroke bounds
        .should('not.have.value')
})

//Precheck-Button
Cypress.Commands.add('PrecheckButton', () => {
    cy.get('[class="btn btn-transparent js-precheck"]')
        .should('contain', 'Precheck')
        .click()
})

//Anwenden-Button
Cypress.Commands.add('ApplyButton', () => {
    cy.get('.m-b-15 > .mb-3 > .btn')
        .should('contain', 'Anwenden')
        .click()
})