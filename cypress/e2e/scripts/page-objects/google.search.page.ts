class GoogleSearch {
    get googleSearch() {
      return cy.get("[title='Search']").first();
    }

    get clickDisclaimer() {
      return cy.findByText('Reject all').first()
    }

    get googleSearchBtn() {
      return cy.get('input[name="btnK"]').first();
    }
  
    get searchResults() {
      return cy.get('h3[class]').first();
    }
  
    get clickLink() {
      return cy.get('a[href*="playtech.com"]').first();      
    }
  }
  
  export default new GoogleSearch();
  