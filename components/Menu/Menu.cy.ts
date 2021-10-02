describe('Menu Component', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=menu--my-menu')
  })

  it('is visible when expanded prop is true', () => {
    cy.get('[data-cy=menu]').should('be.visible')
  })
})
