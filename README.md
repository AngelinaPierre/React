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


Agora vamos fazer um teste, para que a gente possa perceber de uma forma muito clara, justamente essa questão de **chain of responsability**, que é voce ter uma cadeia de middlewares para atender a uma determinada requisição.

    1 - Vamos duplicar o exercicio 1 e mudar o nome para 2. Vamos deletar as funções e deixar somente as constantes e o final para escutar a porta 3000.
~~~javascript
[/express/ex02.js]

const express = require('express')
const server = express()


server.listen(3000, () => console.log('BACKEND is running...'))

~~~

    2 - Para começar nosso exercicio vamos utillizar o server.get(), mapeando para a URL padrão/raiz [/], e dentro da url barra, vamos chamar uma função que terá 3 parametros, que é exatamente a função middleware completa [req,res,next].
> OBS no ex01, chamamos uma funçao que so recebia (request e response), no javascript, podemos suprimir alguns parametros de uma função, mesmo que ela receba por padrão um determinado conjunto de parametros, não somos obrigados a passar todos os parametros, mas de qualquer forma se vc for suprimir os parametros perecisam ser os ultimos.

~~~javascript
[/express/ex02.js]

const express = require('express')
const server = express()

server.get('/', function(req,res){
    console.log('Inicio..')
    next()
    console.log('Fim...')
})

server.listen(3000, () => console.log('BACKEND is running...'))

~~~

    3 - Vamos mapear usando o server.get() para a mesma url [/], e vamos colocar que a função vai receber uma requisição e uma resposta. Dentro da função vamos chamar o console.log(), e depis vamos enviar um codigo html usando res.send().
~~~javascript
[/express/ex02.js]

const express = require('express')
const server = express()

server.get('/', function(req,res){
    console.log('Inicio..')
    next()
    console.log('Fim...')
})

server.get('/', function(req,res){
    console.log('Resposta...')
    res.send('<h1> Olá Express </h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))

~~~

Perceba que no console foi impresso o que colocamos no console.log(). O que temos é uma cadeia de responsabilidade, ou uma cadeia de MIDDLEWARE, temos na verdade dois mapeamentos para a mesma URl [/ = raiz]. Quando a requisição chega, ira chegar primeiro para o middleware1, que foi a primeira função a ser associada a essa url.

~~~javascript
server.get('/', function(req,res,next){
  console.log('Inicio...')
  next()
  console.log('Fim...')
})
~~~

Quando entro do corpo da função chamamos o next(), estamos utilizando o conceit da **chain of responsability**. Quando invocamos essa função, estamos dizendo que nesse ponto, desse middleware, queremos que voce continue invocando a cadeia, passe para o proximo middleware da cadeia, e quanto terminar a execução de todos os middlwares, ele irá voltar para a proxima linha, no caso, console.log().

Normalmente se coloca a função next(), no final, mas podemos colocar em qualquer lugar. Veja que primeiro foi impresso o INICIO, depois a RESPOSTA, ja que chamamos o next(), ele chamou o proximo middleware, e ao finalizar, voltou para terminar o middleware que colocamos o next().

~~~javascript
[/express/ex02.js]
const express = require('express')
const server = express()

// midlware 1 - mapeamento raiz
server.get('/', function(req,res,next){
  console.log('Inicio...')
  next()
  console.log('Fim...')
})
// midlware 2 - mapeamento raiz
server.get('/', function(req,res){
  console.log('Resposta...')
  res.send('<h1> Olá Express!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))
~~~


&nbsp;

---

---

## [Aula 305] - EXERCICIO 03: MÉTODO USE

&nbsp;

Agora iremos ver uma outra forma de mapearmos a URL, e uma outra forma de se criar cadeias de responsabilidade usando o **express**. Vamos duplicar o exercicio 2 para fazer o 3.

~~~javascript
[/express/ex03.js - ESTRUTURA INICIAL]

const express = require('express')
const server = express()

// midlware 1 - mapeamento raiz
server.get('/', function(req,res,next){
  console.log('Inicio...')
  next()
  console.log('Fim...')
})
// midlware 2 - mapeamento raiz
server.get('/', function(req,res){
  console.log('Resposta...')
  res.send('<h1> Olá Express!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))

~~~

    1 - Vamos substituir os metedodos [get()] pelo metodo [use()]. No lugar da URL raiz, vamos colocar o [/api].
    -> Para finalizar vamos substituir o [Ola express], por [api].
~~~javascript
[/express/ex03.js]
const express = require('express')
const server = express()

// midlware 1 - mapeamento raiz
server.use('/api', function(req,res,next){
  console.log('Inicio...')
  next()
  console.log('Fim...')
})
// midlware 2 - mapeamento raiz
server.use('/api', function(req,res){
  console.log('Resposta...')
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))
~~~

    2 - Dando [alt+r - reinicia a aplicação], se entrarmos em [lh3000/api], ele irá mostrar o <h1> que criamos.

A diferença dentre e o **use()** e o **get()**, alem do fato de que se pegarmos a url **http://localhost:3000/api** e colocarmos ela no **POSTMAN**, fazendo um **post|get|put**, ele irá trazer a resposta para todos os metodos. OU seja, alem do fato de **MAPEARMOS A URL PARA TODOS OS METODOS HTTP**, podemos colocar **http://localhost:3000/api/blablabla** no browser que ainda assim ele irá funcionar.

    3 - Se voltarmos o metodo [use()] para o [get()], e colocarmos no browser para acessar essa URL (http://localhost:3000/api/blablabla), ele nao irá conseguir acessar.
> Cannot GET /api/blablaba

Ele não consegue acessar pois, quando estamos utilizando o metodo **get()** estamos dizendo **EXATAMENTE** qual a url que queremos chamar. Quando usamos o **use()** ele recebe o parametro, por exemplo, **/api** como sendo o inicio da sua requisição, logo, nao podemos, por exemplo colocar **http://localhost:3000/aapi** que ele tambem nao irá conseguir acessar, pois precisa começar com **/api/alguma_coisa**. Outro exemplo que tambem não irá funcionar, **http://localhost:3000/teste/api**, não chama essa URL pois não começou com o **/api**.

O **use()** tanto mapeia todos os metodos *http*, como tambem define o inicio da URL ** seu pre-fixo**. Sempre que a URL tiver o *pre-fixo* **/api ou /api/qualquer_coisa**, ele irá passar por esse **middleware**.

Vamos utiliza-lo em varios cenários, como por exemplo, quando formos usar o **bodyParser**, vamos anexar um **middleware** que expoe a parte do **use()**. 

O metodo **use()** tambem recebe como *primeiro parametro* uma **url** e como *segundo parametro* uma **função middleware** da mesma forma que o *get()*. Se voce quiser usar um determinado middleware para toda sua aplicaçao, independente do que seja, independete de qual URL queremos usar para tudo, podemos simplesmente suprimir a **url**, deixando somente a **função middleware**.

Quando reiniciar, conseguimos ver que ele irá mostrar nosso [h1] da **api**, não importando a URL que colocarmos, ate mesmo na raiz da aplicação, ou seja, todo o nosso sistema, tudo que esta sendo requisitado para a nossa aplicação esta rodando na porta 3000, vai passar pelos dois middlewares que criamos, pois passamos o **server.use()** juntamente com a função middleware, colocando eles assim na cadeia de execução para atender qualquer requisição da sua aplicação.

~~~javascript
[/express/ex03.js - ESTRUTURA FINAL]

const express = require('express')
const server = express()

// midlware 1 - mapeamento raiz
server.get('/api', function(req,res,next){
  console.log('Inicio...')
  next()
  console.log('Fim...')
})
// midlware 2 - mapeamento raiz
server.get('/api', function(req,res){
  console.log('Resposta...')
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('BACKEND is running...'))


~~~

&nbsp;

---

---

## [Aula 306] - EXERCICIO 04: MÉTODO ROUTE

&nbsp; 

Vamos agora falar um pouco sobre o metodo **route()** que existe dentro da API do **express**. Vamos duplicar o exercicio 3, e vamos apagar os dois metodos so deixando o require do express e o intanciamento do mesmo em server.
~~~javascript
[/express/ex04.js - ESTRUTURA INICIAL]

const express = require('express')
const server = express()

server.listen(3000, () => console.log('BACKEND is running...'))
~~~

    1 - Vamos chamar a função [server.route] e passar para ele uma URL, a partir desta mesma url , usando o metodo [route()], podemos ENCADIAR varias chamadas, podemos chamar os metodos [GET, POST, DELETE,PUT], sem precisar informar a URL para esses metodos.
    -> Chamo o GET, passa o middleware por exemplo. Sem precisar ficar repetindo a mesma URL mais de uma vez.
    -> Vamos usar o .get() chamando uma arrow function para que o codigo fique mais conciso, colocando tudo em uma linha.
    -> Chamamos o get que ira receber uma requisição e uma resposta e quando isso acontecener será mostrado no console.log
~~~javascript
[/exepress/ex04.js] 
const express = require('express')
const server = express()

server.route('/clientes')
  .get(
    (req,res) => res.send('Lista de Clientes')
  )

server.listen(3000, () => console.log('BACKEND is running...'))

~~~

    2 - Vamos tambem criar o metedo POST, que tambem irá receber uma requisição e uma resposta, e como resposta dele, vamos mandar a frase [novo cliente].
    -> Vamos charmar o PUT, tbm recebendo uma requisição e uma resposta, usando a arrow function, vai responder a frase [alterar clientes].
    -> GET() vc usa para receber a lista de clientes.
    -> POST() num web service com uma determinada URL, voce esta criando um novo objeto daquele tipo, no caso o cliente.
    -> PUT() estamos alterando um cliente que ja existe
    -> DELETE() voce esta recebendo uma requisição para excluir um determinado cliente da base.
~~~javascript
[/express/ex04.js - ESTRUTURA FINAL]

const express = require('express')
const server = express()

server.route('/clientes')
  .get(
    (req,res) => res.send('Lista de Clientes')
  )
  .post(
    (req,res) => res.send('Novo Cliente')
  )
  .put(
    (req,res) => res.send('Altera Cliente')
  )
  .delete(
    (req,res) => res.send('Remove Cliente')
  )

server.listen(3000, () => console.log('BACKEND is running...'))
~~~~ 

Para testarmos, usamos o **POSTMAN**, usando a url **localhost:3000/clientes** e vamos testando a resposta para cada metodo [get, put, post, delete]. Para cada metodo precisa sair a saida do [res.send()] progamada.

~~~javascript
[/express/ex04.js - TESTANDO OS METODOS]
const express = require('express')
const server = express()

server.route('/clientes')
  .get(
    (req,res) => res.send('Lista de Clientes')
  )
  .post(
    (req,res) => res.send('Novo Cliente')
  )
  .put(
    (req,res) => res.send('Altera Cliente')
  )
  .delete(
    (req,res) => res.send('Remove Cliente')
  )
  .patch(
    (req,res) => res.send('Patch cliente')
  )
  .copy(
    (req,res) => res.send('Copiando Cliente')
  )
  // nao aparece +status=200 ok
  .head(
    (req, res) => res.send('Head Cliente')
  )
  .options(
    (req,res) => res.send('Option Cliente')
  )
  .link(
    (req,res) => res.send('Link Cliente')
  )
  .unlink(
    (req,res) => res.send('Unlink CLiente')
  )
  .purge(
    (req,res) => res.send('Purge Cliente')
  )
  .lock(
    (req,res) => res.send('Lock Cliente')
  )
  .unlock(
    (req,res) => res.send('Unlock Cliente')
  )
  .propfind(
    (req, res) => res.send('Propfind Cliente')
  )

// METODO VIEW CAUSA ERRO NO BACKEND. USANDO ESSE MESMO PADRÃO.

server.listen(3000, () => console.log('BACKEND is running...'))

~~~

O **route()** é uma forma interessante que temos de mapiar varios metodos para uma mesma URL, não precisando repetir ela sempre que chamamos uma metodo novo. Achamaos o **route()** e a partir dela encadeamos uma chamada apos a outra, n caso, passamos uma função bem simples para retornar um texto, mas poderiamos fazer um tratamento mais adequado para esse tipo de mapeamento.


&nbsp;

---

---

## [Aula 307] - EXERCICIO 05: EXPRESS ROUTER

&nbsp;

Agora vamos ver duas cosias interessanets, uma é um metodo chamado **router()**, na aula passada falamos sobre o *route()*, a segunda coisa é que iremso ver como passar **parametros a partir da sua requisição**, muitas vezes queremos fazer uma requisição em **/clientes/1**, que seria o codigo do cliente para obter o codigo 1. Então iremos ver como podemos mapear uma URl que recebe um parametro e como podemos pegar esse parametro e fazer algo util com ele.

Nesse exemplo, vamos criar dois arquivos, um para fazermos as declarações de nossas **ROTAS**, e outro para importar e pegar o resultado dessas rotas e anexar essas rotas dentro de uma URL.

    1 - Vamos criar o primeiro arquivo chamado [/express/ex05_routes.js]
    -> Dentro do arquivo vamos fazer o require do express e nesse arquivo vamos pegar o ROUTER. A criação da INSTANCIA DO EXPRESS (server) vamos criar em outro arquivo.
    -> Vamos definir o router, colocar nossas rotas e utilizar ele no outro arquivo.
    -> Criamos uma constante chamada (router) que irá receber o [express.router()].
~~~javascript
[/express/ex05_routes.js]

const express = require('express')
const router = express.Router()
~~~

    2 - Em cima das rotas vamos usar o metodo [use()], que irá receber uma requisição e uma resposta e o next, chamando uma arrow function, poderiamos tambem colocar uma função normal.
    -> Sabemos que o [use()] irá mapear para qualquer VERBO do HTTP. (get,post,put,delete). Chamando esse middleware, uma função com parametros (sem nome).
    -> Esse middleware será chamado sempre que nosso [router()] for acionado. Essa arrow function é um MIDDLEWARE GLOBAL dentro de [router()].
    -> O [router()] é como se fosse uma miniaplicação, onde podemos mapear dentro dela do mesmo jeito que mapeamos direto no express. Quando chamamos o [express.router()] recebemos uma INSTANCIA de um router(), a partir dessa INSTANCIA conseguimos colocar varios serviços dentro, como por exemplo, [router.get()] e mapear uma determinada função para ele, podemos usar o [use()], assim vamos mapeando nossas rotas e colocando os middlewares, dentro deste router(), e no final, colocamos o router() dentro do EXPRESS a partir de uma determinada URL.
    -> A API do router é muito semelhante a API do express, so que vamos criando como se fosse um agrupamento em cima do router() e podemos ter na nossa aplicação varias instancias de router(), um so para url baseada na api de cliente, outro para api de produto, criando assim varios router().
~~~javascript
[/express/ex05_routes.js]

const express = require('express')
const router = express.Router()

router.use(
    (req,res,next) => 
)

~~~

    3 - Nesse middleware global vamos tentar criar um middleware que será chamado sempre para qualquer rota que esteja dentro desse router, e esse middlware vai tentar calcular o tempo da duração da requisição.
    -> Vamos criar uma constante chamada [init] que pega a hora atual em milisegundos.
    -> Depois de pegar essa hora inicial, vamos chamar o [next()], que irá invocar o resto dos middlewares da cadeia.
    -> E depois da execução dos middlewares da cadeia, vamos jogar um console.log(), usando uma TEMPLATE STRING, onde vamos colocar o tempo de duração do processo.
    -> Como estamos usando o [use()] ele irá executar esse middleware para todas as requisições e como não ha um ARRAY para nenhuma URL EXPECIFICA, para todas as chamadas dentro do router vai passar por esse middleware.
~~~javascript
[/express/ex05_routes.js]

const express = require('express')
const router = express.Router()

router.use(
    (req,res,next) => {
        const init = Date.now()
        next()
        console.log(`Tempo = ${Date.now() - init} ms.`)
    }
)
~~~

    4 - Vamos criar um [router.get()] chamando o ['/produtos'], e vamos passar um parametro nessa url. Para isso colocamos ['/produtos/:id',] o dois pontos (:).
    -> Colocando os [:id] o express irá reconhecer como algo variavel, no lugar de id terá algum codigo (numero ou texto), naõ importando, sabendo somente que é um valor variavel dentro da URL.
    -> Seguindo o padrão vamos colocar uma função MIDDLEWARE para ser chamada a partir desta URL() passando como parametro (req,res). Lembrando que não precisa confundir muito o fato de estarmos usando uma função arrow aqui, é a mesma coisa que estamos fazendo antes nos outros metodos. Simplesmente chamamos o get para a url e chamamos a função/middleware.
~~~javascript
router.get('/produtosq:id', (req,res) =>{

})
~~~

    5 - No corpo da função, vamos colocar o metodo [res.json()], alem de voce mandar o [res.send()] que ja usamos para mandar um conteudo HTML por exemplo, mandando o [res.json()], estamos informando que o que colocarmos dentro, o objeto que passarmos será convertido para json e enviado para o browser como um json.
    -> Vamos criar um objeto que possui a propriedade {id:}, e queremos pegar justamente esse {id} que foi passado como parametro. 
    -> Esse {id} que foi passado como parametro estará dentro da requisição, pois o parametro vem da requisição. Logo chamamos o objeto requisição (req), depois os parametros (params) e depois a ID, para ser o valor da propriedade que iremos converter para JSON.
~~~javascript
[/express/ex05_routes.js]
const express = require('express')
const router = express.Router()

router.use(
  (req,res,next) => {
    const init = Date.now()
    next()
    console.log(`Tempo: ${Data.now() - init} ms.`)
  }
)
router.get('/produtos/:id',(req,res) => {
  res.json(
    {
      id: req.params.id,
    }
  )
})

~~~

    6 - Continuando o OBJETO vamos colocar um valor fixo de produto, criando a propriedade {name:}
~~~javascript
[/express/ex05_routes.js]

const express = require('express')
const router = express.Router()

router.use(
  (req,res,next) => {
    const init = Date.now()
    next()
    console.log(`Tempo: ${Data.now() - init} ms.`)
  }
)
router.get('/produtos/:id',(req,res) => {
  res.json(
    {
      id: req.params.id,
      name: 'Caneta',
    }
  )
})

~~~

    7 - Vamos agora fazer exatamente um outro serviço, exatamente igual o que acabamos de fazer, que irá servir para treinarmos um pouco mais a escrita e sedimentar mais o conhecimento.
    -> Vamos criar uma nova rota usando [get()] para API de clientes, onde tambem iremos passar um ID como parametro, e vamos passar uma função middleware usando a anotação ARROW (mesma coisa de uma função). E vamos usar o json(), passando um objeto, agora com o nome do cliente sendo Angelina.
~~~javascript
[/express/ex05_routes.js]

const express = require('express')
const router = express.Router()

router.use(
  (req,res,next) => {
    const init = Date.now()
    next()
    console.log(`Tempo: ${Data.now() - init} ms.`)
  }
)
router.get('/produtos/:id',(req,res) => {
  res.json(
    {
      id: req.params.id,
      name: 'Caneta',
    }
  )
  router.get('/clientes/id',(req,res) =>{
    req.json({
      nome: 'Angelina',
    })
  })
})

~~~

    8 - Para finalizar o arquivo de rotas, precisamos exportar a constante [ROUTER] que criamos para poder usa-la em outro arquivo/modulo do node.
    -> Para isso usamos o [module.exports] recebendo a constante.
~~~javascript
[/express/ex05_routes.js - ESTRUTURA FINAL]

const express = require('express')
const router = express.Router()

router.use(
  (req,res,next) => {
    const init = Date.now()
    next()
    console.log(`Tempo: ${Data.now() - init} ms.`)
  }
)
router.get('/produtos/:id',(req,res) => {
  res.json(
    {
      id: req.params.id,
      name: 'Caneta',
    }
  )
  router.get('/clientes/:id',(req,res) =>{
    req.json({
        id: req.params.id
        nome: 'Angelina',
    })
  })
})

module.exports = router

~~~

    9 - Vamos agora criar o [/express/ex05.js], nesse arquivo vamos fazer o require do express e criar uma instancia do mesmo. Vamos importar o router partir do require onde irá receber o RELATIVE PATH ('./ex05_routes") pois estamos chamando diretamente um modulo interno.
~~~javascript
[/express/ex05.js]
const express = require('express')
const server = express()
const router = require('./ex05_router')

server.listen(3000, () => console.log('BACKEND is running..'))

~~~

    10 - Apos importarmos as rotas, vamos dizer para o express utiliza-las a partir do [server.use()] pasasndo a url (/api), apontando para router.
    -> O [router] que importarmos que esta no arquivo [/express/ex05_routes.js] é a função [express.Router()]. E dentro [router](constante), colocamos varios mapeamentos onde criamos algumas rotas e um middleware para ser executado sempre que o router for chamado (verifiacção do tempo).
    -> Agora, o router que importamos em [/express/ex05.js] é um middleware que dentro dele terá varias rotas mapeadas. Estamos informando com o [/api], que para chamar esse (router), antes temos que chamar o [/api].
    -> Então se mapeamos dentro de [/express/ex05_routes.js], /produtos e /clientes, para chama-los tem que chamar [/api/produtos/id || /api/clientes/id].
    ->
~~~javascript
[/express/ex05.js]
const express = require('express')
const server = express()
const router = require('./ex05_router')

server.use('/api', router)

server.listen(3000, () => console.log('BACKEND is running..'))
~~~

Salvando o arquivo e reiniciando o servidor backend, vamos colocar na url **localhost:3000/api/clientes/1**, vamos receber um arquivo no formato JSON, com nome e id.

Outro teste é colocando o ID 1000, se no lugar de clientes colocarmos produtos com id 1000. 

Nessa aula vimos tanto o conceito de router() que seria uma mini aplicação, um subconjutno de rotas que colocamos dentro de uma INSTANCIA DE ROUTER e vamos MAPEANDO com regras, e no final dizemos que o router aponta para a API.

No exemplo do backend vamos usar um router() que irá mapear todos os metodos da nossa API, poderiamos separar a API em varios routers() diferentes, mas como é uma APi pequena, não possui muitos metodos, vamos criar um ROUTER e em cima dele vamos mapear as APIS.

Vimos tambem nesse exemplo a possibilidade de passar um parametro para nossas rotas usando o (:id). Poderiamos tambem passar outros parametros como o [/clientes/:id/:name], passando o nome e o id na url.

~~~~javascript
[/express/ex05_routes.js]
router.get('/clientes/:id/:name', (req, res) => {
    res.json({
        id: req.params.id,
        name: req.params.name,
    }) 
})
~~~

É muito simples passar esse parametros pela URL, da mesma maneira que é simples o conceito de **ROUTER()** como se fosse um subgrupo, mini aplicação, onde iremos colocar as rotas usando exatamente os mesmos metodos.

A unica cosia q foi feita diferente foi chamar as **ARROW FUNCTION** dentro do arquivo, em vez de passar a função.

&nbsp;

---

---

## [Aula 308] - EXERCICIO 06: EXPRESS E ROUTER SÃO SINGLETONS?

&nbsp;