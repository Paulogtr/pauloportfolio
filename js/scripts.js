/* captura dos elementos html*/
const subtitulo = document.querySelector('#write-animation');
const btnMenu = document.querySelector('.btn-menu');
const containerMobileMenu = document.querySelector('.mobile-menu');
const btnBackgroundColor = document.querySelector('#btn-iconDay');
const iconColor = document.querySelector('#icon-day');
const bodyColor = document.querySelector('#color');
const logo = document.querySelector('#logo');
const navbar = document.querySelectorAll('#navbar-items > li > a');

/* animação do elemento write-animation*/
function tipoWrite(elemento) {
    const writeArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    writeArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}

//tipoWrite(subtitulo);


btnBackgroundColor.addEventListener('click', function () {
    if (bodyColor.style.backgroundColor === 'rgb(31, 30, 30)') {
        bodyColor.style.backgroundColor = 'rgb(255, 255, 255)';
        subtitulo.style.color = 'black';
        logo.style.color = '#fff';
        navbar.style.color = '#FF4500';


    } else {
        bodyColor.style.backgroundColor = 'rgb(31, 30, 30)';
        subtitulo.style.color = 'rgb(197, 193, 193)';
        logo.style.color = '#ff4500';
        navbar.style.color = '#fff';
    }
});


//ação de clique do botão de display do menu mobile
btnMenu.addEventListener('click', function () {
    if (containerMobileMenu.style.display === 'none') {
        containerMobileMenu.style.display = 'block';
    } else {
        containerMobileMenu.style.display = 'none';
    }
})




//Alerta de desenvolvimento
function faseDesenvolvimento() { setTimeout(() => alert('Portfolio em fase de desenvolvimeno'), 5000) }

//faseDesenvolvimento()

