import selectors from "../utilities/selectors";

const sticky = function sticky() {
    if (selectors.sticky === null || selectors.sticky === undefined) {
        console.warn("selectors.sticky is null or undefined");
    } else {
        console.info("selectors.sticky found");
    }
};

export default sticky;
