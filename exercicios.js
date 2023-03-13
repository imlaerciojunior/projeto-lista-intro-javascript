// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const altura = Number(prompt("Qual é a altura"))
  const largura = Number(prompt("Qual é a largura?"))
  const areaRetangulo = altura * largura

  console.log (areaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNascimento = Number(prompt("Qual é seu ano de nascimento?"))
  const idade = anoAtual - anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
  const imc = peso/(altura*altura).toFixed(2)
  
  return imc


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, usuario, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nomeUsuario = prompt("Qual é seu nome?")
  const idadeUsuario = prompt("Qual é sua idade?")
  const emailUsuario = prompt("Qual é seu e-mail?")

  const mensagem = (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  console.log(mensagem)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  const corFav1 = prompt("Qual sua primeira cor favorita?")
  const corFav2 = prompt("Qual sua segunda cor favorita?")
  const corFav3 = prompt("Qual é a sua terceira cor favorita?")
  const respostaCorFavorita = [corFav1, corFav2, corFav3]

  console.log(respostaCorFavorita)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 
    const retornaString = string.toUpperCase()
  
  return retornaString

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const calculaIngressosVendidos = custo / valorIngresso

  return calculaIngressosVendidos
  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  const checaTamanho = string1.length === string2.length 

  return checaTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  primeiroElemento = [1,2,3,4,5]
  retornoElemento = primeiroElemento[0]
  
  return array [0]
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const elementosArray = array.length
  const ultimoElemento = array[elementosArray-1]
  
  
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica 

  const lista = array

  const primeiraPosicao = lista[0]
  const ultimaPosicao = lista[array.length -1]

  lista[array.length -1] = primeiraPosicao
  lista[0] = ultimaPosicao

  return lista

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  retornaBooleano = string1.toUpperCase() === string2.toUpperCase()
  
  return retornaBooleano

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica 
  
  const anoAtual = Number(prompt("Ano atual"))
  const anoNascimento = Number(prompt("Ano de nascimento"))
  const idade = anoAtual - anoNascimento
  const anoQueIdentidadeFoiEmitida = Number(prompt("Data de emissão da Carteira"))

  const menorOuIgualA20 = (idade <= 20) && (anoQueIdentidadeFoiEmitida + 5) <= anoAtual
  const entre20E50 = (idade > 20 && idade <= 50) && (anoQueIdentidadeFoiEmitida + 10) <= anoAtual
  const maiorQue50 = idade > 50 && (anoQueIdentidadeFoiEmitida + 15) < anoAtual

  console.log(menorOuIgualA20 || entre20E50 || maiorQue50) 
} 

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica 
  
  const anoBissexto1 = (ano % 400) === 0
  const anoBissexto2 = (ano % 4) === 0
  const anoBissexto3 = ((ano%100)=== 0) != ((ano%400)===0) 
  const verificarAnoBissexto = anoBissexto1 || anoBissexto2 != anoBissexto3

  return verificarAnoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const maiorDeIdade = prompt("tem mais de 18 anos?")
  const respostaMaiorIdade = maiorDeIdade === "sim"

  const ensinoMedioCompleto = prompt("tem o ensino médio completo?")
  const respostaEnsinoMedio = ensinoMedioCompleto === "sim"

  const disponibidadeParaOCurso = prompt("tem disponibilidade de horários?")
  const respostaDisponibilidade = disponibidadeParaOCurso === "sim"

  const etapaFinalInscricao = (respostaMaiorIdade && respostaEnsinoMedio) && respostaDisponibilidade
  
  console.log(etapaFinalInscricao)
}