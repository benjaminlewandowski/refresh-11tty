const loader = function loader() {
    const loader = document.getElementById("loader");
    const timer = 250;

    if (loader === null || loader === undefined) {
    } else {
        const removeLoader = () => {
            document.body.classList.remove("loading");
            document.body.classList.add("loaded");

            loader.classList.remove("loading");
            loader.classList.add("loaded");

            setTimeout(function () {
                loader.remove();
            }, timer);
        };

        document.body.onload = function () {
            setTimeout(function () {
                removeLoader();
            }, timer);
        };
    }
};

export default loader;
