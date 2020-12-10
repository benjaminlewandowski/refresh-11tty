import selectors from "../utilities/selectors";

const navigationtoggle = function navigationtoggle() {
    if (
        selectors.navigationToggle === null ||
        selectors.navigationToggle === undefined
    ) {
        console.warn("selectors.navigationToggle is null or undefined");
    } else {
        console.info("selectors.navigationToggle found");

        selectors.navigationToggle.addEventListener("click", function () {
            selectors.navigationToggle.classList.toggle("is-closed");
            selectors.navigationToggle.classList.toggle("is-opened");
            selectors.navigationMain.classList.toggle("is-visible");
            selectors.header.classList.toggle("visible-navigation");

            if (
                selectors.navigationToggle.getAttribute("aria-expanded") ===
                "false"
            ) {
                selectors.navigationToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );
            } else {
                selectors.navigationToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });
    }
};

export default navigationtoggle;
