const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable x = 5;",
        "var x = 5;",
        "x = 5;"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas: [
        "4",
        "22",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adiciona um elemento ao HTML",
        "Registra um manipulador de eventos a um elemento",
        "Adiciona um estilo CSS a um elemento"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico para 'E' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS",
        "Seleciona todos os elementos que correspondem a um seletor CSS",
        "Seleciona um elemento pelo seu ID"
      ],
      correta: 0
    },
    {
      pergunta: "Como você comentaria uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'parseInt' em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro",
        "Converte um número inteiro em uma string",
        "Converte uma string em um número decimal"
      ],
      correta: 0
    },
    {
      pergunta: "O que faz o operador '===' em JavaScript?",
      respostas: [
        "Compara os valores e tipos sem coerção",
        "Atribui um valor a uma variável",
        "Compara os valores e tipos com coerção"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de várias linhas em JavaScript?",
      respostas: [
        "// Este é um comentário de várias linhas //",
        "<!-- Este é um comentário de várias linhas -->",
        "/* Este é um comentário de várias linhas */"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop
  for(const item of perguntas){
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
       
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
   //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }