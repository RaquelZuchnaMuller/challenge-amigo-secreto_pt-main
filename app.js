//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo"); 
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  input.value = "";
  exibirListaDeAmigos();
}

function exibirListaDeAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const item = `<li>${amigos[i]}</li>`;
    lista.innerHTML += item;
  }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    resultado.innerHTML = "<li>Nenhum amigo disponível para o sorteio.</li>";
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceAleatorio];

  resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}