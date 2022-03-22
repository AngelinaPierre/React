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

&nbsp;

---

---

## [Aula 131] - CONFIGURAÇÃO O BUILD COM WEBPACK

&nbsp;

Vamos criar uma arquivo chamado **/frontend/webpack.config.js**, onde no futuro iremos ver mais a configuração desse arquivo em exercicios futuros.

    1 - Primeiro vamos declarar uma dependencia do WEBPACK, uma constante, ou seja, vamos fazer o require do webpack
    -> E depois iremos tambem criar uma referencia, declarar uma dependedncia para o EXTRACT-TEXT-PLUGIN
    -> por mais que tenhamos importado essas dependencias, a boa parte desse arquivo de WEBPACK se da pelo que iremos exportar no MODULE EXPORTS.
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {


}
~~~

    2 - Vamos no MODULE EXPORTS exportar o objeto que terá toda a configuração que iremos precisar para o nosso projeto.
    -> O ponto de entrada [entry:] será na pasta [/src], no arquivo [index.jsx]. Vamos colocar extensões .jsx para a IDE reconhecer que possui codigo do REACT dentro desses arqivos.
    -> A saida [output:], será no [__dirname], que é uma variavel de ambiente do node, com a pasta /PUBLIC, que ainda iremos criar.
    -> O nome do arquivo será [app.js]
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path:__dirname + '/public'
        filename: './app.js'
    },

}
~~~

    3 - Vamos tambem colocar a configuração do WEB SERVER, rodando na PORTA 80, e a pasta será a [/public], que é justamente tambem a pasta onde iremos jogar o arquivo [/app.js] e vamos configurar daqui a pouco o [index.html]
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path:__dirname + '/public'
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    }
}
~~~

    4 - Vamos querer que ele "resolva" para a gente alguns tipos de extensão, por padrão o WEBPACK na hora que ele vai fazer o import dos modulos, ele não reconhece a extensão [.JSX], e ai temos que declarar para ele as extensões que ele irá precisar reconhecer.
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path:__dirname + '/public'
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['','.js','.jsx'],
    }
}
~~~

    5 - Alem disso, vamos criar uma apelido para a pasta NODE_MODULES, para nao termos que ficar acessando direto e tals.
    -> Falamos que modules irá apontar para a pasta ___dirname + '/node_modules.
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path:__dirname + '/public'
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['','.js','.jsx'],
        alias:{
            modules: __dirname + '/node_modules'
        }
    }
}
~~~
Então dentro da aplicação, se quisermos referenciar qualquer biblioteca, como por exemplo, **bootstrap**, basta colocar **modules/boostrap/../..**

    6 - Agora iremos colocar a configuração relativa ao EXTRACT-TEXT-PLUGIN, que é justamente o nosso CSS.
    -> E iremos criar uma instancia dele dizendo qual o nome do arquivo que ele irá gerar a partir do PARSE que ele fará em cima dos nossos CSS's.
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path:__dirname + '/public'
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['','.js','.jsx'],
        alias:{
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
}
~~~

    7 - Agora iremos para a parte de configuração de MODULOS, que seriam justamente a configuração dos nossos LOADER's.
    -> O primeiro que iremos configurar será justamente o de javascript.
    -> Vamos colocar uma sintaxe onde ele irá tanto fazer PARSE em cima de [.js], como em [.jsx]. Os dois serão interpretados por esse LOADER.
    -> Vamos usar o [babel-loader] e colocar que ele irá ignorar , ou seja, nao vai fazer PARSER de nenhum arquivo do node_modules. E para concluir, o loader, vamos colocar quais os pre-sets que ele irá aplicar em cima desses arquivos que serão lidos ['es2015','react'].
    -> Vamos tambem usar o plugin TRANSFORM-OBJECT-REST-SPREAD, 
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path:__dirname + '/public'
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['','.js','.jsx'],
        alias:{
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    modules: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugin: ['transform-object-rest-spread']
            }
        }]
    }
}
~~~

    8 - Alem desse loader iremos criar outro que serve para o CSS.
    -> O loader será o EXTRACT-TEXT-PLUGIN, onde ele irá passar por dois outros plugins chamados ['style-loader' & 'css-loader'].
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path:__dirname + '/public'
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['','.js','.jsx'],
        alias:{
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    modules: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugin: ['transform-object-rest-spread']
            }
        },{
            test:/\.css$/,
            loader: ExtractTextPlugin.extrac('style-loader','css-loader')
        }]
    }
}
~~~

    9 - O terceiro loader será para a questão das fontes. Quando importarmos o bootstrap e o font-awesome, junta dessa importação tem referencias para algumas fontes, e para o WEBPACK conseguir interpretar e conseguir processar esses arquivos, precisamos fazer um LOADER, em cima de alguns tipos de extensões diferentes [.woff|.woff2|.ttf|.eot|.svg], fazendo esse loader em cima de 'file'.
~~~javascript
[/frontend/webpack.config.js]

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path:__dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['','.js','.jsx'],
        alias:{
            modules: __dirname + '/node_modules',
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    modules: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugin: ['transform-object-rest-spread'],
            }
        },{
            test:/\.css$/,
            loader: ExtractTextPlugin.extrac('style-loader','css-loader'),
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file',
        }]
    }
}
~~~

Com isso nos terminamos a configuração do arquivo **webpack.config.js**, vamos fazer uma alteração em **package.json**, que será para termos os scripts de inicialização.
- Script de **dev** -> chamando o webpack-dev-server mostrando o progesso colorido e usando o [inline hot] para que ele fique atualizando o browser sempre que houver uma mudança.
- O **production** -> sempre irá chamar o webpack, mostrando o progresso e gerando o *bandon?* unificado e pronto para ser colocado no ambiente produtivo.

~~~json
[/src/package.json - ESTRUTURA INICIAL]
"scripts":{
    "test": "echo \"Error: no test specified\" && exit 1"
}
[/src/package.json - ESTRUTURA ALTERADA]

"scripts":{
    "dev": "webpack-dev-server --progress --colors --inline --hot",
    "production": "webpack --progress -p"
}
~~~

Concluimos nosso arquivo de configuração, na proxima aula iremos configurar nossa unica pagina, ja que temos uma *SPA - single page application*, criando assim o nosso **index.html** na proxima aula.

&nbsp;

---

---

## [Aula 132] - CRIANDO O INDEX.HTML

&nbsp;

Vamos agora criar uma pasta chamada **/frontend/public** e dentro desta pasta iremos criar o arquivo **/public/index.html**. 

    1 - É bem simples a criação, uma estrutura muito basica.
    -> DOCTYPE
    -> HTML
    -> HEAD ->| META |-> E VIEWPORT (DISPOSITIVOS MOVEIS) 
            ->| TITLE | -> TODO APP
    -> LINK PARA A FOLHA DE ESTILO QUE SERÁ GERADO A PARTIR DO WEBPACK.

~~~HTML
[/frontend/public/index.html - ESTRUTURA INCIAL]

<DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Todo App</title>
        <link rel="stylesheet" href="app.css">
    </head>
</html>
~~~

    2 - Apos a criação da <head> vamos criar um <body> que terá uma TAG, <div> que será juntamente o lugar onde toda a nossa APLICAÇÃO será injetada.
    -> Vamos colocar uma CLASS  chamda [CONTAINER], que seria justamente a classe container do BOOTSTRAP, para que a aplicação fique dentro de umas MARGENS que o bootstrap estabelece.
~~~HTML
[/frontend/public/index.html - ESTRUTURA INCIAL]

<DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Todo App</title>
        <link rel="stylesheet" href="app.css">
    </head>
    <body>
        <div id="app" class="container"></div>
    </body>
</html>
~~~
    3 - Finalmente, vamos fazer a referencia do nosso <script> que seria o [app.js], tanto o [app.js e o app.css], foram todos definidos no [webpack.config.js].
~~~HTML
[/frontend/public/index.html - ESTRUTURA INCIAL]

<DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Todo App</title>
        <link rel="stylesheet" href="app.css">
    </head>
    <body>
        <div id="app" class="container"></div>
    </body>
    <script src="app.js"></script>
</html>
~~~

Nossa estrutura inicial html agora esta configurada, proxima aula iremos iniciar o processo de criação dos nossos primeiros **COMPONENTES**.

&nbsp;

---

---

## [Aula 133] - COMPONENTE APP

&nbsp;

Agora iremos criar nosso primeiro **Componente**, mas antes, iremos criar a pasta **/src**, onde todo o resto da nossa aplicação irá ficar dentro dela, tirando a pasta */public* e nossos arquivos de configuração **.gitignore|package.json|webpack.config.js|**.

Dentro da pasta **/src -> codigo fonte**, vamos criar outra pasta chamada **/main**. Dentro esta pasta, iremos criar o nosso arquivo **/main/app.jsx**.

 > Sempre que tivermos arquivos com codigo do *React* vamos utilizar **.jsx**, sempre que for arquivo do javascript, utilizaremos **.js**


Preste atenção que esse arquivo **app.jsx** não é o arquivo que será inicialmente carregado, no **/frontend/webpack.config.js** dizemos que o **PONTO DE ENTRADADA (entry:)**, será o **./src/index.jsx**, que iremos criar daqui a pouco.

    1 - Em [/src/app.jsx], vamos declarar as dependencias para o BOOTSTRAP E FONT-AWESOME.
    -> Fazemos o import usando o [modules = node_modules], que colocamos como ALIAS no nosso webpack. Um "apelido" que aponta para a pasta /node_modules.
    -> Ninguem sabe esse caminho decorado, precisa pesquisar antes para ser utilizado...
~~~jsx
[/src/app.jsx - ESTRUTURA INICIAL]
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
~~~

Se entrarmos na [**Documentação**](https://webpack.js.org/concepts/) do **webpack** podemos ver que ele possui um conceito bastante interessante. 
- Temos nossos modulos, com suas dependencias, um arquivo chamando o outro .
- Isso é passado para **webpack** atraves dos *loaders*, cada *loader* será responsavel por parte dessas informações que foram carregadas entre os modulos.
- No final, é gerado nossos **ARQUIVOS ESTÁTICOS**. 

![Module Bundler](https://webpack.github.io/assets/what-is-webpack.png)

Quando fazemos o import acima, estamos usando o *sistema de modulos* do **Ecman Script 2015**, que é o **import** e o **export**, similar ao **NodeJS** que possui o *module.exports* e o *require()*. Dois padrões diferentes. O **webpack** roda nos dois padrões, poderiamos fazer uma *require()* sem nenhum problema. Para deixar padronizado, vamos trabalhar sempre com **import & export**.

    2 - Vamos fazer agora o import do **React** e vamos colocar a estrutura inicial do nosso componente baseado em função.
~~~jsx
[/src/app.jsx - ESTRUTURA INICIAL]
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

export default props => (
    
)
~~~

    3 - Nosso componente irá simplesmente ter uma <div> com a propriedade CONTAINER do bootstrap, juntamente com um <h1> com um titulo de "teste".
> Obs1: O react usa muitas vezes para construir um *componente* uma **classe(class)**, *class* é uma palavra reservada no **javascript** para representar uma classe. Até ja comentamos, que de fatop não existe a classe, ela irá virar uma **função**, mas é uma palavra reservada. Por isso, os seus atributos que anteriormente eram chamados de classe no browser, agora será chamado de [className=""]. Se colocarmos [class] ele irá reclamar na hora de fazer o PARSER para o JSX.
> 
> Obs2: Temos uma função que será exportada por padrão, ou seja, quando fizermos um import, iremos simplesmente receber essa função por padrão, onde vamos receber propriedades, construimos essa função usando a **função arrow =>**, que tem apenas uma unica sentença (). Poderiamos criar como uma função normal tambe, mas tenha em mente que esses parenteses nao representam o **corpo** do **metodo** e sim uma **expressão** retornada a partir da função **arrow()**.
> ~~~javascript
>   export default props => 1 + 1 ----> função de unica linha de codigo
>   export default props => (1 + 1) -----> expressão
>   export default props => {1 + 1} -----> erroo , com chaves precisa do return()
>   export default props => {return 1 + 1} ->> funciona
>   export default props => {return (1 + 1)} ->> funciona
>   export default props => return 1 + 1 ->> erro, impicitamente o return() ja esta sendo colocado.
> ~~~
> No caso do JSX como vamos ter um codigo HTML de multiplas linhas, para que ele funcione corretamente temos que colocar ele envolvido em parenteses(), mostrando que é uma expressão que esta sendo retornada a partir da chamada do metodo.
~~~jsx
[/src/app.jsx - ESTRUTURA INICIAL]
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

export default props => (
    <div className='container'>
        <h1>Teste</h1>
    </div>
)
~~~

Apos a criação da nossa função iremos criar um novo arquivo chamado [/src/index.jsx], que será o **PONTO DE ENTRADA** que definimos no nosso */frontend/webpack.config.js*.

Nele vamos fazer o import de algumas dependencias:
- **REACT**
- **REACTDOM** -> Esse arquivo é o unico que irá interagir diretamente com o **DOM** da pagina.
- **APP.jss** -> vamos importar nosso compoennte app, usando o **caminho relativo**.

~~~jsx
[/src/index.jsx - ESTRUTURA INICIAL]
import React from "react";
import ReactDOM from 'react-dom'
import App from './main/app'

~~~


    4 - Para finalizar vamos chamar a função [reactDOM.render()], onde vamos passar nosso componente que possui nossa aplicação [<App />], e vamos dizer que ela será RENDERIZADA, no ELEMENTO cujo ID é APP.
~~~jsx
[/src/index.jsx - ESTRUTURA INICIAL]
import React from "react";
import ReactDOM from 'react-dom'
import App from './main/app'

ReactDOM.render(<App/>, document.getElementById('app'))
~~~

Ou seja, se vermos o codigo da nossa pagina do **/frontend/public/index.html**, vemos que ele será renderizado na **div** cujo **ID** é **app**.

~~~html
<DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Todo App</title>
        <link rel="stylesheet" href="app.css">
    </head>
    <body>
        <div id="app" class="container"></div>
    </body>
    <script src="app.js"></script>
</html>
~~~

Agora iremos rodar o **FRONTEND** usando o comando abaixo, ele automaticamente irá rodar um **servidor web** na **Porta 8080**, onde ficará atualizando nossos arquivos sempre que houver uma mudança. Apos o webpack empacotar nossos arquivos vamos no browser e colocar **localhost:8080** para vermos nossa aplicação front-end rodando.

~~~
npm run dev
~~~


Em [/src/index.jsx], ele usou o **ReacDOM**, o *reactDOm* será utilizado somente nesse arquivo, pois é o unico arquivo que interage diretamente com o **Dom**. Importamos tambem o arquivo **/main/app.jsx**, e quando instanciamos esse componente **<>**, chamado **app**, ele executa a função que criamos em **/main/app.jsx**, retornando o **jsx** que criamos no caso, h1.


&nbsp;

---

---

## [Aula 134] - COMPONENTES TODO E ABOUT

&nbsp;

Vamos criar uma nova pasta dentro de **/src/todo** e dentro desta pasta iremos criar um arquivo chamado **todo.jsx**. Ele será um componente baseado em **classe**.

    1 - Para isso vamos fazer o import do REACT e do {COMPONENT}, da biblioteca do react.
    -> Ele será o COMPONENTE mais complicado da nossa aplicação, ele irá centralizar boa parte das REGRAS, relativas ao CADASTRO DE TAREFAS DO NOSSO SISTEMA. 
> Vamos perceber uma diferença muito grande fazer uma aplicação apenas com **React**, no qual temos um *Gerenciamento de Estado* muito mais limitado, pois quem tem estado é o componente, e as vezes queremos comunicar um determinado estado de um componente para outro, e as vezes não temos uma relação direta de pai pra filho. Logo, essa classe que iremos criar irá acabar centralizando mais as coisas.
~~~javascript
[/src/todo/todo.jsx - ESTRUTURA INICIAL]

import React, {Component} from 'react'
~~~

    2 - Apos a criação do import do react, vamos criar a classe exportando-a por padrão, chamando ela de [Todo].
    -> Para a utlização da classe, precisamos colocar um metodo obrigatorio que seria o metodo [render()], e dentro do metodo reder() colocamos o nosso return().
~~~javascript
[/src/todo/todo.jsx - ESTRUTURA INICIAL]
import React, {Component} from 'react'

export default class Todo extends Component {
    render() {
        return (

        )
    }
}
~~~

    3 - Dentro do retorno do metodo render, vamos retornar uma expressão jsx, onde vamos criar uma <div> e dentro dela colocar um <h1> de teste.
~~~javascript
[/src/todo/todo.jsx - ESTRUTURA INICIAL]
import React, {Component} from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1>Teste</h1>
            </div>
        )
    }
}
~~~

    4 - Para nossa aplicação usar esse componente, vamos em [/src/main/app.jsx], importamos o componente, usando um RELATIVE PATH*, e substituimos o contudo do arquivo [/src/main/app.jsx], pelo componente <Todo>, dentro de uma <div container> principal.
~~~javascript
[/src/todo/todo.jsx - ESTRUTURA FINAL]
import React, {Component} from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1>Teste</h1>
            </div>
        )
    }
}

[/src/MAIN/APP.jsx - ESTRUTURA FINAL]

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'

export default props => (
    <div className='container'>
        <Todo />
    </div>
)

~~~ 

Vamos agora criar um novo componente, para isso dentro de **/src** vamos criar uma outra pasta e dentro desta pasta iremos criar o componente **/src/about/about.jsx**. Ele será um componente mais simples, logo iremos basea-lo em **função**.

> Vamos sempre utilizar o mesmo padrão para a função, a não ser que ela requeira alguma complexidade a mais.
> Vamos utilizar a **função arrow** com a propriedades *props*, onde não colocamos os (parenteses), pois é somente um atributo, e depois os parenteses() para representar a expressão/sentença que será retornada, que é justamente o codigo **JSX** que iremos criar.

~~~javascript
[/src/about/about.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => (
    
)
~~~

    1 - Vamos criar uma estrutura JSX basica, com uma <div> e um <h1> para definirmos o titulo de SOBRE, na pagina.
~~~javascript
[/src/about/about.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => (
    <div>
        <h1>Sobre</h1>
    </div>    
)
~~~

    2 - Agora iremos no [src/main/app.jsx], fazer o import do About e instancia-lo abaixo de <Todo />
    -> Lembrando que esse é um codigo temporario para somente testarmos nossa aplicação.
~~~javascript
[/src/main/app.jsx - ESTRUTURA FINAL]

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <div className='container'>
        <Todo />
        <About />
    </div>
)  
~~~



&nbsp;

---

---

## [Aula 135] - COMPONENTES MENU

&nbsp;

Vamos agora fazer a criação do nosso *COMPONENTE MENU**, dentro de **/src** vamos criar uma nova pasta, entro desta nova pasta vamos criar o primeiro arquivo que será chamado de **/template/menu.jsx**. Ele tambem será um *Componente Funcional* igual o nosso **about.jsx**.

    1 - Vamos fazer o import e criar a estrutura basica da função.
~~~javascript
[/src/template/menu.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => {
    
}
~~~
Agora iremos colocar uma serie de **classes** relativas ao *bootstrap*, olhar no **template** do [**react-bootstrap**](https://react-bootstrap.github.io/components/navbar/) como ele faz o **MENU** e copiar para dentro da nossa função. Poderiamos por exemplo, se tivessemos uma aplicação mais complexa, que tivesse varios menus diferentes, poderiamos quebrar cada item do **MENU** como sendo um **Componente Separado**. Poderiamos criar uma componente chamado **navbar.jsx**, **menuHeader.jsx**, **menuLogo.jsx**,**itensMenu.jsx**, **subMenu.jsx**...

Para a gente não faz muito sentido nessa aplicação, mas voce precisa ter esse conhecimento de *trade-off*, criar multiplos componentes para facilitar a construção, ou criar um componente mais estruturado (vem pronto), para não precisarmos quebrar isso em multiplos arquivos/funções.

    1 - Vamos colocar uma tag de <nav> com o [classname] apontando para algumas classes do BOOTSTRAP.
~~~javascript
[/src/template/menu.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => {
    <nav className="navbar navbar-inverse bg-inverse"></nav>    
}
~~~
    2 - Dentro da tag <nav>, vamos começar colocando uma <div> que representa o "container" dentro do nosso menu.
~~~javascript
[/src/template/menu.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => {
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            
        </div>
    </nav>
}
~~~
> Estamos seguindo o modelo do bootstrap para a [template](https://react-bootstrap.github.io/components/navbar/).

    3 - Vamos colocar a classe [navbar-header] e dentro dele vamos colocar, como se fosse a logo da nossa aplicação, usando a tag <a> e a classe [navbaar-brand].
    -> Como logo vamos utilizar a tag  <i> e usar uma logo do FONT-AWESOME que instalamos mais cedo e colocaremos o nome da aplicação apra ser [TodoApp].
~~~javascript
[/src/template/menu.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => {
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">
                    <i className="fa fa-calendar-check-o" /> TodoApp
                </a>
            </div>
        </div>
    </nav>
}
~~~
 
    4 - Para o nosso MENU mesmo, vamos ter apenas 2 itens de MENU.
    -> Um para adicionarmos uma tarefa e outro para mostrar o sobre.
    -> Logo chamaremos uma <ul>  com classes do bootstrap para a NAVBAR, e usaremos as tags de <li> para separar entre [TAREFAS | SOBRE].
> Usando o [#/todos], estamos usando o tipo de navegação de **hash(#)**.
> >
> Quando formos construir o arquivos de rotas **routes**, iremos usar o **hash(#)** como forma de *Historiar*, tudo o que formos passando de uma *URL* para outra.
~~~javascript
[/src/template/menu.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => {
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">
                    <i className="fa fa-calendar-check-o" /> TodoApp
                </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#/todos">Tarefas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
}

~~~

> Uma coisa que acontence quando estamos trabalhando com aplicação **SPA - Single Page Application**, é que por padrão acabamos perdendo o *Historio de navegação* no browser. Pois, como é uma aplicação de unica pagina e todas as requisições são **Requisições AJAX -  Asynchronous Javascript and XML**, em teoria não teriamos como ficar voltando na navegação.
> 
> É muito utilizado em varios frameworks a questão do **hash(#)**, o *hash* é algo que não vai para o servidor, é algo que esta apenas no **browser**. Muito utilizado para fazer **ancoras** clicamos no *link* e ele desce na pagina para ir para determinado ponto.
> Ele é um articifio construindo do lado do *client/browser* para ficar avançando e voltando as **URL's** para que voce tenha historico, mas por exemplo, não conseguimos pegar o valor do *hash* no **servidor.

    5 - Apos a criação do menu, vamos precisar importa-lo no nosso [/src/main/app.jsx].
    -> Por enquanto iremos colocar a INSTANCIA do menu que importamos em cima dos outros componentes.
~~~javascript
[/src/main/app.jsx - ESTRUTURA INICIAL]

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        <Todo />
        <About />
    </div>
)  
~~~

Agora no browser, ja temos o**MENU** aparecendo, a navegação ainda não esta funcional, iremos faze-la na proxima aula.


&nbsp;

---

---

## [Aula 136] - CONFIGURANDO AS ROTAS (REACT-ROUTER)

&nbsp;

Vamos agora fazer a configuração das **Rotas** para a *navegação* começar a funcionar. No nosso **/src/main/app.jsx** temos duas instancias de componentes funcinais que criamos *Todo & About*, elesserão substituidos pelo **router** que será nosso navegador.

Para isso vamos criar uma arquivo chamado **/src/main/router.jsx**. Dentro deste arquivo iremos fazer alguns *imports* de dependencias.
- *React* - 'react'
- Vamos importar da dependencia **react-router**, algumas *tags* que iremos usar para implementar o nosso componente de rotas. Vamos usar 3 tags e uma *estrategia de historico*
    - **{Router, Route, Redirect, hashHistory}**

~~~javascript
[/src/main/router.jsx - ESTRUTURA INICIAL]

import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'
~~~

Alem das dependencias do *react-router*, vamos colocar as *dependencias* dos nossos componentes **Todo** e **About**, pois iremos precisar deles para **mapearmos as rotas**.

~~~javascript
[/src/main/router.jsx - ESTRUTURA INICIAL]

import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
~~~

    1 - Vamos agora fazer a parte da criação do componente funcional exportando ele por default e usando a estrutura inicial do componenete que discutimos mais cedo.
~~~javascript
[/src/main/router.jsx - ESTRUTURA INICIAL]

import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (

)
~~~

    2 - O Componente terá um <ROUTER> que irá ENGLOGAR/ENCAPSULAR as rotas.
    -> Vamos colocar como ESTRATEGIA DE HISTORICO o [hashHistory].
> *Estratégia de Histórico - Existem outras como o **browserHistory***

~~~javascript
[/src/main/router.jsx - ESTRUTURA INICIAL]

import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>

    </Router>
)
~~~

    3 - Dentro do nosso <Router> vamos criar a nossa primeira ROTA<Route> que será a rota para as nossas tarefas [/todos], e o COMPONENTE que ele irá carregar sempre que o PATH for [/todos], será o {Todo}, importando acima.
~~~javascript
[/src/main/router.jsx - ESTRUTURA INICIAL]

import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}>
    </Router>
)
~~~

    4 - Vamos criar uma rota semelhante para nosso componente [/about].
~~~javascript
[/src/main/router.jsx - ESTRUTURA INICIAL]

import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}>
        <Route path='/about' component={About}>
    </Router>
)
~~~

    5 - Para finalizar, sempre que alguem colocar uma URL invalida, nosso ROUTER irá fazer um <REDIRECT>, para o nosso [/todos]
~~~javascript
[/src/main/router.jsx - ESTRUTURA INICIAL]

import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/todos' />
    </Router>
)

~~~

Agora para ver se nossa aplicação esta funcionando temos que ir no arquivo **/src/main/app.jsx**, onde vamos *importar* nossas rotas **Routes**, colocando a referencia do nosso componente de rotas abaixo do MENU e salvando.

~~~javascript
[/src/main/app.jsx]

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)  
~~~

Na proxima aula iremos criar uma **Componente** que será o componente de **PageHeader** que iremos substituir pelo *h1*, baseado em um **template do bootstrap**.

> Para que o erro do **bootstrap map** pare de ocorrer, basta deletar essa linha que esta comentada no arquivo
> ~~~
>/*# sourceMappingURL=bootstrap.min.css.map */ 
> ~~~

&nbsp;

---

---

## [Aula 137] - COMPONENTE PAGE-HEADER

&nbsp;

Vamos agora criar o componente funcional **PageHeader** dedntro da nossa pasta **/template**

~~~javascript
[/template/pageHeader.jsx - ESTRUTURA INICIAL]

import React from 'react'

export default props => (

)

~~~

    1 - O nosso componente será bem simples, ele terá uma tag <header>, onde iremos usar uma CLASSE do BOOTSTRAP no className chamada [page-header].
~~~javascript
[/template/pageHeader.jsx - ESTRUTURA INICIAL]

import React from 'react'

export default props => (
    <header className='page-header'>

    </header>
)
~~~

    2 - Dentro do <header> vamos colocar um <h2> que irá receber via propriedades um NOME, e dentro dela vamos colocar uma tag <small> onde, tambem via props, iremos receber um SMALL.
~~~javascript
[/template/pageHeader.jsx - ESTRUTURA INICIAL]

import React from 'react'

export default props => (
    <header className='page-header'>
        <h2>{props.name}<small>{props.small}</smal></h2>
    </header>
)
~~~

Apos terminar a estrutura do nosso componente, vamos na classe(*class*) que criamos **Todo**, em [/src/todo/todo.jsx], e vamos colocar esse **componente pageHeader** no lugar do **h1**.
~~~javascript
[/src/todo/todo.jsx - ESTRUTURA FINAL]

import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
            </div>
        )
    }
}
~~~

Agora quando salvarmos e formos no *browser* irá aparecer o **Menu** seguindo o padrão do *bootstrap* que estabelecemos.

Vamos fazer a mesma coisa para a pagina **/src/about/about.jsx**. Aproveitando que essa pagina será uma pagina *Estática*, não terá nenhum componente ou ação acontecendo nela, vamos colocar algumas tags de informação. Pois essa pagina so foi criada para vermos como se constroi a estrutura de navegação.

~~~javascript
[/src/about/about.jsx]

import React from "react";
import PageHeader from "../template/pageHeader";

export default props => (
    <div>
        <PageHeader name='Sobre' small='Nós' />

        <h2>Nossa História</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur eveniet tenetur, similique accusamus qui officia alias modi est non dolorem facilis. Quod ratione a magnam dicta omnis unde molestiae?</p>
        <h2>Missão e Visão</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptatibus eum nesciunt, facilis iusto porro doloremque commodi est, minus odit quia laboriosam modi aliquid expedita dolorem id a numquam! Inventore.</p>
        <h2>Imprensa</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloribus et laboriosam aliquam provident ipsum cupiditate tempore rem quos, aut maxime ipsam molestias nisi? Perspiciatis fugiat accusamus animi optio enim.</p>
    </div>    
)
~~~

Na proxima aula iremos começar a criar os *Componentes* do nosso *todo**,*todoForm* e *todoList*.


&nbsp;

---

---

## [Aula 138] - COMPONENETES TODO-FORM E TODO-LIST

&nbsp;

Vamos agora criar os dois componentes do nosso **todoForm.jsx & todoList.jsx**. Os dois serão componentes funcionais que irão seguir o padrão estabelecido inicialmente nas outras aulas.

~~~javascript
[/src/todo/todoForm.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => (
    
)
~~~

    1 - Vamos criar uma <div> com <h1> so para vermos se o formulario esta tudo certo.
~~~javascript
[/src/todo/todoForm.jsx - ESTRUTURA INICIAL]

import React from "react";

export default props => (
    <div>
        <h1>Form</h1>
    </div>
)
~~~

    2 - Apos a criação vamos no componente de [/src/todo/todo.jsx], para fazer a importação do formulario e colocar nossa referencia 
~~~javascript
[/src/todo/todo.jsx]

import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm />
            </div>
        )
    }
}
~~~

    3 - Agora iremos fazer a mesma coisa mas para nossa lista de todos.
~~~javascript
[/src/todo/todoList.jsx - ESTRUTURA INICIAL]
import React from 'react'

export default props => (
    <div>
        <h1>List</h1>
    </div>
)
~~~

~~~javascript
[/src/todo/todo.jsx]

import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}
~~~

Em **todoForm.jsx** vamos ter os campos de **texto da tarefa**, **botão de pesquisar, adicionar e limpar o campo**, e embaixo teremos a lista das tarefas com a opção de **marcar tarefa como concluida**, **desmarcar** e **excluir**.




&nbsp;

---

---

## [Aula 139] - ESTRATÉGIA DE IMPLEMENTAÇÃO

&nbsp;


Vamos agora pensar um pouco como nossa aplicação esta organizar.
~~~
[Comp.app] ->  [Comp.Menu]
           ->  [Comp.Rotas] -> [Comp.Todo] -> [Comp.TodoForm]
           ->                              -> [Comp.TodoList]
           ->               -> [Comp.About]
~~~

Focando um poucos nos componentes **Todo | TodoForm | TodoList** o que acontece é o seguinte. Quando trabalhamos com o *react* puro, sem o uso do **redux**, os **estados** são criados dentro dos *componentes*, um componente tem uma parte do estado e outro componente tem outra.

O que acontence no caso do **TodoList**, desta lista de tarefas, por uma questão de estrategia, é que vamos concentrar boa parte do estado e boa parte do controle do cadastro em cima do componente mais abrangente que possui os dois menores, no caso [Comp.Todo].

Vamos criar todas as funções no **componente principal** e passa-las via props para os outros *componentes*. Os dados, ações e estados irão ficar no componente **todo.jsx**. E vamos passar esses **dados,ações e estados** via propriedades.

Quando formos migrar nosso sistema para o **redux** veremos a diferença entre as duas estrategias.



&nbsp;

---

---

## [Aula 140] - ESTRUTURA DO FORMULÁRIO

&nbsp;

Agora iremos fazer a estruutura o formulario, vamos excluir a estrutura inical e vamos usar uma class css na nosa tag **div** principal.

    1 - Vamos criar um CLASSNAME para aplicarmos depois algumas propriedades especificas no nosso projeto.
~~~javascript
[/src/todo/todoForm.jsx]
import React from "react";

export default props => (
    <div role='form' className="todoForm">
        
    </div>
)
~~~

    2 - Vamos usar em uma <div> as famosas CLASSES 12 COLUNAS DO BOOTSTRAP.
    -> [col-xs-12] = mobile 12 field
    -> [col-sm-9] = small 9 field
    -> [col-md-9] = medium 10 field
~~~javascript
[/src/todo/todoForm.jsx]
import React from "react";

export default props => (
    <div role='form' className="todoForm">
        <div className="col-xs-12 col-sm-9 col md-10">

        </div>
    </div>
)
~~~

    3 - Vamos colocar nosso <input> com o atributo [id='description'], e com um CLASSNAME[form-control] e um PLACEHOLDER.
~~~javascript
[/src/todo/todoForm.jsx]
import React from "react";

export default props => (
    <div role='form' className="todoForm">
        <div className="col-xs-12 col-sm-9 col md-10">
            <input id="description" className="form-control" placeholder="Adicione uma tarefa"></input>
        </div>
    </div>
)
~~~

    4 - Alem de termos o <input> , vamos ter alguns botões, inicialmente vamos colocar somente o botão de adicionar e depois iremos acrescentando outros botões.
    -> Vamos colocar dentro de uma <div> para podermos colocar as mesmas configurações de CLASSNAME para as telas [col-xs-12 col-sm-3 col-md-2]
    -> Vamos criar a nossa tag <button> com um CLASSNAME de [botão primario].
    -> E dentro desse botão, iremos colocar o icone do FONT-AWESOME.
~~~javascript
[/src/todo/todoForm.jsx]
import React from "react";

export default props => (
    <div role='form' className="todoForm">
        <div className="col-xs-12 col-sm-9 col md-10">
            <input id="description" className="form-control" placeholder="Adicione uma tarefa" />
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">
            <button className="btn btn-primary">
                <i className="fa fa-plus" />
            </button>
        </div>
    </div>
)
~~~

Agora criamos a estrutura basica inicial de **adicionar tarefas** em nosso formulario. No *browser* ja podemos perceber que ele esta com um campo para adicionar e o botão do [+].

Na proxima aula, iremos criar uma *Componente* chamado **GRID**, onde ele irá **ENCAPSULAR** as classes do bootstrap, ou seja, nao iremos precisar no **className=''** ficar escrevendo todas as classes, vamos querer passar um numero, e automaticamente vamos querer q seja convertido os numeros passados para esse tipo de padrão do *bootstrap* **col-xs-12 col-sm-9 col-md-10** como exemplo. Vamos querer passar **12 9 10** e ele irá saber que 12 é para celular, 9 para small(**dispositivos pequenos**), e 10 para medium(**dispositivos medios**).


&nbsp;

---

---

## [Aula 141] - COMPONENTES GRID E ICON-BUTTON

&nbsp;

Dentro da pasta **/src/template** nos vamos criar o componente de **grid.jsx**. Nele iremos importar o **React** e o **{ Component}**, pois ele será um *componente baseado em classe*.

~~~javascript
[/src/templates/grid.jsx]
import React , {Component} from 'react'

export default class Grid extends Component {

}
~~~

    1 - Dentro dessa classe vamos ter uma metodo chamado [toCssClasses()] que recebe uma propriedades chamada [numbers].
~~~javascript
[/src/templates/grid.jsx]
import React , {Component} from 'react'

export default class Grid extends Component {
    toCssClasses(numbers){

    }
}
~~~

    2 - Nesse metodos, queremos passar uma lista de numeros, até 4 numeros, e ele irá converter esses 4 numeros, no padrão de 12 colunas do BOOTSTRAP.
        - N1 = celular
        - N2 = dispositivos menores, exemplo tablets.
        - N1 = dispositivos medios
        - N1 = telas maiores.
    -> A primeira coisa que iremos fazer será separar esses numeros (dando um split(' ')), a partir do espaço (' ') e vamos armazenar esse array [], que possui 4 elementos,(css bootstrap so considera 4 tamanhos), em [cols].
~~~javascript
[/src/templates/grid.jsx]
import React , {Component} from 'react'

export default class Grid extends Component {
    toCssClasses(numbers)
        const cols = numbers ? numbers.spli(' ') : []
    }
}
~~~

    3 - Uma vez que tenhamos as colunas, vamos criar classes a partir dessa string classes. [let classes = ''].
~~~javascript
[/src/templates/grid.jsx]
import React , {Component} from 'react'

export default class Grid extends Component {
    toCssClasses(numbers)
        const cols = numbers ? numbers.spli(' ') : []
        let classes = ''
    }
}
~~~

    4 - Para fazer uma teste vamos usar uma condicional para, se a coluna[0] zero, existir/tiver setada, vamos pegar a coluna[0] e adicionar no parametro [col-xs-coluna[0]], fazendo a concatenação com o padrão. Vamos repetir para todos os numeros que criamos.
    -> Copiamos essa funçao abaixo e no console do browser usamos ela para ver se irá funcionar. Apos armazenar a função no console, chamaos ela passando valores:
        - [toCssClasses('12')]
        - [toCssClasses('12 6')]
        - [toCssClasses('12 6 3 1')]
        - [toCssClasses('12 6 3 1')]
> A ideia desse **Componentes de Classe** que estamos criando é que é muito mais facil passar numeros do que todos essas palavras.
~~~javascript
[/src/templates/grid.jsx]
import React , {Component} from 'react'

export default class Grid extends Component {
    toCssClasses(numbers)
        const cols = numbers ? numbers.spli(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += `col-sm-${cols[1]}`
        if(cols[2]) classes += `col-md-${cols[2]}`
        if(cols[3]) classes += `col-lg-${cols[3]}`
        
        return classes
    }
}
~~~

    5 - Apos vermos que a função [toCssClasses(numbers)] do componente esta funcionando, vamos criar o metodo de renderição, obrigatorio em componentes baseados em CLASSES.
    ->Dentro do metodo render(), vamos criar uma constante chamada [gridClasses] onde iremos chamar a função [toCssClasses], passando o parametro que queremos receber a partir das propriedades, no caso, as colunas (cols), se o (cols) não for setado, automaticamente o elemento terá 12 colunas, ou seja, ocupa a tela inteira.
~~~javascript
[/src/templates/grid.jsx]
import React , {Component} from 'react'

export default class Grid extends Component {
    toCssClasses(numbers)
        const cols = numbers ? numbers.spli(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += `col-sm-${cols[1]}`
        if(cols[2]) classes += `col-md-${cols[2]}`
        if(cols[3]) classes += `col-lg-${cols[3]}`
        
        return classes
    }
    render(){
        const gridClasses = this.toCssClasses(this.props.cols || 12)
    }
}
~~~

    6 - No retorno do RENDER(), vamos ter uma div, que terá como CLASSNAME as classes convertidas para o padrão do bootstrap [gridClasses].
    -> Dentro desta <div> iremos colocar os componentes filhos usando {this.props.children}.
~~~javascript
[/src/templates/grid.jsx]
import React , {Component} from 'react'

export default class Grid extends Component {
    toCssClasses(numbers)
        const cols = numbers ? numbers.spli(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += `col-sm-${cols[1]}`
        if(cols[2]) classes += `col-md-${cols[2]}`
        if(cols[3]) classes += `col-lg-${cols[3]}`
        
        return classes
    }
    render(){
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}}>
                {this.props.children}
            </div>
        )
    }
}
~~~

    7 - Apos a criação da nossa CLASSE de grid, vamos no nosso componente de [todoForm.jsx], onde usamos as classes nas <divs> e vamos substituilas pelo [grid.jsx] que fizemos.
~~~javascript
[/src/todo/todoForm.jsx]

import React from "react";
import Grid from '../template/grid'

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12-9-10'>
            <input id="description" className="form-control" placeholder="Adicione uma tarefa" />
        </Grid>
       <Grid cols='12 3 2'>
           <button className="btn btn-primary">
                <i className="fa fa-plus" />
            </button>
       </Grid>
    </div>
)
~~~

    8 - Falta ainda fazermos o o componente dos BOTÕES. Então na pasta [ /templates ], vamos criar uma novo arquivo chamado [iconButton.jsx]. Ele será um componente basedo em função.
> Vamos colocar nesse componente de *BOTÃO* uma **Renderização Condicional**, onde se ele estiver escondico coloca o valor *null*, se não estiver, mostra o template normal. Pois haverá situções onde queremos que esse botão fique escondido e outras, que queremos que ele apareça.
~~~javascript
[/src/templates/iconButton.jsx]
import React from 'react'

export default props => {

}
~~~
    9 - Para isso, vamos colocar da seguinte maneira:
        - Se a propriedade (hide) for verdadeira, vamos retornar nulo.
        - Se não, irá retornar o componente <button>.
    -> Dentro do CLASSNAME do <button> vamos fazer uma concatenação de parte de classes css, com uma propriedade que iremos receber como parametro, e colocamos tudo isso dentro de uma expressão {}
~~~javascript
[/src/templates/iconButton.jsx]
import React from 'react'

export default props => {
    if(props.hide){
        return null
    }else{
        return (
            <button className={'btn btn-'+ props.style}>
        )
    }
}
~~~

    10 - No atributo do ONCLICK, vamos receber essa função a partir das propriedades.
    -> Para o conteudo do icone vamos deixar ele preenchar parcialmente, deixando o resto para o parametro.
~~~javascript
[/src/templates/iconButton.jsx]
import React from "react";

export default props => {
    if(props.hiden){
        return null
    }else{
        return (
            <button 
                className={'btn btn-'+ props.style}
                onClick={props.onClick}
            >
                <i className={'fa fa-'+ props.icon} />
            </button>
        )
    }
}
~~~

    11 - Apos criado o botão, substituimos ele no [/src/todo/todoForm.jsx].
        -> <IconButton style='primary' icon='plus' />
~~~javascript
[/src/todo/todoForm.jsx]
import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12-9-10'>
            <input id="description" className="form-control" placeholder="Adicione uma tarefa" />
        </Grid>
       <Grid cols='12 3 2'>
           <IconButton style='primary' icon='plus'></IconButton>
       </Grid>
    </div>
)
~~~

Na proxima aula iremos voltar ao componente de botão para tentarmos criar uma estrategia mais interessante do que essa de fazer o teste usando javascript puro. Vamos criar uma *tag* para que ela nos sirva de condição, **tag if**.





&nbsp;

---

---

## [Aula 142] - RENDERIZAÇÃO CONDICIONAL (IF)

&nbsp;


Agora, dentro do nosso */src/templates* vamos criar um novo componente que tratará da *Renderização Condicional* do nosso **iconButton.jsx**. O nome desse componentes será **if.jsx** e ele terá inicialmente a estrutura de um componente *funcional*.

~~~javascript
[/src/templates/if.jsx]

import React from 'react'

export default props => {

}
~~~

    1 - Dentro deste componente vamos colocar um teste, se [props.test] for verdadeiro, iremos retornar o objeto que esta dentro da TAG desse componente que estamos criando agora <if>.
    -> Se não for verdadeiro, ele irá retornar false
~~~javascript
[/src/templates/if.jsx]

import React from 'react'

export default props => {
    if(props.teste){
        return props.children
    }else{
        return false
    }
}
~~~

Esse será o componente que irá nos ajudar a nos outros componentes criarmos uma condicional sem a necessidade de fazer o **IF** do proprio *javascript*.

    2 - Agora no nosso [/src/template/iconeButton.jsx] temos que importar a referencia para o componente <If>.
    -> Agora  
~~~javascript
[/src/template/iconButton.jsx]

import React from "react";
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button 
            className={'btn btn-'+ props.style}
            onClick={props.onClick}
        >
            <i className={'fa fa-'+ props.icon} />
        </button>
    </If>
)  
~~~

Agora ficou muito mais simples, se o [test] não estiver escondido, ele irá mostrar, se estiver escondido ele irá pular a renderização do **Botão**.




&nbsp;

---

---

## [Aula 143] - EVENDO ADICIONAR

&nbsp;

Vamos agora fazer nossa primeira ação para vermos funcionando o *CLICK de um Botão* no nosso componente.

No **/src/todo/todoForm.jsx** no botão do **IconeButton**, vamos adicionar o **onClick** nesse botão. Onde esse *onClick* por meio das propriedades irá receber uma função chamada **handleAdd**.

Vamos passar umaa *função* que irá manipular o evento de adicionar uma nova tarefa e essa função virá a partir das propriedades *(props)* que será passada para essa classe de formulario de nossas tarefas.

~~~javascript
[/src/todo/todoForm.jsx]

import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12-9-10'>
            <input id="description" className="form-control" placeholder="Adicione uma tarefa" />
        </Grid>
       <Grid cols='12 3 2'>
           <IconButton style='primary' icon='plus' onclick={props.handleAdd} />
       </Grid>
    </div>
)
~~~

Vimos que no nosso **src/template/iconButton.jsx**, ele recebe uma propriedade chamada *onClick*, justamente essa propriedade que estamos usando no **/srx/todo/todoForm.jsx**.

~~~javascript
[/src/template/iconButton.jsx]
import React from "react";
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button 
            className={'btn btn-'+ props.style}
            onClick={props.onClick}
        >
            <i className={'fa fa-'+ props.icon} />
        </button>
    </If>
)
~~~

Como na nossa classe **todo.jsx** é onde estará concentrada toda nossa logica dos **eventos**, dos **estados** que serão armazenados e outras coisas mais, vamos dentro desse arquivo começar a criar a logica para adicionar.

    1 - Primeiro vamos criar uma função chamada handleAdd() que irá manipular o evento de adição de uma nova tarefa.
    -> Dentro desta função vamos colocar um console.log para vermos se esta funcionando.
~~~javascript
[/srx/todo/todo.jsx]

import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    handleAdd() {
        console.log('Add')
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}
~~~

    2 - A funçao [handleAdd()] está na classe [Todo], mas o BOTÃO, esta no componente [todoForm.jsx], como passamos a funçao [handleAdd()] para o [todoForm.jsx] para a partir do click do botão ser chamada a função?
    -> Vamos passar pela TAG <TodoForm> que irá receber como propriedade um cara chamado [handleADD] que criamos em [todoForm.jsx].
~~~javascript
[/srx/todo/todo.jsx]

import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    handleAdd() {
        console.log('Add')
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd/>
                <TodoList />
            </div>
        )
    }
}
~~~

    3 - Agora iremos testar essa função, para isso basta ir no browser e ver se no console aparece a mensagem quando clicamos no botão de adicionar.

Temos um detalhe muito importante no uso dessa função que é o seguinte: 
- Por varias vezes vamos precisar usar coisas que estão dentro do objeto **THIS**. Queremos saber, no caso da chamada do **console.log()** na função *handleAdd()* quem está armazenado na variavel **this**.
- Quando vemos a saida do console.log(this) recebemos o *null*, isso irá gerar um problema na hora que formos tentar acessar alguma coisa a partir do *this*. 

> O *this* em funções normais, muda o valor de acordo com quem *8chama** a função. Na maioria das linguagens o *this* esta associado ao lugar onde ele foi escrito.

- Como não é interessante o nosso *this* estar **nulo**, vamos criar uma **Construtor** que recebe props, chamando o super() para as propriedades, para nao dar problema, e dentro do *constructor* vamos fazer uma "AMARRAÇÃO", dizendo que o **this.handleAdd** é igual a *this.handleAdd* mais um bind do *this*.
  - Dentro do Constructor o **this** com certeza aponta para a propria classe, e fazendo essa amarração com o **bind()**, estamos dizendo que independente de quem chama, ja que essa função esta sendo chamada a partir de um evento que veio da DOM, click do botão, e quem chamou não foi a class, por isso não foi o this da classe. 
  - Quando fazemos esse **bind()** estamos garantindo que o **this()** será o da classe *TODO*.


~~~javascript
[/srx/todo/todo.jsx]

import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructo(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        console.log('Add')
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList />
            </div>
        )
    }
}
~~~

Esse é um conceito bastante tranquilo no *javascript*, por conta dessas *variações* que o **this** sofre, temos a possibilidade de dizer que uma função sempre esteja associada com o *this*, usando o metodo **bind()**, dizendo assim que o **this** sempre será o componente atual, e nesse sentido, vamos poder chamar qualquer função ou acessar o estado do objeto sem problema nenhum.

Esse é um processo que teremos que fazer para basicamente todos os metodos que adicionarmos ao longo do nosso projeto. Sempre que adicionarmos um metodo novo que precisa acessar um estado, ou mesmo, chamar um outro metodo dentro da classe, vamos precisar ir no constructor e fazer o **bind()** para evitar que p **this** seja nulo, ou possua qualquer outro valor durante o fluxo da nossa aplicação.


&nbsp;

---

---

## [Aula 144] - EVENTO ONCHANGE

&nbsp;

Nosso evento para *adicionar* ja esta sendo chamado/invocado, inclusive utilizando o **this** correto. Iremos agora trabalhar com o campo de descrição da tarefa, para que a gente possa colocar ele como sendo um **Componente Controlado** pelo *React*, no momento ele esta recebendo qualquer coisa, sem a gerencia do *React*.

Vamos transforma-lo em um **Componente Controlado** e vamos usar uma propriedade (**onChange**) que irá chamar uma função para ficar manipulando, notificado das mudanças, e podermos atualizar o *Estado do Objeto*.

    1 - Vamos entrar nosso [todoForm.jsx], onde esta nosso componenete de <input> (descrição). 
    -> Nele, vamos adicionar uma propriedade chamada [value=], onde ele irá receber esse valor via propriedades[props.description]. Essa propriedade será passada a partir da CLASSE [todo.jsx], pois ela que terá o ESTADO da aplicação.
~~~javascript
[/src/todo/todoForm.jsx]

import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12-9-10'>
            <input 
                id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa"
                value={props.description} />
        </Grid>
       <Grid cols='12 3 2'>
           <IconButton 
                style='primary' 
                icon='plus' 
                onClick={props.handleAdd} 
            />
       </Grid>
    </div>
)
~~~

    2 - Voltando para a CLASSE TODO [/src/todo/todo.jsx], vamos, dentro do CONSTRUTOR mesmo, criar o ESTADO, onde ele irá receber um OBJETO com a propriedade [DESCRIPTION] vazia.
    -> Esse OBJETO tambem terá uma propriedade [LISTA], que por enquanto será um ARRAY VAZIO [], estado inicial do OBJETO.
~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        console.log('Add')
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList />
            </div>
        )
    }
}
~~~

Ao longo das aulas, vimos que **props** é para somente *leitura*. E sempre que queremos trabalhar com **Estado do objeto** usamos o **this.state**, setando diretamente o *Estado* no **Construtor**, a partir dai, nos começamos a alterar o **Estado** a partir de um metodo chamado **setState()**, para **LER** o estado, podemos fazer direto o **this.state** e pegar o valor que queremos, mas para alterar temos que usar o **setState()**.

Para passarmos esse estado que criamos para o formulário **todoForm.jsx*, que é justamente onde vamos ter a descrição da tarefa, terá a propriedade *description*, que irá enviar o Estado da propriedade desse objeto.

~~~javascript
[/src/todo/todo.jsx - Adicionando ao componente <todoForm>]

import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        console.log('Add')
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                />
                <TodoList />
            </div>
        )
    }
}

~~~ 
Agora, sempre que o **state** ESTADO *atualizar* ele automaticamente irá renderizar o formulario para que ele reflita o valor novo. o **description={}** é justamente o que estamos tentando no **todoForm.jsx** receber a partir das propriedades.
~~~
<input 
    ...
    value = {props.description}
>
~~~

Como tudo que passarmos para a tag do componente **TodoForm** é considerado como *propriedade* pegamos dentro do componente como *props*, e no **this.state.description** ligamos,digamos assim essa *propriedade* com o **Estado Interno** da TAG **Todo.jsx**.

Os **Estados e Ações** ficaram dentro do componente **todo.jsx**, enquanto os outros componente **todoForm.jsx & todoList.jsx** serão o "template", estrutura do componente. E todo o que ele vai receber, todos os botões vão acabar gerando chamadas na CLASSE PAI **todo.jsx**, ja que o *gerenciamento de estado* é mais complicado fazer com multiplos componentes, centralizamos na classe **todo.jsx**.

    3 - Agora em [todoForm.jsx], vamos adicionar um evento de ONCHANGE, onde ele irá receber via propriedades uma função chamada HANDLECHANGE, que será escrita em [Todo.jsx - classe pai].
~~~javascript
[/src/todo/todoForm.jsx]

import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12-9-10'>
            <input 
                id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa"
                value={props.description}
                onChange={props.handleChange}
             />
        </Grid>
       <Grid cols='12 3 2'>
           <IconButton 
                style='primary' 
                icon='plus' 
                onClick={props.handleAdd} 
            />
       </Grid>
    </div>
)
~~~

    4 - Vamos agora criar esse metodo de HANDLECHANGE, que irá justamente receber um evento(e | evento | qualquer_nome) sempre que o usuário digitar no <input>.
~~~javascript
[/src/todo/todo.jsx]
handleChange(eChange){
        
    }
~~~

    5 - Esse evento, sempre que o usuario digitar, vamos ter que alterar o ESTADO ATUAL, a parte do estado referente a DESCRIPTION, descrição, tem a lista tambem.
    -> Vamos assim chamar o THIS.SETSTATE, passando como propriedade({}) um objeto novo que irá pegar a partir do operador SPREDDING[...], todos os dados do ESTADO (state), que no caso sao dois (description & list), e vamos pegar a descrição e associar ao [event.target.value - lembrar que evento pode ter outro nome].
~~~javascript
[/src/todo/todo.jsx]
handleChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
~~~

O **e** é o *evento* do **onChange=** do *input<>*, dentro deste evento, temos um **target** que é justamente o input/box_inserção, e dentro do input tem um valor **value** que o usuario digitou. Este **valor**, vai estar dentro da **description**, do objeto que esse valor esta sendo atualizado a partir do estado criado usando o **setState()**.

Agora, para chamarmos essa função, temos que ir na nossa TAG de **TodoForm<>**, e passar a função que criamos como uma propriedade que chama a função que criamos. O nome dessas propriedade tem q ser igual ao que usamos no [todoForms.jsx] para receber via **props.handleChange**, o nome da função passada para essa propriedade pode ser outro.

~~~javascript
[/src/todo/todo.jsx]

import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        console.log('Add')
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList />
            </div>
        )
    }
}
~~~

Feito isso podemos ate testar o codigo mas receberemos um erro devido ao **this.setState()**, esse *this* que estamos utilizando não é o **this** que estamos esperando que seja, do proprio componente. Qualquer coisa que digitarmos irá informar que o **setState()** não pode ser lido pois esta vindo de um atributo **undefine**, justamente o **this**.

Para consertar isso, temos que no **Construtor** criar uma **Bind** para o **this**. Amarrando assim o **this** no componente atual.

~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        console.log('Add')
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList />
            </div>
        )
    }
}
~~~

Outra coisa que ja foi comentada, vamos comentar a linha onde colocamos a função **setSate()**, o que irá acontecer com o campo de input no browser? Não poderemos mas digitar nele. Esse campo, é dito como um **Campo Controlado** pelo *React*, que manda no valor que esta dentro do campo não é mais a DOM, e sim o **estado** deste componente, como o estado não esta mais alterando (comentamos), não iremos conseguir alterar.

Se colocarmos como **Estado Inicial** a palavra *opa!*, ele irá reiniciar, e no campo iremos ver a palavra, masnão iremos conseguir excluir, nem adicionar nada a ela pois a linha de alteração do estado esta comentada.

Por isso que quando o usuario escreve algo nesse *campo*, um **evento** é disparado, quando esse *evento* é disparado ele chama a **função** que irá manipular esse evento, *handleOnChange()*, o estado do componente evolui com o **setState()**, quando o estado muda, automaticamente o *React* irá chamar a função **render()**, para poder atualizar a visualização.

Para termos certeza que esta funcionando, dentro da função **handleAdd()**, vamos colocar um console.log() para vermos a descrição. Queremos visualizar para ver se a descrição será atualizada quando chamarmos o metodo.
~~~javascript
[/src/todo/todo.jsx]

import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        console.log(this.state.description)
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList />
            </div>
        )
    }
}
~~~

Na proxima aula iremos **integrar**, fazer a primeira itnegração com o nosso **BACKEND** usando o **Axios**, que é o *Cliente HTTP* mais padrão no contexto do REACT.



&nbsp;

---

---

## [Aula 145] - EVENTO ADICIONAR (INTEGRAÇÃO BACKEND)

&nbsp;

Na propria *classe* **Todo**, ja que ela irá fazer as requisições do **backend**, vamos **importar** a biblioteca do **AXIOS**, como organização vamos deixar os imports de *terceiros* na parte de cima e os imports *locais/aplicação* abaixo.

~~~javascript
[/src/todo/todo.jsx]
// dependencias externas
import React from 'react'
import axios from 'axios'
// dependencias internas
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
~~~

    1 - Fora da nossa CLASS, vamos criar uma constante chamada [URL] nela iremos passar a URL BASE da nossa API no backend [http://localhost:3003/api/todos].
~~~javascript
[/src/todo/todo.jsx]
// dependencias externas
import React from 'react'
import axios from 'axios'
// dependencias internas
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'
~~~

Estamos rodando na *Porta 8080* nossa **Aplicação Frontend** e na *Porta 3003* estamos rodando a nossa **Aplicação Backend**.

    2 - Vamos agora no metodo HANDLEADD, que é de adicionar, e vamos criar uma variavel/constante, chamada [DESCRIPTION], que virá do [this.state.description], vem do estado atual do objeto, valor mais novo.
    -> Em cima dessa descrição/valor, vamos rodar o axios.post(), passando como primeiro argumento a URL que definimos na constante acima.
    -> Como segundo parametro vamos passar um objeto {}, que terá apenas o atributo description.
    -> Depois disso, como o AXIOS é baseado no METODO PROMISE, chamamos o [then()], e quando vinher a resposta(res =>) desse [then()], conseguimos pegar o valor novo que veio.
    -> Vamos adicionar um console.log() para ver se funcionou.
~~~javascript
[/src/todo/todo.jsx]

import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => console.log('|DATABASE UPDATED|')
            )
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList />
            </div>
        )
    }
}
~~~

Vamos agora na nossa aplicação, e criar uma nova tarefa para vermos no console.log() se funcionou. Outro teste que podemos fazer é chamando o **POSTMAN**, para vermos se realmente essa tarefa foi consumida no **Banco de Dados**, chamando o metodo GET da API para trazer todas as tarefas cadastradas até o momento.

Ja estamos com o serviço de adicionar funcionando a partir da chamada do metodo **axios.post()**, fizemos um **POST** em cima da **URL BASE** que está rodando nosso backend., passamos um objeto que possui apenas a descrição, que é obrigatoria. Temos tabem a flag done que é obrigatoria e ja começa com o valor inicial sendo *false* para assim quando terminarmos a tarefa colocarmos como *true*. Na *data* temos o valor atual sendo colocado automaticamente.

Proxima aula iremos continuar nossa progama agora fazendo a parte da **Consulta**, vamos consultar nossa **API BK**, usando o metodo **GET** pela biblioteca do **AXIOS**. Vamos capturar esses dados e mostrar na tela no nosso componente de lista.



&nbsp;

---

---

## [Aula 146] - CONSULTA E EXCLUSÃO DE TODOS

&nbsp;

Vamos criar dentro de [/src/todo/todo.jsx] um *metodo* chamado **refresh()**, e esse metodo irá pegar a lista mais atualizada de tarefas e depois iremos melhora-lo para ele servir para algumas **consultas.**

    1 - Vamos chamar o [axios.get()], passando a URL onde nosso beckend esta rodando, e vamos tambem, passar um filtro para ordernar o resultado pela data de criação mais nova para mais velha, ou seja, decescente.
~~~javascript
[/src/todo/todo.jsx]

refresh(){
    axios.get(`${URL}?sort=-createdAt`)
}
~~~

    2 - Quando o resultado da promise for enviado, vamos usar o metodo [then()] para em cima da resposta a gente coloque um console.log() para vermos o valor que foi consumido. 
~~~javascript
[/src/todo/todo.jsx]

refresh(){
    axios.get(`${URL}?sort=-createdAt`)
        .then(
            resp => console.log(resp.data)
        )
}
~~~

    3 - Apos a construção do metodo, vamos fazer uma chamada dessa função/metodo no CONSTRUTOR, para ele ja iniciar carregado, e vermos no console o q teve de resultado a partir desse metodo refresh().
~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(
                resp => console.log(resp.data)
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => console.log('|DATABASE UPDATED|')
            )
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList />
            </div>
        )
    }
}
~~~

Quando atualizamos o browser ele ja tras a lista de objetos que tinha anteriormente, se atualizarmos de novo, o novo item que adicionarmos irá ser msotrado no console tbm.

    4 - Agora que a parte de PESQUISA esta funcionando, em vez de fazermos um console.log(), vamos pegar o resultado que veio e alterar o estado.
    -> Para isso, vamos chamar o [this.setState], pegando todos os dados anteriores com o operador SPREDDING[...], e vamos adicionar uma descrição vazia [''], pois queremos nesse refresh(), zerar digamos assim o texto que a pessoa adicionou, e ele irá colocar na lista o [resp.data].
~~~javascript
[/src/todo/todo.jsx - refresh()]

refresh() {
    axios.get(`${URL}?sort=-createdAt`)
        .then(
            resp => this.setState({
                ...this.state,
                description: '',
                list: resp.data,
            })
        )
}
~~~
    5 - Vamos fazer uma pequena alteração tambem ao metodo de adicionar, ele esta confirmando a adição no somente no console.
    -> Vamos usar o [then()] para chamar a função [refresh()]. Para que sempre que adicionarmos ele traga a lista de todos atualizada e possamos ver aquele elemento que acabamos de atualizar.
~~~javascript
[/src/todo/todo.jsx - handleAdd()]

handleAdd(){
    const description = this.state.description
    axios.post(URL, {descriptioon})
        .then(
            resp => this.refresh()
        )
}
~~~
    6 - Para que possamos ver isso sendo reproduzido na tela, temos que entrar em [todoList.jsx], que é justamente a nossa lista.
    -> Vamos apagar o conteudo de estrutura inicial, e vamos criar nossa tabela.
        -> <table> -> classname = table
            -> <thead>
                -> <tr> 
                    -> <th>Descrição
            -> <tbody> -> Chamada para outra função que terá dentro deste componente. 
~~~javascript
[/src/todo/todoList.jsx]
import React from "react";

export default props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~
> Perbeba que ao trocarmos os (parenteses) por {chaves}, conseguimos criar funções antes do **return()** do nosso componente.

    7 - Vamos criar uma arrow function chamada [RENDERROW()] e dentro dela iremos renderizar as linhas da nossa tabela que chamamos no <tbody>.
    -> Vamos colocar um return() e dentro deste return(), será gerado um <tr><td> com um "OK" so para a gente testar o funcionamento.
~~~javascript
[/src/todo/todoList.jsx]

import React from "react";

export default props => {

    renderRows = () => {
        return (
            <tr>
                <td>OK</td>
            </tr>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

    8 - Vamos agora criar dentro de [renderRows()] uma constante chamada [list], se a lista no (props), esta setada, ou seja, recebemos ela, vamos colocar ela nessa constante [list], se não colocamos uma ARRAY VAZIO [], para nao termos nenhum problema de chamar um metodo da lista que naã esta presente, assim garantimos que ela esta setada de uma forma ou de outra.
~~~javascript
[/src/todo/todoList.jsx]

import React from "react";

export default props => {

    renderRows = () => {
        const list = props.list || []
        return (
            <tr>
                <td>OK</td>
            </tr>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

    9 - Agora no return(), vamos fazer um [.map()] na lista, onde vamos ter cada uma das nossas tarefas (todo), e em cima dessas tarefas iremos aplicar o template que queremos retornar.
    -> No caso será um <tr> <td> com a descrição dessa tarefa.
~~~javascript
[/src/todo/todoList.jsx]

import React from "react";

export default props => {

    renderRows = () => {
        const list = props.list || []
        return list.map(
            todo => (
                <tr>
                    <td>{todo.description}</td>
                </tr>
            )
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

Esse componente que criamos recebe apenas uma unica propriedade, justamente, a lista, como ele espera receber esas lista, temos que ir no nosso **todo.jsx**, no componente do **TodoList** passar essa lista para ele.

    10 - Para isso basta setar no componente <TodoList> o atributo que ele espera receber [list=], jutamente com o estado.
~~~javascript
[/src/todo/todo.jsx]

import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList list={this.state.list} />
            </div>
        )
    }
}
~~~

Agora se formos no *browser* iremos ver a nossa lista aparecendo. Ele esta gerando uma mensagem de advertencia que diz o seguinte, cada elemento deste array, que foi interado, precisam ter uma chave unica [key], então vamos ter que fazer uma pequena alteração no nosso [todoList.js].

    11 - Onde temos o nosso <tr> vamos colocar o atributo/propriedade [key], apontando para a chave [todo._id], o [_id] é gerado pelo MONGODB e serve como identificar unico.
~~~javascript
[/src/todo/todoList.jsx]
import React from "react";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
            </tr>
        ))
    }

    return (
        <table  className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

    12 - Para concluir a tabela, vamos criar uma nova coluna, que será a coluna de ações.
~~~javascript
[/src/todo/todoList.jsx]
import React from "react";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
            </tr>
        ))
    }

    return (
        <table  className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

    13 - E nas linhas, vamos ter que colocar os botões que representam as ações.
    -> Vamos fazer o import do <IconButton>, que é um componenete de um icone, e vamos usa-lo na tabela.
    -> Vamos criar uma <td> e dentro desta tag vamos colocar primeiramente o botão de remoção depois testamos o cenario de marcar item como concluido.
    -> Vamos colocar o atributo [style] como 'danger' para ficar vermelho, o atributo [icon] do lixo, e o [ONCHANGE] chamara uma função que vamos receber no [props], chamada [handleRemove()].
~~~javascript
[/src/todo/todoList.jsx]

import React from "react";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        onClick={
                            () => props.handleRemove(todo)
                        }
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table  className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

Para fazer a função [handleRemove()], temos que passar como propriedade para ela qual o elemento que queremos remover, no caso o (todo). Por isso estamos chamando a função dentro de uma arrow function, ou seja, quando o cara clicar no botão essa arrow function irá se encarregar de chamar a função [handleRemove(todo)].
-> Como não estamos passando como parametro o evento que seria o parametro padrão, estamos passando o [todo], que é o elemento que esta sendo interado no [MAP()], temos que fazer assim, chamar uma função arrow, para dentro dela, no caso de disparo do evento, que será declarodo na classe pai.

    14 - Agora para vamos na nossa classe pai [todo.jsx], vamos criar esse metodo chamado [handleRemove()] passando o (todo) como parametro.
    -> Dentro deste metodo vamos chamar o [axios.delete()] passando a URL BASE do backend, passando o ID(alteração, e exclusão precisa passar a ID para localizar o recurso).
~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo) (
        axios.delete(`${URL}/${todo._id}`)
    )
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList list={this.state.list} />
            </div>
        )
    }
}
~~~

    15 - Agora iremos usar o [then()], ja que o [axios.delete()] retorna uma promise.
    -> No [then()], vamos chamar o [refresh()] para atualizara tela depois que a ação for concluida.
~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo) (
        axios.delete(`${URL}/${todo._id}`)
            .then(
                resp => this.refresh()
            )
    )
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList list={this.state.list} />
            </div>
        )
    }
}
~~~

    16 - Por fim, para que o metodo que criamos seja usado no [TodoList], precisamos declara-lo chamando o [handleRemove={}] e passando a função do handleremove para ele. 
~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo) (
        axios.delete(`${URL}/${todo._id}`)
            .then(
                resp => this.refresh()
            )
    )
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}
~~~

Finalmente para que dentro do [handleRemove], o **this** tenha a referencia certa, temos que no **construtor** colocar o bind na função.

~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo) (
        axios.delete(`${URL}/${todo._id}`)
            .then(
                resp => this.refresh()
            )
    )
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}
~~~

Agora na execução, vamos ver a lista mais o botão que criamos, e se clicarmos ele tem que excluir. Proxima aula iremos construir os outros dois eventos que temos na tabela, que seria marcar uma tarefa concluida e o outro seria voltar para o estado pendente.



&nbsp;

---

---

## [Aula 147] - MARCAR COMO CONCLUÍDO/PENDENTE

&nbsp;

Apos fazer o sistema de adicionar e excluir, vamos agora em **todoList.jsx**, adicionar mais dois botões na lista de botões danossa tabela.

    1 - Em cima do nosso icone de exclusão, vamos colocar um botão que irá ter cmo [style] o [success], e como [icon] será o [check], e o [ONCLICK] irá apontar para um evento quevamos criar como metodo em [todo.jsx], chamado handleMarkasDone().
    -> Para esse evento, vamos passar o [todo] como propriedade, pois ele representa um item da lista.
~~~javascript
[/src/todo/todoList.jsx]

import React from "react";

import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton
                        style='success'
                        icon='check'
                        onClick={
                            () => props.handleMarkAsDone(todo)
                        }
                    />
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        onClick={
                            () => props.handleRemove(todo)
                        }
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

~~~

> Sempre que queremos passar um **EVENTO** como parametro, não precisamos fazer uma chamada indireata **() =>** usando a *arrow function*. Mas sempre que quisermos passar algo diferente do que o evento, que seria, por exemplo o **todo** atual que estamos percorrendo usando o **map()**, temos que chamar a função **{handleMarkAsDone(todos)}** a partir de outra função, pois se chamarmos direto, sem a **arrow function**, o que estamos retornando no *onClick()*, é o resultado de {props.handleMarkAsDOne()} e nao a função que é o que queremos.

    2 - O Segundo icone que iremos criar terá como atributos:
        [style=warning & icon=undo]
    -> O [ONCLCICK] tambem irá apontar para uma função(todo)que será passada como parametro.
~~~javascript
[/src/todo/todoList.jsx]

import React from "react";

import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton
                        style='success'
                        icon='check'
                        onClick={
                            () => props.handleMarkAsDone(todo)
                        }
                    />
                    <IconButton
                        style='warning'
                        icon='undo'
                        onClick={
                            () => props.handleMarkAsPending(todo)
                        }
                    >
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        onClick={
                            () => props.handleRemove(todo)
                        }
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

Logo, todas essas funções que estamos recebendo, o estado que estamos manipulando vem a partir de propriedades que estamos enviando do **componente todo.jsx**. Ja que essa é a estrategia mais simples de se trabalhar pois não temos um *gerenciamento de estado por componente*.

Vamos agora na nossa classe **todo.jsx** criar os *metodos* que irão marcar e desmarcar as tarefas, eles que serão as funções passadas como propriedades para os componentes filhos, no cado **todoList.jsx**.


    3 - Vamos fazer primeiro o [MarkAsDone], ele irá receber a tarefa(todo), e vamos usar o [axios.put()], para fazer uma ALTERAÇÃO, na propriedade [DONE] do nosso objeto.
    -> Como so queremos alterar a variavel booleana DONE para true. Chamamos a [URL+ID - chamada de atualização, passa o id] como primeiro parametro, e o segundo parametro será o objeto com o dado [done: true].
    -> Usamos o operador SPREDDING[...todo] para pegar todos os dados desse objeto "copiando", e mudamos o dado que representa o status [done] para TRUE.
~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(
                resp => this.refresh()
            )
    }
    handleDone(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:true,
        })
            .then(
                resp => this.refresh()
            )
    }
    handlePending(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:false,
        })
            .then(
                resp => this.refresh()
            )
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove = {this.handleRemove}
                />
            </div>
        )
    }
}

~~~

    4 - Agora para passarmos esses metodos para nosso componente de LISTA, temos que chamar a propropriedade esperada no [todoList.jsx], passando os metodos como propriedadades, lembrar de fazer o bind no constructor.
~~~javascript
[/src/todo/todo.jsx]
import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(
                resp => this.refresh()
            )
    }
    handleDone(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:true,
        })
            .then(
                resp => this.refresh()
            )
    }
    handlePending(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:false,
        })
            .then(
                resp => this.refresh()
            )
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove = {this.handleRemove}
                    handleMarkAsDone={this.handleDone}
                    handleMarkAsPending = {this.handlePending}
                />
            </div>
        )
    }
}

~~~

Para podermos ver algum efeito visual, vamos fazer uma configuração rapida em nosso **todoList.jsx**.

    5 - No <td> vamos colocar um CLASSNAME onde vamos usar uma renderização condicional.
        -> Se todo.done, ou seja, se a terefa estiver concluida, ele irá mostrar a classe [markAsDone].
        -> Se não tiver, ou seja, retorna falso, ele não irá mostrar nada.
~~~javascript
[/src/todo/todoList.jsx]

import React from "react";

import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style='success'
                        icon='check'
                        onClick={
                            () => props.handleMarkAsDone(todo)
                        }
                    />
                    <IconButton
                        style='warning'
                        icon='undo'
                        onClick={
                            () => props.handleMarkAsPending(todo)
                        }
                    />
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        onClick={
                            () => props.handleRemove(todo)
                        }
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

    6 - Para vermos isso funcionar, temos que criar uma CSS especifico para gente que iremos chamar de /template/CUSTOM.CSS.
    -> Vamos colocar algumas classes css dentro deste arquivo

~~~css
[/src/template/custom.css]
.btn {
    margin-right: 5px;
}
.markedAsDone{
    text-decoration: line-through;
    color: #777;
}
~~~

    7 - Para podermos usar esse CSS, na esfera do WEBPACK, o webpack so consegue acessar uma arquivo se a partir do INDEX tiver alguma arquivo que importe dentro do que queremos. pode ser num componenete ou qualquer lugar, mas tem q estar importando em algum arquivo linkado ao nosso webpack.
    -> Vamos em [/main/app.jsx], nos fizemos o import do CSS DO BOOTSTRAP, vamos fazer o do nosso la tambem.
~~~javascript
[/src/main/app.jsx]
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'

import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)  

~~~


    8 - Outra coisa que teremos que fazer, é que esses botões sejam escondidos, para fazer isso é muito simples, em [todoList.jsx] basta colocamos [hide={todo.done}].
    -> No caso do success, se tiver feito, temos que esconder o botão success.
    -> No caso do botão [undo] temos o caso ao contrario, ele irá esconder caso ele não esteja concluido, ou seja, podemos usar o operador de negação (!) .
    -> No caso do botão de excluir, usamos a mesma regra do UNDO.
~~~javascript
[/src/todo/todoList.jsx]

import React from "react";

import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style='success'
                        icon='check'
                        onClick={
                            () => props.handleMarkAsDone(todo)
                        }
                        hide={todo.done}
                    />
                    <IconButton
                        style='warning'
                        icon='undo'
                        onClick={
                            () => props.handleMarkAsPending(todo)
                        }
                        hide={!todo.done}
                    />
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        onClick={
                            () => props.handleRemove(todo)
                        }
                        hide={!todo.done}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

~~~

Colocamos o hide, para que não fosse obrigado, como no caso do show, termos que ficar colocando todos os icones. Usando o **hide** colocamos somente no que queremos controlar. O que deixa uma logica meio estranha pois eh a negação da negação, mas de qualquer forma ele irá esconder.  

Proxima aula irems mexer com a parte de pesquisa da nossa aplicação, e depois iremo aplicar alguns estilos a nossa aplicação.

&nbsp;

---

---

## [Aula 148] - PESQUISA DE TODOS

&nbsp;


Vamos agora adicionar o botão que seria para fazermos a pesquisa das nossas tarefas. Para isso, vamos no **/todo/todoForm.jsx**, que é justamente o componente que controle esse campo de texto e os botões. Em *todoForm.jsx* temos por enquanto o botão de *Adicionar*, vamos fazer o da pesquisa com o icone da lupa.

    1 - Vamos adicionar outra TAG de componente de botão. Nela iremos passar o [style=info | icon=search] e o [onClick] será um metodo que iremos criar em [todo.jsx], chamado [handlesearch].
~~~javascript
[/src/todo/todoForm.jsx]

import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12-9-10'>
            <input 
                id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa"
                value={props.description}
                onChange={props.handleChange}
             />
        </Grid>
       <Grid cols='12 3 2'>
           <IconButton 
                style='primary' 
                icon='plus' 
                onClick={props.handleAdd} 
            />
            <IconButton
                style='infor'
                icon='search'
                onClick={props.handleSearch}
            />
       </Grid>
    </div>
)

~~~

    2 - Antes de criamos o metodo que fizemos referencia no [todoForm.jsx], vamos fazer uma pequena alteração no metodo de refresh() que criamos.
    -> Nesse momento ele esta servindo para consultar a lista atualizada, inclusive ele esta zerando a descrição em um certo momento.
    -> Uma das alterações que iremos fazer, é que iremos passar como parametro para o metodo REFRESH() uma descrição, que pode ser usada para ele consultar, não apenas todos, mas tamem a partir de uma descrição especifica usando um filtro que iremos configurar nessa URL.
    -> O proprio NODE RESTFUL, que é o API onde construimos nossos WEBSERVICES no backend ele possui alguns filtros embutidos, vimos isso quando estavamos construindo a API, como exemplo o [sort=-createdAt], esta fazendo uma ordenação descrecente.
    -> Vamos criar uma constante chamada SEARCH, onde, se o DESCRIPTION estiver setado, for diferente de vazio | nulo | undefined, por exemplo, vamos adicionar uma novo parametro chamado [description_regex] e vamos adicionar o CONTENT, para afzer essa buscar.
    -> Se ele possui a descrição, irá entrar na url
        [&description__regex=/${description}]
    -> Se não possui essa descrição de busca, vamos colocar simplesmente uma string vazia.
~~~javascript
[/todo/todo.jsx - att refresh()]

refresh(description = ''){
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt`)
        .then(
            resp => this.setState({
                ...this.state,
                description: '',
                list:resp.data,
            })
        )
}

~~~

    3 - Apos a criação dessa variavel, podemos coloca-la na nossa tempalte string que esta fazendo o GET na URL().
    -> Estamos fazendo aqui, concatenações para criarmos uma URL, por isso estamos usando o (&) na variavel search.
~~~javascript
[/todo/todo.jsx - att refresh()]

refresh(description = ''){
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
        .then(
            resp => this.setState({
                ...this.state,
                description: '',
                list:resp.data,
            })
        )
}

~~~

    4 - Vamos agora construir nosso metodo chamado [HANDLESEARCH], onde vamos simplesmente dentro dele passar a função de refresh e como propriedade desta função refresh vamos passar a descrição atual que esta no estado. Pois queremos fazer uma pesquisa em cima de algo que digitamos.
    -> Lembrando que para que esse metodo funcione precisamos fazer um BIND() no constructor, e passar a função pelo atriubuto na TAG do formulario.
~~~javascript
[/src/todo/todo.jsx]

import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.refresh()
    }
    refresh(description = ''){
        const search = description ? `&description__regex=/${description}` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(
                resp => this.refresh()
            )
    }
    handleSearch(){
        this.refresh(this.state.description)
    }
    handleDone(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:true,
        })
            .then(
                resp => this.refresh()
            )
    }
    handlePending(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:false,
        })
            .then(
                resp => this.refresh()
            )
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                    handleSearch={this.handleSearch}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove = {this.handleRemove}
                    handleMarkAsDone = {this.handleDone}
                    handleMarkAsPending = {this.handlePending}
                />
            </div>
        )
    }
}
~~~

>Cadastre algumas tarefas com palavras iguais e faça uma pesquisa para testar. 

Algo que esta acontecendo é, fizemos a pesquisa e marcamos uma tarefa, ele apos a marcação esta saindo automaticamente da pesquisa e não queremos que ele faça isso. Como não é esse o comportamento que esperamos por padrão, logo na nossa função de **refresh()**, em vez de apagarmos , adicionamos ao estado atual a descrição que foi passada no propri refresh. 

Com isso vamos ter que adicionar o **description** ao **refresh()** de algumas ações, quando removemos, vamos passar como propriedade o **this.state.description** , vamos fazer a mesma cosia para os outros metodos menos o de adicionar.

&nbsp;

---
---

## [Aula 149] - MELHORIAS DE CSS E LIMPAR FORMULÁRIO

&nbsp;



Vamos fazer algumas pequenas melhorias de **layout** na nossa aplicação. Vamos entrar no nosso arquivo de CSS que fizemos algumas aulas passadas chamado **custom.css**.

    1 - Nele vamos colocar por exemplo uma classe chamada [tableAction], com [width=105px - para caber dois botões, os botões devem ser 50px mais ou menos]
    -> Vamos tambem criar uma classe chamada [todoForm] para darmos um espaçamento entre esse campo de texto e a tabela [padding-bottom=60px]
~~~css
[/src/template/custom.css]
.btn {
    margin-right: 5px;
}
.markedAsDone{
    text-decoration: line-through;
    color: #777;
}
.tableAction{
    width: 105px;
}
.todoForm{
    padding-bottom: 60px;
}
~~~
    2 - Apos fazer essas configurações iniciais, temos que adicionar as novas classes que criamos em [todoList.jsx - botão], o espaçamento entre o FORMS e o LIST ja foi aplicado. 
    -> Vamos colocar a classe que falta do botão no <TH> por exemplo.
~~~javascript
[/src/todo/todoList.jsx]
import React from "react";

import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style='success'
                        icon='check'
                        onClick={
                            () => props.handleMarkAsDone(todo)
                        }
                        hide={todo.done}
                    />
                    <IconButton
                        style='warning'
                        icon='undo'
                        onClick={
                            () => props.handleMarkAsPending(todo)
                        }
                        hide={!todo.done}
                    />
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        onClick={
                            () => props.handleRemove(todo)
                        }
                        hide={!todo.done}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableAction">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
~~~

    3 - Vamos agora criar a nossa assim de LIMPAR O FORMULARIO.
    -> Para isso, em [todoForm.jsx] vamos adicionar um novo botão, que será o de limpar o formulario. [style = default | icon = close].
    -> Ele terá no seu [ONCLICK] o metodo enviado via propriedades pela classe [Todo], chamado de [handleClear]
    -> Ja fizemos essa criação dos botões varias vezes, o que a torna repetitiva e facil de gravar.
~~~javascript
[/src/todo/todoForm.jsx]
import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12-9-10'>
            <input 
                id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa"
                value={props.description}
                onChange={props.handleChange}
             />
        </Grid>
       <Grid cols='12 3 2'>
           <IconButton 
                style='primary' 
                icon='plus' 
                onClick={props.handleAdd}
            />
            <IconButton
                style='infor'
                icon='search'
                onClick={props.handleSearch}
            />
            <IconButton
                style='default'
                icon='close'
                onClick={props.handleClear}
            />
       </Grid>
    </div>
)
~~~

    4 - Agora iremso no nosso [todo.jsx] construir o metodo, fazer o bind() no cosntructor e passar a função para o componente via a propriedade.
    -> Esse metodo de limpeza so precisa chamar a função refresh(), que faz esse trabalho ja de limpar o campo e trazer a tabela para sua versão mais nova.
~~~javascript
[/src/todo/todo.jsx]

import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }
    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description,
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(
                resp => this.refresh(this.state.description)
            )
    }
    handleSearch(){
        this.refresh(this.state.description)
    }
    handleDone(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:true,
        })
            .then(
                resp => this.refresh(this.state.description)
            )
    }
    handlePending(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:false,
        })
            .then(
                resp => this.refresh(this.state.description)
            )
    }
    handleClear(){
        this.refresh()
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                    handleSearch={this.handleSearch}
                    handleClear = {this.handleClear}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove = {this.handleRemove}
                    handleMarkAsDone = {this.handleDone}
                    handleMarkAsPending = {this.handlePending}
                />
            </div>
        )
    }
}
~~~


Como quisemos conscentrar tudo relacionado a **logica** e **gerenciamento de estado * na **classe** *Todo.jsx* para facilitar, acabou que esse arquivo ficou gigante, se separassemos em mais componentes, talvez a comunicação ficasse mais dificl de ser feita.


&nbsp;

---

---

## [Aula 150] - ADICIONAR TECLAS DE ATALHO

&nbsp;

Para fecharmos com chave de ouro nosso projeto, vamos querer configurar para que possamos adicionar uma tarefa a partir do botão **ENTER**, e vamos tambem querer fazer uma pesquisa a partir do botão **SHIFT-ENTER** e queremos tambem que o campo de *pesquisa/cadastro*, limpe quando apertarmos a tecla **ESC**.

    1 - Vamos no nosso [todoForm.jsx] e nele iremos primeiro fazer uma pequena alteração que será a seguinte:
    -> Como vamos ter um metodo dentro de [TodoForm.jsx], vamos ter que substituir os (parenteses) pelas {chaves}, colocando o que tinhamos escrito, dentro de um RETURN.
~~~javascript
[/src/todo/todo.jsx]

import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => {
    return (
        <div role='form' className="todoForm">
            <Grid cols='12-9-10'>
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton 
                    style='primary' 
                    icon='plus' 
                    onClick={props.handleAdd}
                />
                <IconButton
                    style='infor'
                    icon='search'
                    onClick={props.handleSearch}
                />
                <IconButton
                    style='default'
                    icon='close'
                    onClick={props.handleClear}
                />
            </Grid>
        </div>
    )
}
~~~

    2 - Dentro do nosso componente, vamos criar uma função chamada [keyHandler].
    -> Essa função irá receber um evento, onde iremos fazer uma teste.
                        [keyHandler = (e) => {teste}]
        - [ENTER] se a chave que foi apertadar for um ENTER, vamos perguntar se o SHIFT esta apertado se tiver, chamamos o metodo de BUSCA se não tiver vamos chamar o medoto de ADIÇÃO. 
        - [ESC] se a chave que foi apertadar for um ESCAPE, vamos chamar o metodo PARA LIMPAR.
~~~javascript
[/src/todo/todo.jsx]

import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className="todoForm">
            <Grid cols='12-9-10'>
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton 
                    style='primary' 
                    icon='plus' 
                    onClick={props.handleAdd}
                />
                <IconButton
                    style='infor'
                    icon='search'
                    onClick={props.handleSearch}
                />
                <IconButton
                    style='default'
                    icon='close'
                    onClick={props.handleClear}
                />
            </Grid>
        </div>
    )
}
~~~

    3 - Agora precisamos colocar no nosso <input> um evento chamado [onKeyUp] que irá apontar para o metodo que criamos [keyHandler].
    -> Automaticamente agora estaremos com essa funcionalidade de teclados funcionando.
~~~javascript
[/src/todo/todo.jsx]

import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className="todoForm">
            <Grid cols='12-9-10'>
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp = {keyHandler}
                />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton 
                    style='primary' 
                    icon='plus' 
                    onClick={props.handleAdd}
                />
                <IconButton
                    style='infor'
                    icon='search'
                    onClick={props.handleSearch}
                />
                <IconButton
                    style='default'
                    icon='close'
                    onClick={props.handleClear}
                />
            </Grid>
        </div>
    )
}
~~~
Apos fazer alguns teste vemos que nossa aplicação esta funcionando juntamente com as TECLAS de atalho.

Proxima seção iremos começar a entrar no mundo do **Redux**, vamos utilizar esse mesmo projeto que criamos, onde iremos migrar ele para o **gerenciamento de estado com redux**, onde irá aumentar a complexidade, pois é outra biblioteca.

Mas como ja foi dito, não temos como fazer projetos maiores essa comunicação normal entre os componentes do react, os componentes ficam divididos em varios lugares e as vezes um componente precisa de um determinado dado que esta em outro e não possui ligação direta com ele.

# ==== [Seção 9 - GERENCIAMENTO DE ESTADO COM REDUX ] ====


&nbsp;

---

---

## [Aula 151] - INTRODUÇÃO AO MÓDULO

&nbsp;