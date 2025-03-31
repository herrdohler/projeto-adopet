describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.interpect('POST','https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400, }).as('stubPost')
    })
})
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.get('[data-test="input-loginEmail"]').type('joaodasilva@gmail.com');
        cy.get('[data-test="input-loginPassword"]').type('senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
    cy.login('joaodasilva@gmail.com', 'Senha123')
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais').should('be.visible');
})