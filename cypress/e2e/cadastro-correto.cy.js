describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
  })
  it('Deve preencher corretamente os campos de cadastro para criação de um novo usuário', () => {
    cy.cadastrar('João da Silva','joaodasilva@gmail.com', 'Senha123')    
  })
})