describe('Página de Cadastro', () => {
  it('Deve preencher corretamente os campos de cadastro para criação de um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
    cy.get('[data-test="input-name"]').type('João da Silva')
    cy.get('[data-test="input-email"]').type('joaodasilva@gmail.com')
    cy.get('[data-test="input-password"]').type('Senha123')
    cy.get('[data-test="input-confirm-password"]').type('Senha123')
    cy.get('[data-test="submit-button"]').click()
  })
})