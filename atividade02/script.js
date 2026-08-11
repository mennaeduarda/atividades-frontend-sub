const botaoAtendimento = document.querySelector('#mostrarAtendimento');
const detalhesAtendimento = document.querySelector('#detalhesAtendimento');

botaoAtendimento.addEventListener('click', () => {
    const estaAberto = botaoAtendimento.getAttribute('aria-expanded') === 'true';

    botaoAtendimento.setAttribute('aria-expanded', Strign(!estaAberto));
    detalhesAtendimento.hidden = estaAberto;
    botaoAtendimento.textContent = estaAberto ? 'Mostrar horários' : 'Ocultar horários';
})