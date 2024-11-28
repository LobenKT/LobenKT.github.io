document.addEventListener("DOMContentLoaded", function () {
    // Add confetti effect
    const confettiContainer = document.querySelector('.confetti-container');

    // Function to create confetti
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        // Randomize position and color
        confetti.style.left = Math.random() * 100 + '%'; // Randomize horizontal position
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Randomize fall speed (between 2s to 5s)
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`; // Random color
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation

        // Append the confetti to the container
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation is complete
        setTimeout(() => {
            confetti.remove();
        }, 5000); // Keep confetti for 5 seconds before removing it
    }

    // Create confetti every 100ms
    setInterval(createConfetti, 100);
});
