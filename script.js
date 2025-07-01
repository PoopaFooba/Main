function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('current-time').textContent = `== Current Time for Me: ${hours}:${minutes}:${seconds} ${ampm} ==`;
}
setInterval(updateTime, 1000);
updateTime();

function startApp() {
    document.querySelector('.start-overlay').style.display = 'none';
    const loadingContainer = document.querySelector('.loading-container');
    loadingContainer.style.display = 'flex';
    loadingContainer.textContent = '';

    const lines = [
        `> Initializing connection...`,
        `> Establishing secure tunnel...`,
        `> Bypassing firewall...`,
        `> Injecting payload...`,
        `> Decrypting data streams...`,
        `> Access granted.`,
        `> Running system diagnostics...`,
        `> CPU Usage: 23%`,
        `> Memory Usage: 68%`,
        `> Network Latency: 42ms`,
        `> Scanning ports...`,
        `> Ports open: 22, 80, 443`,
        `> Initiating data exfiltration...`,
        `> Encrypting packets...`,
        `> Uploading to remote server...`,
        `> Upload complete.`,
        `> Cleaning logs...`,
        `> Logs cleaned.`,
        `> Loading main interface...`
    ];

    runLoading(lines, loadingContainer);
}

function runLoading(lines, container) {
    let index = 0;
    function addLine() {
        if (index < lines.length) {
            const line = document.createElement('div');
            line.className = 'loading-line';
            line.textContent = lines[index];
            container.appendChild(line);
            container.scrollTop = container.scrollHeight;
            index++;
            setTimeout(addLine, 150 + Math.random() * 250);
        } else {
            let dataCount = 0;
            const maxDataLines = 60;
            function addDataLine() {
                if (dataCount < maxDataLines) {
                    const line = document.createElement('div');
                    line.className = 'loading-line';
                    line.textContent = generateRandomDataLine();
                    container.appendChild(line);
                    container.scrollTop = container.scrollHeight;
                    dataCount++;
                    setTimeout(addDataLine, 30 + Math.random() * 70);
                } else {
                    container.style.display = 'none';
                    showMainUI();
                }
            }
            addDataLine();
        }
    }
    addLine();
}

function generateRandomDataLine() {
    const hexChars = '0123456789ABCDEF';
    const length = 40 + Math.floor(Math.random() * 20);
    let line = '';
    for (let i = 0; i < length; i++) {
        line += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    return line;
}

function showMainUI() {
    document.querySelector('.title').style.opacity = 1;
    document.querySelector('.typing-effect').style.opacity = 1;
    document.querySelector('.time').style.opacity = 1;
    document.querySelector('.social-buttons').style.opacity = 1;
    document.querySelector('.footer').style.opacity = 1;
    const audio = document.getElementById('background-audio');
    if (audio) {
        audio.play().catch(error => console.error('Audio playback failed:', error));
    }
    indefiniteWrite();
}

function goBack() {
    document.querySelector('.title').style.display = 'inline-flex';
    document.querySelector('.typing-effect').style.display = 'block';
    document.querySelector('.time').style.display = 'block';
    document.querySelector('.social-buttons').style.display = 'flex';
    document.querySelector('.footer').style.display = 'block';
}

function indefiniteWrite() {
    const strs = [
        '"the fucking moon is split in half" - Sturm',
        'My name is jeff',
        'Welcome to ceez.cc!',
        'Mr. Rashid',
        '"Challenge yourself; it’s the only path which leads to growth." - Morgan Freeman 1937 - 2025'
    ];

    const typElement = document.getElementById('typElement');

    function typeNext(index) {
        const typewriter = new Typewriter(typElement, {
            loop: false,
            delay: 75,
            deleteSpeed: 50,
        });

        typewriter.typeString(strs[index])
            .pauseFor(3000)
            .deleteAll()
            .callFunction(() => {
                typeNext((index + 1) % strs.length);
            })
            .start();
    }

    typeNext(0);
}

window.onload = function () {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5 },
            size: { value: 5, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: {
                repulse: { distance: 200 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
};
