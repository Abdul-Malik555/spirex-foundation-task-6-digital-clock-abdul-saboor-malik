const clock = document.getElementById("clock");
const period = document.getElementById("period");
const date = document.getElementById("date");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // AM / PM
    const currentPeriod = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // Update clock
    clock.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // Update AM / PM
    period.textContent = currentPeriod;

    // Update date
    const dateOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    };

    date.textContent =
        now.toLocaleDateString("en-US", dateOptions);

    // Subtle clock animation on every second
    clock.style.transform = "scale(1.015)";

    setTimeout(() => {
        clock.style.transform = "scale(1)";
    }, 150);
}

// Initial update
updateClock();

// Update every second
setInterval(updateClock, 1000);