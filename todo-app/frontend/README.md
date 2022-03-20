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

## [Aula 133] - COMPONENTES TODO E ABOUT

&nbsp;



