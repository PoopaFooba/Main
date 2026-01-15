function updateTime() {
    const a = new Date()
    let aa = a.getHours()
    const s = String(a.getMinutes()).padStart(2, '0')
    const ss = String(a.getSeconds()).padStart(2, '0')
    const asd = aa >= 12 ? 'PM' : 'AM'
    aa = aa % 12 || 12

    document.getElementById('current-time').textContent =
        `== Current Time for Me: ${aa}:${s}:${ss} ${asd} ==`
}
setInterval(updateTime, 1000)
updateTime()

function startApp() {
    const a = document.querySelector('.start-overlay')
    const aa = document.querySelector('.loading-container')

    a.style.opacity = '0'
    setTimeout(() => {
        a.style.display = 'none'
        aa.style.display = 'flex'
        runLoading(aa)
    }, 300)
}

function runLoading(a) {
    a.innerHTML = ''
    const aa = document.createElement('div')
    aa.className = 'loading-line'
    aa.textContent = 'loading...'
    a.appendChild(aa)

    setTimeout(() => {
        a.style.display = 'none'
        showMainUI()
    }, 2000)
}

function showMainUI() {
    const a = ['.title', '.typing-effect', '.time', '.social-buttons', '.footer']
    a.forEach(s => {
        const aa = document.querySelector(s)
        if (aa) aa.style.opacity = 1
    })

    const aa = document.getElementById('background-audio')
    if (aa) aa.play().catch(() => {})

    indefiniteWrite()
}

function indefiniteWrite() {
    const a = [
        'welcome to ceez.cc.',
        'ceez.cc online.',
        'system ready.'
    ]

    const aa = document.getElementById('typElement')

    function d(s) {
        const asd = new Typewriter(aa, {
            loop: false,
            delay: 75,
            deleteSpeed: 50
        })

        asd.typeString(a[s])
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => d((s + 1) % a.length))
            .start()
    }

    d(0)
}

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
    })
}
