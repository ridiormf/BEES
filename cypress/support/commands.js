Cypress.Commands.add('getCy', (selector, tag, ...args) => {
  return cy.get(`${tag ? tag : ''}[data-testid="${selector}"]`, ...args);
});
