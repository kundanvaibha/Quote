// Function to create confetti animation
function createConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.pointerEvents = 'none';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    document.body.appendChild(canvas);

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const colors = ['#FFD700', '#FF6347', '#32CD32', '#1E90FF']; // Define confetti colors

    (function frame() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return canvas.remove();
        }

        // Generate confetti particle
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = Math.random() * 6 + 3; // Random size between 3 and 9
        const particle = {
            x: Math.random() * canvas.width,
            y: -10,
            radius: randomSize,
            color: randomColor,
            rotation: Math.random() * 360,
            speed: Math.random() * 3 + 2, // Random speed between 2 and 5
            tilt: Math.random() * 10 - 5 // Random tilt between -5 and 5
        };

        drawConfetti(particle, canvas.getContext('2d'));

        requestAnimationFrame(frame);
    })();
}

// Function to draw confetti particle
function drawConfetti(particle, context) {
    context.beginPath();
    context.lineWidth = particle.radius / 2;
    context.strokeStyle = particle.color;
    context.moveTo(particle.x + particle.tilt + particle.radius / 4, particle.y);
    context.lineTo(particle.x + particle.tilt, particle.y + particle.tilt + particle.radius / 4);
    context.stroke();

    context.closePath();

    const twopi = 2 * Math.PI;

    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius / 4, particle.rotation, twopi, false);
    context.fillStyle = particle.color;
    context.fill();

    context.closePath();
}


document.getElementById('yesButton').addEventListener('click', function() {
    console.log('Button clicked!'); // Check if the button click event is triggered
    createConfetti();
    // Add redirection code here if needed
});
