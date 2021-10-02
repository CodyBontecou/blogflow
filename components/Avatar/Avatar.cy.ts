describe('Avatar Component', () => {
  it('has the expected alt text', () => {
    cy.visit('iframe.html?id=avatar--user-with-img')
    cy.get('img[alt="Avatar with image of Test User"]').should('exist')
  })

  it('has the expected acronym', () => {
    cy.visit('iframe.html?id=avatar--user-no-img')
    cy.get('span').should('have.text', 'TU')
  })
})
