document.addEventListener("DOMContentLoaded", function () {
  let trocaIndex = 0;
  const avaliacaoDivs = document.querySelectorAll('.comentarios');
  const total = avaliacaoDivs.length;

  function mostrarComentario(n) {
    if (n >= total) trocaIndex = 0; 
    if (n < 0) trocaIndex = total - 1;

    avaliacaoDivs.forEach((troca) => {
      troca.classList.remove('visible');
    });

    avaliacaoDivs[trocaIndex].classList.add('visible');
  }

  function mudarComentario(n) {
    trocaIndex += n;
    mostrarComentario(trocaIndex);
  }

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

document.addEventListener("DOMContentLoaded", function () {
  let trocaIndex = 0;
  const avaliacaoDivs = document.querySelectorAll('.comentarios-mobile');
  const total = avaliacaoDivs.length;

  
  function mostrarComentario(n) {
    if (n >= total) trocaIndex = 0;
    if (n < 0) trocaIndex = total - 1;

    avaliacaoDivs.forEach((troca) => {
      troca.classList.remove('visible');
    });


    avaliacaoDivs[trocaIndex].classList.add('visible');
  }


  function mudarComentario(n) {
    trocaIndex += n;
    mostrarComentario(trocaIndex);
  }

  
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