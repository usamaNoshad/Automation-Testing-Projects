/// <reference types="cypress"/>
describe("Test Suite", () => {
  beforeEach("Visit Website", () => {
    cy.visit("/");
  });
  it("Verify Add to Cart Functionality", () => {
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
    cy.get(".buttons").eq(2).click();
    cy.get(".content")
      .contains("The product has been added to your ")
      .should("be.visible")
      .and("have.text", "The product has been added to your shopping cart");
    cy.scrollTo("top", { duration: 2000 });
    cy.get(".ico-cart").click({ force: true });
    cy.get(".page-title").find("h1").should("be.visible");
    cy.get("#checkout").scrollIntoView({ duration: 1000 });
    cy.get("#termsofservice").check();
    cy.get("#checkout").click();
    cy.get("#Email").type("2xbisg5mnte@wuuvo.com");
    cy.get("#Email").should("have.value", "2xbisg5mnte@wuuvo.com");
    cy.get("#Password").type("example123");
    cy.get("#Password").should("have.value", "example123");
    cy.get(".buttons").find("button").eq(1).click();
    cy.get(".page-title").find("h1").should("be.visible");
    cy.get("#BillingNewAddress_FirstName").type("Muhammad");
    cy.get("#BillingNewAddress_FirstName").should("have.value", "Muhammad");
    cy.get("#BillingNewAddress_LastName").type("Usama");
    cy.get("#BillingNewAddress_LastName").should("have.value", "Usama");
    cy.get("#BillingNewAddress_Email").type("2xbisg5mnte@wuuvo.com");
    cy.get("#BillingNewAddress_Email").should(
      "have.value",
      "2xbisg5mnte@wuuvo.com"
    );
    cy.get("#BillingNewAddress_CountryId").select("Pakistan");
    cy.get("#BillingNewAddress_CountryId").should("have.value", "150");
    cy.get("#BillingNewAddress_City").type("Karachi");
    cy.get("#BillingNewAddress_City").should("have.value", "Karachi");
    cy.get("#BillingNewAddress_Address1").type("xyz");
    cy.get("#BillingNewAddress_Address1").should("have.value", "xyz");
    cy.get("#BillingNewAddress_ZipPostalCode").type("75000");
    cy.get("#BillingNewAddress_ZipPostalCode").should("have.value", "75000");
    cy.get("#BillingNewAddress_PhoneNumber").type("03352145450");
    cy.get("#BillingNewAddress_PhoneNumber").should(
      "have.value",
      "03352145450"
    );
    cy.get("button").contains("Continue").click();
    cy.get("button").contains("Continue").should("exist");
    cy.get("#shippingoption_1").check();
    cy.get("#shippingoption_1").should("be.checked");
    cy.get("#shipping-method-buttons-container > .button-1").should(
      "be.visible"
    );
    cy.get("#shipping-method-buttons-container > .button-1").click();
    cy.get("#paymentmethod_1").check();
    cy.get("#paymentmethod_1").should("be.checked");
    cy.get("#payment-method-buttons-container > .button-1").click();
    cy.get("#payment-method-buttons-container > .button-1").should("exist");
    cy.get("#CreditCardType").select("Visa");
    cy.get("#CreditCardType").should("have.value", "visa");
    cy.get("#CardholderName").type("Sally Walsh");
    cy.get("#CardholderName").should("have.value", "Sally Walsh");
    cy.get("#CardNumber").type("6377-3445-7550-3754");
    cy.get("#CardNumber").should("have.value", "6377-3445-7550-3754");
    cy.get("#ExpireMonth").select("05");
    cy.get("#ExpireMonth").should("have.value", "5");
    cy.get("#ExpireYear").select("2023");
    cy.get("#ExpireYear").should("have.value", "2023");
    cy.get("#CardCode").type("608");
    cy.get("#CardCode").should("have.value", "608");
    cy.get("#payment-info-buttons-container > .button-1").click();
    cy.get("#payment-info-buttons-container > .button-1").should("exist");
    cy.get("h1").should("have.text", "Checkout");
    cy.get("#confirm-order-buttons-container > .button-1").should("exist");
    cy.get("#confirm-order-buttons-container > .button-1").click();
    cy.get("h1").should("have.text", "Thank you");
    cy.get(".buttons > .button-1").should("exist");
    cy.get(".buttons > .button-1").click();
  });
});
