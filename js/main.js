const btnMobile = document.getElementById('btn-botao')
const noturno = document.querySelector('#noturno');

function escurecer () {
    const principal = document.getElementById('servicos');
    const comentarios = document.querySelector('.comentarios');

    principal.classList.toggle('escuro');
    comentarios.classList.toggle('escuro');
}

function toggleMenu() {
    const nav = document.getElementById('cabecalho-menu');
    nav.classList.toggle('ativo');
}

btnMobile.addEventListener('click', toggleMenu)
noturno.addEventListener('click', escurecer);