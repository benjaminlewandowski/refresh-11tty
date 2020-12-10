"use strict";
exports.__esModule = true;
var selectors_1 = require("../utilities/selectors");
var nojs = function nojs() {
    selectors_1["default"].root.classList.remove("no-js");
};
exports["default"] = nojs;
