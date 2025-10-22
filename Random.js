// --- Cyberpunk Chromium Card JS ---

// Floating neon particles across background
const body = document.body;

for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size, position, and animation delay
    const size = Math.random() * 5 + 3;
    particle.style.width = particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `${Math.random() * 100}px`;
    particle.style.animationDelay = `${Math.random() * 8}s`;

    // Random color glow (cyan or magenta)
    const colors = ['rgba(0,255,255,0.7)', 'rgba(255,0,255,0.7)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    body.appendChild(particle);
}

// 3D Card Rotation Effect
const card = document.getElementById('cyberCard');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / card.offsetWidth - 0.5;
    const y = (e.clientY - rect.top) / card.offsetHeight - 0.5;

    // Apply perspective rotation
    card.style.transform = `perspective(600px) rotateY(${x * 25}deg) rotateX(${-y * 25}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
});

// Optional glowing animation when hovered
card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 25px #00ffff, 0 0 50px #ff00ff';
});
card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 0 25px rgba(0,255,255,0.2)';
});
