alert("Boas vindas ao nosso site!");
var nome = "Lua";
var idade = 25;
var numeroDeVendas = 50;
var saldoDisponivel = 1000;
alert("Erro! Preencha todos os campos.");
var mensagemDeErro = "Erro! Preencha todos os campos.";
prompt("Qual é o seu nome?");
prompt("Qual é a sua idade?");
if (idade >= 18) {
  alert("Pode tirar a habilitação!");
} else {  
  alert("Não pode tirar a habilitação!");
}

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dia = prompt("Qual é o dia da semana?");
if (dia == "Sábado" || dia == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Digite um número");
if (numero > 0) {
  alert("O número é positivo");
} else {
  alert("O número é negativo");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuação = prompt("Digite a pontuação");
if (pontuação >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoDisponivel = 1000;
alert(`Seu saldo é de ${saldoDisponivel}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Digite seu nome");
alert(`Olá, ${nome}`);


// calculo de medias aritmeticas
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while (contador > 0) {
  let numero = prompt('Digite um número:');
  soma += parseInt(numero);
  contador--;
} 

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador1 = 1;
while (contador1 <= 10) {
  alert(contador1);
  contador++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;
while (contador2 >= 0) {
  alert(contador2);
  contador2--;
}
// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador3 = prompt("Digite um número");
while (contador3 >= 0) {
  alert(contador3);
  contador3--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contador4 = prompt("Digite um número");
while (contador4 <= 0) {
  alert(contador4);
  contador4++;
}