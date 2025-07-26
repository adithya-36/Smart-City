// cypress/e2e/anniversary.cy.js
describe('Anniversary Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8000/api/anniversary-images/', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'Smart City 5th Anniversary',
          image: '/mock/anniversary.jpg',
        }
      ],
    }).as('getAnniversaryImages');

    cy.visit('http://localhost:5173/anniversary');
  });

  it('should render the anniversary page correctly', () => {
    // Check if page loaded
    cy.get('[data-cy="anniversary-page"]').should('exist');

    // Check title exists
    cy.contains('Smart City 5th Anniversary');

    // Check image loaded
    cy.get('[data-cy="anniversary-image-0"]')
      .should('have.attr', 'src')
      .and('include', 'anniversary.jpg');
  });
});
