describe("Happy Path", () => {
  it("Initial Load", () => {
    cy.visit("/");
    cy.contains("Paul's Pokedex");
    cy.contains("Ekans");
    cy.url().should("include", "/pokedex/page/0");
  });

  it("Goto next page", () => {
    cy.visit("/");
    cy.contains("Next").click();
    cy.contains("Gloom");
    cy.url().should("include", "/pokedex/page/1");
  });

  it("Goto previous page", () => {
    cy.visit("pokedex/page/10");
    cy.contains("Previous").click();
    cy.contains("Shiftry");
    cy.url().should("include", "/pokedex/page/9");
  });

  it("Search", () => {
    cy.visit("/");
    cy.get("[placeholder='Search here...'").type("Zap");
    cy.contains("Zapdos");
  });

  it("Pokemon Details", () => {
    cy.visit("/");
    cy.contains("Bulbasaur").click();
    cy.url().should("include", "/pokemon/");
    cy.contains("Bulbasaur");
    cy.contains("National Number: 1");
  });

  it("Create and Delete Pokemon", () => {
    cy.visit("/");
    cy.contains("Current role: user").click();
    cy.contains("Create").click();
    cy.contains("Title").next().type("Cypress");
    cy.contains("Number").next().type("999");
    cy.contains("Image").next().type("/image/url");
    cy.contains("Create Pokemon").click();

    //Delete newly created pokemon to clean-up.
    cy.get("[placeholder='Search here...'").type("Cypress");
    cy.contains("Cypress").click();
    cy.url().should("include", "/pokemon/");
    cy.contains("Kill Pokemon").click();

    //Do a search to make sure Pokemon was killed
    cy.get("[placeholder='Search here...'").type("Cypress");
    cy.contains("No Pokemon Found");
  });

  it("Edit Pokemon", () => {
    cy.visit("/");
    cy.contains("Current role: user").click();
    cy.contains("Bulbasaur").click();
    cy.url().should("include", "/pokemon/");
    cy.contains("National Number: 1");

    cy.contains("Edit Pokemon").click();

    cy.contains("Title").next().type(" UPDATED");
    cy.contains("Update Pokemon").click();

    //Update again to revert back to original name
    cy.contains("Bulbasaur UPDATED").click();
    cy.url().should("include", "/pokemon/");
    cy.contains("National Number: 1");

    cy.contains("Edit Pokemon").click();

    cy.get("[value='Bulbasaur UPDATED']").clear().type("Bulbasaur");
    cy.contains("Update Pokemon").click();
  });
});
