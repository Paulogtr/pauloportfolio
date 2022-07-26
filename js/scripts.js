/* captura dos elementos html*/
const subtitulo = document.querySelector('#write-animation');
const btnMenu = document.querySelector('.btn-menu');
const containerMobileMenu = document.querySelector('.mobile-menu')

/* animação do elemento write-animation*/
function tipoWrite(elemento){
    const writeArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    writeArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}

 tipoWrite(subtitulo);

//ação de clique do botão de display do menu mobile
btnMenu.addEventListener('click', function(){
    if(containerMobileMenu.style.display === 'none'){
        containerMobileMenu.style.display = 'block';
    }else{
        containerMobileMenu.style.display = 'none';
    }
})



//Alerta de desenvolvimento
function faseDesenvolvimento(){setTimeout(() => alert('Portfolio em fase de desenvolvimeno'), 5000)}

faseDesenvolvimento()

