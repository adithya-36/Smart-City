describe('Inauguration Page', () => {
  beforeEach(() => {
    // Intercept BOTH localhost and 127.0.0.1 versions
    cy.intercept('GET', '**/api/inauguration-images/**', {
      statusCode: 200,
      body: [
        {
          id: 1,
          image: 'https://via.placeholder.com/300x200',
          alt: 'Mock Inauguration Image'
        }
      ]
    }).as('getInaugurationImages');

    cy.visit('/inauguration');

    // Wait for the network call to finish
    cy.wait('@getInaugurationImages');
  });

  it('should render the page and check for main content', () => {
    cy.get('[data-cy="inauguration-page"]').should('exist');
    cy.contains('Inauguration').should('exist');
  });

  it('should load dynamic content (if API-driven)', () => {
    // Retry until at least one card is found
    cy.get('[data-cy^="inauguration-card-"]', { timeout: 10000 })
      .should('have.length.at.least', 1);
  });
});
