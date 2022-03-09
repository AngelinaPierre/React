
# ==== [Seção 6 - Projeto Cadastro (Integração com Banco de dados (Firestore)) ] ====

&nbsp;

---

---

## [Aula 81] - Configuração do Projeto.

&nbsp;

Projeto Cadastro - Integração com Banco de dados (Firestore).

Vamos começar agora a primeira parte do AULÃO de NextJS, onde vamos trabalhar a aprte dos fundamentos do framework para depois construir uma aplicação.

    1 - Vamos Criar uma pasta chamada /aulao_nextjs e dentro desta pasta vamos criar o nosso primeiro projeto que diz respeito aos fundamentos.
~~~
    npx create-next-app fundamentos
~~~
    2 - Apos a aplicação ser criada vamos construir o restante das configurações.

Essa aplicação onde vamos trabalhar com os fundamentos, grande parte do tempo vamos trabalhar basicamente com javascript, sem intrpduzir o typescript, depois no final vamos mostrar como é feita a integração.

Quando formos pra aplicação, desde o começo iremos usar o typescript pq ele nos ajuda em alguns aspectos. Tudo o que tem no javascript o typescript tbm susporta ,logo ele acrescenta uma serie de funcionalidade, issoa caba trazendo alguns beneficios para os nossos projetos.

    3 - Uma vez o projeto instalado, podemos inicia-lo com o comando:
~~~
    npm run dev
~~~~ 

Observação importante, antes da instalação do projeto é preciso ter o [node] instalado na maquina.

~~~
node --version    -> versão usada : 16.3.0
~~~

    4 - Vamos criar uma pasta chamada /src e colocar duas pastas do projeto dentro dela. [/styles & /pages].
    -> A pasta /public deixa fora do /src.
    -> A pos isso basta rodar o mesmo comando de [npm start dev]
    -> Essa configuração melhora na organização pois dentro de /src iremos criar outras pastas.  

    5 - Criar as pasta /componentes para nos ajudar no processo de construir a aplicação de fundamentos.

    6 - Outra modificação é, entrando na pasta /pages teremos dois arquivos [_app.js & index.js], esses arquivos são arquivos javascript. 
    -> Porem, dentro do arquivo, temos codigos escritos em [jsx], o que podemos fazer é trocar a extensão do arquivo de [js] para [jsx] para que o vscode possa lidar com esse tipo de arquivo.
    -> Quando mudarmos a do [_app.js] se tivessemos com a aplicação rodando iria dar um problema, basta reinicia-la.

No caso do NextJS, ele suporta varias extensões [js - javascript | ts - typescript | jsx - javascrips com react & tsx - typescript com react].


&nbsp;

---
---
## [Aula 82] - O que é NextJS ?

&nbsp;

O **NextJS** é a versão framework do REACT, o react é a BIBLIOTECA javascript mais popular do mundo para construção de aplicações FRONT-END do mundo, e o NextJS acresta ao react uma estrutura, uma serie de funcionalidades interessantes para que voce tenha uma estrutura basica para cosntruir sua aplicação.

Framework possui essa idea de lhe dar uma estrutura pre-pronta para que voce possa personalizar e a partir dai começar a desenvolver as suas aplicações.

NextJs = Versão framework da biblioteca FRONT-END mais famosa do mundo, que é o React. 


&nbsp;

---
---
## [Aula 83] - Estrutura de Pastas

&nbsp;

Vamos resaltar 3 pastas [/public,/pages,/styles]. Qualquer aplicação web se basea em 3 tecnologias (html, css e javascript).

[/styles] -> Arquivos CSS
    -> Temos dois padrões de nomenclatura:
        1) nome.css (css global - impacta em toda a aplicação)
        2) nome.module.css (css escopado/modularizado - impacta componentes especificos onde for importado (nome.componente)).
[/pages] -> Temos o arquivo que esta sendo carregado no browser nesse momento (index.jsx).
    -> Temos tbm uma pasta chamada /api que é uma subpasta de /pages, dentro desta pasta temos o (hello.js), se colocarmos [localhost:3030/api/hello], veremos o arquivo.
    -> Se abrirmos o arquivo veremos o o nome e poedmos altera-lo.
[/public] -> imagem, fonte, video, gif. 
    -> Podemos criar subpastas: [/img, /fonts], podemos colocar arquivos aqui dentro que serão servidos para a nossa aplicação de forma estatica.


Ou seja, o NextJs é um framework FULLSTACK, irá te dar tanto a parte do front-end quanto irá permitir que voce crie sua API dentro dele.


&nbsp;

---
---
## [Aula 84] - Primeiro Componente & Rotas

&nbsp;

Para iniciar vamos excluir o arquivo /pages/index.jsx para aprendermos a criar do zero e entender como funciona a criação de componentes dentro do react vendo as funcionalidades especificas do nextJS.

    1 - Vamos recriar o arquivo /pages/index.jsx e dentro dele vamos criar uma função (Inicio()) e vamos retornar uma string ("Inicio").
    -> Nesse momento não iremos conseguir ver a string refletida na tela. Mostra um erro dizendo que tentou acessar um componente mas que ele não foi exportado por padrão. Temos que ir no [index.jsx] e colocar as palavras "export default".
    -> Assim, vamos exportar uma função, pois iremos criar um componente funcional. Em react podemos criar um componente funcional e um componente baseado em classe.
~~~javascript
export default function Inicio() {  
    return "Inicio"
}
~~~

Antes de proseguirmos vamos fazer uma resalta sobre a pasta /pages: Nessa pasta, se criarmos arquivos simples como o de agora [Index.jsx - função Inicio()], exemplo /pages/teste.jsx e fazermos uma função simples exportando ela por padrão, teremos acesso a uma url chamada /teste [localhost:3030/teste](localhost:3030/teste) e se entrarmos nele, irá mostrar exatamente o conteudo desse arquivo.

A primeira coisa que devemos lembrar e entender é que o NextJs é um FrameWork que ele foca muito em nao precisar configurar as cosias, vamos usar uma serie de convenções e essas convenções irão te ajudar a desenvolver asua aplicação. Uma delas é ao criar o arquivo dentro da pasta /pages, automaticamente voce tem acesso a esse arquivo seguindo o mesmo caminho de pastas que colocamos.

EX: A url para o arquivo [teste.jsx] agora é [localhost:3030/abc/def/teste](localhost:3030/abc/def/teste)

```text
|--- |pages
|--- |--- |abc
|--- |--- |--- |def
|--- |--- |--- |--- |teste.jsx
|--- |--- |api
|--- |--- |_app.jsx
|--- |--- |index.jsx
```

Moral da historia, esses arquivos irãoe xportar um componente react, como qualquer outro componente react que temos, so que com um proposito especial, de tambem ter associado a esse componente uma URL e conseguirmos acessa-lo de uma forma que ele irá renderizar a pagina que voce esta acessando a partir da URL.

Então esse componente que colocamos dentro da pasta /pages, ele tem como proposito agrupar uma serie de outros componentes para formar uma pagina completa. Logo a estrutura de paginas que definirmos será a estrutura que ele irá usar na url seguindo a mesma sequencia utilizada dentro do codigo.


&nbsp;

---
---
## [Aula 85] - Entendendo o JSX

&nbsp;

Uma das primeiras coisas que iremos trabalhar é um conceito fundamental do React, lembre que estamos falando de fundamentos, logo é impossivel deixar o React de lado, vamos mesclar aspectos do react com o do NextJs, que seria o que falamos na aula passada sobre o sistema de **[ROTAS]** - Automaticamente criando um arquivo dentro de pages temos acessoa url seguindo a mesma estrutura de pasta que colocamos, inclusive usando letras maiusculas e minusculas. Normalmente dentro da pasta /pages iremos padronizar os arquivos para terem letras minusculas, e fora da pasta /pages, dentro da /components vamos padronizar os componentes para terem o nome do arquivo com a primeira letra maiscula.

O fato de usarmos arquivos com extensão (.jsx) é que irá facilitar nos escrevermos codigos (.jsx), e a ideia de escrever codigos (jsx) é a criação de [TAGS]

Por exemplo: O codigo abaixo será interpretado como um codigo html ou textual?
~~~javascript
export default function Inicio() {
    return "<h1>Titulo</h1>"
}
~~~

Nesse caso será interpretado como valor textual, inclusive essas marcações (h1) irão aparecer na nossa pagina pois ele não irá interpretar como HTML.

Para renderizar um titulo de verdade usamos JSX. Podemos utilizar a API do React para fazer isso, mas vamos utilizar um tipo de sintaxe  que não fará com que fique dentro de aspas duplas. 

    1 - Vamos colcoar o <h1> diretamente apos o {return}.

~~~javascript
export default function Inicio(){
    return <h1>TItulo</h1>
}
~~~

Agora esse é um tipo de função que se jogarmos ela no console do browser, ele irá informar que não sabe o que é, pois eh uma sintaxe especifica que será convertido para codigo javascript puro.

A sintaxe JSX permite dentro do componente colocar trechos de "HTML", entre aspas pois, parece HTML, mas na verdade é javascript. 

Ja vimos que se criamos novos arquivos, gerarmos novas funções e exporta-las por padrão iremos gerar novas paginas na nossa aplicação.

No return é costume colcoar um parenteses() para podermos colocarmos trechos de codigo maiores, por exemplo:

~~~javascript
export default function Inicio() {
    return (
        <div>
            <h1> Fundamentos de Next.js & React</h1>
            <h2> Vamos estudar esse framework</h2>
        </div>
    )
}
~~~

Podemos assim ir colocando estruturas mais complexas. Se não quiser colcoar, teremos que colcoar a primeira div do exemplo acima colocando a primeira div ao lado do (return). 

O Par de parenteses nos ajuda tambem a entender em qual situação ocorrerá a renderização.

Feito isso, geramos nosso primeiro componente no [index.jsx] com [div, h1 , h2].

Outra coisa legal é que se olharmos para o codigo fonte da pagina, veremos que o trecho que colocamos foi gerado do lado do servidor e não do lado do cliente como normalmente acontece numa aplicação REACT.

&nbsp;

---
---
## [Aula 86] - Integração Javascript/JSX

&nbsp;


JSX é um dos conceitos centrais tanto do REACT quanto do NextJS, tudo que for conceito central do React, automaticamente é conceito do NextJS pois o react é fundamental para o NextJS.

Vamos criar outro exemplo para entendermos como funciona a questão do JSX e como isso é importante para voce entender o Next e o react.

    1 - Vamos criar uma arquivo chamada /pages/jsx.jsx.
    -> Vamos exportar por padrão uma função [Jsx()] e vamos retornar um trecho de jsx.
    -> Para acessar esse arquivo basta colcoarmos localhost:3030/jsx

~~~javascript
[/pages/jsx.jsx]

export default function Jsx(){
    return (
        <div>
            <h1> JSX é um conceito Central.</h1>
        </div>
    )
}

~~~

Dentro dos paranteses do [return()] nos estamos em um contexto diferente, fora do [return()] temos um texto de JAVASCRIPT PURO, logo podemos trabalhar com constantes dentro desse scopo.
~~~javascript
export default function Jsx(){
    const a = 1
    const b = 3
    console.log(a+b)
    return(
        <div>
            <h1> JSX é um conceito Central</h1>
        </div>
    )
}
~~~

Dentro do [return()] não temos codigo JAVASCRIP PURO, logo não podemos criar constantes dentro desse scopo. O conteudo será colocado como texto html.

A pergunta é... Existe alguma maneira de acessarmos o mundo do JAVASCRIPT dentro de um trecho JSX? simmmmmm

Para isso usamos um par de chaves {}, quando usamos um par de chaves significa que dentro dele podemos colocar codigo JAVASCRIPT.

~~~javascript

export default function Jsx(){
    const a = 4
    const b = 3
    console.log(a+b)
    return(
        <div>
            <h1> JSX é um conceito Central</h1>
            {a*b}
        </div>
    )
}
~~~

Assim conseguimos acessar valores que foram definidos fora do meu trecho JSX. POdemos como outro exemplo, gerar numeros aleatorios da seguinte maneira:
~~~javascript
export default function Jsx(){
    const a = 4
    const b = 3
    console.log(a+b)
    return(
        <div>
            <h1> JSX é um conceito Central</h1>
            {Math.random()}
        </div>
    )
}
~~~

Logo, quando utilizamos um par de chaves {} significa que temos acesso a coisas que foram definidas dentro do JAVASCRIPT, podemos usar variaveis, uma string literal...

~~~javascript
export default function Jsx(){
    const a = 4
    const b = 3
    console.log(a+b)
    return(
        <div>
            <h1> JSX é um conceito Central</h1>
            {"muito legal".toUpperCase()}
        </div>
    )
}
~~~

Podemos tambem colcoar esse trecho dentro de uma tag HTML, exemplo H2.

~~~javascript
export default function Jsx(){
    const a = 4
    const b = 3
    console.log(a+b)
    return(
        <div>
            <h1> JSX é um conceito Central</h1>
            <h2>{"muito legal".toUpperCase()}</h2>
        </div>
    )
}
~~~

A questão é saber qual eh a forma de acessar o mundo do JAVASCRIPT dentro do JSX usando um par de chaves. Alguns outros frameworks utilizam uma dupla chaves  {{}}, quando fazemos isso, o vscode nos indica que dentro da segunda chave nos temos um objeto. Ja que a forma de se criar um objeto eh:
~~~javascript
const obj = {nome:'joao',idade:30}
~~~
~~~javascript
[Definiçao literal de objeto.]
return(
    <div>
        <h1>JSX é um conceito Central</h1>
        <h2>{"muito legal".toUpperCase()}</h2>
        <p>
            {{nome:'joao',idade:30}}
        </p>
    </div>
)
~~~
O codigo acima damaneira que esta ira dar um erro, temos que converter o objeto para string para ele ser mostrada no pagina se utilizarmos esse formatação:
~~~javascript
return (
    <div>
        <h1>JSX é um conceito Central</h1>
        <h2>{"muito legal".toUpperCase()}</h2>
        <p>
            {JSON.stringify({nome:'joao',idade:30})}
        </p>
)
~~~

Outra coisa importante é que conseguimos tratar JSX dentro d JAVASCRIPT de uma forma bem natural, conseguimos criar uma constante qualquer recebendo o valor de um [h1] por exemplo.
~~~javascript
const titulo = <h1>JSX é um conceito Central</h1>
~~~

A pergunta é... Como acessar a constante dentro do trecho JSX? Podemos usar um par de chaves e simplesmente refeerenciar a constante criada (titulo).
~~~javascript

return (
    <div>
        {titulo}
        <h2>{"muito legal".toUpperCase()}</h2>
        <p>
            {JSON.stringify({nome:'joao',idade:30})}
        </p>
    </div>
)
~~~

Se vermos no Browser teremos o titulo sendo exibido e armazenamos em uma constante um texto de JSX.

É assim que se da a integração entre JAVASCRIPT E JSX, podemos criar uma constante e armazenar um trecho jsx, como podemos acessar o JAVASCRIPT usando um par de chaves{}.

Vamos por exemplo criar uma função chamada (subtitulo) que ira retornar o subtitulo [h2].
~~~javascript
function subtitulo(){
    return <h2>{"muito legal".toUpperCase()}</h2>
}
~~~
obs: referenciar = {titulo} | invocar = {subtitulo()}

Agora podemos no [ return(JSX)] **INVOCAR** com um par de chaves, um trecho JAVASCRIPT, chamando a função subtitulo(). Para uma vez invocando essa função recebermos o retorno dela [h2] e assim exibirmos o subtitulo na pagina.
~~~javascript
return (
    <div>
        <p>
            {JSON.stringify({nome:'joao',idade:30})}
        </p>
    </div>
)
~~~

Se quisermos podemos retornar um array de elementos e ter varios elementos dentro, ele será mostrado no browser.

Temos um integração muito interessante entre Javascript e JSX, podemos criar uma função javascript que retorna um trecho jsx, vc pode armazenar um trecho JSx dentro de ma constante e poedmos referenciar funções dentro do seu JSX e constantes tbm, e chamar codigo javascript dentro do par de chaves.

~~~javascript 
[[jsx.jsx - estrutura final]]

export default function Jsx(){
    const titulo = <h1>JSX é um conceito Central</h1>
    function subtitulo(){
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    return (
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome:'joao',idade:30})}
            </p>
        </div>
    )
}
~~~

&nbsp;

---
---
## [Aula 87] - CSS GLOBAL

&nbsp;

Vamos agora ver um pouco sobre o CSS Global da nossa aplicação. Ele fica dentro da pasta /styles/globals.css e esse arquivo esta sendo [referenciado] dentro desse outro arquivo chamado /pages/_app.jsx.
~~~css
html,body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

~~~

~~~javascript
[/pages/_app.jsx - ESTRUTURA INICIAL]

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
~~~

Se vermos o arquivo [_app.jsx] vemos que ele esta referenciando o CSS global a função MyApp() é exatamente a função que fará com que as paginas sejam exibidas, se ele for excluido sua aplicação irá parar de funcionar.

Vamos fazer algumas alterações no CSS global:

    1 - body: background-color | color

Essas configurações de CSS irão servir tanto para o componente [jsx.jsx] quanto para os outros [index.jsx].

Podemos criar um outro estilo para nossa aplicação, por exemplo, podemos criar um arquivo em [/styles/app.css] e podemos por exemplo, colocar a parte da personalização do background que acabamos de fazer, dentro do arquivo [app.css] e retirando do global.

A pagina voltará a ter as configurações iniciais (branca font preta) mas podemos referenciar esse arquivo novo [app.css] no mesmo local que referenciamos o css global.

Podemos criar quantos CSS globais quisermos para nossa aplicação, e depois referenciar eles dentro do arquivo [_app.jsx]

~~~css
[app.css]

html,body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    background-color: #222;
    color:#eee; 
}
~~~


~~~css
[globals.css]

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

~~~

~~~javascript
[_app.jsx]

import '../styles/globals.css'
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

~~~

&nbsp;

---
---
## [Aula 87] - CSS MODULARIZADO

&nbsp;

VAmos agora falar sobre o CSS MODULARIZADO, vamos excluir o arquivo [/styles/home.modules.css] e criar outro componente chamado /pages/estiloso.jsx.

Vamos criar um componente funcional e por via de regra, as funções começam com letra maiuscula.

~~~javascript
export default function Estiloso(){
    return (
        <div>
            <h1> Estilo usando CSS Módulos</h1>
        </div>
    )
}
~~~

Vamos agora aplicar um estilo especifico para esse componente, podemos criar o arquivo CSS dentro da pasta /pages, onde esta o componente, vamos fazer isso, o nome do arquivo será [Estiloso.modules.css].

Lmebre-se que precisamos colocar a extensão [.modules.css], e dentro do arquivo podemos criar a classe com o nome que quisermos.

~~~css
[Estiloso.modules.css]

.roxo{
    background-color:#670bbd;
    color:#fff;
}
~~~

Agora nos temos um arquivo com a extensão [.modules.css] e normalmente colocamos o mesmo nome do arquivo. Agora dentro do componente [Estiloso.jsx] vamos importar o arquivo referenciando ele como (styles - podendo colocar o nome que quiser).

Apos fazer o import, vamos referenciar a class[.roxo - Estiloso.modules.css] dentro do nosso componente [Estiloso.jsx]. Para referenciar uma classe usando CSS usamos o atriuto [className=""].

Se colocarmos a classe CSS(.roxo) diretamente no [className] não irá funcionar, temos que utilizar a referencia (styles) que usamos no import, juntamente com a classe q definimos.

~~~javascript
import styles from './Estiloso.modules.css'
export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <h1> Estilo usando CSS Módulos</h1>
        </div>
    )
~~~

Feito isso agora conseguimos aplicar o [Estilo.modules.css] em [Estilo.jsx].

    - Podemos incrementar um pouco mais o CSS colocando a ALTURA (height) para ser [100vh - altura absoluta], divide a altura em 100 partes. Se estamos usando 100 partes de 100 partes, significa que estamos usando 100% da altura. Se colocarmos [50vh] irá ocupar 50% do espaço.
    - Vamos colocar um [margin:0] no h1 para poder melhorar a visualização.

~~~css
.roxo{
    height: 100vh;
    background-color:#670bbd;
    color:#fff;
}

.roxo h1{
    margin:0;
}
~~~

Podemos usar essa mesma classe falando: Tudo que é da classe (styles.roxo) e possui um h1, aplique o estilo. O que não conseguimos fazer é dentro de uma CSS MODULARIZADO [Estiloso.modules.css], seria usar um seletor [h1], seletor de 1 elemento, pois irá afetar a aplicação inteira.

Se fizermos isso, iremos receber um erro informando que o seletor [h1] não é "puro". O seletor "puro" deve conter pelo menos uma [classe CSS] ou uma [ID CSS].

Podemos colocar um CSS com o seletor de um elemento dentro do [globals.css] mas não dentro de [.modules.css]. Por isso colocamos no css modularizado a seguinte linha de cosigo css para acessar o [h1].

~~~css
.roxo h1{
    margin:0;
}
~~~

Podemos observar pelo browser, que ele ira criar uma class chamada **[Estiloso_roxo_1MX7k]**, ele gera uma valor aleatorio para tratar exatamente a questão da modulaziração. Para que essa classe não gere impacto para nenhum componente na aplicação.

Recapitulando: Temos um arquivo [.module.css], importamos esse arquivo criando uma referencia para utilizar ele (ex: styles), e aplica o estilo usando: **{styles.roxo}**

Então existe a necessidade de acessar via o import {styles} pois se acessar diretamente roxo como string esse valor nao ira bater exatamente com o nome da classe que será gerada com o valor aleatorio no final.

Para finalizar o assunto de CSS, podemos tambem jogar o **Estiloso.modules.css** dentro da pasta [ /styles ], contanto que a gente atualize o import.

~~~javascript
[/pages/Estiloso.jsx - ESTRUTURA FINAL]

import styles from '../styles/Estiloso.module.css'

export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
    )
}
~~~

~~~css
[/styles/Estiloso.module.css - ESTRUTURA FINAL]

.roxo {
    height: 100vh;
    background-color: #670bbd;
    color: #fff;
}

.roxo h1{
    margin:0;
}
~~~

&nbsp;

---
---
## [Aula 89] - USANDO COMPONENTE

&nbsp;

Até agora so criamos arquivos [.jsx] dentro da pasta /pages, vamos ver agora a criação de um componente e vamos usar esse componente.

Até então ja criamos componentes funcionais [Estilos.jsx | index.jsx], componentes baseados em funções.

Vamos agora criar um componente para que possamos usa-lo dentro de nossa aplicação.

    1 - /components/Cabecalho.jsx, vamos exportar por padrão criando uma função chamada (Cabecalho) e vamos aprender a passar valores/propriedaes para esse cabeçalho.

~~~javascript
[/components/Cabecalho.jsx]

export default function Cabecalho(){
    return (
        <header>
            <h1>Fundamentos de next.js & React</h1>
        </header>
    )
}
~~~

    2 - Vamos usar esse componente que acabamos de criar dentro de uma pagina, vamos criar em /pages/exemplo.jsx. Vamos exportar de forma padrão pois iremos criar uma function chamada (Exemplo()) e por enquanto vamos retornar um [h1] com o nome exemplo para podermos testar a pagina.

~~~javascript
[/pages/exemplo.jsx]

export default function Exemplo(){
    return (
        <h1>Exemplo</h1>
    )
}
~~~

    3 - Agora vamos usar o componente funcional que criamos (Cabecalho) na pagina [exemplo.jsx].
    ->  Podemos tentar fazer o import e usar o <Cabecalho>.
~~~javascript
[/pages/exemplo.jsx]

import Cabecalho from '../components/Cabecalho'

~~~

    4 - Logo, quando criamos um componente, e ele é um componente baseado em função iremos referencia-lo, não invocando uma função [ Cabecalho() ] mas sim instanciando ele como um elemento JSX [ <Cabecalho /> ].
~~~javascript
[/pages/exemplo.jsx]

import Cabecalho from '../components/Cabecalho'

export default function Exemplo(){
    return (
        <Cabecalho />
    )
}
~~~

O grande objetivo de se criar um componente é a capacidade de RE-USO dele, podemos querer reusar o componente mais de uma vez...

~~~javascript
[/pages/exemplo.jsx]
import Cabecalho from '../components/Cabecalho'

export default function Exemplo(){
    return (
        <Cabecalho />
        <Cabecalho />
    )
}
~~~

    5 - Da maneira acima, irá gerar um erro pois no react não podemos retornar elementos chamados de ELEMENTOS TRANVERSAIS, não podemos em uma função retornar mais de um TRECHO JSX. Da mesma forma que não conseguimos retornar dois objetos ao mesmo tempo.
    -> irá nos dizer que elementos adjacentes devem ser envolvidos a partir do que eles chamam de JSX FRAGMENT <>...</>
    -> Logo para funcionar basta envolver dentro de um <div> os elementos e assim irá funcionar.

~~~javascript
[/pages/exemplo.jsx]

import Cabecalho from '../components/Cabecalho'

export default function Exemplo(){
    return (
        <div>
            <Cabecalho />
            <Cabecalho />
        </div>
    )
}
~~~

    6 - Se qusiermos usar o que eles chamam de JSX FRAGMENT basta criarmos uma tag vazia.
    -> Isso funciona no REACT, onde ele ira retornar os dois elementos sem colocar nenhum elemento HTML no resultado final.
    -> Ver codigo no browser.
~~~javascript
[/pages/exemplo.jsx]

import Cabecalho from '../components/Cabecalho'

export default function Exemplo(){
    return (
        <>
            <Cabecalho />
            <Cabecalho />
        </>
    )
}
~~~

Toda nossa aplicação fica dentro de uma div chamada (__next). Como podemos visualizar aos inspecionar o browser.


&nbsp;

---
---
## [Aula 90] - PROPRIEDADES DE COMPONENTES.

&nbsp;

Quando vamos usar um componente, muitas vezes, queremos ter uma forma de personaliza-lo. Como exemplo o [o titulo/h1 do cabeçalho]. Como poderiamos passar para esse componente uma propriedade?

~~~javascript
[/components/Cabecalho.jsx - ESTRUTURA ATUAL]

export default function Cabecalho(){
    return (
        <header>
            <h1>Fundamentos Next.js & React</h1>
        </header>
    )
}

~~~
    1 -  Logo na função Caveçalho() vamos receber um parametro entre os parenteses que podemos chamar de [props, x, abc...], e podemos observar o que tem dentro desse parametro usando o console.log().
~~~javascript
[/components/Cabecalho.jsx]

export default function Cabecalho(abc){
    console.log(abc)
    return (
        <header>
            <h1>Fundamentos Next.js & React</h1>
        </header>
    )
}
~~~

Podemos ver que a resposta vem como um objeto vazio. Se passarmos dentro do [exemplo.jsx - componente] alguns atributos para o cabeçalho. Se olharmos novamente para a resposta do console.log() poderemos observar os atributos que passamos como parametro no componente. 

~~~javascript
import Cabecalho from "../components/Cabecalho"

export default function Exemplo(){
    return(
        <>
            <Cabecalho nome="Angelina" idade={123} ehLegal={true} />
            <Cabecalho />
        </>
    )
}
~~~

Normalmente chamamos esse parametro de (PROPs = PROPRIEDADES DO COMPONENTE), logo a partir do momento que vamos no [exemplo.jsx] e dizemos que queremos passar um titulo...Significa que o titulo que definimos será passado como parametro para o cabeçalho. 

Se quisermos passar dois titulos diferentes, dentro do nosso componente podemos usar o que vem dentro de [PROPS] que seria a propriedade {titulo}. E para usar essa propriedade usamos a interpolação la no componente..

~~~javascript
[/exemplo.jsx]

export default function Exemplo(){
    return(
        <>
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprende Next na prática." />
        </>
    )
}
~~~

~~~javascript
[/components/Cabecalho.jsx]

export default function Cabecalho(props){
    console.log(props.titulo)
    return (
        <header>
            <h1>Fundamentos Next.js & React</h1>
        </header>
    )
}
~~~

Fazendo isso podemos vizualizar no console os valores que foram passados pois Há duas instancias do componente.

    2 - Agora podemos, dentro do COMPONENTE usar o {props.titulo} um valor dinamico em vez de um valor estatico [<h1>Fundamentos Next.js & React</h1>].
    ->Colocamos um par de {} para a interpolação. Acesso do jsx para o javascript.

~~~javascript
[/components/Cabecalho.jsx]

export default function Cabecalho(props){
    console.log(props.titulo)
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}
~~~

Agora em vez de jogar no console.log() teremos cabeçalhos com {titulos} diferentes. Ou seja, se precisarmos definir cabeçalhos em locais diferentes da aplicação cada pagina possui um cabeçalho diferente/personalizado, podemos usar essa ideia de passar propriedades de um componente para outro.

Ou seja, dentro do componente [exemplo.jsx] temos duas instancias do COMPONENTE CABEÇALHO,e estamos passando os {titulos}/ propriedades personalizadas, de tal forma que o componente terá os dados personalizados a partir do que passamos via PROPRIEDADES/PROPS.

Uma questão importante é que as PROPRIEDADES não podem ser modificadas. Logo não podemos fazer **[props.titulo += "!!!!"]** , logo não podemos causar uma mudança nas propriedades/props pois ela é um OBJETO somente de LEITURA. -> MENSAGEM DE ERRO.

Se precisarmos ter um valor que precisa ser modificado fazemos a utilização de um ESTADO/ESTADO DO COMPONENTE.


&nbsp;

---
---
## [Aula 91] - NAVEGAÇÃO ENTRE COMPONENTES.

&nbsp;















<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
