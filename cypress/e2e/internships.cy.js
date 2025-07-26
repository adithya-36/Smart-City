/// <reference types="cypress" />

describe('Internships Page', () => {
  const mockInternships = [
    {
      id: 1,
      post: 'Web Developer',
      title: 'Frontend Internship',
      status: 'Open',
      date: '2025-07-18',
      pdf_link: null,
      external_url: null,
    },
    {
      id: 2,
      post: 'Data Analyst',
      title: 'Analytics Internship',
      status: 'Closed',
      date: '2025-07-10',
      pdf_link: null,
      external_url: null,
    },
    {
      id: 3,
      post: 'UI Designer',
      title: 'Design Internship',
      status: 'Open',
      date: '2025-07-19',
      pdf_link: null,
      external_url: null,
    },
  ];

  const mockDetail = {
    id: 1,
    post: 'Web Developer',
    title: 'Frontend Internship',
    status: 'Open',
    date: '2025-07-18',
    pdf_link: null,
    external_url: null,
  };

  beforeEach(() => {
    // Intercept internships list
    cy.intercept('GET', 'http://127.0.0.1:8000/api/internships/', {
      statusCode: 200,
      body: mockInternships,
    }).as('getInternships');

    // Visit main internships page
    cy.visit('/internships');
    cy.wait('@getInternships');
  });

  it('should render internships page and display internship list', () => {
    cy.get('[data-cy="internship-page"]').should('exist');
    cy.get('tbody tr').should('have.length', 3);
    cy.contains('Frontend Internship');
    cy.contains('Analytics Internship');
    cy.contains('Design Internship');
  });

  it('should filter internships by Open status', () => {
    cy.get('select').select('Open');
    cy.get('tbody tr').should('have.length', 2);
    cy.get('tbody tr').each(($el) => {
      cy.wrap($el).contains('Open');
    });
  });

  it('should filter internships by Closed status', () => {
    cy.get('select').select('Closed');
    cy.get('tbody tr').should('have.length', 1);
    cy.get('tbody tr').first().contains('Closed');
  });

  it('should show all internships again when selecting All', () => {
    cy.get('select').select('All');
    cy.get('tbody tr').should('have.length', 3);
  });

  it('should display internship detail page directly', () => {
    // Intercept detail call
    cy.intercept('GET', 'http://127.0.0.1:8000/api/internships/1/', {
      statusCode: 200,
      body: mockDetail,
    }).as('getInternshipDetail');

    cy.visit('/internships/1');
    cy.wait('@getInternshipDetail');
    cy.get('[data-cy="internship-detail-page"]').should('exist');
    cy.contains('Frontend Internship');
    cy.contains('Status');
    cy.contains('Open');
    cy.contains('Web Developer');
  });
});
