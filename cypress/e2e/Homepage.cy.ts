describe("Assemble Movies", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.get("[data-testid='title']").should("contain.text", "Assemble Movies");
  });
});

export {};
