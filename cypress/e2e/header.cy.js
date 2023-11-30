describe('Header', () => {
  it('should navigate to home and products', () => {
    cy.visit('http://localhost:3000');
    cy.get('.logo img').should('exist');
    cy.get('ul li:nth-child(2) a').click();
    cy.url().should('include', '/producto/1');
    cy.get('ul li:nth-child(1) a').click();
    cy.url().should('include', '/');
  });

  it('should navigate to cart', () => {
    cy.visit('http://localhost:3000');
    cy.get('.cart').click();
    cy.url().should('include', '/carrito');
  });
});