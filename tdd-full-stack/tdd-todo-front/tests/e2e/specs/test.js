// https://docs.cypress.io/api/introduction/api.html

describe('Todo Cypress test', () => {
  it('Add 5 Todos test', () => {
    cy.visit('/');
    for (let i = 1; i < 6; i += 1) {
      cy.cget('todoInsertInput').type(`test${i}`);
      cy.cget('todoAddBtn').fclick();
    }
    cy.cget('listTodo').should('have.length', 5);
  });
});
