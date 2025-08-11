// pattern.js
(() => {
const container = document.getElementById('pattern');
const bgLight = document.querySelector('.bg-light');
  const CELL = 80; // deve combinar com --cell no CSS
let resizeTimer = null;

function build() {
    // Limpa
    container.innerHTML = '';

    // Cálculo de colunas/linhas baseado na largura/altura visível
    const cols = Math.ceil(window.innerWidth / CELL);
    const rows = Math.ceil(window.innerHeight / CELL);

    // Ajusta colunas/linhas no grid para que o layout fique exato
    container.style.gridTemplateColumns = `repeat(${cols}, ${CELL}px)`;
    container.style.gridAutoRows = `${CELL}px`;

    // Cria os itens
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        const el = document.createElement('div');
            el.className = 'icon ' + (((r + c) % 2 === 0) ? 'github' : 'git');

        // Quando o mouse entra/parte, acende a camada de luz
            el.addEventListener('mouseenter', () => bgLight.classList.add('light'));
            el.addEventListener('mouseleave', () => bgLight.classList.remove('light'));

            container.appendChild(el);
        }
    }
}

  // Reconstruir no load e no resize (com debounce)
    window.addEventListener('load', build);
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(build, 120);
    });
})();