//Criar variáveis
//Definir os dados de entrada
//Definir os dados de saída
const botaoPerguntar = document.querySelector('#botaoPerguntar')
const inputPergunta = document.querySelector('#inputPergunta')
const elementoResposta = document.querySelector('#resposta')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

//Clicar para fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta!')
    return
  }

  botaoPerguntar.setAttribute('disabled', true)

  //inputPergunta.value é exatamente o que foi escrito
  const pergunta = '<div>' + inputPergunta.value + '</div>'

  //Gerar nº aleatório
  const totalRespostas = respostas.length
  //Gera um math.floor randon que será multiplicado por totalRespostas
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  //Pega um número aleatório dentro do Arrey Respostas
  //Coloca [] pq tá pegando o nº dentro do array
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  //apagar texto da pergunta
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    botaoPerguntar.removeAttribute('disabled')
  }, 3000)
}
