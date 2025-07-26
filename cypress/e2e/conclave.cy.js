describe('Conclave Page', () => {
  beforeEach(() => {
    // Mock API calls
    cy.intercept('GET', 'http://localhost:8000/api/conclave-speakers/', {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: 'Dr. Jane Doe',
          designation: 'Urban Planner',
          image: '/media/speaker1.jpg',
        },
        {
          id: 2,
          name: 'Mr. John Smith',
          designation: 'Tech Expert',
          image: '/media/speaker2.jpg',
        },
      ],
    }).as('getSpeakers');

    cy.intercept('GET', 'http://localhost:8000/api/conclave-recordings/', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'Opening Ceremony',
          youtube_link: 'https://www.youtube.com/embed/sample1',
          date: '2025-01-01',
        },
        {
          id: 2,
          title: 'Panel Discussion',
          youtube_link: 'https://www.youtube.com/embed/sample2',
          date: '2025-01-02',
        },
      ],
    }).as('getRecordings');

    // Visit the page
    cy.visit('http://localhost:5173/conclave');
  });

  it('renders all main sections with mocked data', () => {
    cy.get('[data-cy="conclave-page"]').should('exist');
    cy.wait('@getSpeakers');
    cy.wait('@getRecordings');

    // Poster check
    cy.get('[data-cy="conclave-page"] img').first().should('have.attr', 'src').and('include', 'poster.jpg');

    // About
    cy.contains('h2', 'About the Conclave').should('exist');

    // Focus
    cy.contains('h2', 'Key Focus Areas').should('exist');

    // Recordings
    cy.contains('h2', 'Recordings').should('exist');
    cy.get('iframe').should('have.length.at.least', 1);

    // Speakers
    cy.contains('h2', 'Speakers').should('exist');
    cy.get('img[alt]').should('have.length.at.least', 2);

    // Highlights
    cy.contains('h2', 'Event Highlights').should('exist');
  });
});