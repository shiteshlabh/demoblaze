const homepage = 'https://www.demoblaze.com'
describe('Homepage Test Cases', () => {
  beforeEach(() => {
    //cy.viewport(1366,768);
    cy.visit(homepage)
  })
  it('TC-HOME-001:Verify that user can browse the hompage and see 9 items as the product list', () => {
    cy.get('div.card.h-100').should('have.length', 9).wait(1000).each($el => {
      cy.wrap($el).find('div.card-block>h4')
      cy.wrap($el).find('div.card-block>h5').should('contain','$')
      cy.wrap($el).find('div.card-block>p').should('have.class','card-text')
    })
  })
})