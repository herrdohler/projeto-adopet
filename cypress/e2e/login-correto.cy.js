describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Preencher os campos do formulário corretamente e redirecionar o usuário para a página de perfil', () => {
        cy.login('joaodasilva@gmail.com', 'Senha123');
    })
})