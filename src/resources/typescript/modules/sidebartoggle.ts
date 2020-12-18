const sidebartoggle = function sidebartoggle() {
    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("sidebartoggle");

    if (
        sidebar === null ||
        sidebar === undefined ||
        toggle === null ||
        toggle === undefined
    ) {
        // sidebar or toggle is null or undefined so don't load the sidebar hider
    } else {
        toggle.addEventListener("click", function () {
            toggle.classList.toggle("is-closed");
            toggle.classList.toggle("is-opened");
            sidebar.classList.toggle("is-hidden");

            if (toggle.getAttribute("aria-expanded") === "false") {
                toggle.setAttribute("aria-expanded", "true");
            } else {
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }
};

export default sidebartoggle;
