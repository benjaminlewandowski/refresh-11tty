import selectors from "../utilities/selectors";

const colorscheme = function colorscheme() {
    const system = "color-scheme--system"
    const light = "color-scheme--light"
    const dark = "color-scheme--dark"

    if ( selectors.colorSchemeToggle === null ) {
        console.warn("selectors.colorSchemeToggle is null");
    } else if ( selectors.colorSchemeToggle === undefined) {
        console.warn("selectors.colorSchemeToggle is undefined");
    } else {
        const colorSchemeDark = () => {
            selectors.root.classList.add(dark);
            selectors.root.classList.remove(system);
            selectors.root.classList.remove(light);
            localStorage.setItem("colorScheme", "dark");
        };

        const colorSchemeSystem = () => {
            selectors.root.classList.remove(dark);
            selectors.root.classList.add(system);
            selectors.root.classList.remove(light);
            localStorage.setItem("colorScheme", "system");
        };

        const colorSchemeLight = () => {
            selectors.root.classList.remove(dark);
            selectors.root.classList.remove(system);
            selectors.root.classList.add(light);
            localStorage.setItem("colorScheme", "light");
        };

        if (localStorage.getItem("colorScheme") === "dark") {
            colorSchemeDark();
            console.info("Color Scheme found: dark");
        }

        if (localStorage.getItem("colorScheme") === "light") {
            colorSchemeLight();
            console.info("Color Scheme found: light");
        }

        if (localStorage.getItem("colorScheme") === "system") {
            colorSchemeSystem();
            console.info("Color Scheme found: system");
        }

        if (localStorage.getItem("colorScheme") === null) {
            colorSchemeSystem();
            console.info("Color Scheme not found and set to system");
        }

        selectors.colorSchemeToggle.addEventListener("click", () => {
            if (localStorage.getItem("colorScheme") === "dark") {
                colorSchemeLight();
                console.info("Color Scheme set to: light");
            } else if (localStorage.getItem("colorScheme") === "light") {
                colorSchemeSystem();
                console.info("Color Scheme set to: sytem");
            } else if (localStorage.getItem("colorScheme") === "system") {
                colorSchemeDark();
                console.info("Color Scheme set to: dark");
            }
        });
    }
};

export default colorscheme;
