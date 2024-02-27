describe('Benutzer', () => {

    beforeEach(() => {
        cy.login()
        cy.User() //tabs.js
        cy.UserModal() //user.js
    })

    it('open new user-creation and cancel', () => {
        //create new user and cancel
        cy.UserModalCancel() //user.js
    })

    it('create, save and delete new user', () => {
        //create new user and save
        cy.UserModalSave() //user.js
        cy.reload()

        //search user
        cy.QueryUser() //user.js

        //delete user
        cy.UserView() //user.js
        cy.UserViewDropdown() //user.js
        cy.UserDelete() //user.js
    })

    it('create, save and edit new user', () => {
        cy.UserModalSave()
        cy.reload()
            .pause()
        
        //search new user
        cy.QueryUser()

        //edit & save new user
        cy.UserView()
        cy.UserEdit() //user.js
    })
})