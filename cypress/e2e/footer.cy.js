describe('Footer Component Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should render the footer with all main sections', () => {
    cy.get('[data-cy="footer"]').should('exist');
    cy.get('[data-cy="footer"]').within(() => {
      cy.contains('Contact Us'); // You may localize this or add data-cy
      cy.contains('Recent Events');
      cy.contains('In Media');
      cy.get('a[href*="facebook.com"]').should('exist');
      cy.get('a[href*="linkedin.com"]').should('exist');
      cy.get('a[href*="x.com"]').should('exist');
      cy.get('a[href*="instagram.com"]').should('exist');
      cy.get('a[href*="youtube.com"]').should('exist');
    });
  });

  it('should navigate to Terms and Conditions page from footer', () => {
    cy.get('a[href="/terms"]').click();
    cy.url().should('include', '/terms');
    cy.get('[data-cy="terms-page"]').should('exist');
    cy.contains('Terms and Conditions');
  });

  it('should navigate to Privacy Policy page from footer', () => {
    cy.get('a[href="/privacy"]').click();
    cy.url().should('include', '/privacy');
    cy.get('[data-cy="privacy-page"]').should('exist');
    cy.contains('Privacy Policy');
  });

  it('should navigate to Disclaimer page from footer', () => {
    cy.get('a[href="/disclaimer"]').click();
    cy.url().should('include', '/disclaimer');
    cy.contains('Disclaimer'); // Add data-cy="disclaimer-page" if needed
  });
});
