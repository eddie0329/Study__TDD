// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.cget('plusButton').fclick();
    cy.cget('plusButton').fclick();
    cy.cget('plusButton').fclick();
    cy.cget('plusButton').fclick();
    cy.cget('plusButton').fclick();
    cy.ccontains('countDisplay', 5);
    cy.cget('countDisplay').should('have.text', '5');
    cy.cget('minusButton').fclick();
    cy.cget('minusButton').fclick();
    cy.cget('minusButton').fclick();
    cy.cget('minusButton').fclick();
    cy.cget('minusButton').fclick();
    cy.cget('countDisplay').should('have.text', '0');
  });
});
