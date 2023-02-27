// note: no beforeEach hook for network error testing
describe('Testing error on the network', () => {

    it('Should render Server error message on UI', () => {
        cy.intercept('GET', 'https://angular.realworld.io/', { statusCode: 500 })
        cy.intercept('GET', 'https://angular.realworld.io/', { statusCode: 500})

        cy.visit('https://angular.realworld.io/')
        cy.get(':nth-child(4)').should('exist').should('be.visible').should('contain','500 - Internal Server Error')
        cy.screenshot()
    })

    it.only('Should render Network error message on UI', () => {
        cy.intercept('GET', 'https://angular.realworld.io/', { forceNetworkError: true })
        cy.intercept('GET', 'https://angular.realworld.io/', {forceNetworkError: true})

        cy.visit('https://angular.realworld.io/')
        cy.screenshot()

    })
})