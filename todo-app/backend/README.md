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

    6 - Vamos criar outra constante, para startar(criar uma instancia) o express(). Vamos criar uma instancia do express associando a variavel/const "server".
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
> Quando estamos falando, servidor use [serve.use()], o BODYPARSER da maneira que colocamos acima, ele irá usar para todas as requisições que chegarem no servidor, independente da URL[metodo use()], irá passar por esse middleware.
> >
> Quando declararmos um outro middleware, por exemplo, fazer o BODYPARSE de .json(). Este será um outro middleware que será aplicado para todas as requisições que chegarem no servidor[metodo use()].
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

> Ver aulas sobre express apos o termino dessa aula [express](https://www.udemy.com/course/react-redux-pt/learn/lecture/6513140#content) -> [Resumo express]().

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
    console.log(`BECKEND is running on | PORT: ${port} |.`)
})
ou
server.listen(port, () => console.log(`BECKEND is running on | PORT: ${port} |.`))
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

Agora que configuramos o basico do servidor (express), e ele esta executando, vamos criar agora um arquivo de condifuração chamadado **/config/database.js**, onde nos iremos fazer a configuração com o **MONGO**.

    1 - Vamos começar fazendo o import/require() do mongoose. Ele irá servir tanto para fazer o MAPEAMENTO dos nossos OBJETOS em JS, para os documentos que irão para o MONGO, como ele tambem serve para fazer a questão da conexão, abrir uma conexão com o mongo e ir mandando os comandos de [inserção | atualização |exlclusao | agregação], para la.
    -> O MONGOOSE tem uma API, que reflete a API do MONGO, e assim temos uma facildiade muito grande para utilizar.
~~~javascript
[/src/config/database.js]

const mongoose = require('mongoose')
~~~

    2 - Vamos colocar uma SUBSTITUIÇÃO, dizendo que o MONGOOSE irá usar a API de PROMISSES, do proprio NODE.
    -> Pois aparece uma mensagem de advertencia informando que a API do MONGOOSE esta DEPRECATED.
~~~javascript
[/src/config/database.js]

const mongoose = require('mongoose')
mongoose.Promise = global.Promise // retirar msg de advertencia
~~~

    3 - Vamos fazer o export do mongoose, usando o MODULE.EXPORTS, passando para ele o mongoose juntamente com um middleware chamado [.connect()], onde iremos passar para ele [mongodb://localhost/todo], o nosso banco será o TODO.
~~~javascript
[/backend/config/database.js]

const mongoose = require('mongoose')
mongoose.Promise = global.Promise // retirar msg de advertencia
module.exports = mongoose.connect('mongodb://localhost/todo')
~~~

    4 - Para finalizar a aula, vamos entrar no nosso arquivo [/src/loader.js] e vamos colocar a referencia para o arquivo [/src/config/database] que criamos usando o REQUIRE.
> Estamos sempre usando o *Relative Path*, para sair de uma pasta para outra **../**, e assim vamos navegando de forma relativa entre os modulos.

~~~javascript
[/src/loader.js]
require('./config/server')
require('./config/database')
~~~

    5 - Apos salvar, será gerado um erro no console que iremos precisar tratar. Não estamos ainda com o mongo startado, para isso no terminal colocamos o comando:
~~~
mongod
~~~

    6 - Apos startar o banco de dados, voltamos no NODEMON e digitamos um [rs] para REINICIALIZAR O SERVIDOR.
~~~
rs
~~~

A instalação do **MONGODB** é muito simples, a unica coisa que precisamos ficar atentos é que temos que criar uma pasta na *RAIZ DO SISTEMA OPERACIONAL*, CHAMADA **/data** e dentro desta pasta temos que criar uma pasta chamada **/data/db**. Ai o mongo precisa ter permissão de escrita nesta pasta.

A partir do momento que colocamos o banco de dados para ser carregado a partir do [/src/loader.js]   e criamos uma conexão o mongo precisa estar startado.  Sempre que formos usar essa aplicação precisamos startar o mongoDB, se nao a aplicação não irá funcionar.

&nbsp;

---

---

## [Aula 124] - AVISOS NO TERMINAL SOBRE MONGODB

&nbsp;

Fala, pessoal!

Nessa seção, alguns alunos tem reportado algumas mensagens no terminal, referentes a conexão com MongoDb, ao rodar a aplicação.
aso você esteja passando pela mesma coisa, pode ficar tranquilo. Trata-se apenas de uma mensagem de aviso, ou como chamamos um Warning, informando que algumas propriedades usadas na conexão com o banco serão descontinuadas no futuro.

Solução
A mensagem apenas recomenda atualizar passando novos parâmetros para a conexão. Sendo assim, basta passar os seguintes parâmetros juntamente do comando de conexão com o Mongo:
~~~javascript
MongoClient.connect("mongodb://localhost:27017/todo", {
   useNewUrlParser: true,
   useUnifiedTopology: true
 });
 ~~~
Com isso, os Warnings devem sumir! 😃

Esperamos que essa aula artigo tenha te ajudado! Caso tenha mais dúvidas, não hesite, entra em contato conosco na seção de perguntas e respostas 😉

Bons estudos!


&nbsp;

---

---

## [Aula 125] - ODM E CRIAÇÃO DA API REST
&nbsp;


Vamos agora criar dentro de **/src** , uma nova pasta chamada **/api**, dentro desta pasta vamos criar outro diretorio chamado **/todo**, e dentro deste diretorio vamos criar uma arquivo chamada **todo.js**, que será onde iremos **mapear o nosso objeto**, para o documento do **mongo**.

    1 - Dentro deste arquivo vamos usar a API do MONGOOSE tambem, juntamente com a API do NODE RESTFUL que irá trazer algumas funcionalidades para a gente.
    -> Vamos fazer o require do node restful.
    -> Vamos declarar o mongoose, usando o restful. O restful, cria como se fosse uma "casca" em cima do mongoose, dando para gente uma API REST praticamente pronta.
~~~javascript
[/src/api/todo/todo.js]

const restful = require('node-restful')
const mongoose = restful.mongoose
~~~

Esse mapeamento temos que fazer independente de estar trabalhando com o **node-restful* ou diretamente com o *mongoose*, o que vamos fazer é praticamente a mesma coisa.

    2 - Vamos criar um **SCHEMA** do mongoose.
~~~javascript
[/src/api/todo/todo.js]

const restful = require('node-restful')
const mongoose = restful.mongoose
const todoSchema = new mongoose.Schema({

})
~~~

    3 - Vamos colocar uma descrição, que será a descrição da tarefa do todo, onded será do tipo STRING, e obrigtorio.
~~~javascript
[/src/api/todo/todo.js]

const restful = require('node-restful')
const mongoose = restful.mongoose
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
})
~~~

    4 - Vamos criar um BOOLEANO [DONE] que irá definir se a tarefa foi terminada ou nao, concluida ou nao. Leu tao livro, se concluio o done passa a ser TRUE, se a tarefa esta pendente o done fica FALSE (padrão).
~~~javascript
[/src/api/todo/todo.js]

const restful = require('node-restful')
const mongoose = restful.mongoose
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    },
})
~~~

    5 - Por ultimo vaos querer registrar a data que foi criado o lembrete do TODO, para que na consulta possamos ordernar das mais novas para as mais antigas. 
    -> Por padrão colocamos para cadastrar a data atual. Até pq será a data que foi criada o registro no banco.
~~~javascript
[/src/api/todo/todo.js]
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
~~~
 
    6 - Agora que nosso SCHEMA foi criado, vamos exporta-lo, informando o nome do modelo ['Todo'], e exportando tambem o SCHEMA que criamos [todoSchema].
~~~javascript
[/src/api/todo/todo.js - ESTRUTURA INICIAL]
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = restful.model('Todo', todoSchema)
~~~

Agora iremos criar um outro arquivo dentro da pasta */todo* chamado **todoService.js**. O padrão do node é, se quisermos importar alguma coisa usamos o **require()**, se estamos importando alguma coisa que esta dentro de */node_module*, que baixamos como dependecia, simplesmente dizemos o nome da biblioteca **('node-restful')**. 

Se quisermos importar alguma coisa que pertence a nossa aplicação, usamos o padrão relativo **require('.config/server') - /src/loader.js**, por exemplo. Quando queremos **expor** algo para fora do arquivo, ja que dentro do node um arquivo representa um **modulo**, por padrão tudo o que voce escreve em um arquivo fica dentro daquele modulo/arquivo, que so irá ficar visivel se usarmos o **module.exports**. Tudo que colocamos no *module.exports* será exposto para fora do arquivo e pode ser usado por outra pessoa.

    7 - Logo, em [/api/todo/todoService.js], quando fizermos um REQUIRE  do arquivo [/todo.js], iremos receber na variavel/constante que fizermos o require, será o resultado da chamada do MODULE EXPORTS [restful.model('Todo'. todoSchema)]. ou seja, o resultado desse metodo que foi armazenado no module.exports e quando fazemos o REQUIRE, conseguimos acesso a esse [todo] definido no outro arquivo.
~~~javascript
[/src/api/todo/todoService.js - ESTRUTURA INICIAL]

const Todo = require('./todo')
~~~

    8 - Vamos usar o middleware de metodos para criar uma API REST padrão, que no caso, se usarmos um GET em cima da URL BASE irá pegar todos os elementos, se fizermos o GET e passar uma ID, irá pegar aquele elemento por ID, se fizermos um POST, é uma inserção, se fizermos um PUT é uma alteração, e o DELETE, estamos removendo um registro do banco.
    -> Com essa unica linha de codigo estamos colocando o que queremos que seja habilitado em nossa API REST, que est sendo criada pelo NODE RESTFUL.
~~~javascript
[/src/api/todo/todoService.js - ESTRUTURA INICIAL]

const Todo = require('./todo')

Todo.method([
    'get','post','put',delete'
])
~~~

    9 - Temos mais um detalhe em relação as validações onde, por padrão o UPDATE, não valida algumas coisas, então temos que fazer duas mudanças em [updateOptions].
    -> Por padrão o NODE-RESTFUL te dedvolve, não o cliente atualizado e sim o antigo, o que não faz sentido.
    -> A primeira é quando atualizarmos um determiando registro no mongo, queremos que retorne ja o registro atualizado -> [new:]
    -> A outra é que por padrão, o NODE-RESTFUL não valida as ATUALIZAÇÕES, por exemplo, quando criamos um registro, ele irá aplicar certas validações, que criamos no arquivo [todo.js - descriptop (required) | done(required)]. Mas por padrão, quando temos um UPDATE, ele não valida, e para isso usamos o [runValidators:]
    -> Se não colocarmos essas duas linhas, teriamos o retorno de um registro antigo e caso fizessemos um UPDATE não seria validado.
~~~javascript
[/src/api/todo/todoService.js - ESTRUTURA INICIAL]

const Todo = require('./todo')

Todo.method([
    'get','post','put','delete'
])
Todo.updateOption({
    new: true,
    runValidators:true,
})
~~~

    10 - Para concluir exportamos nodo TODO, ja com toda parte da API REST, funcitonando.
~~~javascript
[/src/api/todo/todoService.js - ESTRUTURA INICIAL]

const Todo = require('./todo')

Todo.method([
    'get','post','put','delete'
])
Todo.updateOption({
    new: true,
    runValidators:true,
})

module.exports = Todo
~~~

O **NODE RESTFUL** não so *Encapsula* a parte relativa ao **Express - Criação de web-services**, como tambem *Encapsula* as chamadas para a **API do MONGO**. Com isso ele ja vai inserir de forma correta, atualizar, consultar, fazer a *API COMPLETA*, tanto do ponto de vista do **Express**, que é a parte *WEB*, de expor seu serviço na web. Como tambem relativo ao *Acesso Aos Dados*, como **inserir | alterar | exluir | consultar*.

Na proxima aula iremos justamente **MAPEAR** as nossas **rotas**, que nesse momento não estão prontas para serem utilizadas.

&nbsp;

---

---

## [Aula 126] - MAPEAMENTO DAS ROTAS
&nbsp;

Agora iremos configurar as rotas para o **serviço** que  acabamos de criar com o **NODE RESTFUL**. Em **/src/config/** vamos criar um arquivo chamado **routes.js**.

    1 - Dentro deste arquivo vamos pegar uma referencia do EXPRESS, onde iremos usar os MIDDLEWARES para fazer o MAPEAMENTO DAS ROTAS.
    -> Sempre que fazemos um REQUIRE em cima de uma biblioteca, ele sempre retornar a mesma instancia (SINGLETON), apesar de que o express ser SINGLETON, não se torna mais verdade essa igualdade de require, quando criamos um instancia do express [const server = express()], todas as vezes que criamos uma ou mais instancias, elas sempre serão diferentes entre si.
> OBS a criação da *instancia* que chamamos de **server**, alguns desenvolvedores chama de **app**.
~~~javascript
[FAZENDO REQUIRE DO EXPRESS()]
const express = require('express')  // importando uma biblioteca

[FAZENDO UMA INSTANCIA DO EXPRESS]
const server1 = express()    // criando uma instancia
const server2 = express()   // criando uma instancia ->>> server 1 <> server 2
~~~

    2 - Logo, quando chamamos o server para o comando [express()], para cada vez que chamarmos, ele será diferente um do outro. O que faz com que tenhamos que passar esse [const server = express()], SERVER, para nosso arquivo de ROTAS[/config/routes.js], para que possamos a partir daquele SERVIDOR (server), mapear as rotas dentro dele.
    -> Poderiamos fazer o mapeamento das rotas dentro do arquivo [/config/server.js], mas por uma questão de organização, vamos separar essas funcionalidades.
    -> A forma como temos no NODE para receber um parametro, é usando a tecnica de exportar uma FUNÇÃO, que recebe um parametro.
    -> Então exportarmos [module.exports] uma função [function()], que recebe um parametro (server), logo quando colocarmos o arquivo [routes.js] dentro de [loader.js], vamos ter que passar uma instancia de [server] para que ele possa trabalhar.
~~~javascript
[/src/config/routes.js]
const express = require('express')
module.exports = function(server){

}
~~~

    3 - A configuração das nossas rotas será a seguinte:
    -> Primeiro vamos criar um ROUTER (constante) do express.
~~~javascript
[/src/config/routes.js]
const express = require('express')
module.exports = function(server){
    //API ROUTES
    const router = express.Router()
}
~~~
    4 - Depois iremos usar um MIDDLEWARE [use()], que será especifico para as URL's que começam a partir de ['/api'].
    -> Sempre que começar com ['/api'], automaticamente nosso [router], que é onde vamos configurar nossas rotas, será chamado. Podemos assim tirar a conclusão que todas as nossas API's que serão disponibilizadas para serem consumidas pelo FRONT-END, irão iniciar com o ['/api'].
~~~javascript
[/src/config/routes.js]
const express = require('express')
module.exports = function(server){
    //API ROUTES
    const router = express.Router()
    server.use('/api'. router)
}
~~~

    5 - Vamos agora fazer o mapeamento das rotas de [todo].
    -> Vamos exportar o todoService que criamos usando o require com o caminho relativo.
~~~javascript
[/src/config/routes.js]
const express = require('express')
module.exports = function(server){
    //API ROUTES
    const router = express.Router()
    server.use('/api'. router)
}   const todoService = require('../api/todo/todoService')
~~~

    6 - Vamos tambem configurar, usando o [todoService], o metodo [register()], irá usar todos os metodos que declaramos no [/todo/todoService.js - ARRAY DE method()]. Vamos usar os metodos, get, post, put, delete.
    -> Quando chamamos o [register() - metodo do node restful], para registrar e estamos dizendo que ele irá utilizar a URL ['/todos'] como base. Significa que ele irá criar dentro do nosso [router], que so será chamado quando começarmos com ['/api'], que vamos criar o nosso web-service com essa URL BASE ['/todos']. Ai, dependo do metodo/verbo_http  que charmos [get,post,put,delete] ele irá executar.
    -> Bastou somente uma linha para fazermos o registro de todas as URL's relativas ao nosso webservice para a entidade todo.
~~~javascript
[/src/config/routes.js]
const express = require('express')
module.exports = function(server){
    //API ROUTES
    const router = express.Router()
    server.use('/api'. router)
    // TODO routes
}   const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')

~~~

    7 - Agora teremos que fazer algumas alterações em [/src/loader.js].
    -> Vamos fazer com que quando o required do [server], for executado ele retorne um [const server] SERVER.
    -> E iremos passar esse [const server] para a configuração do ROUTER. Passando o server como parametro.
> OBS: O server que estamos passando para o ROUTER, é o obtido a partir do primeiro require()
~~~javascript
[/src/loader.js]
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)
~~~

    8 - Mas se entrarmos na classe de server que criamos [/config/server.js], iremos observar que ele não esta exportando nada.
~~~javascript
[/src/config/server.js - ESTRUTURA INICIAL]

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
// usando função, tbm podemos usar a arrow function (port, () => console.log(``))
server.listen(port, function() {
    console.log(`BACKEND is running on | PORT:${port} |`)
})

~~~

    9 - Precisamos exportar o server, pois a partir do momento que o exportamos, e quando executamos no LOADER o require dele, ele irá retornar o SERVER[/server.js] que será armazenado na variavel SERVER[/loarder.js]
~~~javascript
[/src/config/server.js - ESTRUTURA INICIAL]

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
// usando função, tbm podemos usar a arrow function (port, () => console.log(``))
server.listen(port, function() {
    console.log(`BACKEND is running on | PORT:${port} |`)
})
module.exports = server
~~~

Agora quando fizermos o REQUIRED do **ROUTER**, note que o resultado da chamada [require() = methodo] é um metodo, e depois colocamos um parenteses pois estamos passando o server como parametro e invocando o methodo.

Em resumo a linha **require('./config/routes.js)(server)**, irá chamar a função que criamos em [/config/routes.js], que foi exportada pelo MODULE.EXPORTS




&nbsp;

---

---

## [Aula 127] - TESTANDO A API COM POSTMAN
&nbsp;


Vamos agora fazer um *teste* em nossa **API REST** que acabamos de implementar, vamos usar o *postman* para isso, existe tanto a versão para o desktop, quanto um puglin do google chrome para isso, onde ele roda como uma aplicação separada. É uma ferramenta super legal para fazermos **teste de api**.

É importante que tanto seu **BACKEND(express - node)** quando seu **BANcO DE DADOS** estejam rodando, para fazermos algumas consultas usando o POSTMAN com nosso API.

A primeira coisa que iremos fazer é usar a url **http://localhost/api/todos/**, em um metodo **GET**. Na aula, irá aparecer dois registros que ficaram salvamos quando estavamos construindo a aplicação. Para deleta-los vamos pegar a o ID, colocar na url com (:), e vamos colocar nos parametros a id do mesmo, depois enviar o DELETE. Fazer o mesmo para o outro registro.

Outro teste, será o de inclusão, POST. No [body - postaman], vamos selecionar o **x-www-form-urlencoded**. [urlencoded] foi utilizado na nossa aplicação com o **bodyParser**, o ele irá interpretar a *URLENCODED*, então, quando fizermos a submissão de uma formulario para inserir uma nova tarefa, um novo todo, ele irá no padrão *urlencoded* e quem irá interpretar é o **bodyParser**.

Vamos clicar no *bulk edit* para podermos digitar os comando manualmente.
~~~
description: Pagar conta do cartão.
~~~

Usamos o **description** pq nosso **/src/api/todo/todo.js**, possui um atributo chamado **description**. O atributo **done** é obrigatorio mas ja vem com um valor *default*, ja a data não é obrigatoria e de qualquer forma ele irá colocar a data atual como sendo a *default*.
- Feita essa configuração para inserção, podemos mandar um SEND(POST), e será retornando um objeto.
- Vamos criar tambem outro POST chamado [ Concluir curso do React]
~~~javascript
{
    "__v": 0,
    "_id": "623606504202911e509b536f",
    "createdAt": "2022-03-19T16:35:28.867Z",
    "done": false
}
~~~


Apos a criação desses 3 registros, podemos fazer testes com o PUT, que são alterações do mesmo.
~~~javascript
[
    {
        "_id": "623609cbde85992dfc0c0d8b",
        "description": " Pagar conta do cartão",
        "__v": 0,
        "createdAt": "2022-03-19T16:50:19.267Z",
        "done": false
    },
    {
        "_id": "623609e6de85992dfc0c0d8c",
        "description": " Concluir curso de React.",
        "__v": 0,
        "createdAt": "2022-03-19T16:50:46.173Z",
        "done": false
    },
    {
        "_id": "623609f4de85992dfc0c0d8d",
        "description": " Deixar review do curso.",
        "__v": 0,
        "createdAt": "2022-03-19T16:51:00.009Z",
        "done": false
    }
]
~~~

Vamos pegar o ID do ultimo registro que criamos e vamos passar para ele o atributo **done:true**, para mostrar que a tarefa esta concluida. O padrão do **urlended** é **atributo: valor**, se for string, não é delimitado por aspas (''). Se for ARRAY seria **nome_array[indice].nome_atributo**.

Como o **PUT** recebe como parametro o *ID* na URL, temos que colocar **localhost:3003/api/todos/:id**. Pois ele precisa identificar quem ele irá atualizar, observe que o registro que estamos manipulando ainda esta com o done falso, vamos fazer o put agora para alterar isso.

> Para outro teste, vamos em [todoService.js] e comentar a linha de codigo que faz com que ele traga o registro atualizado e nao o antigo como resposta.

Vamos descomentar a linha e adicionar mais o description, quando enviarmos veremos a resposta atualizada em vez da antiga.

~~~javascript
Todo.updateOptions({
    new: true,
    runValidators: true,
})
~~~

A validação ocorre quando, se colocarmos o **description:**, vazio, ele irá trazer um erro, se comentar o codigo **todo.updateOptions()**. Logo essa linha de codigo é importante para que ele aplique a validação em varios cenários.

Outra coisa interessante é que o *node restful* possui uma serie de **filtros** que pode te ajudar, para por exemplo, fazer a ordenação descrescente a partir da data de criação. Então para isso colocamos **localhost:3003/api/todos?sort=-createdAt**, usando o **GET** obviamente.

~~~javascript
[
    {
        "_id": "62360d65d84e163748dc92e1",
        "description": " teste do done3",
        "__v": 0,
        "createdAt": "2022-03-19T17:05:41.145Z",
        "done": false
    },
    {
        "_id": "623609e6de85992dfc0c0d8c",
        "description": " Concluir curso de React.",
        "__v": 0,
        "createdAt": "2022-03-19T16:50:46.173Z",
        "done": false
    },
    {
        "_id": "623609cbde85992dfc0c0d8b",
        "description": " Pagar conta do cartão",
        "__v": 0,
        "createdAt": "2022-03-19T16:50:19.267Z",
        "done": false
    }
]
~~~

Outra aplicação que podemos fazer seria a utlização de **EXPRESSÕES REGULARES**, **localhost:3003/api/todos?sort=-createdAt&description_regex=/curso/**. Mandando o *SEND* ele irá filtrar e mandar apenas o registro que possui a palavra curso. **nao funcionaou**


Na documentação do **node restful** podemos ver os filtros que estão embutidos na propria ferramenta.

Estamos com nossa **API** quase pronta, so falta habilitarmos o **CORS**, ja que vamos trabalhar com duas aplicações, que é uma garantia de segurança onde, se não habilitarmos o **cors** a sua aplicação so irá conseguir atender requisições da propria *aplicação*.

Como vamos rodar o **backend** em uma porta e o *8front-end** em outra, é considerado **duas aplicações diferentes** e precisamos habilitar o **cors** para que possa haver requisições de origem diferentes. Fazendo isso nossa aplicação fica 100% ok para começarmos a mexer com react e consumir a API.


&nbsp;

---

---

## [Aula 128] - HABILITANDO O CORS

&nbsp;

Agora iremos na pasta **/src/config** para criarmos um arquivo chamado **cors.js**. Onde nessa classe iremos **criar uma middleware**, atéa ggora, somente usamos *middlewares pre-existentes* mas não criamos nenhum.

    1 - Vamos exportar uma função que recebe 3 parametros basicos para um middlerare [requisição (req), resposta(res), next].
    -> O NEXT, é justamente conhecido com CHAIN, que fará com que se execute os outros middlewares da cadeia, para depois voltar a execução do middleware onde o next foi chamado.
    -> vamos ter um middleware usado no PADRÃO EXPRESS.
~~~javascript
[/src/config/cors.js - ESTRUTURA INICIAL]
module.exports = function(req,res,next){

}
~~~

    2 - Vamos colocar uma serie de CABEÇALHOS na nossa requisição, para que ele permita que venha de ORIGENS DIFERENTES.(beck-end e front-end em duas portas diferentes).
    -> [Acess-Control-Allow-Origin], o controle para o acesso permite origens, [*] qualquer uma.
~~~javascript
[/src/config/cors.js - ESTRUTURA INICIAL]
module.exports = function(req,res,next){
    res.header('Acess-Control-Allow-Origin','*')
}
~~~

    2.1 - Os metodos/verbos_http que iremos permitir o acesso serão os [GET,POST,OPTIONS,PUT,PATCH,DELETE].
~~~javascript
[/src/config/cors.js - ESTRUTURA INICIAL]
module.exports = function(req,res,next){
    res.header('Acess-Control-Allow-Origin','*')
    res.header('Acess-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
}
~~~

    2.2 - E tem mais alguns cabeçalhos que precisamos permitir para que a nossa requisição seja feita de forma bem sucedida a partir de uma outra aplicação.
> Os cabeçalhos podem ser procurados na INTERNET, pois ficaria dificil decorar sempre os cabeçalhos do **CORS**. Não se decora isso na pratica, basta procurarmos, ver como faz e executar.
~~~javascript
[/src/config/cors.js - ESTRUTURA INICIAL]
module.exports = function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
}
~~~
> OBS: Estamos fazendo um *middleware**, e ate agora, estamos trabalhando com a **resposta[res()]**.
> Estamos Acicionando *CABEÇALHOS*[**headers**] na resposta(**res**) que será enviada para o *browser* para dizer que é permitido acessar o serviço que o "cara" esta acessando.
> Quando temos um *middleware* como esse, no caso, uma função, ou nessa função atendemos a requisição, ouse seja, damos uma resposta para quem fez a requisição[requisição-> resposta], por exemplo, entregar uma pagina, responder com uma lista de objetos JSON por exemplo.
> Ou damos essa resposta *req->res*, ou chamamos o **next()**.
> Se colocarmos esse *middleware** do jeito que esta na nossa aplicação, ela não irá funcionar, travando a aplicação. 
> Então é importante que para concluir o **middleware** a gente chame o **next()** para que ele continue o fluxo da aplicação indo para o proximo **midleware** até que alguem irá atender a requisição e mandar uma resposta.

~~~javascript
[/src/config/cors.js - ESTRUTURA INICIAL]
module.exports = function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}
~~~

    3 - Apos a criação do CORS, vamos em [/config/server.js], para habilitarmos dentro dele esse MIDDLEWARE.
    -> Vamos criar uma referencia [const] para o arquivo do [cors.js], ou seja, importa-lo, usando o caminho relativo.
~~~javascript
[/config/server.js]
const allowCors = require('./cors')
~~~
    4 - Junto dos outros middlewares de SERVER vamos colocar o AllowCors usando o middleware [use()].
    -> Assim ele irá permitir que a requisição para um determinado web-service da minha aplicação possa vir de uma origem diferente.
> Se quisermos ser um pouco mais restritivo, poderiamos colocar alguns endereços em:
> ~~~javascript
>module.exports = function(req,res,next){
>   res.header('Access-Control-Allow-Origin','endereços')
> }
> Digamos que temos determiandos clientes que podem consumir minha API mas que não são da minha propria aplicação. Podemos listar em **endereços** os clientes. Para simplificar colocamos que nossa **API** esta aberta para ser consumida por qualquer **origem**.
~~~javascript
[/config/server.js - ESTRUTURA FINAL]
const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const AllowCors = require('./cors')
// criando uma instancia do express e atribuindo a variavel server
const server = express()

// criando middlewares para as requisições.
server.use(bodyParser.urlencoded({
    extended: true,
}))
server.use(bodyParser.json())
// usando função, tbm podemos usar a arrow function (port, () => console.log(``))
server.use(AllowCors)
server.listen(port, function() {
    console.log(`BACKEND is running on | PORT:${port} |`)
})

module.exports = server

~~~

Para testar nossa configuração do CORS, basta rodar no **postman** alguns testes e ver se a aplicação esta quebrando.


Agora temos o nosso backend funcionando, nas proximas aulas iremos começar a construir o front-end da nossa aplicação que irá consumir o os serviços que acabamos de construir no nosso backend de todos.




&nbsp;

---

---

## [Aula 129] - INICIANDO O BACKEND EM PM2 
&nbsp;

Acabamos de terminar o **backend**, e agora iremos para a nossa aplicação com o **nodemon** e vamos *starta-la* utilizando o **PM2**.

~~~
npm run production
~~~

Onde ele irá executar o *pm2* e *startar* nossa aplicação. Podemos tambem rodar o comando:
~~~
pm2 monit
~~~

Para startar o **pm2*8 de maneira global, basta usa o comando:

~~~
npm i pm2 -g
~~~

Ou podemos acessar o **pm2** a partir de **./node_modules/.bin/pm2** que é justamente a instancia que instalamos na nossa aplicação. Quando usamos o *package.json* ele ja acessa o que esta dentro desta pasta, mas se formos no console/terminal, temos que declarar o caminho direto para o arquivo
~~~
./node_modules/.bin/pm2 monit
~~~
~~~
./node_modules/.bin/pm2 status
~~~

Para monitorar a parte de memoria basta usar o **monit**. Se entrarmos no site do PM2 podemos ver varias coisas interessantes para o monitoramento da nossa aplicação no ambiente produtivo.



# ==== [Seção 8 - TODO APP (FRONTEND) ] ====


&nbsp;

---

---

## [Aula 130] - CONFIGURAÇÃO E INSTALAÇÃO
&nbsp;

Com o *backend* startado e o **mongodb** instalado tamben, vamos criar uma outra aba no terminal para podermos iniciar a configuração e instalação dos nossos arquivos de **front-end**.

Vamos criar uma pasta **/todo-app/front-end**. logo na pasta **/todo-app**, vamos ter duas pastas, uma para o *backend* e outra para o *frontend*.

Como são muitas dependencias, vamos instala-las por grupos.

    1 - Primeiro iremos criar o [package.json], respondendo todas as perguntas automaticamente [-y]
~~~
npm init -y
~~~

> Para não criarmos todos as dependencias em um comando so e assim gerar erro, vamos cria-las por partes.
> 
> Todas serão dependencias de DESENVOLVIMENTO então vamos clocar a flag **--save-dev**.

    2 - Primeiro iremos adicionar as dependecias do WEBPACK V1.14.0 e do WEBPACK-DEV-SERVER V1.16.2
~~~
npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2
~~~

Agora iremos instalar o **BABEL**, sabemos que o *browser* não consegue interpretar a sintaxe que o *react* adiciona, que seria o **JSX**, o browser não consegue interpretar de forma nativa, logo, temos que fazer uma **conversão** do *codigo escrito em react* para aquilo que de fato será executado no browser. Quem faz esse papel é justamente o BABEL. 
- Vamos instalar o *babel-core* V6.22.1
- *babel-loader* V 6.2.10 -> Conexão entre o babel e o webpack.
- Vamos instalar alguns **pre-sets** tambe:
  - *babel-plugin-react-html-attrs* V2.0.0 -> plugin em relação aos atributos
  - *babel-plugin-transform-object-rest-spread* V6.22.0 -> 
  - *babel-preset-es2015* V6.22.0 -> Ecman sprit novo
  - *babel-preset-react* V6.22.0

~~~
npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0
~~~

Apos a instalação do *babel*, vamos colocar as dependencias relativas ao **processamento de css** e a parte de *carregamento de imagens e fonts*
- *extract-text-webpack-plugin V 1.0.1* -> Justamente um plugin que irá extrair os textos dos arquivos **.css**, para depois passar por um processo que será outra dependencia que iremos instalar [css loader e o style loader].
- *css-loarder V 0.26.1*
- *style-loader V0.13.1*
- *file-loader V0.9.0* -> vamos utilizar tanto para carregar as imagens quanto as fontes dentro da configuração do nosso **webpack**

~~~
npm i --save-dev extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0
~~~

Vamos agora instalar as dependencias da parte do **template** que iremos usar, **bootstrap V3.3.7 && font-awesome V4.7.0**. 
> Na aplicação final do curso iremos utilizar uma outro template chamado **admin LTE**, gratuito e bem mais avançado que o BOOTSTRAP nativo. Embora ele rode em cima do bootstrap.

~~~
npm i --save-dev bootstrap@3.3.7 font-awesome@4.7.0
~~~

Por fim iremos instalar as dependencias relativas ao **react**
- *react V15.4.2*
- *react-dom V15.4.2*
- *react-router V3.0.2*
- *axios V0.15.3* -> cliente HTTP (promise bases), baseado em promessas, ele que iremos usar para fazer as chamadas **http** para o nossos serviços do **backend**, vamos consumir a nossa **API WEB SERCVICES** do backend a partir do **AXIOS**.

~~~
npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 axios@0.15.3
~~~

Apos termos todas as nossas dependencias intaladas, iremos abrir a pasta o frontend que criamos na nossa **IDE** para criarmos nossa arquivo **.gitignore**, para que ele não mande todas essas dependencias baixadas para o nosso repositorio.
- Dentro do **.gitignore** vamos colocar a pasta **/node_modules** e tambem iremos colocar o **[*.log]**.

~~~.gitignore
node_modules
*.log
~~~

Na proxima aula iremos configurar o arquivo de **configuração do webpack**, para que possamos ter o **build** funcionando, para que de fato possamos escrever a nossa aplicação.

