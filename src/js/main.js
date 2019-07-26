const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});


// cambiar opacidad imagenes
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categorias a.filtros');
    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (e) => {
            e.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            e.target.classList.add('activo');

            const categoria = e.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);

        })
    });
});


// dark theme

let btnDark = document.getElementById('btn-dark');

btnDark.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.toggle("dark-theme-container");
    let body = document.querySelector('body');
    if (body.className === 'dark-theme-container') {
        btnDark.innerHTML = 'Light';
    } else {
        btnDark.innerHTML = 'Dark'; 
    }
});

