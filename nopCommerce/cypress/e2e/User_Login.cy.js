/// <reference types="cypress"/>
describe("Verify the Functionality of Login & Logout", () => {
  beforeEach("Visit Website", () => {
    cy.visit("/");
  });
  it("User Login & Logout Functionality", () => {
    cy.url().should("eq", "https://demo.nopcommerce.com/");
    cy.title().should("contain", "nopCommerce demo store");
    cy.get(".header-links ul :nth-child(even) a.ico-login").click();
    cy.get(".header-links ul :nth-child(even) a.ico-login").should(
      "have.text",
      "Log in"
    );
    cy.title().should("include", "Login");
    cy.get(".page-title")
      .contains("Welcome, Please Sign In!")
      .should("be.visible");
    cy.get("#Email").type("iffne2ri1@kzccv.com");
    cy.get("#Email").should("have.value", "iffne2ri1@kzccv.com");
    cy.get("#Password").type("example123");
    cy.get("#Password").should("have.value", "example123");
    cy.get(".buttons").find("button").eq(1).click();
    cy.url().should("eq", "https://demo.nopcommerce.com/");
    cy.get(".header-links ul :nth-child(even) a.ico-logout").click();
    cy.get(".header-links ul :nth-child(even) a.ico-login").should(
      "be.visible"
    );
  });
});
