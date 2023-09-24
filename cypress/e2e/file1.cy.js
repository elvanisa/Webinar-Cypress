describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('success login', () => {
    cy.get('[data-test="username"]').should('be.visible').type('standard_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('have.text', 'Products')
  })
  it('failed login - wrong credentials', () => {
    cy.get('[data-test="username"]').should('be.visible').type('salah user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text', 'do not match')
  })
})