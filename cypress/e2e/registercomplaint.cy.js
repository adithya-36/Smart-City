describe('Register Complaint Page', () => {
  beforeEach(() => {
    cy.visit('/register-complaint');
  });

  it('should render complaint form and submit successfully', () => {
    cy.get('[data-cy="register-complaint-page"]').should('exist');
    cy.get('input#name').type('Jane Smith');
    cy.get('input#email').type('jane@example.com');
    cy.get('input#project').type('Smart Parking');
    cy.get('textarea#complaint').type('Street light not working in Zone 3.');
    
    // Optional: attach file
    // cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.pdf');

    cy.get('input#terms').check();
    cy.get('form').submit();

    cy.contains('Thank you').should('exist'); // or adjust for your success message
  });
});
