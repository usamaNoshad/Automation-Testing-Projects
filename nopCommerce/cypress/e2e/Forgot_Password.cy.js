///<reference types="cypress"/>
describe("Verify Forgot Functionality", () => {
  beforeEach("Visit Website", () => {
    cy.visit("/");
  });
  it("Forgot Password", () => {
    cy.url().should("eq", "https://demo.nopcommerce.com/");
    cy.title().should("contain", "nopCommerce demo store");
    cy.get(".header-links ul :nth-child(even) a.ico-login").should(
      "be.visible"
    );
    cy.get(".header-links ul :nth-child(even) a.ico-login").click();
    cy.title().should("include", "Login");
    cy.get(".forgot-password").find("a").click();
    cy.title().should("include", "Password Recovery");
    cy.get(".page-title").find("h1").should("contain", "Password recovery");
    cy.get("#Email").type("bwwmjn@qiott.com");
    cy.get("#Email").should("have.value", "bwwmjn@qiott.com");
    cy.get(".buttons").find("button").click();
    cy.get(".bar-notification")
      .find("p")
      .should("contain", "Email with instructions has been sent to you.");
  });
});
