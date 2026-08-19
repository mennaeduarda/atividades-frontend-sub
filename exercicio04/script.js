const botaoAtualizar = document.querySelector('#atualizarRotina');
const statusRotina = document.querySelector('#statusRotina');

botaoAtualizar.addEventListener('click', () => {
    statusRotina.textContent = 'Situação atual: rotina finalizada com sucesso.';
    statusRotina.classList.add('concluido');
    botaoAtualizar.textContent = 'Status atualizado';
    botaoAtualizar.disabled = true;
});