describe('Poll Page', () => {
  beforeEach(() => {
    cy.visit('/poll');
  });

  it('should display poll options and allow feedback submission', () => {
    cy.get('[data-cy="poll-page"]').should('exist');

    cy.get('input[type="radio"][value="nice"]').check({ force: true });
    cy.get('form').submit();

    cy.get('[data-cy="poll-success"]').should('exist');
  });

  it('should allow submitting another response', () => {
    cy.get('input[type="radio"][value="nice"]').check({ force: true });
    cy.get('form').submit();

    cy.get('[data-cy="submit-another"]').click();
    cy.get('input[type="radio"][value="medium"]').check({ force: true });
    cy.get('form').submit();

    cy.get('[data-cy="poll-success"]').should('exist');
  });
});
