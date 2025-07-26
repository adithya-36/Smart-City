describe('Ente Keralam Page Test', () => {
  beforeEach(() => {
    // Visit the page directly
    cy.visit('http://localhost:5173/ente-keralam');
  });

  it('should display the page heading and load images', () => {
    cy.get('[data-cy="ente-keralam-page"]').should('exist');
    cy.contains('Ente Keralam').should('be.visible');

    // Check that at least 1 image is visible
    cy.get('[data-cy="ente-keralam-image"]').first().should('be.visible');
  });

  it('should cycle to the next image on clicking next', () => {
    cy.get('[data-cy="ente-keralam-image"]').as('images');

    // Get the src of the first image
    cy.get('@images').first().invoke('attr', 'src').then((firstSrc) => {
      cy.get('button[aria-label="Next image"]').click();
      cy.wait(500); // allow transition

      cy.get('@images').first().invoke('attr', 'src').should('not.eq', firstSrc);
    });
  });

  it('should pause and play autoplay', () => {
    cy.contains('Pause').click();
    cy.contains('Play').should('exist');
    cy.contains('Play').click();
    cy.contains('Pause').should('exist');
  });
});
