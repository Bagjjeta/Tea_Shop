const BANNER = document.querySelector(".bannerPhrases");
const BANNER_LEFT = document.querySelector(".bannerPhrases-container--left");
const BANNER_RIGHT = document.querySelector(".bannerPhrases-container--right");

function togglePosition() {
    BANNER.classList.add("hidden");

    setTimeout(() => {
        if (BANNER.classList.contains("left")) {
            BANNER.classList.remove("left");
            BANNER.classList.add("right");
        } else {
            BANNER.classList.remove("right");
            BANNER.classList.add("left");
        }
        
        BANNER.classList.remove("hidden");
    }, 300);
}

function toggleBanner() {
    BANNER_LEFT.classList.add("visible");

    setTimeout(() => {
        BANNER_LEFT.classList.remove("visible");

        togglePosition();

        BANNER_RIGHT.classList.add("visible");
    }, 5000);

    BANNER_RIGHT.classList.remove("visible");
    togglePosition();
}

toggleBanner();
setTimeout(() => setInterval(toggleBanner, 12000), 5000);

