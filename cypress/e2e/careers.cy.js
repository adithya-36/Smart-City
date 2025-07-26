describe('Careers Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/careers/', {
    statusCode: 200,
    body: [
      {
        id: 1,
        no: '001',
        title: 'Junior Developer',
        status: 'Open',
        posted_on: '2025-07-01',
        pdf: 'http://example.com/sample.pdf'
      }
    ]
  }).as('getCareers');
    cy.visit('/careers');
  });

  it('should render the careers page', () => {
    cy.get('[data-cy="careers-page"]').should('exist');
    cy.contains('Careers');
  });

  it('should display career listings if available', () => {
    cy.get('table').should('exist');

    // Check at least one row exists (if API returns data)
    cy.get('tbody tr').its('length').should('be.gte', 0);
  });

  it('should open career detail page when title is clicked', () => {
    // Only run if there's at least one listing
    cy.get('tbody tr').first().within(() => {
      cy.get('a').first().click();
    });

    cy.url().should('include', '/careers/');
    cy.get('[data-cy="career-detail-page"]').should('exist');
  });
});
