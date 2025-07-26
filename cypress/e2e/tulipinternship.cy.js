describe('Tulip Internship Page', () => {
  beforeEach(() => {
    cy.visit('/tulip-internship');
  });

  it('should render the Tulip Internship page', () => {
    cy.get('[data-cy="tulip-internship-page"]').should('exist');
    cy.contains('Tulip Internships');
  });

  it('should display the video iframe', () => {
    cy.get('iframe').should('have.attr', 'src').and('include', 'youtube.com/embed');
  });

  it('should display the event poster', () => {
    cy.get('img[alt*="Tulip Internship Launch Event Poster"]').should('exist');
  });

  it('should show all intern cards', () => {
    cy.get('[data-cy="tulip-internship-page"]')
      .find('img')
      .filter('[alt="Anju"], [alt="Abhijith D V"], [alt="Gayatri"], [alt="Anjusha"]')
      .should('have.length', 4);
  });

  it('should show the Apply Now button with correct link', () => {
    cy.contains('Apply Now for Next Batch')
      .parent('a') // go to the parent <a> element
      .should('have.attr', 'href', 'https://internship.aicte-india.org/')
      .and('have.attr', 'target', '_blank');
  });

  it('should display testimonial quote at the bottom', () => {
    cy.contains(
      'The Tulip Internship provided me with real-world experience that bridged the gap'
    ).should('exist');
    cy.contains('- Previous Intern').should('exist');
  });
});
