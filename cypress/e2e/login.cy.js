describe('Registrations tests', () => {
  it('Registration', () => {
    cy.viewport(1980, 1080)
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get("input[name='username']").type('parabank-1@yopmail.com')
    cy.get("input[name='password']").type('Test1234')
    cy.get("input[value='Log In']").click()
    cy.url().should('include', '/overview')
    
  })
})