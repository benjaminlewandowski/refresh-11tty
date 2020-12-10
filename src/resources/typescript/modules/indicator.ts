import selectors from "../utilities/selectors";

const indicator = function indicator() {
    if (selectors.indicator === null || selectors.indicator === undefined) {
        console.warn("selectors.indicator is null or undefined");
    } else {
        console.info("selectors.indicator found");
    }
};

export default indicator;
