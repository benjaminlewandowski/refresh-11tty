import selectors from "../utilities/selectors";

// if sticky header selector is availible run code,
// when not trow an warning inside browser console
const sticky = function sticky() {
    if (selectors.sticky === null || selectors.sticky === undefined) {
        console.warn("selectors.sticky is null or undefined");
    } else {
    }
};

export default sticky;
