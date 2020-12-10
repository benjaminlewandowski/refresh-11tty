import selectors from "../utilities/selectors";

const nojs = function nojs() {
    selectors.root.classList.remove("no-js");
};

export default nojs;
