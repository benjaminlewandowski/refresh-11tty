"use strict";
exports.__esModule = true;
exports.exists = exports.page = void 0;
var selectors_1 = require("../utilities/selectors");
var page = function (name) {
    if (!name) {
        return selectors_1["default"].body.getAttribute("id");
    }
    return selectors_1["default"].body.getAttribute("id") === name;
};
exports.page = page;
var exists = function (el, limit) {
    return el.length > 0;
};
exports.exists = exists;
