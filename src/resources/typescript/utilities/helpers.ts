import selectors from "../utilities/selectors";

const page = function (name) {
    if (!name) {
        return selectors.body.getAttribute("id");
    }

    return selectors.body.getAttribute("id") === name;
};

const exists = function (el, limit) {
    return el.length > 0;
};

export { page, exists };
