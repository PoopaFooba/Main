function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('current-time').textContent =
        `== Current Time for Me: ${hours}:${minutes}:${seconds} ${ampm} ==`;
}
setInterval(updateTime, 1000);
updateTime();

/* ---------- d ---------- */

function startApp() {
    const overlay = document.querySelector('.start-overlay');
    const loadingContainer = document.querySelector('.loading-container');

    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        loadingContainer.style.display = 'flex';
        runLoading(loadingContainer);
    }, 300);
}

function runLoading(container) {
    container.innerHTML = '';
    const line = document.createElement('div');
    line.className = 'loading-line';
    line.textContent = 'loading...';
    container.appendChild(line);

    setTimeout(() => {
        container.style.display = 'none';
        showMainUI();
    }, 2000);
}

/* ---------- d ---------- */

function showMainUI() {
    const elements = ['.title', '.typing-effect', '.time', '.social-buttons', '.footer'];
    elements.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.opacity = 1;
    });

    const audio = document.getElementById('background-audio');
    if (audio) audio.play().catch(() => {});

    indefiniteWrite();
}

function goBack() {
    const elements = ['.title', '.typing-effect', '.time', '.social-buttons', '.footer'];
    elements.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) {
            el.style.display = el.classList.contains('social-buttons') ? 'flex' : 'block';
            el.style.opacity = 1;
        }
    });
}

/* ---------- d ---------- */

function indefiniteWrite() {
    const strs = [
        'welcome to ceez.cc.',
        'ceez.cc online.',
        'system ready.'
    ];

    const typElement = document.getElementById('typElement');

    function typeNext(i) {
        const t = new Typewriter(typElement, {
            loop: false,
            delay: 75,
            deleteSpeed: 50
        });

        t.typeString(strs[i])
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => typeNext((i + 1) % strs.length))
            .start();
    }

    typeNext(0);
}

/* ---------- d ---------- */

window.onload = function () {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 5, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: { enable: true, speed: 6, out_mode: 'out' }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' }
            },
            modes: {
                repulse: { distance: 200 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
};
