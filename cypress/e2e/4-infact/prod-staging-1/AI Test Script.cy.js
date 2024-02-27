// e2e.spec.js
describe('Click through all tabs', () => {
    beforeEach(() => {
      cy.login()
    })
  
    it('should load Aufträge tab', () => {
      cy.contains('Aufträge').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/orders')
      cy.pause()
    })
  
    it('should load Annehmen tab', () => {
      cy.contains('Annehmen').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/business/syntax')
      cy.pause()
    })
  
    it('should load Prüfen tab', () => {
      cy.contains('Prüfen').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/business/limits')
      cy.pause()
    })
  
    it('should load Verität tab', () => {
      cy.contains('Verität').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/business/verifications')
      cy.pause()
    })
  
    it('should load Freigabe tab', () => {
      cy.contains('Freigabe').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/legitimation')
      cy.pause()
    })
  
    it('should load Auszahlen tab', () => {
      cy.contains('Auszahlen').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/business/payout')
      cy.pause()
    })
  
    it('should load Dunning tab', () => {
      cy.contains('Dunning').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/dunnings')
      cy.pause()
    })
  
    it('should load Inkasso tab', () => {
      cy.contains('Inkasso').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/collections')
      cy.pause()
    })
  
    it('should load Einzahlungen tab', () => {
      cy.contains('Einzahlungen').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/bank_transactions')
      cy.pause()
    })
  
    it('should load Tools tab', () => {
      cy.contains('Tools').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/outgoing_messages/index')
      cy.pause()
    })
  
    it('should load Export tab', () => {
      cy.contains('Export').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/export')
      cy.pause()
    })
  
    it('should load Einstellungen tab', () => {
      cy.contains('Einstellungen').click()
      cy.url().should('eq', 'https://infact5-prod-staging-1.herokuapp.com/admin/business/settings')
      cy.pause()
    })
  })
  