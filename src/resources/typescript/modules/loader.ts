import selectors from "../utilities/selectors";

const loader = function loader() {
    if (selectors.loader === null) {
        console.warn("no loader initialized? (loader is null)");
    } else if (selectors.loader === undefined) {
        console.warn("no loader initialized? (loader is undefined)");
    } else {
        console.info("loader found");

        const removeLoader = () => {
            document.body.classList.remove("loading");
            document.body.classList.add("loaded");

            selectors.loader.classList.remove("loading");
            selectors.loader.classList.add("loaded");

            setTimeout(function () {
                selectors.loader.remove();
            }, 400);
        };

        document.body.onload = function () {
            setTimeout(function () {
                removeLoader();
            }, 100);
        };

        console.info("loader removed");
    }
};

export default loader;
