const recursos = document.querySelectorAll('.recurso');
const mensagemRecurso = document.querySelector('#mensagemRecurso');
const botaoTrocar = document.querySelector('#trocarRecurso');

let indiceAtual = 0;

botaoTrocar.addEventListener('click', () => {
    recursos[indiceAtual].classList.remove('ativo');
    indiceAtual = (indiceAtual + 1) % recursos.length;
    recursos[indiceAtual].classList.add('ativo');

    const tituloAtual = recursos[indiceAtual].querySelector('h3').textContent;
    mensagemRecurso.textContent = `Recurso sugerido: ${tituloAtual}.`;
})