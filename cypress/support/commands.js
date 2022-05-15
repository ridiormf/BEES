Cypress.Commands.add('getCy', (selector, tag, ...args) => {
  return cy.get(`${tag ? tag : ''}[data-cy="${selector}"]`, ...args);
});
