describe('Benutzer', () => {

    beforeEach(() => {
        cy.login()
        cy.User() //tabs.js
        cy.UserModal() //user.js
    })

    afterEach(() => {
        cy.logout() //login.js
    })

    it('Abort the process of creating a user', () => {
        //create new user and cancel
        cy.UserModalCancel() //user.js
    })

    it('Create, save and delete new user', () => {
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

    it('Create, save, edit and delete new user', () => {
        cy.UserModalSave()
        cy.reload()
        
        //search new user
        cy.QueryUser()

        //edit & save new user
        cy.UserView()
        cy.UserEdit() //user.js

        //delete user
        cy.UserDelete()
    })
})