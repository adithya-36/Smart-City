describe('Smart City Homepage Test', () => {
  beforeEach(() => {
    // Intercept all API routes used on homepage BEFORE visit
    cy.intercept('GET', '**/api/news').as('getNews');
    cy.intercept('GET', '**/api/officials').as('getOfficials');
    cy.intercept('GET', '**/api/events').as('getEvents');
    cy.intercept('GET', '**/api/media').as('getMedia');

    cy.visit('http://localhost:5173/'); // Vite dev server
  });

  it('Displays static header text', () => {
    cy.contains('Smart City').should('exist');
  });

  it('DEBUG: inspect body content after getNews', () => {
    cy.wait('@getNews');
    cy.get('body').then($body => {
      console.log("Cypress sees body HTML:", $body.html());
    });
  });

  it('Loads and displays officials', () => {
    cy.wait('@getOfficials');
    cy.get('[data-cy="official-card"]').should('have.length.greaterThan', 0);
  });

  it('Navigates to News Page', () => {
    cy.get('a[href="/news"]').click();
    cy.url().should('include', '/news');
  });

  it('Displays footer with links', () => {
    cy.get('[data-cy="footer"]').should('exist');
    cy.get('[data-cy="footer"]').within(() => {
      cy.contains('Contact Us');
      cy.get('a[href="/terms"]').should('exist');
    });
  });
});
