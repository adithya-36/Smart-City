describe('Smart City Homepage News Test', () => {
  it('Loads homepage and fetches mocked news data', () => {
    // Intercept the backend call
    cy.intercept('GET', '**/api/news/', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'Smart City Inauguration',
          content: 'A grand event was held to inaugurate...',
          date: '2025-07-01',
          image: 'https://via.placeholder.com/300x200.png?text=News+1',
        },
      ],
    }).as('getNews');

    // Visit the page that loads the news
    cy.visit('http://localhost:5173/news');

    // Wait for the API call to complete
    cy.wait('@getNews');

    // Now check DOM if cards are rendered
    cy.get('[data-cy="news-card"]').should('have.length.greaterThan', 0);
    cy.get('[data-cy="news-title"]').first().should('contain.text', 'Smart City Inauguration');
  });
});
