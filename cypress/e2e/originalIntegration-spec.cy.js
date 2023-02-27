
describe('Example to demonstrate API Mocking in Cypress using cy.intercept', () => {

    beforeEach(() => {
        cy.intercept('GET', '**/tags', { fixture: 'orgTags.json' }).as('tags')
        cy.intercept('GET', '**/articles*', { fixture: 'orgArticle.json' }).as('articles')
        cy.visit('https://angular.realworld.io/')

        // get statuscode of intercept 
        cy.wait('@tags').its('response.statusCode').should('equal', 200)
        cy.wait('@articles').its('response.statusCode').should('equal', 200)
    })

    beforeEach(function () {
        cy.fixture('orgTags.json').then(function (data){
            this.data = data 

        })
    })

    beforeEach(function () {
        cy.fixture('orgArticle.json').then(function (art){
            this.art = art
        })       
    
    })

    it('Must render the authors name on UI', () => {
            cy.get(':nth-child(-n + 3) > .article-preview > app-article-meta > .article-meta > .info > .author').should('contain','Magda Parry').should('exist').should('be.visible').and('have.length',2)
    })

    it('Must display the original tags on UI', function () {

            cy.get('.tag-list > a').each(($el, index) => {
                expect($el.text()).to.contain(this.data.tags[index])
        })
        
    })

    it('Must render the correct slug on UI', function () {
        cy.get(':nth-child(-n + 2) > .article-preview > .preview-link > h1').each(($el, index) => {
            expect($el.text()).to.contain(this.art.articles[index].slug)
        })
    })
})
    

    



            
        
        