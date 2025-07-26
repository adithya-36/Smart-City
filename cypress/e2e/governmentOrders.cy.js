describe('Government Orders Page and Detail View', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/government-orders/', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'City Infrastructure Development Order',
          date: '2024-07-01',
          pdf: 'http://127.0.0.1:8000/media/documents/infrastructure_order.pdf'
        },
        {
          id: 2,
          title: 'Green Energy Implementation Policy',
          date: '2024-07-10',
          pdf: 'http://127.0.0.1:8000/media/documents/green_energy_policy.pdf'
        }
      ]
    }).as('getOrders');
  });

  it('loads and displays list of government orders', () => {
    cy.visit('http://localhost:5173/government-orders');
    cy.wait('@getOrders');

    cy.get('[data-cy="government-orders-page"]').should('exist');
    cy.contains('City Infrastructure Development Order').should('be.visible');
    cy.contains('Green Energy Implementation Policy').should('be.visible');

    cy.get('a[href*="infrastructure_order.pdf"]').should('have.attr', 'target', '_blank');
  });

  it('navigates to detail view and shows download link', () => {
    cy.intercept('GET', '**/api/government-orders/2/', {
      statusCode: 200,
      body: {
        id: 2,
        title: 'Green Energy Implementation Policy',
        date: '2024-07-10',
        pdf: 'http://127.0.0.1:8000/media/documents/green_energy_policy.pdf'
      }
    }).as('getOrderDetail');

    cy.visit('http://localhost:5173/government-orders');
    cy.wait('@getOrders');

    cy.contains('Green Energy Implementation Policy').click();

    cy.url().should('include', '/government-orders/2');
    cy.wait('@getOrderDetail');

    cy.get('[data-cy="government-order-detail-page"]').should('exist');
    cy.contains('Download Order')
      .should('have.attr', 'href')
      .and('include', 'green_energy_policy.pdf');
  });
});
