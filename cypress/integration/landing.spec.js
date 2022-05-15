import { LANDING } from '../../src/pages/public/Landing/Landing-consts';

describe('Landing tests ->', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('p element', () => {
    it('Should have a description text describing what user the should do', () => {
      cy.getCy(LANDING.TEST_ID.FORM_DESCRIPTION).contains(
        'Please, enter your full name below',
      );
    });
    it('Should have a description text describing text input rules', () => {
      cy.getCy(LANDING.TEST_ID.FORM_HINT).contains(
        'Only alphabetical characters are accepted',
      );
    });
  });
  describe('img element', () => {
    it('Should have a img bee element', () => {
      cy.getCy(LANDING.TEST_ID.LANDING_IMAGE).should('be.visible');
    });
  });
  describe('form element', () => {
    it('Should have form element', () => {
      cy.getCy(LANDING.TEST_ID.FORM).should('be.visible');
    });

    it('Should submit form from button click', async () => {
      cy.getCy(LANDING.TEST_ID.INPUT_CHECKBOX).click();
      cy.getCy(LANDING.TEST_ID.INPUT_TEXT).type('test name').blur();
      cy.getCy(LANDING.TEST_ID.SUBMIT_BUTTON).click();
      await new Promise((res) => setTimeout(res, 1000));
      const user = JSON.parse(localStorage.getItem('user'));
      expect(user.fullName).to.eq('test name');
      expect(user.majority).to.eq(true);
    });
  });
  describe('input element', () => {
    it('Should have a input element', () => {
      cy.getCy(LANDING.TEST_ID.INPUT_TEXT).should('be.visible');
    });
  });
  describe('checkbox element ->', () => {
    it('Should have a input type checkbox element', () => {
      cy.getCy(LANDING.TEST_ID.INPUT_CHECKBOX).should('be.visible');
    });
    it('Should toggle checked attribute when clicked two times', () => {
      cy.getCy(LANDING.TEST_ID.INPUT_CHECKBOX).click().should('be.checked');
      cy.getCy(LANDING.TEST_ID.INPUT_CHECKBOX).click().should('be.not.checked');
    });
  });
  describe('label element ->', () => {
    it('Should have a label element', () => {
      cy.getCy(LANDING.TEST_ID.LABEL_CHECKBOX).contains(
        'Are you older than 18 years old?',
      );
    });

    it('Should toggle input type checkbox checked attribute when clicked two times', () => {
      cy.getCy(LANDING.TEST_ID.LABEL_CHECKBOX).click();
      cy.getCy(LANDING.TEST_ID.INPUT_CHECKBOX).should('be.checked');
      cy.getCy(LANDING.TEST_ID.LABEL_CHECKBOX).click();
      cy.getCy(LANDING.TEST_ID.INPUT_CHECKBOX).should('be.not.checked');
    });

    it('Should uncheck input type checkbox when clicked ->', () => {
      cy.getCy(LANDING.TEST_ID.LABEL_CHECKBOX).click();
      cy.getCy(LANDING.TEST_ID.INPUT_CHECKBOX).should('be.checked');
      cy.getCy(LANDING.TEST_ID.LABEL_CHECKBOX).click();
      cy.getCy(LANDING.TEST_ID.INPUT_CHECKBOX).should('be.not.checked');
    });
  });

  describe('button element ->', () => {
    it('Should have a button element with "Enter" text', () => {
      cy.getCy(LANDING.TEST_ID.SUBMIT_BUTTON)
        .invoke('text')
        .should('eq', 'Enter');
    });
    it('Should start disabled', () => {
      cy.getCy(LANDING.TEST_ID.SUBMIT_BUTTON).should('be.disabled');
    });
    it('Should be disabled if input name is invalid with checkbox checked', () => {
      cy.getCy(LANDING.TEST_ID.LABEL_CHECKBOX).click();
      cy.getCy(LANDING.TEST_ID.INPUT_TEXT).type('test r').blur();
      cy.getCy(LANDING.TEST_ID.SUBMIT_BUTTON).should('be.disabled');
    });

    it('Should be disabled if input name is valid with checkbox unchecked', () => {
      cy.getCy(LANDING.TEST_ID.INPUT_TEXT).type('test name').blur();
      cy.getCy(LANDING.TEST_ID.SUBMIT_BUTTON).should('be.disabled');
    });

    it('Should be enabled if input name is valid with checkbox checked', () => {
      cy.getCy(LANDING.TEST_ID.LABEL_CHECKBOX).click();
      cy.getCy(LANDING.TEST_ID.INPUT_TEXT).type('test name').blur();
      cy.getCy(LANDING.TEST_ID.SUBMIT_BUTTON).should('be.not.disabled');
    });
  });
});
