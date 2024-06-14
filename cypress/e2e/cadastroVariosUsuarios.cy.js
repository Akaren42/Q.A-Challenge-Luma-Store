import { usuarios } from '../fixtures/usuarios.json'

describe('pagina para criar conta' ,() => {
    beforeEach(() => {//antes de cada caso de teste vai rodar os comandos dentro desse bloco, no caso sempre abrira o site
        cy.visit ('https://magento.softwaretestingboard.com');
        cy.get('.panel > .header > :nth-child(3) > a').click();// comando para criar a conta, comando do proprio cypress
        } )
    usuarios.forEach(usuario => {//vai percorrer os usuarios (fixtures) e informar primeiro nome, sobrenome, etc, usuarios (json) criados na fixtures
        it('Deve preencher o campo dos formularios corretamente', () => {
        cy.get('input[name="firstname"]').clear().type(usuario.firstname);// informar o primeiro nome
        cy.get('input[name="lastname"]').clear().type(usuario.lastname);// informar o sobrenome
        cy.get('input[name="email"]').clear().type(usuario.email);// informar o email
        cy.get('input[name="password"]').clear().type(usuario.password);// informar a senha
        cy.get('input[name="password_confirmation"]').clear().type(usuario.password_confirmation);// confirmar a senha
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();// clicar no botão "crie a sua conta aqui"
        
        })
    });
 })