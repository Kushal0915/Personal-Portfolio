document.addEventListener("DOMContentLoaded", function() {
    const switchButton = document.getElementById('light-switch');
    const lightBulb = document.getElementById('lightbulb');
    const body = document.body;

    // Define image URLs for light and dark modes
    const lightBulbImages = {
        light: 'lightbulbs/whitebulb.png',
        dark: 'lightbulbs/darkbulb.png'
    };

    switchButton.addEventListener('click', function() {
        // Check if body has 'light-mode' class
        const isLightMode = body.classList.contains('light-mode');

        // Toggle between light and dark modes based on current state
        if (isLightMode) {
            // If currently in light mode, switch to dark mode
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            // If currently in dark mode (or no mode), switch to light mode
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }

        // Update switch button and lightbulb based on current mode
        updateUI();
    });

    // Function to update UI elements based on current mode
    function updateUI() {
        if (body.classList.contains('light-mode')) {
            switchButton.style.backgroundColor = '#000000'; // Change button color to black in dark mode
            lightBulb.style.backgroundImage = `url(${lightBulbImages.light})`; // Set light mode image
        } else if (body.classList.contains('dark-mode')) {
            switchButton.style.backgroundColor = '#FFFFFF'; // Change button color to white in light mode
            lightBulb.style.backgroundImage = `url(${lightBulbImages.dark})`; // Set dark mode image
        }
    }

    // Initial UI update based on current mode
    updateUI();
});
