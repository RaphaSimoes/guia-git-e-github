(() => {
    const container = document.getElementById('pattern');
    const bgLight = document.querySelector('.bg-light');
    const CELL = 80; 
    let resizeTimer = null;

    function build() {
        container.innerHTML = '';

        const cols = Math.ceil(window.innerWidth / CELL);
        const rows = Math.ceil(window.innerHeight / CELL);

        container.style.gridTemplateColumns = `repeat(${cols}, ${CELL}px)`;
        container.style.gridAutoRows = `${CELL}px`;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const el = document.createElement('div');
                el.className = 'icon ' + (((r + c) % 2 === 0) ? 'github' : 'git');

                el.addEventListener('mouseenter', () => bgLight.classList.add('light'));
                el.addEventListener('mouseleave', () => bgLight.classList.remove('light'));

                container.appendChild(el);
            }
        }
    }

    window.addEventListener('load', build);
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(build, 120);
    });
})();