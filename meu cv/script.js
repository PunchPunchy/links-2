// Alerta simples ao enviar formulário
document.querySelector('form')?.addEventListener('submit', function(event) {
  event.preventDefault(); // evita recarregar a página
  alert("Mensagem enviada com sucesso!");
});