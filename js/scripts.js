/* captura dos elementos html*/
const titulo = document.querySelector('#home h1');
const subtitulo = document.querySelector('#write-animation');
const btnMenu = document.querySelector('.btn-menu');
const containerMobileMenu = document.querySelector('.mobile-menu');
const btnBackgroundColor = document.querySelector('#btn-iconDay');
const iconColor = document.querySelector('#icon-day');
const bodyColor = document.querySelector('#color');
const logo = document.querySelector('#logo');
const navbar = document.querySelector('.list');

/* animação do elemento write-animation*/
function tipoWrite(elemento) {
    const writeArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    writeArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}

//tempo para inicio da write-animation
function iniciarWrite() {
    setTimeout(function () {
        subtitulo.style.visibility = 'visible'
        tipoWrite(subtitulo);
    }, 1000);
}

//mudança do background da pagina
btnBackgroundColor.addEventListener('click', function () {
    const textoSobre = document.querySelector('#sobre p');
    const backSobre = document.querySelector('#sobre');
    const backLinksWeb = document.querySelector('#links-web')
    const backProjetos = document.querySelector('#projetos')
    const backProjetosImg = document.querySelectorAll(".projetos")
    const backQualificacoes = document.querySelector('#qualificacoes')

    if (bodyColor.style.backgroundColor === 'rgb(0, 0, 0)') {
        bodyColor.style.backgroundColor = '#f0f0ff';
        navbar.style.color = 'orangered';
        titulo.style.color = 'orangered';
        subtitulo.style.color = '#000';
        logo.style.color = '#f0f0ff';
        textoSobre.style.color = '#000';
        backSobre.style.background = '#f0f0ff'
        backLinksWeb.style.backgroundColor = '#f0f0ff';
        backProjetos.style.backgroundColor = '#f0f0ff';
        backProjetos.style.border = 'none';
        backProjetosImg.forEach((el) => {
            el.style.backgroundColor = 'transparent'
        })
        backQualificacoes.style.backgroundColor = '#f0f0ff';
    } else {
        bodyColor.style.backgroundColor = 'rgb(0, 0, 0)';
        titulo.style.color = '#f0f0ff';
        subtitulo.style.color = '#ff4500';
        logo.style.color = '#ff4500';
        navbar.style.color = '#f0f0ff';
        textoSobre.style.color = '#f0f0ff';
        backSobre.style.background = 'radial-gradient(rgba(0, 225, 255, 0.379),black)';
        backLinksWeb.style.backgroundColor = '#000';
        backProjetos.style.backgroundColor = '#000';
        backProjetos.style.border = '';
        backProjetosImg.forEach((el) => {
            el.style.backgroundColor = 'rgb(2, 69, 78)'
        })
        backQualificacoes.style.backgroundColor = 'rgb(26, 25, 25)';
    }
});


//ação de clique do botão de display do menu mobile
btnMenu.addEventListener('click', function () {
    const list = document.querySelectorAll('mobile-menu ul li a');

    if (containerMobileMenu.style.display === 'none') {
        containerMobileMenu.style.display = 'block';
    } else if (list === true) {
        console.log('esta funcionando')
    }

    else {
        containerMobileMenu.style.display = 'none';
    }
})

//navegação dos slide da section projetos
function scrollBar() {
    const scroll = document.querySelector('.gallery-wrapper');
    const controlR = document.querySelector('.arrow-right');
    const controlL = document.querySelector('.arrow-left');
    const item = document.querySelectorAll('.item')

    controlR.addEventListener('click', function () {

        scroll.scrollBy(312, 0);
        scroll.draggable()
    })

    controlL.addEventListener('click', function () {
        scroll.scrollBy(-312, 0)
    })

}





//Alerta de desenvolvimento
function faseDesenvolvimento() { setTimeout(() => alert('Portfolio em fase de desenvolvimeno'), 5000) }




//chamada dos eventos

iniciarWrite()
//faseDesenvolvimento()
scrollBar()