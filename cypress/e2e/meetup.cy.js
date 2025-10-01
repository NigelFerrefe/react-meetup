describe("Complete flow app", () => {
  const meetupData = {
    title: "Cypress Test Meetup",
    image: "https://i.pravatar.cc/300",
    address: "123 Cypress Street",
    description: "Testing meetup creation with Cypress",
  };

  it("creates a new meetup and adds it to favorites", () => {
    // 1. Visit home page
    cy.visit("http://localhost:3000/");

    // 2. Navigate to New Meetup page
    cy.contains("Add New Meetup").click();
    cy.url().should("include", "/new-meetup");

    // 3. Fill and submit the form
    cy.get('input[name="title"]').type(meetupData.title);
    cy.get('input[name="image"]').type(meetupData.image);
    cy.get('input[name="address"]').type(meetupData.address);
    cy.get('textarea[name="description"]').type(meetupData.description);

    cy.get("form").submit();

    // 5. Find the created meetup and click "Add to Favorites"
    cy.get('[data-test="meet-up-item"]')
      .contains(meetupData.title)
      .closest("li")
      .within(() => {
        cy.get("button").click();
      });
    cy.scrollTo("top");
    cy.get('[data-test="navigation-header"]').should("be.visible");

    // 6. Navigate to Favorites page and check the meetup
    cy.contains("My Favorites").click();
    cy.url().should("include", "/favorites");
    cy.get('[data-test="meet-up-item"]')
      .contains(meetupData.title)
      .should("exist");
  });
});
