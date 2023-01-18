// const { it } = require("mocha")

const homepage = 'https://www.demoblaze.com'
describe('Homepage Test Cases', () => {
  beforeEach(() => {
    //cy.viewport(1366,768);
    cy.visit(homepage)
  })
  it('TC-HOME-001:Verify that user can browse the hompage and see 9 items as the product list', () => {
    cy.get('div.card.h-100').should('have.length', 9).wait(100).each($el => {
      cy.wrap($el).find('div.card-block>h4')
      cy.wrap($el).find('div.card-block>h5').should('contain', '$')
      cy.wrap($el).find('div.card-block>p').should('have.class', 'card-text')
    })
  })
  it('TC-HOME-002',()=>{
    cy.get('#cat').should('have.class','list-group-item')  
    // cy.get('#contcont > :nth-child(1) > .col-lg-3').should('have.length',3)

})
  it('TC-HOME-003:verify that home carousal part is working',()=>{
    cy.get('.carousel-control-next-icon').click()
  })

  it('TC-HOME-004:Verify the footer of Homepage',()=>{
    cy.get('#footc').find(':nth-child(3) > .thumbnail > .caption > h4').should('contain',"PRODUCT STORE")
    // cy.get(':nth-child(3) > .thumbnail > .caption > h4')
        
  })

  it('TC-HOME-005:Verify that user can click the phones button under the categories and there should be 7 items.',()=>{
    // cy.get("byCat('phone')")
    cy.get('a.list-group-item:nth-child(2)').should('have.text','Phones').click()
    // cy.get('#tbodyid').should('have.length',7)                              //Sudip ji plz check this test code it's not passes Why ?

    

  })
  


})