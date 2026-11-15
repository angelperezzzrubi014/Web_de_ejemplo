document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btn-tema');
    const htmlElement = document.documentElement;

    
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
        if (btnTema) btnTema.textContent = '🌙 Modo Oscuro';
    }

   
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            const temaActual = htmlElement.getAttribute('data-theme');

            if (temaActual === 'light') {
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('tema', 'dark');
                btnTema.textContent = '☀️ Modo Claro';
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('tema', 'light');
                btnTema.textContent = '🌙 Modo Oscuro';
            }
        });
    }
});