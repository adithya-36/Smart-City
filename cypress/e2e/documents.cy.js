describe('Documents Page and Detail View', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/documents/', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'Smart City Annual Report 2024',
          file: 'http://127.0.0.1:8000/media/documents/Smart_City_presentation.pdf'
        },
        {
          id: 2,
          title: 'Urban Planning Guidelines',
          file: 'http://127.0.0.1:8000/media/documents/Smart_City_presentation.pdf'
        }
      ]
    }).as('getDocuments');
  });

  it('loads and displays a list of documents', () => {
    cy.visit('http://localhost:5173/downloads');
    cy.wait('@getDocuments');

    cy.get('[data-cy="documents-page"]').should('exist');
    cy.contains('Smart City Annual Report 2024').should('be.visible');
    cy.contains('Urban Planning Guidelines').should('be.visible');
  });

  it('navigates to document detail and shows download link', () => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/documents/2/', {
      statusCode: 200,
      body: {
        id: 2,
        title: 'Urban Planning Guidelines',
        file: 'http://127.0.0.1:8000/media/documents/answer_to_pre_proposal__queries.pdf'

      }
    }).as('getDocumentDetail');

    cy.visit('http://localhost:5173/downloads');
    cy.wait('@getDocuments');

    cy.contains('Urban Planning Guidelines').click();

    // ✅ Corrected assertion
    cy.url().should('include', '/downloads/2');
    cy.wait('@getDocumentDetail');

    cy.get('[data-cy="document-detail-page"]').should('exist');
    cy.contains('Download PDF')
      .should('have.attr', 'href')
      .and('include', 'answer_to_pre_proposal__queries.pdf');
  });

});
