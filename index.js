function gerarCaminhos(base, quantidade, extensoes = ['.jpg',  '.jpeg']) {
  const imagens = [];
  for (let i = 1; i <= quantidade; i++) {
    const extensao = extensoes[Math.floor(Math.random() * extensoes.length)];
    imagens.push(`${base}img${i}${extensao}`);
  }
  return imagens;
}

// Arrays de imagens por categoria
const foodImgs = gerarCaminhos('imagens/food/', 9, ['.jpeg']);
const makeImgs = gerarCaminhos('imagens/make/', 6, ['.jpeg']); 
const afterImgs = gerarCaminhos('imagens/after/', 7, ['.jpeg']);
const finalimg = gerarCaminhos('imagens/final/', 15, ['.jpg', ]);

// Função utilitária para sortear imagem aleatória
function getRandomImage(images) {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}

// Funções para mudar as imagens no DOM
function mudarFood() {
  document.getElementById('food-img').src = getRandomImage(foodImgs);
}

function mudarMake() {
  document.getElementById('make-img').src = getRandomImage(makeImgs);
}

function mudarAfter() {
  document.getElementById('after-img').src = getRandomImage(afterImgs);
}

function mudarFinal() {
  document.getElementById('final-img').src = getRandomImage(finalimg);
}
function rodarTudo(){
  document.getElementById('food-img').src = getRandomImage(foodImgs);
  document.getElementById('make-img').src = getRandomImage(makeImgs);
  document.getElementById('after-img').src = getRandomImage(afterImgs);
  document.getElementById('final-img').src = getRandomImage(finalimg);
}

const nomes = ["COMEDIA", "TERROR", "PORNO", "AÇÃO", "ROMANÇE", "DRAMA"];

function genero() {
  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indiceAleatorio];
  document.getElementById("res").innerText = `${nomeSorteado}`;
}

const filmesT = [ 
  "Click", "A Proposta", "Dark Side of the Porn", "Tren Bala", "Pânico",
  "Orgulho e Preconceito", "007 - Cassino Royale", "Calígula", "O Âncora", "Ted",
  "Cisne Negro", "Um Lugar Chamado Notting Hill", "Zohan - O Agente Bom de Corte", "O Iluminado", "Private Gold: Millionaire",
  "Missão: Impossível – Efeito Fallout", "Para Todos os Garotos que Já Amei", "Raw Talent", "Midsommar", "Diário de uma Paixão",
  "Hereditário", "John Wick", "Beleza Americana", "Simplesmente Acontece", "Pirates II: Stagnetti’s Revenge",
  "La La Land", "Ace Ventura: Um Detetive Diferente", "Velocidade Máxima", "A Entidade", "O Virgem de 40 Anos",
  "The Opening of Misty Beethoven", "O Livro de Eli", "Todo Mundo em Pânico", "Uma Mente Brilhante", "Se Beber, Não Case",
  "A Lista de Schindler", "Menina de Ouro", "O Protetor", "Como Eu Era Antes de Você", "Forrest Gump",
  "Atividade Paranormal", "Sex & Zen", "As Branquelas", "After Porn Ends", "The Submission of Emma Marx",
  "Superbad - É Hoje", "O Babadook", "O Exorcista", "O Resgate do Soldado Ryan", "A Bruxa",
  "Um Amor para Recordar", "The New Devil in Miss Jones", "Carga Explosiva", "Clube da Luta", "Mad Max: Estrada da Fúria",
  "À Espera de um Milagre", "PS: Eu Te Amo"
];

function filmes() {
  const indiceAleatorio = Math.floor(Math.random() * filmesT.length);
  const nomeSorteado = filmesT[indiceAleatorio];
  document.getElementById("tes").innerText = nomeSorteado;
}
