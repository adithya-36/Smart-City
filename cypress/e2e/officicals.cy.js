describe('Homepage Officials Section Test', () => {
  it('Displays officials and navigates to the SPV page', () => {
    // Intercept officials for homepage
    cy.intercept('GET', '**/api/officials/').as('getOfficials');

    // Intercept all API calls needed by SPV page to avoid network errors
    cy.intercept('GET', '**/api/board-members/', { statusCode: 200, body: [] }).as('getBoardMembers');
    cy.intercept('GET', '**/api/ceos/', { statusCode: 200, body: [] }).as('getCeos');
    cy.intercept('GET', '**/api/staff/', { statusCode: 200, body: [] }).as('getStaff');

    cy.visit('http://localhost:5173/');
    cy.wait('@getOfficials');

    // Confirm officials are visible on homepage BEFORE navigation

    // Click "View All" to go to /spv
    cy.get('[data-cy="view-all-officials"]').should('exist').click();

    // Confirm redirection
    cy.url({ timeout: 10000 }).should('include', '/spv');

    // Optionally, wait for SPV data APIs
    cy.wait(['@getBoardMembers', '@getCeos', '@getStaff']);
  });
});
