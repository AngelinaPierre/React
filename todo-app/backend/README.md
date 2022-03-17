# ==== [Seção 7 - TODO APP (backend) ] ====




&nbsp;

---

---

## [Aula 120] - VISÃO GERAL

&nbsp;

Vamos construir outra aplicação, é uma aplicação simples que iremos preparar para no final edsenvolvermos uma aplicação um pouco mais complexa.

Um dos aspectos interessantes desse aplicaão, é que a primeira versão que iremos desenvolver será utilizando apenas o **REACT**. Não vamos usar o **redux**, nem nada relacionado ao controle de estado que o redux prove.



É uma aplicação bem simples, de cadastro de tarefas, onde vamos colocar como exemplo , uma tarefa,*estudar react/redux*, podemos adicionar a partir do botão de (+) ou usando o enter. Vamos cadastrar algumas atividades , para que possamos depois ver  botão de pesquisar (lupa).

Nas atividades cadastradas, podemos marcar uma atividade como concluida, uma vez feito isso, visualmente, ele mostra a tarefa com uma linha sobescrita, jutamente com mais dois botoões, um para restaurar a ativade e outra para a exclusão da mesma.

Outra coisa que podemos fazer é uma consulta, onde digitamos por exemplo (do) e apertamos shift+enter. Assim ele irá consultar todas as atividades que possuem o (do) na sua descrição. Na lista que pesquisamos, se fizermos alguma ação, como por exemplo, excluir um item, ele ainda irá manter o filtro. Para limparmos o mesmo, usam o botão de (x), e ele tras todas as outras atividades.


Outra coisa importante é que iremos criar duas telas [tarefa & sobre], elas foram criadas para podermos fazer a navegação, trazer para dentro da aplicação a questão da navegação que é um assunto muito improtante, e precisamo fixar melhor. Quando clicamos no simbolo da aplicação (TodoApp) ele volta para a tela do **todo list**, e qualquer outra **URL** que digitarmos no browser e apertar enter, será direcionado para essa **todo list** que é a tela principal do sistema.

O que temos como extra, vamos ter o **MONGODB** inicializado para rodar a aplicação. Vamos ter tambem o **BACKEND - node**, o backend foi colocado usando o PM2, que é uma ferramenta mais quando estamos trabalhando em produção. Vamos construir o beckend, no final do curso, temos umas aulas extras que possuem exercicios relacionados ao backend. Falando um pouquinho sobre o **EXPRESS**, **MONGODB**, **NODERESTFUL**.

Fazer uma aplicação **FULL-SCTACK** em javascript é um conhecimento extremamente importante. Assim construimos a aplicação de ponta-a-ponta , desde o beck-end ate o front-end usando o **REACT/REDUX** .

Nesas aplicação não iremos utilizar o *redux form*, vamos construi-la em **REACT** e depois fazer a migração para a utilização do **REDUX**. Assim iremos construir um conhecimento gradativo, pegando primeiro o **REACT** e depis o **REDUX**. Para assim quando formos para aplicações mais complexas termos uma certa facilidade no seu desenvolvimento.

A visão geraldo do projeto é a seguinte.
- Temos uma pasta chamada **/public**, que possui apenas o **index.html**, que seria nossa SPA - Single Page Aplication.
  - Unica pagina onde temos a aplicação inteira, possui referencia para um arquivo css (App.css) e um arquivo javascript.
- Vamos fazer o build do nosso sistema com o **web-pack**.
- No **packge.json** podemos ver, que temos dependencias apenas para o react.
- Temos nossa pasta do codigo fonte que seria a **/src**, onde temos o **index.jsx** para inicializar nossa aplicação.
- Temos uma pasta chamada **/todo** que é exatamente a **todo list**, que será separada em **todoForm.jsx & todoList.jsx**. Form, input de pesquisa com os 3 botçoes, e a todolist sendo a lista mostrada abaixo.
  - Teremos outro arquivo chamado **todo.jsx** que irá controlar tudo.
- Temos uma pasta chamada **/templates**, onde temos alguns arquivos como **custom.css | grid.jsx | iconButton.jsx | if.jsx | menu.jsx | pageHeader.jsx**, coisas que tem haver co**template**
- Na pasta **/main**, teremos um arquivo com a defenição da nossa aplicação **app.js**, possuindo os componentes [Menu] e [Routes]. 
  - [Routes] -> são as rotas que ficaram navegando entre as duas paginas [tarefas e sobre], quem irá controlar isso será a **API** de rotas que é o **REACT Route**.
- Temos tambem uma pasta chamada **/about** , com um arquivo jsx de mesmo nome so para termos um conteudo a mostrar para a parte da navegação.

É importante ter uma visão geral sobre o que iremos construir para que não fique tão vago durante o processo.



&nbsp;

---

---

## [Aula 121] - CONFIGURAÇÃO E INSTALAÇÃO

&nbsp;

Agora iremos começar nosso projeto do **TODO APP** com o **BACKEND** da nossa aplicação. Como esse é um curso voltado para **REACT**, eventualmente voce pode querer o backend pronto e simplesmente ir para a parte do **FRONTEND**.

Para isso, dentro do [repositorio](https://github.com/cod3rcursos/curso-react-redux) do curso, temos todos os exercicios feitos ate agora, inclusive, os projetos antigos incluindo as novas versões do **REACT**.

    1 - Para começar, vamos criar uma nova pasta para o nosso projeto chamada todo-app.
~~~
mkdir todo-app && cd todo-app
~~~

    2 - Dentro da pasta /todo-app vamos criar dois projetos:
    -> Um projeto BACKEND (esta aula), e outro projeto FRONTEND (proxima aula).
~~~
mkdir backend && cd backend

~~~

    3 - Apos criada a pasta do /beckend vamos criar o nosso arquivo PACKAGE.JSON.
    -> Um arquivo que terá nossas dependencias cadastradas, alguns scripts que iremos executar para startar a aplicação.
    -> npm init, ja criaria o arquivo, o -y, serve para ele responder todas as perguntas de forma padrão.
~~~
npm init -y 

[saida]

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
~~~

Uma vez criado o package.json, vamos agora declarar as nossas depedencias, temos duas formas: 

    - Ou colocamos as dependencias diretamente no terminal.
    - Ou podemos abrir o arquivo package.json, e simplesmente copiar o que temos no repositorio. E depois executa o comando NPM I
Vamos instalar pelo terminal para aprendermos os comandos e explicarmos qual a funcionalidade de cada uma das dependencias.

    4 - Vamos usar o comando [ --save ], pois as dependecias no modulo da aplicação backend, serão necessarias tanto no ambiente de desenvolvimento, quanto no ambiente de produção.
    -> Diferente do FRONTEND, quando formos trabalhar com a aplicação REACT, as dependecias serão necessarias apenas no momento em que estivermos desenvolvendo. Pois o build será responsavel por gerar dois arquivos, uma arquivo de CSS e um de javascript ou html, e esses arquivos irão conter a aplicação sem ter a necessidade de, por exemplo, ter o node instalado, sem ter necessidade de ter a pasta /node_modules configurada dentro do servidor.
    -> Simplesmente esses arquivos gerados podem ser copiados para qualquer servidor web, APACHE, ENGINE NEXT?, NODE.
    -> Ja o BACKEND, ele é totalmente dependente do NODE, e ele espera que tenha a pasta /node_modules com todas as dependencias instaladas.
    -> Nesse caso vamos usar o comando npm, que é o gerenciador de pacotes do nodo.
    -> Vamos tambem usar uma FLAG(-E), para instalar a versão EXATA, para termos o maior nivel de compatibilidade possivel.
    -> O primeiro pacote que iremos instalar eh o BODY-PARSER na versão 1.15.2. Ele é responsavel por fazer o "parse" do "body" da requisição. Quando a requisição chega, ela chega no formato de string, por exemplo os parametros da requisição e as vezes, dentro dos parametros da requisição, vem um objeto no formato JSON. Ele será responsavel por ler esses parametros e converter por exemplo para um objeto em JAVASCRIPT, para que a gente possa acessar esses dados nao como string, mas como objeto do javascript. Alem do JSON, o BODY-PARSE será importante para fazer "parse" quando vinher os dados de um formulario.
    -> A proxima dependencia será o EXPRESS V4.14.0, que é o FRAMEWORK WEB que iremos trabalhar no nosso backend.
    -> Vamos tambem instalar o MONGOOSE V4.7.0 que é a BIBLIOTECA que será responsavel por acessar o banco de dados. Tem tanto a parte de conexão com o banco de dados como tambem possui um framework que faz o mapeamento entre os objetos javascript em documentos do mongo. Entao vamos criar uma esquema, e esse esquema fará o mapeamento entre os objetos do javascript e os documentos que serão persistidos no mongo, alem de ter validações e outras coisas mais.
    -> Para que nossa API possa sair de uma forma mais simples e otimizada, ja que é um curso voltado para o frontend-react, vamos usar o NODE-RESTFULL V0.2.5, onde vamos observar como ele irá simplificar a construção da nossa API. Logo, de uma forma muito simples iremos disponibilizar uma API que faz todo o cadastro, inserção, alteração, inclusão, consultas, filtros e coisas do tipo, ja vem tudo implementado no NODE-RESTFULL. (olhar repositorio do node-restfull).
    -> Vamos tambem fazer a instalaçao do PM2 V2.1.5, que é um LAUCHER, responsavel por iniciar nossa aplicação. Eventualmente quando formos iniciar uma aplicação em node, basta voce chamar o comando "node" e o primeiro arquivo da sua aplicação que ela será inicializada, so que isso torna a aplicação muito fragil, pois com qualquer erro, o node sai, e sua aplicação para de funcionar. O pm2, é um "disparador" que irá inicializar nossa aplicação na PRODUÇÃO, fazendo com que ele monitore a memoria, o consumo de processador, ver quantos processos estão sendo executados dentro do pm2, se acontecer um erro, ele se responsabiliza por startar a aplicação novamente e deixar ela no ar. Na parte de desenvolvimento, vamos instalar o node mon?, que é uma parte mais simples.
~~~
npm i --save -E body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restfull@0.2.5 pm2@2.1.5
~~~


    5 - Agora que a primeira parte das configurações foi concluida, vamos rodar agora o comando [npm i --save-dev -E], para instalarmos dependencias necessarias apenas quando estivermos no modo de desenvolvimento.
    -> Vamos instalar o [ NODEMON V1.11.0] , essa é a unica dependencia de desenvolvimento que iremos precisar, todas as outras serão necessarias tambem na produção.
~~~
npm i --save-dev nodemon@1.11.0
~~~

    6 - Vamos agora abrir a pasta do backend na nossa IDE, para começarmos a desenvolver o codigo.
    -> Vamos abrir o PACKAGE.JSON gerado e vamos fazer algumas mudanças.
    -> Perceba que as dependencias foram instaladas de forma fixa, pois usamos a flag -E, e temos 5 dependencias que serão necessarias em desenvolvimento e em produção e nodemon, necessaria apenas quando tivermos no ambiente de desenvolvimento.
~~~
[/backend/package.json - ESTRUTURA INICIAL]
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "1.15.2",
    "express": "4.14.0",
    "mongoose": "4.7.0",
    "node-restful": "0.2.5",
    "pm2": "2.1.5"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}
~~~

    7 - A primeira coisa que iremos mudar será o arquivo inicial ["main":"index.js"], vamos muda-lo para "src/loader.js" (vamos criar esse arquivo).
    -> Vamos tambem mudar os "scripts", retirando o "test" e criando outros dois: "dev" chamando o nodemon, "production" chamando o pm2 para startar usando o src/loader.js, e dentro do pm2, vamos chamar a aplicação de todo-app.
> Note que a forma que temos para inicializar a aplicação são duas:
>  - Usando npm run dev -> chamando assim o nodemon, que tambem é um launcher.
>  - E temos um outro laucher mais apropriado para a produção que é o pm2.

~~~json
[/backend/package.json]

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "src/loader.js",
  "scripts": {
    "dev": "nodemon",
    "production":"pm2 start src/loader.js --name todo-app"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "1.15.2",
    "express": "4.14.0",
    "mongoose": "4.7.0",
    "node-restful": "0.2.5",
    "pm2": "2.1.5"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}

~~~

    8 - Vamos criar dentro do BACKEND, um outro arquivo chamado .gitignore.
    -> Esse arquivo servirá para configurarmos o que não queremos que seja persistido no repositorio, caso eventualmente voce queira salvar os codigos dentro do github.
    -> Não vamos querer enviar a pasta /node_modules e nem arquivos com a extensão [.log].
~~~.gitignore
[/backend/.gitignore]
node_modules
*.log
~~~

    9 - Se voce quiser instalar novamente a pasta /node_modules, como ja temos o nosso package.json, ja configurado, dizendo exatamente as dependencias que precisamos em desenvolvimento e em produção, temos os scripts prontos, e para restaurar essas pasta é simples.
~~~
npm i
~~~

&nbsp;

---

---

## [Aula 122] - CONFIGURANDO O SERVIDOR COM EXPRESS

&nbsp;

    1 - Vamos começar criando nossa pasta chamada /src, e dentro dela criar o arquivo [loader.js].
    -> Tambem dentro de /src, vamos criar outra pasta chamada /config e dentro dela criar o arquivo [server.js].

```text
|--- |backend
|--- |--- |node_modules
|--- |--- |src
|--- |--- |--- |config
|--- |--- |--- |--- |server.js
|--- |--- |--- |loader.js
|--- |--- |.gitignore
|--- |--- |package.json
```

    2 - O /src/loader.js, irá delegar, fazer um require() do server que esta dentro de /config.
    -> O arquivo server.js é justamente a parte da configuração relativa ao EXPRESS, startar o servidor, alocar uma porta, para que a partir dele, a gente consiga publicar os nossos webservices.
~~~javascript
[/src/loader.js]
require('./config/server')
~~~~ 

    3 - Em [server.js], a primeira coisa que iremos fazer é colcoar uma constante para dizermos a porta que iremos utilizar, poderiamos pega-la a partir de um parametro, mas iremos colocar fixa.
~~~javascript
[/src/config/server.js]

const port = 3003
~~~

    4 - Vamos criar outra constante chamada de [bodyParser], que é justamente quem irá fazer o "parse" do corpo da requisição quando chegar, se for por exemplo, um formulario que tenha um padrão relativo a URL ENCODING, então ele fara essa conversão/parse para a gente, se for uma JSON, fará tambem.
~~~javascript
[/src/config/server.js]

const port = 3003
const bodyParser = require('body-parser')
~~~

    5 - Vamos tabem criar uma constante chamada EXPRESS que é o nosso servidor web, que roda em cima do node. Um servidor padrão de mercado, onde a maioria dos desenvolvedores utilizar ele.
~~~javascript
[/src/config/server.js]

const port = 3003
const bodyParser = require('body-parser')
const express = require('express)
~~~

    6 - Vamos criar outra constante, para startar o express(). Vamos criar uma instancia do express associando a variavel/const "server".
~~~javascript
[/src/config/server.js]

const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
~~~

    7 - Uma vez criada uma instancia do express vamos aplicar alguns MIDDLIEWARES para nossa requisição.
    -> O primeiro deles é o BODYPARSE, onde vamos configurar para, sempre que chegar uma requisição, que usa o padrão de [.urlencoded - padrão usado para submissão de formularios], quem fará o PARSE será o BODYPARSE, habilitando o modo [EXTENDED - que suportar mais tipos de dados do que o padrão do .urlencoded].
~~~javascript
[/src/config/server.js]

const port = 3003
const bodyParser = require('body-parser')
const express = require('express)
const server = express()

server.use(bodyParser.urlencoded({
    extended: true
}))
~~~

> Questão importante sobre os MIDDLEWARES, o express ele é muito fortemente baseado em um padrão chamado CHAIN OF RESPONSIBILITY, que é tambem conhecido como middleware, é como se voce tivesse uma cadeia de middlewares, uma cadeia de funções que vão estar trabalhando com a requisição.
>
> Quando estamos falando, servidor use [serve.use()], o BODYPARSER da maneira que colocamos acima, ele irá usar para todas as requisições que chegarem no servidor, independente da URL, irá passar por esse middleware.
> >
> Quando declararmosum outro middleware, por exemplo, fazer o BODYPARSE de .json(). Este será um outro middleware que será aplicado para todas as requisições que chegarem no servidor.
> ~~~javascript
> server.use(bodyParse.urlencoded({extended: true}))
> server.use(bodyParse.json())
>~~~
> Para mais detalhes sobre esse assunto, no final do curso, temos aulas especificas de express, node (padrão modular do node).

~~~javascript
[/src/config/server.js]

const port = 3003
const bodyParser = require('body-parser')
const express = require('express)
const server = express()

server.use(bodyParser.urlencoded({
    extended: true
}))
server.use(bodyParse.json())
~~~

> Ver aulas sobre express apos o termino dessa aula [express](https://www.udemy.com/course/react-redux-pt/learn/lecture/6513140#content).

    8 - Vamos registrar a porta que declaramos na constante PORT. Criando uma função, caso ocorra tudo bem, tenha conseguido registrar na porta, irá aparecer uma mensagem no console que o backend esta executando na porta declarada.
~~~javascript
[/src/config/server.js]

const port = 3003
const bodyParser = require('body-parser')
const express = require('express)
const server = express()

server.use(bodyParser.urlencoded({
    extended: true
}))
server.use(bodyParse.json())
server.listen(port, function() {
    console.log(`BECKEND is running on | PORT: ${port} |.)
})
~~~

Agora se quisermos ir no console, e dentro da pasta /backend rodar o comando **npm run dev**. 

> Usamos o *npm run dev* pois no nosso package.json criamos dois scripts, o **"dev"** e  **"production"**. Logo se chamamor os "npm run dev" ele irá rodar o nodemon, e se rodarmos o "npm run production" ele irá chamar o pm2.
~~~
npm run dev
~~~

Ao rodarmos o comando, caso funcione, ele irá nos informar que o **BACKEND** esta rodando na **PORTA 3003**.

~~~javascript
[/src/config/server.js - ESTRUTURA FINAL]

const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
// criando uma instancia do express e atribuindo a variavel server
const server = express()

// criando middlewares para as requisições.
server.use(bodyParser.urlencoded({
    extended: true,
}))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on | PORT:${port} |`)
})
~~~




&nbsp;

---

---

## [Aula 123] - CONEXÃO COM O BANCO DE DADOS.

&nbsp;