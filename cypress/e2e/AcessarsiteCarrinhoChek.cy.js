describe('Verificar o carregamento da home page', () => {
  beforeEach(() => {//antes de cada caso de teste ,vai rodar os comandos dentro desse bloco
    cy.visit('https://magento.softwaretestingboard.com');// entrar na página de home da LUMA

  })

  it("Adicionar o produto no carrinho", () => {

    // Campo de pesquisa vai digitar shirt e clicar no enter
    cy.get('input[type="text"]').should('be.visible').type('shirt{enter}');

    // Clicar na camisa que foi escolhida
    cy.contains('a', 'Balboa Persistence Tee').click();

    //Selcionar tamanho
    cy.get('#option-label-size-143-item-169').click();

    //Selecionar cor
    cy.get('#option-label-color-93-item-53').click();

    //Colocar no carrinho
    cy.get('#product-addtocart-button').click();

    // Verifica se o comentário foi adicionado com sucesso
    cy.contains('You added Balboa Persistence Tee to your').should('be.visible');

    //Selecionar carrinho
    cy.contains('a', 'shopping cart').should('be.visible').click();


    cy.wait(2000); // Aguarda 2 segundos
    //Iniciar Checkout
    cy.get('#top-cart-btn-checkout').click({ force: true });

    
  })

})






