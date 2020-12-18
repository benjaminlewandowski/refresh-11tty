const colorscheme = function colorscheme() {
    const system = "color-scheme--system";
    const light = "color-scheme--light";
    const dark = "color-scheme--dark";
    const colorSchemeToggle = document.getElementById("js-colorscheme-toggle");
    const root = document.documentElement;

    if (colorSchemeToggle === null || colorSchemeToggle === undefined) {
        // no color scheme toggle found
    } else {
        const colorSchemeDark = () => {
            root.classList.add(dark);
            root.classList.remove(system);
            root.classList.remove(light);
            localStorage.setItem("colorScheme", "dark");
        };

        const colorSchemeSystem = () => {
            root.classList.remove(dark);
            root.classList.add(system);
            root.classList.remove(light);
            localStorage.setItem("colorScheme", "system");
        };

        const colorSchemeLight = () => {
            root.classList.remove(dark);
            root.classList.remove(system);
            root.classList.add(light);
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

        colorSchemeToggle.addEventListener("click", () => {
            if (localStorage.getItem("colorScheme") === "dark") {
                colorSchemeLight();
            } else if (localStorage.getItem("colorScheme") === "light") {
                colorSchemeSystem();
            } else if (localStorage.getItem("colorScheme") === "system") {
                colorSchemeDark();
            }
        });
    }
};

export default colorscheme;
