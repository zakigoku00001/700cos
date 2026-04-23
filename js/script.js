// Session Timer
function startSessionTimer() {
    // 5 minutes in seconds
    let timeLeft = 5 * 60;

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        // Format with leading zeros
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        const timerElement = document.getElementById('session-timer');
        if (timerElement) {
            timerElement.textContent = formattedTime;
        }

        if (timeLeft > 0) {
            timeLeft--;
        } else {
            // Optional: Handle expiration (e.g., show 00:00 or message)
            if (timerElement) {
                timerElement.textContent = "00:00";
            }
        }
    }

    // Update immediately
    updateTimer();

    // Update every second
    setInterval(updateTimer, 1000);
}

// Click tracking function
function trackClick(source) {
    // Optional click tracking for analytics
    console.log('Click tracked:', source);
    // You can add analytics code here, e.g.:
    // gtag('event', 'click', { event_category: 'cta', event_label: source });
}

// Add click tracking to CTA button
function setupClickTracking() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            trackClick('bridgeA');
        });
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function () {
    startSessionTimer();
    setupClickTracking();
});