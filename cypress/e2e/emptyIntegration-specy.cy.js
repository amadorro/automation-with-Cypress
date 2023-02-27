
describe('Empty body on UI in Cypress using cy.intercept', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://angular.realworld.io/', { body: [] })
    cy.intercept('GET', 'https://angular.realworld.io/', { body: []})
    cy.visit('https://angular.realworld.io/')

  })
  it('Should render empty body on UI', () => {

  })
})

/* 
 // **** These are just in case they exists, but not in this case 
  it('Should render no tags on UI', () => {
    cy.get('.tag-list > a',{timeout: 10000}).should('have.length',0) 
  }) 

  it('Should render No tags are here on UI', () => {
    cy.get('.sidebar > :nth-child(4)').should('contain','No tags are here... yet.').should('exist')
  })

  it('Should render no article on UI', () => {
    cy.get('.article-preview').should('have.length', 0)

  })
  it('Should render No articles are here yet on UI', () => {
    cy.get('app-article-list > :nth-child(2)').should('contain','No articles are here... yet.').should('exist')

*/
