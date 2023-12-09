alert("Boas vindas ao jogo do número secreto");

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
let tentativas = 1;
let chute;
console.log(numeroMaximo);
while (chute != numeroSecreto) {
  let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert("O número secreto é menor");
    } else {
      alert("O número secreto é maior");
    }
  }
  tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`
);
