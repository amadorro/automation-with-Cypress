// Task 1 : Render new tags and article on the UI. completed 
// Task 2: Render no tags and not article on UI. completed 
// Task 3: Network error on UI. completed 
// Task 4: Render the original request to server on UI(current articles and tags) for three articles only. Remove dates and all the things that could make the testing fragil. Watch video 

  describe('Example to demonstrate API Mocking in Cypress using cy.intercept', () => {

    beforeEach(() => {
        cy.intercept('GET', '**/tags', { fixture: 'tags.json' })
        cy.intercept('GET', '**/articles*', { fixture: 'articlefeed.json' })
        cy.visit('https://angular.realworld.io/')
    })

  it('Should render new tags on UI', () => {
    cy.get('.tag-list > a',{timeout: 10000}).should('have.length', 3).should('exist').should('contain','JavaScript version 11.0').and('contain','Python version 10.0').and('contain','CI/CD')
    })    

    it('Should render the title of the article on UI', () => {
      cy.get('.preview-link > h1').should('exist').should('contain','New Programming Horizon')
    })

    it('Should render the description of article on UI', () => {
      cy.get('.preview-link > p',{timeout: 10000}).should('exist').should('contain','This is just a short note from an experience developer')
    })

    it('Should render the authors name on UI', () => {
      cy.get('.author').should('exist').should('contain','James Peterson')
    })

    it('Should render the number of articles mocked on UI', () => {
      cy.get('.article-preview').should('have.length', 1)
    })

    it('Should render favoritescount on UI', () => {
      cy.get('.btn').should('exist').should('contain', 15)

    })
})



