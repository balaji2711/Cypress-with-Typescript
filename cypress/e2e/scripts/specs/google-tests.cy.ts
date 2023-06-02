import search from "../page-objects/google.search.page";

describe('Google Navigation', () => {
    it('Google Search', () => {
    cy.visit('https://www.google.com')
    search.clickDisclaimer.click({force:true})
    search.googleSearch.type("Playtech");
    search.googleSearchBtn.click({force:true});
    search.searchResults.should('be.visible');
    search.clickLink.click({force:true})
    });
});