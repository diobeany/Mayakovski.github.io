function addBackgroundElements(numStars, numSpheres) {
    const body = document.body;
    const maxY = document.documentElement.scrollHeight;
    const viewportWidth = window.innerWidth;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'glow-star';
        star.style.position = 'absolute';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.background = 'rgba(255, 255, 255, 0.6)';
        star.style.borderRadius = '50%';
        star.style.filter = 'blur(1px)';
        star.style.pointerEvents = 'none';
        star.style.left = `${Math.random() * viewportWidth}px`;
        star.style.top = `${Math.random() * maxY}px`;
        
        body.appendChild(star);
    }

    for (let i = 0; i < numSpheres; i++) {
        const sphere = document.createElement('div');
        sphere.className = 'glow-sphere';
        sphere.style.position = 'absolute';
        sphere.style.width = `${Math.random() * 150 + 50}px`;
        sphere.style.height = sphere.style.width;
        sphere.style.borderRadius = '50%';
        sphere.style.background = 'rgba(255, 255, 255, 0.2)';
        sphere.style.filter = 'blur(50px)';
        sphere.style.pointerEvents = 'none';

        if (i % 4 === 0) {
            sphere.style.left = `${Math.random() * viewportWidth / 2}px`;
            sphere.style.top = `${Math.random() * maxY / 2}px`;
        } else if (i % 4 === 1) {
            sphere.style.left = `${Math.random() * viewportWidth / 2 + viewportWidth / 2}px`;
            sphere.style.top = `${Math.random() * maxY / 2}px`;
        } else if (i % 4 === 2) {
            sphere.style.left = `${Math.random() * viewportWidth / 2}px`;
            sphere.style.top = `${Math.random() * maxY / 2 + maxY / 2}px`;
        } else {
            sphere.style.left = `${Math.random() * viewportWidth / 2 + viewportWidth / 2}px`;
            sphere.style.top = `${Math.random() * maxY / 2 + maxY / 2}px`;
        }

        body.appendChild(sphere);
    }
}

addBackgroundElements(70, 10);

window.addEventListener('resize', () => {
    document.querySelectorAll('.glow-star, .glow-sphere').forEach(element => element.remove());
    addBackgroundElements(70, 10);
});
