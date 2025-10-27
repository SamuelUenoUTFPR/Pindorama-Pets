document.addEventListener("DOMContentLoaded", function () {
  let trocaIndex = 0;
  const avaliacaoDivs = document.querySelectorAll('.comentarios');
  const total = avaliacaoDivs.length;

  // Função para mostrar o comentário ativo
  function mostrarComentario(n) {
    if (n >= total) trocaIndex = 0; // Volta ao primeiro comentário
    if (n < 0) trocaIndex = total - 1; // Vai para o último comentário

    // Oculta todas as avaliações
    avaliacaoDivs.forEach((troca) => {
      troca.classList.remove('visible');
    });

    // Exibe a avaliação ativa
    avaliacaoDivs[trocaIndex].classList.add('visible');
  }

  // Função para navegar entre os comentários
  function mudarComentario(n) {
    trocaIndex += n;
    mostrarComentario(trocaIndex);
  }

  // Inicializa o carrossel com o primeiro comentário visível
  mostrarComentario(trocaIndex);

  // Adiciona os eventos de clique nas setas de navegação
  document.querySelectorAll('.trocar, .trocar2, .trocar3, .next, .prev').forEach((seta) => {
    seta.addEventListener('click', () => {
      if (seta.classList.contains('prev')) {
        mudarComentario(-1); // Navega para o comentário anterior
      } else if (seta.classList.contains('next')) {
        mudarComentario(1); // Navega para o próximo comentário
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let trocaIndex = 0;
  const avaliacaoDivs = document.querySelectorAll('.comentarios-mobile');  // Usar a classe correta
  const total = avaliacaoDivs.length;

  // Função para mostrar o comentário ativo
  function mostrarComentario(n) {
    if (n >= total) trocaIndex = 0; // Volta ao primeiro comentário
    if (n < 0) trocaIndex = total - 1; // Vai para o último comentário

    // Oculta todas as avaliações
    avaliacaoDivs.forEach((troca) => {
      troca.classList.remove('visible');
    });

    // Exibe a avaliação ativa
    avaliacaoDivs[trocaIndex].classList.add('visible');
  }

  // Função para navegar entre os comentários
  function mudarComentario(n) {
    trocaIndex += n;
    mostrarComentario(trocaIndex);
  }

  // Inicializa o carrossel com o primeiro comentário visível
  mostrarComentario(trocaIndex);


  document.querySelectorAll('.trocar, .trocar2, .trocar3, .next, .prev').forEach((seta) => {
    seta.addEventListener('click', () => {
      if (seta.classList.contains('prev')) {
        mudarComentario(-1); 
      } else if (seta.classList.contains('next')) {
        mudarComentario(1); 
      }
    });
  });
});