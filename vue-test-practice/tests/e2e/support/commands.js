// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// F.orced click
Cypress.Commands.add('fclick', { prevSubject: 'element' }, (subject, arg) => {
  cy.wrap(subject).click({ force: true });
  // return null
});

// F.orced type
Cypress.Commands.add('ftype', { prevSubject: 'element' }, (subject, arg) => {
  cy.wrap(subject).type(arg, { force: true });
});

// C.y data getter
Cypress.Commands.add('cget', datacy => {
  return cy.get(`[data-cy=${datacy}]`);
});

Cypress.Commands.add('ccontains', (datacy, text) => {
  return cy.contains(`[data-cy=${datacy}]`, text);
});
