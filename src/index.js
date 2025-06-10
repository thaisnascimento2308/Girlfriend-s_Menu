// Seleciona o contêiner onde os corações animados serão adicionados
const container = document.querySelector(".coracoes-container");

// Função responsável por criar um coração animado na tela
function criarCoracao() {
  // Cria um novo elemento <div> com a classe 'heart'
  const heart = document.createElement("div");
  heart.className = "heart";

  // Define uma variável CSS personalizada (--random) com um número aleatório entre 0 e 1
  heart.style.setProperty("--random", Math.random());

  // Define uma posição horizontal aleatória para o coração (entre 0% e 100%)
  heart.style.left = `${Math.random() * 100}%`;

  // Define uma duração aleatória para a animação (entre 5 e 10 segundos)
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;

  // Adiciona o coração ao contêiner da página
  container.appendChild(heart);

  // Remove o coração da tela após 10 segundos para evitar acúmulo de elementos
  setTimeout(() => heart.remove(), 10000);
}

// Chama a função 'criarCoracao' a cada 500 milissegundos (meio segundo)
setInterval(criarCoracao, 500);
