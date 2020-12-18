const navigationtoggle = function navigationtoggle() {
    const navigation = document.getElementById("navigation-main");
    const toggle = document.getElementById("navigation-toggle");

    if (
        navigation === null ||
        navigation === undefined ||
        toggle === null ||
        toggle === undefined
    ) {
        // navigation or toggle is null or undefined so don't load the mobile navigation
    } else {
        toggle.addEventListener("click", function () {
            toggle.classList.toggle("is-closed");
            toggle.classList.toggle("is-opened");
            navigation.classList.toggle("is-visible");
            document
                .getElementById("header")
                .classList.toggle("visible-navigation");

            if (toggle.getAttribute("aria-expanded") === "false") {
                toggle.setAttribute("aria-expanded", "true");
            } else {
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }
};

export default navigationtoggle;
