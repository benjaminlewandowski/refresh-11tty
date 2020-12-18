const readingindicator = function readingindicator() {
    const root = document.documentElement;
    const body = document.body;
    const winScroll = body.scrollTop || root.scrollTop;
    const height = root.scrollHeight - root.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const indicator = document.getElementById("indicator");

    if (indicator === null || indicator === undefined) {
    } else {
        indicator.style.width = scrolled + "%";
    }
};

export default readingindicator;
