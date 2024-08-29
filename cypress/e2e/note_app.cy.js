describe("Note app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:5173");
  });

  it("front page can be opened", function () {
    cy.contains("Notes");
    cy.contains(
      "Note app, Department of Computer Science, University of Helsinki 2023"
    );
  });

  it("user can log in", function () {
    cy.contains("log in").click();
    cy.get("#username").type("root");
    cy.get("#password").type("sekret");
    cy.get("#login-button").click();

    cy.contains("root logged in");
  });

  describe("when logged in", function () {
    beforeEach(function () {
      cy.contains("log in").click();
      cy.get("#username").type("root");
      cy.get("#password").type("sekret");
      cy.get("#login-button").click();
    });

    it("a new note can be created", function () {
      cy.contains("new note").click();
      cy.get("#note-input").type("a note created by cypress");
      cy.contains("save").click();
      cy.contains("a note created by cypress");
    });
  });
});
