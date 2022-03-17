# ==== [Seção 20 *BONUS* - EXERCICIOS EXPRESS ] ====

&nbsp;

---

---

## [Aula 302] - VISÃO GERAL

&nbsp;


Vamos falar agora sobre o **EXPRESS** que é um **FRAMEWORK WEB** que roda em cima do **NODE**, que tambem é um framework minimalista, pequena , simples de entender e eficiente. Vamos utilizar o **EXPRESS** dentro do nosso sistema para implementar a **API REST** que nosso **BACKEND** irá prover para nossa aplicação **FRONTEND** usando o **ANGULAR**. Então o *express* irá rodando no **BACKEND**, não é nada relativo ao **FRONTEND**.

O *Conceito Principal do EXPRESS* é que ele é escrito em cima de um **PADRÃO** chamado **CHAIN OF RESPONSABILITY**, falando propriamente do **EXPRESS**, eles utilizam muito uma terminologia chamada **MIDDLEWARE**, mas vamos perceber que ele é semelhante a esse padrão de *chain of responsability*.

Quando chega uma **REQUISIÇÃO** dentro do seu **node** la no backend, e essa **REQUISIÇÃO** esta sendo interceptada pelo express, a forma como voce configura sua requisição no express, é colocando ou adicionando varios **MIDDLEWARES**. Logo, eles são funções, que possuem um determinado padrão, uma assinatura padrão, onde vamos encadeando uma função atras da outra.

Podemos dizer por exemplo, que queremos aplicar em **middleware1**, todas as requisições que vinherem no backend, independente de qual URL venha essa requisição, e colocamos o middleware que irá processar, ou ele irá dar uma resposta para o browser, ou ele passar para o proximo **middleware2**, formando assim uma cadeia de middlewares. Por isso falamos que ele tem haver com o padrão **chain of responsability**, é uma cadeia de responsabilidades. Irá aplicando varios pequenos pedaços em sequencia, cada um fazendo um processamento e chamando o proximo da cadeia/corrente.

Esse é um padrão ja muito aplicado na parte de web, por exemplo, no java, quando falava do filter, ja tinha esse padrão. Então como é a **assinatura** de um middleware dentro do express. Temos um função que recebe os parametros (request, response, next).

> O **express** ja *ENCAPSULA* para voce todas essas questões relacionadas ao HTTP, que tipo de requisição é, tras os headers, tras varias coisas encapsuladas para voce, questão de mapear uma função para um metodo ou uma url em cima de um verbo do HTTP, queremos que /test em cima de get chame esse metodo, queremos mapear rota tal e etc. Mas tudo isso, é sempre baseado no conceito de middleware, sempre irá chamar um middleware passando *request(req)*, *response(res)* e *next*.

~~~javascript
[ESTRUTURA BASICA EXPRESS]

var mid1 = function(req,res,next){
    //faz algo..
    next() ou resp.send('...')
}
~~~

Então o papel do **MIDDLEWARE** é fazer algum tipo de processamento e no final ele tem duas possibilidades:
- Ou chama o metodo **next()**, agora sim invocando com os parenteses, no parametro ele é simplesmente uma função passada para o middleware, mas quando formos chama-lo tem que invocar a função usando o parenteses. Ela chama o proximo middleware que esta definido na cadeia.
- OU chama o metodo **resp.send('...')**, ou enviar alguma resposta para o browser, seja uma mensagem de erro, seja um status que entra (200 de ok).

Uma das formas de colocar o **middleware** dentro da *linha de execução do request* é chamar uma **função do express** chamada de **use()**. No exemplo, colocamos *server.use()*, pq esse server aponta para uma **instancia do express**.

~~~javascript
[ESTRUTURA BASICA EXPRESS]

var mid1 = function(req,res,next){
    //faz algo..
    next() ou resp.send('...')
}
server.use(mid1)
~~~

Então quando colocamos o *server.use()* passando o o middleware (md1), nesse caso, estamos dizendo que todas as requisições serão interceptadas por esse middleware, porque não colocamos nenhum tipo de url, url base, para ele poder so atender parte das requisições. 

Então poderiamos colocar o *server.use('URL','MIDDLEWARE')* ai colocar uma url ('/api') e passar o middleware.
- Nessa caso, quando colocamos uma URL como primeiro parametro, estamos dizendo que aquele **middleware** so será invocado quando a **url base** que estamos passando for atendida, digamos assim.

~~~javascript
[ESTRUTURA BASICA EXPRESS]

var mid1 = function(req,res,next){
    //faz algo..
    next() ou resp.send('...')
}
server.use(mid1)
server.use('/api', mid1)
~~~

A **API DO EXPRESS** possui diversos metodos e vamos tratar esses metodos, cada um deles, ou pelo menos os principais durante a implementação do sistema. Aqui, queremos que voce entenda o principal conceito relacionado ao **express**.

É um *framework web* que serve tanto para prover conteudo **estatico**, para **expor uma api rest* do seu sistema, serve para implementar uma aplicação inteira provendo conteudo dinamico (html,css,javascript). Tanto conteudo estaticos (css,javscript), e geração de conteudo dinamico, por exemplo, no seu HTML, gerado dinamicamente por ela.

Vamos usar o *express* apenas para nossa **API REST** do nosso sistema. Diriamos que é o ponto forte dele, onde é muito simples trabalhar com ele, e o principal conceito do express, é justamente essa cadeia de responsabilidades, colocando **middlewares**, colocando funções que possuem *requisição(req)*, *resposta(res)* e *next*, e colocando uma função tras da outra para atender aquela requisição. Cada uma faz uma parte, um coloca uma camada de segurança, outro coloca um *parse do json*, que é o que o **bodyParse** irá fazer, outro coloca um middleware para interpretar os parametros da requisição, transformando em inteiro, de string para inteiro por exemplo, podemos colocar um middleware para logar um determinado evento. 

Entãovamos colocando um *middleware* atras do outro, e ele vai executando todos esses **middlewares** até que uma hora ele joga a resposta para o browser, ou passar para outro. Temos que entender esse conceito de **middleware** para na hora que formos implementar, fique mais facil de entender que, o que estamos fazendo aqui é simplesmente colocando um **middleware para essa url** e sempre que a *url* bater com esse padrão, irá chamar a função em determinado momento.

Tanto o **node restful** voce percebe que possui essa questão dos middlewares, embora ele **ENCAPSULE** um pouco isso, mas vamos perceber que a *assinatura do metodo* é a mesma **REQUISIÇÃO(req)**, **RESPOSTA(res)** e **NEXT**, e se entendermos esse conceito que é o principal do **EXPRESS**, será suficiente para implementarmos nossa **API** de forma mais consciente.

&nbsp;

---

---

## [Aula 303] - EXERCICIO 01: CONFIGURAÇÃO E MAPEANDO UMA ROTA

&nbsp;

Acabamos de ver o principal conceito do **express**, que é justamente um PADRÃO que ele implementa (**chain of responsability**), que tambem dentro do contexto do **express** é conhecido como **MIDDLEWARE**. Vamos ver agora na pratica, como fazer, a partir de uma serie de exercicios para que possamos entender os principais conceitos do **express**, e quando for para a aplicação que fique bem tranquilo o seu uso pois esse conceito ja foi visto tanto na teoria, como visto na pratica, a implementação desses padrões.

    1 - A primeira coisa que iremos fazer eh criar uma pasta para esses exercicios chamada [/FundamentosMEAN].
    -> Dentro desta pasta iremos criar outra chamada [/express].
    -> Feito isso, vamos rodar o comando [ npm ini], pois precisaremos instalar o EXPRESS para conseguir usar ele.
    -> Vamos primeiro criar o PACKAGE.JSON e depois vamos instalar o EXPRESS.
~~~
npm init
~~~

    2 - Vamos mudar o nome do projeto para [exercicios_express], o resto das perguntas ficara como padrão, mas no author podemos colocar nosso nome.
~~~json
{
  "name": "exercicios_express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Angelina Pierre",
  "license": "ISC"
}
~~~

    3 - Apos criado o package.json, vamos instalar o EXPRESS.
    -> No comando abaixo estamos informando (i - install) e o (--save) é para ele salvar a referencia do express dentro do package.json que acabamos de criar.
~~~
npm i --save express
~~~

    4 - Agora vamos abrir o atom nessa pasta do /express, ele será o editor que iremos utilizar para executar os nossos exemplos.
~~~
atom .
~~~

    5 - Com o atom aberto, vamos criar uma novo arquivo chamado [/express/ex01.js].
    -> A primeira coisa que iremos fazer dentro do nosso arquivo, é criar uma constante chamada [express] para declararmos o mesmo. Ja vimos como faz isso no node, como importar uma biblioteca que ja instalamos, é simplesmente colocar o nome da biblioteca/modulo e referencia ela a partir de uma variavel/constante.
~~~javascript
[/express/ex01.js]

const express = require('express')
~~~

    6 - Depois iremos criar uma constante chamada [server] onde iremos armazenar uma INSTANCIA do express().
    -> Algumas pessoas chamam essa constante de app, mas vamos chama-la de server.
~~~javascript
[/express/ex01.js]

const express = require('express')
const server = express()
~~~

    7 - Feito isso, vamos mapear para a URL RAIZ da aplicação, pro metodo get() uma funcionalidade, vamos associar uma função/middleware na raiz da aplicação, a partir do metedo get().
    -> Vamos mapear essa rota, apontar para um middleware, e dentro desse middleware vamos fazer algum processamento.
    -> Vamos pegar [server.get()], entre aspas como primeiro parametro do get() vamos colocar o [/], para representar a raiz da aplicação. Pegar o [server] que representar uma instancia do express, o metodo get() é um verbo do HTTP. O primeiro parametro do get() é a URL que queremos mapear, o segundo é justamente uma função MIDDLEWARE.
    -> Entao vamos declarar uma função [function()] que nesse exemplo irá receber dois parametros:
        - Requisição(req)
        - Resposta (res)
    -> No corpo da função vamos mandar uma resposta bem simples para o browser colocando [res.send()] e dentro do sen() vamos colocar uma html. Obviamente esse send() era para mandar um HTML completo com body, head, html, com as tags completas.
~~~javascript
[/express/ex01.js]

const express = require('express')
const server = express()
server.get('/', function(req,res){
    res.send('<h1>Index!</h1>)
})
~~~

    8 - Para finalizar o exemplo, vamos alocar uma porta, vamos dizer que esse servidor do EXPRESS irá "escutar" a porta 3000 e sempre que chegar uma requisição na 3000 ele ira mapear para todas as rotas que foram definidas para a aplicação.
    -> Vamos user o [server.listen()] passando uma porta, no caso, 3000. E vamos chamar uma função CALLBACK(arrow function) so para imprimir no console, para dizer que deu tudo certo. Irá servir para termos um indicativo visual de que o servidor esta rodando.
~~~javascript
[/express/ex01.js]

const express = require('express')
const server = express()

server.get('/',function(req,res) {
  res.send('<h1>Index!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))
~~~

    9 - Vamos usar o comando [alt+r] para executar o [atom-runner], e vamos abrir o browser usando o comando [ctrl+alt+o].
    -> Vamos colocar a URL LOCALHOST:3000 no browser que acabou de abrir para podermos visualizar o <h1> que criamos. Perceba que ele esta justamente mostrando o [index] que é o conteudo mapeado para a url [/], que eh a raiz da aplicação.

    10 - Existe outras formas alem do get(), para fazer o mapeamento como por exemplo, o [server.all()], ou seja, queremos que qualquer verbo do HTTP, qualquer tipo de requisição que seja para a url [/test], independente do metodo, se é get(), se é push() ou delete(), ele chame a função que iremos criar.
~~~javascript
[/express/ex01.js]

const express = require('express')
const server = express()

server.get('/',function(req,res) {
  res.send('<h1>Index!</h1>')
})

server.all('/teste', function(req,res){
    res.send('<h1>Teste!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))


~~~

    11 - Da mesma forma que mapeamo o get(), estamos mapeando o [/teste] para todos os metodos, então como nosso servidor esta executando apenas para o get() vamos ter que dar uma RESTART na aplicação para ele poder ler esse novo metodo, basta usar o comando [alt+r] que automaticamente ele restarta.
    -> Entao se no browser colocarmos no final o /teste, ele irá nos mostrar o conteudo.
~~~javascript
[/express/ex01.js]

const express = require('express')
const server = express()

server.get('/',function(req,res) {
  res.send('<h1>Index!</h1>')
})

server.all('/teste', function(req,res) {
  res.send('<h1>Teste!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))
~~~

Para fazer testes de POST, PUT, DELETE, outros metodos, usamos o POSTMAN, colocando o localhost:3000/teste.
-> Se fizermos um POST para a raiz da aplicação [localhost:3000], ele não irá funcionar pois o POST não foi mapeada para a raiz da aplicação.

    12 - Vamos colocar mais uma forma de mapear a url, existem outras, vamos so colocar mais uma para podermos entender o poder que temos para mapear nossas URLs dentro do EXPRESS.
    -> Vamos usar o server.get() e no lugar de colocar uma string, vamos colocar uma experssão regular que diz que sempre que na URL tiver [api], ele irá chamar a função(req,res) que vai receber o requeste e o response, e que ira fazer o processamento de [resp.send()], dentro do send() vamos fazer da mesma forma que nos outros.
    -> Se colocarmos a API com outras palavras na url, ele irá fazer o reqeust do mesmo jeito. se mudar para maiuscula ou minuscula nao irá chamar.
~~~javascript
[/express/ex01.js]

const express = require('express')
const server = express()

server.get('/',function(req,res) {
  res.send('<h1>Index!</h1>')
})

server.all('/teste', function(req,res) {
  res.send('<h1>Teste!</h1>')
})

server.get(/api/, function(req,res){
    res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))
~~~

&nbsp;

---

---

## [Aula 304] - EXERCICIO 02: CADEIA DE MIDDLEWARES

&nbsp;