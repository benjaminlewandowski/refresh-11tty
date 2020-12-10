import selectors from "../utilities/selectors";

const colorscheme = function colorscheme() {
    if (
        selectors.colorSchemeToggle === null ||
        selectors.colorSchemeToggle === undefined
    ) {
        console.warn("selectors.colorSchemeToggle is null or undefined");
    } else {
        console.info("selectors.colorSchemeToggle found");
        const colorSchemeDark = () => {
            selectors.root.classList.add("color-scheme--dark");
            selectors.root.classList.remove("color-scheme--system");
            selectors.root.classList.remove("color-scheme--light");
            localStorage.setItem("colorScheme", "dark");
        };

        const colorSchemeSystem = () => {
            selectors.root.classList.remove("color-scheme--dark");
            selectors.root.classList.add("color-scheme--system");
            selectors.root.classList.remove("color-scheme--light");
            localStorage.setItem("colorScheme", "system");
        };

        const colorSchemeLight = () => {
            selectors.root.classList.remove("color-scheme--dark");
            selectors.root.classList.remove("color-scheme--system");
            selectors.root.classList.add("color-scheme--light");
            localStorage.setItem("colorScheme", "light");
        };

        if (localStorage.getItem("colorScheme") === "dark") {
            colorSchemeDark();
        }

        if (localStorage.getItem("colorScheme") === "light") {
            colorSchemeLight();
        }

        if (localStorage.getItem("colorScheme") === "system") {
            colorSchemeSystem();
        }

        if (localStorage.getItem("colorScheme") === null) {
            colorSchemeSystem();
        }

        selectors.colorSchemeToggle.addEventListener("click", () => {
            if (localStorage.getItem("colorScheme") === "dark") {
                colorSchemeSystem();
            } else if (localStorage.getItem("colorScheme") === "light") {
                colorSchemeDark();
            } else {
                colorSchemeLight();
            }
        });
    }
};

export default colorscheme;
