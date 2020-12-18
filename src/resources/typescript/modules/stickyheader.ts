// if sticky header selector is availible run code,
// when not trow an warning inside browser console
const sticky = function sticky() {
    const header = document.getElementById("header");
    let scrollpos = window.scrollY;
    const isfaded = "is-faded";

    if (header === null || header === undefined) {
    } else if (header.hasAttribute("data-sticky")) {
        function convertRemToPixels(rem) {
            return (
                rem *
                parseFloat(getComputedStyle(document.documentElement).fontSize)
            );
        }
        const faded = convertRemToPixels(32);

        function scrollDetect() {
            let lastScroll = 0;

            window.onscroll = function () {
                const currentScroll =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;

                if (currentScroll > faded && lastScroll <= currentScroll) {
                    lastScroll = currentScroll;
                    header.classList.add(isfaded);
                } else {
                    lastScroll = currentScroll;
                    header.classList.remove(isfaded);
                }
            };
        }

        window.addEventListener("scroll", function () {
            scrollpos = window.scrollY;

            if (document.body.classList.contains("has-hero")) {
                if (scrollpos > convertRemToPixels(4)) {
                    header.classList.remove("is-hero");
                } else {
                    header.classList.add("is-hero");
                }

                if (
                    scrollpos > convertRemToPixels(4) &&
                    scrollpos < convertRemToPixels(8)
                ) {
                    header.classList.add("hero-fade");
                }

                if (scrollpos > convertRemToPixels(8)) {
                    header.classList.remove("hero-fade");
                }

                if (scrollpos < convertRemToPixels(4)) {
                    header.classList.remove("hero-fade");
                }
            }
        });

        scrollDetect();
    }
};

export default sticky;
