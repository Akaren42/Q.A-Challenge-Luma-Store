describe('Página para criar o login', () => {
    beforeEach(() => {//antes de cada caso de teste vai rodar os comandos dentro desse bloco, no caso sempre abrira o site
        cy.visit ('https://magento.softwaretestingboard.com');
  
    })
    it ("Criar a conta/loginDeve preencher os campos do formulário para criar a conta ", () => {
        cy.get('.panel > .header > :nth-child(3) > a').click();// clicar no painel do cabeçalho "crie sua conta aqui"
        cy.get('input[name="firstname"]').type('Edna');// informar o primeiro nome
        cy.get('input[name="lastname"]').type('Moreira');// informar o sobrenome
        cy.get('input[name="email"]').type('edna@gmail.com');// infomrar o email
        cy.get('input[name="password"]').type('SenhaMaior_1254');//informar a senha
        cy.get('input[name="password_confirmation"]').type('SenhaMaior_1254');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();// clicar no botão "crie a sua conta aqui"
    } )
     
  })