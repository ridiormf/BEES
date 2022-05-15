describe('Landing tests ->', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should have a description text describing what user the should do', () => {
    // form
    // formDescription
    // formHint
    // inputText
    // labelCheckbox
    // inputCheckbox
    // submitButton
    // landingImage

    cy.getCy('formDescription').contains('Please, enter your full name below');
  });

  it('Should have a description text describing text input rules', () => {
    cy.getCy('formHint').contains('Only alphabetical characters are accepted');
  });
  describe('img element', () => {
    it('Should have a img bee element', () => {
      cy.getCy('landingImage').should('be.visible');
    });
  });
  describe('form element', () => {
    it('Should have form element', () => {
      cy.getCy('form').should('be.visible');
    });

    it('Should submit form from button click', async () => {
      cy.getCy('inputCheckbox').click();
      cy.getCy('inputText').type('test name').blur();
      cy.getCy('submitButton').click();
      await new Promise((res) => setTimeout(res, 1000));
      const user = JSON.parse(localStorage.getItem('user'));
      expect(user.fullName).to.eq('test name');
      expect(user.majority).to.eq(true);
    });
  });
  describe('input element', () => {
    it('Should have a input element', () => {
      cy.getCy('inputText').should('be.visible');
    });
  });
  describe('checkbox element ->', () => {
    it('Should have a input type checkbox element', () => {
      cy.getCy('inputCheckbox').should('be.visible');
    });
    it('Should toggle checked attribute when clicked two times', () => {
      cy.getCy('inputCheckbox').click().should('be.checked');
      cy.getCy('inputCheckbox').click().should('be.not.checked');
    });
  });
  describe('label element ->', () => {
    it('Should have a label element', () => {
      cy.getCy('labelCheckbox').contains('Are you older than 18 years old?');
    });

    it('Should toggle input type checkbox checked attribute when clicked two times', () => {
      cy.getCy('labelCheckbox').click();
      cy.getCy('inputCheckbox').should('be.checked');
      cy.getCy('labelCheckbox').click();
      cy.getCy('inputCheckbox').should('be.not.checked');
    });

    it('Should uncheck input type checkbox when clicked ->', () => {
      cy.getCy('labelCheckbox').click();
      cy.getCy('inputCheckbox').should('be.checked');
      cy.getCy('labelCheckbox').click();
      cy.getCy('inputCheckbox').should('be.not.checked');
    });
  });

  describe('button element ->', () => {
    it('Should have a button element with "Enter" text', () => {
      cy.getCy('submitButton').invoke('text').should('eq', 'Enter');
    });
    it('Should start disabled', () => {
      cy.getCy('submitButton').should('be.disabled');
    });
    it('Should be disabled if input name is invalid with checkbox checked', () => {
      cy.getCy('labelCheckbox').click();
      cy.getCy('inputText').type('test r').blur();
      cy.getCy('submitButton').should('be.disabled');
    });

    it('Should be disabled if input name is valid with checkbox unchecked', () => {
      cy.getCy('inputText').type('test name').blur();
      cy.getCy('submitButton').should('be.disabled');
    });

    it('Should be enabled if input name is valid with checkbox checked', () => {
      cy.getCy('labelCheckbox').click();
      cy.getCy('inputText').type('test name').blur();
      cy.getCy('submitButton').should('be.not.disabled');
    });
  });
});
