describe("Styling", () => {
  describe("1280px or more", () => {
    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it("should have the `header` element be a grid element with two columns", () => {
      cy.get("header")
        .should("have.css", "display", "grid")
        .then(($header) => {
          const columns = $header.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(2);
        });
    });

    it("should show the `splash` section", () => {
      cy.get(".splash")
        .should("be.visible")
        .should("have.css", "display", "block");
    });

    it("should have the `main` element set to be 70% width", () => {
      cy.get("main").should("have.css", "width", "885.5px");
    });

    it("should have the `main` element be a grid element with two columns", () => {
      cy.get("main")
        .should("have.css", "display", "grid")
        .then(($main) => {
          const columns = $main.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(2);
        });
    });

    it("should have the `footer` element be a grid element with three columns", () => {
      cy.get("footer")
        .should("have.css", "display", "grid")
        .then(($footer) => {
          const columns = $footer.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(3);
        });
    });

    it("should have the `footer` element including a large padding on all sides", () => {
      cy.get("footer").then(($footer) => {
        const top = parseFloat($footer.css("padding-top"));
        expect(top).to.be.equal(50);

        const left = parseFloat($footer.css("padding-left"));
        expect(left).to.be.greaterThan(100);

        const bottom = parseFloat($footer.css("padding-bottom"));
        expect(bottom).to.be.equal(25);

        const right = parseFloat($footer.css("padding-right"));
        expect(right).to.be.greaterThan(100);
      });
    });

    it("should not have any specific value for `text-align` for the `footer` element", () => {
      cy.get("footer").should("have.css", "text-align", "start");
    });

    it("should set the `footer h4` elements to include a border along the bottom", () => {
      cy.get("footer h4").each(($footer) => {
        cy.wrap($footer).should(
          "have.css",
          "border-bottom",
          "1px solid rgb(222, 107, 72)"
        );
      });
    });

    it("should use square bullets for the `ul` elements inside of the `footer` element", () => {
      cy.get("footer ul").should(
        "have.css",
        "list-style",
        "outside none square"
      );
    });
  });

  describe("768px to 1279px", () => {
    beforeEach(() => {
      cy.viewport("ipad-mini");
    });

    it("should have the `header` element be a grid element with two columns", () => {
      cy.get("header")
        .should("have.css", "display", "grid")
        .then(($header) => {
          const columns = $header.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(2);
        });
    });

    it("should hide the `splash` section", () => {
      cy.get(".splash").should("have.css", "display", "none");
    });

    it("should have the `main` element set to be 90% width", () => {
      cy.get("main").should("have.css", "width", "677.6875px");
    });

    it("should have the `main` element be a grid element with two columns", () => {
      cy.get("main")
        .should("have.css", "display", "grid")
        .then(($main) => {
          const columns = $main.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(2);
        });
    });

    it("should have the `footer` element be a grid element with two columns", () => {
      cy.get("footer")
        .should("have.css", "display", "grid")
        .then(($footer) => {
          const columns = $footer.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(2);
        });
    });

    it("should have the `footer` element including a large padding on all sides", () => {
      cy.get("footer").then(($footer) => {
        const top = parseFloat($footer.css("padding-top"));
        expect(top).to.be.equal(50);

        const left = parseFloat($footer.css("padding-left"));
        expect(left).to.be.greaterThan(100);

        const bottom = parseFloat($footer.css("padding-bottom"));
        expect(bottom).to.be.equal(25);

        const right = parseFloat($footer.css("padding-right"));
        expect(right).to.be.greaterThan(100);
      });
    });

    it("should not have any specific value for `text-align` for the `footer` element", () => {
      cy.get("footer").should("have.css", "text-align", "start");
    });

    it("should set the `footer h4` elements to include a border along the bottom", () => {
      cy.get("footer h4").each(($footer) => {
        cy.wrap($footer).should(
          "have.css",
          "border-bottom",
          "1px solid rgb(222, 107, 72)"
        );
      });
    });

    it("should use square bullets for the `ul` elements inside of the `footer` element", () => {
      cy.get("footer ul").should(
        "have.css",
        "list-style",
        "outside none square"
      );
    });
  });

  describe("767px or less", () => {
    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it("should have the `header` element be a grid element with one column", () => {
      cy.get("header")
        .should("have.css", "display", "grid")
        .then(($header) => {
          const columns = $header.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(1);
        });
    });

    it("should hide the `splash` section", () => {
      cy.get(".splash").should("have.css", "display", "none");
    });

    it("should have the `main` element set to be 90% width", () => {
      cy.get("main").should("have.css", "width", "324px");
    });

    it("should have the `main` element be a grid element with one columns", () => {
      cy.get("main")
        .should("have.css", "display", "grid")
        .then(($main) => {
          const columns = $main.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(1);
        });
    });

    it("should have the `footer` element be a grid element with two columns", () => {
      cy.get("footer")
        .should("have.css", "display", "grid")
        .then(($footer) => {
          const columns = $footer.css("grid-template-columns");
          expect(columns.split(" ").length).to.equal(2);
        });
    });

    it("should have the `footer` element have a 25px padding on all sides", () => {
      cy.get("footer").then(($footer) => {
        const top = parseFloat($footer.css("padding-top"));
        expect(top).to.be.equal(25);

        const left = parseFloat($footer.css("padding-left"));
        expect(left).to.be.equal(25);

        const bottom = parseFloat($footer.css("padding-bottom"));
        expect(bottom).to.be.equal(25);

        const right = parseFloat($footer.css("padding-right"));
        expect(right).to.be.equal(25);
      });
    });

    it("should set the text in the `footer` element to be aligned to the center", () => {
      cy.get("footer").should("have.css", "text-align", "center");
    });

    it("should remove the border from the `footer h4` elements", () => {
      cy.get("footer h4").each(($footer) => {
        const width = $footer.css("border-bottom").split(" ");
        const value = parseFloat(width);
        expect(value).to.equal(0);
      });
    });

    it("should have no `list-style` for the `ul` elements inside of the `footer` element", () => {
      cy.get("footer ul").should("have.css", "list-style", "outside none none");
    });
  });
});
