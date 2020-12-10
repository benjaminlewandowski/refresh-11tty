"use strict";
exports.__esModule = true;
var selectors_1 = require("../utilities/selectors");
var loader = function loader() {
    if (selectors_1["default"].loader === null) {
        console.warn("no loader initialized? (loader is null)");
    }
    else if (selectors_1["default"].loader === undefined) {
        console.warn("no loader initialized? (loader is undefined)");
    }
    else {
        console.info("loader found");
        var removeLoader_1 = function () {
            document.body.classList.remove("loading");
            document.body.classList.add("loaded");
            selectors_1["default"].loader.classList.remove("loading");
            selectors_1["default"].loader.classList.add("loaded");
            setTimeout(function () {
                selectors_1["default"].loader.remove();
            }, 500);
        };
        document.body.onload = function () {
            setTimeout(function () {
                removeLoader_1();
            }, 250);
        };
        console.info("loader removed");
    }
};
exports["default"] = loader;
