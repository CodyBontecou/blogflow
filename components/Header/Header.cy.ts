// import { links } from '../../utils/links'

describe('Avatar Component', () => {
  it('has the expected alt text', () => {
    cy.visit('iframe.html?id=header--default-header')
    cy.get('[data-cy=menu]').should('not.be.visible')
    cy.get('img[alt="Avatar with image of Test User"]').click()
    cy.get('[data-cy=menu]').should('be.visible')
    cy.get('img[alt="Avatar with image of Test User"]').click()
    cy.get('[data-cy=menu]').should('not.be.visible')
  })

  // it('displays the expected links', () => {
  //   links.forEach((link) => {
  //     cy.get(`a[href*="${link.to}"]`).should('exist')
  //   })
  // })
})
