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

