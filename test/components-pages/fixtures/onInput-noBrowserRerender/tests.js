var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should allow return", () => {
        var component = window.components["onInput-return"];

        expect(component.input.name).to.equal("FRANK");
        expect(component.el.querySelector(".name").innerHTML).to.equal("FRANK");

        component.input = {
            name: "John"
        };

        component.update();

        expect(component.input.name).to.equal("JOHN");
        expect(component.el.querySelector(".name").innerHTML).to.equal("JOHN");
    });

    it("should allow input to be assigned to null", () => {
        var component = window.components["onInput-assign-null"];

        expect(component.input).to.equal(null);
        expect(component.el.querySelector(".name").innerHTML).to.equal("John");

        component.input = {
            name: "Jane"
        };

        component.update();

        expect(component.input).to.equal(null);
        expect(component.el.querySelector(".name").innerHTML).to.equal("Jane");

        component.input = {
            name: "Henry"
        };

        component.update();

        expect(component.input).to.equal(null);
        expect(component.el.querySelector(".name").innerHTML).to.equal("Henry");
    });

    it("should allow input to be assigned to null with return", () => {
        var component = window.components["onInput-assign-null-and-return"];

        expect(component.input).to.equal(null);
        expect(component.el.querySelector(".name").innerHTML).to.equal("JANE");

        component.input = {
            name: "Frank"
        };

        component.update();

        expect(component.input).to.equal(null);
        expect(component.el.querySelector(".name").innerHTML).to.equal("FRANK");

        component.input = {
            name: "Henry"
        };

        component.update();

        expect(component.input).to.equal(null);
        expect(component.el.querySelector(".name").innerHTML).to.equal("HENRY");
    });

    it("should allow input to be assigned to a new object", () => {
        var component = window.components["onInput-assign-object"];

        expect(component.input.name).to.equal("FRANK");
        expect(component.el.querySelector(".name").innerHTML).to.equal("Frank");

        component.input = {
            name: "Jane"
        };

        component.update();

        expect(component.input.name).to.equal("JANE");
        expect(component.el.querySelector(".name").innerHTML).to.equal("Jane");

        component.input = {
            name: "Henry"
        };

        component.update();

        expect(component.input.name).to.equal("HENRY");
        expect(component.el.querySelector(".name").innerHTML).to.equal("Henry");
    });

    it("should allow input to be assigned to a new object with return", () => {
        var component = window.components["onInput-assign-object-and-return"];

        expect(component.input.name).to.equal("HEATHER");
        expect(component.el.querySelector(".name").innerHTML).to.equal(
            "heather"
        );

        component.input = {
            name: "Jane"
        };

        component.update();

        expect(component.input.name).to.equal("JANE");
        expect(component.el.querySelector(".name").innerHTML).to.equal("jane");

        component.input = {
            name: "Henry"
        };

        component.update();

        expect(component.input.name).to.equal("HENRY");
        expect(component.el.querySelector(".name").innerHTML).to.equal("henry");
    });
});
