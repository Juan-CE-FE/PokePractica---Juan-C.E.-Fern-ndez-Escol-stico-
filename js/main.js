const navMenu = document.querySelector('.menu');
const botonesColor = document.querySelectorAll('.btn-header');

function cambiarColor(color) {

    const botonClick = color.currentTarget;
        navMenu.classList.remove('water', 'fire', 'electric', 'grass'); 


    if(botonClick.classList.contains('water')) {
        navMenu.classList.add('water');
    } else if(botonClick.classList.contains('fire')) {
        navMenu.classList.add('fire');
    } else if(botonClick.classList.contains('electric')) {
        navMenu.classList.add('electric');
    }
}

 botonesColor.forEach(boton => {
        boton.addEventListener('click', cambiarColor);
    });