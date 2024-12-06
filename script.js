function getStarted() {
    alert('Welcome to MacroCloud! Let’s get started.');
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".section img, .feature img");

    // Debounce function to improve scroll event performance
    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Scroll event handler
    function handleScroll() {
        images.forEach((image) => {
            const imageTop = image.getBoundingClientRect().top; // Get image position
            const triggerHeight = window.innerHeight * 0.75; // Trigger point

            // Add 'visible' class if in the trigger zone
            if (imageTop < triggerHeight) {
                image.classList.add("visible");
            }
        });
    }

    // Attach debounced scroll event
    window.addEventListener("scroll", debounce(handleScroll));
});
