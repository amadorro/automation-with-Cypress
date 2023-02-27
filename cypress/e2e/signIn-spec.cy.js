
describe('Login testing', () => {

    beforeEach(() => {
        cy.viewport(1000, 900)
        cy.visit('https://demo.realworld.io/#/login')
    })

    it('Testing missing Email', () => {
        cy.get('[type="submit"]').click()
        })
    })
    // amadorrl@hotmail.com