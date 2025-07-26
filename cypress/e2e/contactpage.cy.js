describe('Contact Us Page', () => {
  beforeEach(() => {
    cy.visit('/contact-us');
  });

  it('should render contact page correctly', () => {
    cy.get('[data-cy="contact-us-page"]').should('exist');
    cy.contains('Contact Us'); // Adjust if translation used
  });

  it('should fill and submit contact form', () => {
    cy.intercept('POST', 'http://127.0.0.1:8000/api/contact-messages/').as('submitContact');
    cy.get('input#name').type('John Doe');
    cy.get('input#email').type('john@example.com');
    cy.get('input#phone').type('9876543210');
    cy.get('textarea#message').type('This is a test message.');
    cy.get('form button[type="submit"]').click();
    cy.get('[data-cy="contact-success"]', { timeout: 10000 }).should('exist');

  });

  it('should contain contact details and location map', () => {
    cy.get('iframe').should('exist');
    cy.contains('Email');
    cy.contains('Phone');
  });
});
