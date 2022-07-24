/* captura dos elementos html*/
const subtitulo = document.querySelector('#write-animation');

/* animação do elemento write-animation*/
function tipoWrite(elemento){
    const writeArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    writeArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 80 * i)
    });
}

 tipoWrite(subtitulo);


