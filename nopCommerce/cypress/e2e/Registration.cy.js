///<reference types="cypress"/>
describe("Test Suite", () => {
  beforeEach("Visit Website", () => {
    cy.visit("/");
  });
  it("passes", () => {
    cy.url().should("include", "nopcommerce");
    cy.get(".header-links").find("a").contains("Register").click();
    cy.url().should(
      "eq",
      "https://demo.nopcommerce.com/register?returnUrl=%2F"
    );
    cy.get("#gender-male").check();
    cy.get("#gender-male").should("be.checked");
    cy.get("#gender-female").should("not.be.checked");
    cy.get("#FirstName").type("Muhammad");
    cy.get("#FirstName").should("have.value", "Muhammad");
    cy.get("#LastName").type("Usama");
    cy.get("#LastName").should("have.value", "Usama");
    cy.get(".date-picker-wrapper").find("select").eq(0).select(18);
    cy.get(".date-picker-wrapper")
      .find("select")
      .eq(0)
      .should("have.value", 18);
    cy.get(".date-picker-wrapper").find("select").eq(1).select("September");
    cy.get(".date-picker-wrapper")
      .find("select")
      .eq(1)
      .should("have.value", "9");
    cy.get(".date-picker-wrapper").find("select").eq(2).select("2000");
    cy.get(".date-picker-wrapper")
      .find("select")
      .eq(2)
      .should("have.value", "2000");

    cy.request(
      "GET",
      "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10"
    ).then((response) => {
      const email = response.body[1];
      cy.get("#Email").type(email);
      cy.wait(3000);
      cy.get("#Email").should("have.value", email);
    });
    cy.get("#Company").type("xyz-Company").should("have.value", "xyz-Company");
    cy.get("#Newsletter").check().should("be.checked");
    cy.get("#Password").type("example123");
    cy.get("#Password").should("have.value", "example123");
    cy.get("#ConfirmPassword").type("example123");
    cy.get("#ConfirmPassword").should("have.value", "example123");
    cy.get("#register-button").click();
    cy.url().should(
      "eq",
      "https://demo.nopcommerce.com/registerresult/1?returnUrl=/"
    );
    cy.get(".page-title").find("h1").contains("Register").should("be.visible");
  });
});
