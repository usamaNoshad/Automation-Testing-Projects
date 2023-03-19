/// <reference types="cypress"/>
describe("Wishlist Functionality", () => {
  beforeEach("Visit Website", () => {
    cy.visit("/");
  });
  it("Wishlist", () => {
    cy.url().should("contains", "nopcommerce");
    cy.title().should("include", "demo store");
    cy.get("img[alt='nopCommerce demo store']").should("be.visible");
    cy.get("img[alt='nopCommerce demo store']").should("exist");
    cy.get("#small-searchterms").type("laptop{enter}");
    cy.get(".product-title")
      .find("a")
      .contains("Lenovo Thinkpad X1 Carbon Laptop")
      .scrollIntoView({ duration: 2000 });
    cy.get(".product-title")
      .find("a")
      .contains("Lenovo Thinkpad X1 Carbon Laptop")
      .should("have.text", "Lenovo Thinkpad X1 Carbon Laptop");
    cy.get(".product-title")
      .find("a")
      .contains("Lenovo Thinkpad X1 Carbon Laptop")
      .should("be.visible");

    cy.get("button").contains("wishlist").click();
    cy.get(".content")
      .contains("The product has been added to your ")
      .should("be.visible")
      .and("have.text", "The product has been added to your wishlist");
    cy.scrollTo("top", { duration: 2000 });
    cy.get(".ico-wishlist").click();
    cy.url().should("eq", "https://demo.nopcommerce.com/wishlist");
    cy.title().should("include", "Wishlist");
    cy.get("h1").should("have.text", "Wishlist");
    cy.get(".product")
      .find("a")
      .should("have.text", "Asus N551JK-XO076H Laptop");
    cy.get(".add-to-cart").find("input").should("be.visible");
    cy.get(".add-to-cart").find("input").check();
    cy.get(".add-to-cart").find("input").should("be.checked");
    cy.get("button").contains("Add to cart").should("have.text", "Add to cart");
    cy.get("button").contains("Add to cart").click();
    cy.get("h1").should("be.visible");
  });
});
