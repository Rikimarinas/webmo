document.addEventListener('DOMContentLoaded', () => {
    const botonesCompra = document.querySelectorAll('.producto button');

    botonesCompra.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Producto añadido al carrito!');
        });
    });
});
