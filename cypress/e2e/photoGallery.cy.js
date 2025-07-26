describe('Photo Gallery Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/albums/', {
      fixture: 'mockAlbums.json'
    }).as('getAlbums');

    cy.visit('/photo-gallery');
    cy.wait('@getAlbums');
  });

  it('opens an album and views a photo in modal view', () => {
    cy.get('[data-cy="album-card-1"]').click();
    cy.get('[data-cy="photo-thumbnail-0"]').click({ force: true });

    // Wait for modal image to load
    cy.wait(1000);
    
    // Assert modal image
    cy.get('[data-cy="modal-image"]')
      .should('have.attr', 'src')
      .and('include', 'nature1.jpeg') // filename from mock data
      .should('be.visible');

    // Close modal
    cy.get('[data-cy="close-modal"]').click();
    cy.get('[data-cy="modal-image"]').should('not.exist');
  });
});