"use strict";
exports.__esModule = true;
var selectors_1 = require("../utilities/selectors");
var colorscheme = function colorscheme() {
    if (selectors_1["default"].colorSchemeToggle === null ||
        selectors_1["default"].colorSchemeToggle === undefined) {
        console.warn("selectors.colorSchemeToggle is null or undefined");
    }
    else {
        console.info("selectors.colorSchemeToggle found");
        var colorSchemeDark_1 = function () {
            selectors_1["default"].root.classList.add("color-scheme--dark");
            selectors_1["default"].root.classList.remove("color-scheme--system");
            selectors_1["default"].root.classList.remove("color-scheme--light");
            localStorage.setItem("colorScheme", "dark");
        };
        var colorSchemeSystem_1 = function () {
            selectors_1["default"].root.classList.remove("color-scheme--dark");
            selectors_1["default"].root.classList.add("color-scheme--system");
            selectors_1["default"].root.classList.remove("color-scheme--light");
            localStorage.setItem("colorScheme", "system");
        };
        var colorSchemeLight_1 = function () {
            selectors_1["default"].root.classList.remove("color-scheme--dark");
            selectors_1["default"].root.classList.remove("color-scheme--system");
            selectors_1["default"].root.classList.add("color-scheme--light");
            localStorage.setItem("colorScheme", "light");
        };
        if (localStorage.getItem("colorScheme") === "dark") {
            colorSchemeDark_1();
        }
        if (localStorage.getItem("colorScheme") === "light") {
            colorSchemeLight_1();
        }
        if (localStorage.getItem("colorScheme") === "system") {
            colorSchemeSystem_1();
        }
        if (localStorage.getItem("colorScheme") === null) {
            colorSchemeSystem_1();
        }
        selectors_1["default"].colorSchemeToggle.addEventListener("click", function () {
            if (localStorage.getItem("colorScheme") === "dark") {
                colorSchemeSystem_1();
            }
            else if (localStorage.getItem("colorScheme") === "light") {
                colorSchemeDark_1();
            }
            else {
                colorSchemeLight_1();
            }
        });
    }
};
exports["default"] = colorscheme;
