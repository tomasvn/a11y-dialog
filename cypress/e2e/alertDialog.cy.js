import { shouldBeVisible } from './utils.js'

describe('Alert Dialog', { testIsolation: false }, () => {
  it('should prevent closing the dialog with ESC', () => {
    cy.visit('/alert-dialog')

    cy.get('[data-a11y-dialog-show="my-dialog"]').click()
    cy.get('.dialog').then(shouldBeVisible)

    cy.get('body').trigger('keydown', { key: 'Escape', keyCode: 27, which: 27 })
    cy.get('.dialog').then(shouldBeVisible)
  })

  it('should prevent closing by clicking the backdrop', () => {
    cy.visit('/alert-dialog')

    cy.get('[data-a11y-dialog-show="my-dialog"]').click()
    cy.get('.dialog').then(shouldBeVisible)

    cy.get('.dialog-overlay').click({ force: true })
    cy.get('.dialog').then(shouldBeVisible)
  })
})
