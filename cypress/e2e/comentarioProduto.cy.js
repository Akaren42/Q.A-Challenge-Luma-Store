describe('Deixar comentario' ,() => {
  
  it('Selecionar uma camisa e adicionar o comentario', () => {
    cy.visit('https://magento.softwaretestingboard.com/gobi-heattec-reg-tee.html');

    // Verifica se botão adicionar comentário esta visíveis
    cy.contains('a', 'Add Your Review').should('be.visible');

    // Abre o formulário de comentário abrir
    cy.contains('a', 'Add Your Review').click();

    //Seleciona a classificação (estrelas)
    cy.get('label[for="Rating_1"]').click();// setar a primeira estrela

    // Preenche o formulário de comentário
    cy.get('input[name="nickname"]').type('Eduardo'); // informar o apelido
    cy.get('input[name="title"]').type('blusa'); // informar o assunto
    cy.get('textarea[name="detail"]').type('Ruim!'); // informar detalhes

    // Clica no botão de envio do comentário
    cy.contains('button', 'Submit Review').click();

    // Verifica se o comentário foi adicionado com sucesso
    cy.contains('You submitted your review for moderation.').should('be.visible');
  })
})