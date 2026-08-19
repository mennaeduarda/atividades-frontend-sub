const formulario = document.querySelector('#cadastroCliente');
const statusCadastro = document.querySelector('#statusCadastro');

formulario.addEventListener ('submit', (evento) => {
    evento.preventDefault();
    const dados = new FormData(formulario);
    const nome = dados.get("nome");
    statusCadastro.textContent = `Cadastro de ${nome} recebido com sucesso.`;
    statusCadastro.hidden = false;
    statusCadastro.focus();
});

formulario.addEventListener("reset", () => {
  statusCadastro.textContent = "";
  statusCadastro.hidden = true;
});   