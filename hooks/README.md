
# ==== [Seção 5 - React Hooks ] ====

***
---

## [Aula 59/60] - Introdução e Configuração do Projeto.

&nbsp;

Existe um codigo associado a essa aula, um .zip que podemos baixar e ter a estrutura inicial do projeto montada.
  
A estrutura inicial, não tem nada haver com HOOKS, é basicamente para fazermos a navegação, +||- como fizemos na seção passada.

~~~
1) Vamos criar outro projeto.
   
        [npx create-react-app hooks]

2) Apos criar o projeto, entramos nele e instalamos a dependencia do react-router-dom.
   
        [npm install react-router-dom@5.2.0]

- Quando usamos o [@] estamos especificando a versão que queremos usar.
- Como o foco não será o react-router-dom e sim os hooks, vamos usar uma versão especifica.
~~~

A seção passada gerou uma pagina de navegação, vamos utilizar essa mesma estrutura fazendo algumas melhorias.
  
~~~
1) Ao concluir a criação do projeto [hooks] vamos abrir o mesmo no vscode.
2) Vamos apagar a pasta /src do projeto criado e substituir pelo .zip ou criar o projeto do zero. (Fazer a mao grande!!)
3) Apos fazer essas alterações rodamos o npm start.
~~~
   
Foi criado dois COMPONENTES a mais:
 
>**[ PageTitle.jsx ]** -> Titulo personalizado.
> 
> **[ SectionTitle.jsx ]** -> Subtitulo personalizado.


**SectionTitle.jsx** foi criado pois, dentro de uma pagina poderemos querer criar mais de um exercicio, e assim ele nos ajudará a manter as coisas organizadas.

Vamos tambem aprender a criar os nossos proprios hooks.

&nbsp;

***
---
## [Aula 61] - Hook : useState() #01

&nbsp;

>Sintaxe
>~~~javascript
>import react, {useState} from 'react'
>const [useState,setState] = useState(v_ini)


Vamos agora começar nosso exercicio utilizando o HOOK useState(). Um dos hooks mais uteis, utilizado e mais facil de ser aplicado.

```text
.
|--- views
|    |--- examples
|--- |--- |--- UseState.jsx
|    |--- App.jsx
|    |--- App.css
```
> Basicamente o que temos é o nosso componente funcional, atribuido para uma constante. Iremos receber as propriedades via (props) e o componente retornar um codigo JSX (figuras abaixo).

**PageTitle.jsx** foi criado para que possamos ter um titulo padronizado. Ele irá receber duas propriedades [title & subtitle ].

~~~javascript
const PageTitle = props => (
    <div className={`
        PageTitle ${props.error ? "error" : " "}
    `}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)
~~~
~~~javascript
const UseState = props => {
    return (
        <div className='UseState'>
            <PageTitle
                title = "Hook UseState"
                subtitle = "Estado em components funcionais!"
            />
        </div>
    )
}
~~~

A primeira coisa que iremos fazer é criar um estado dentro de um componente funcional. Antes dos hooks, não tinhamos possibilidade de criar estado dentro de COMPONENTES FUNCIONAIS, so conseguiamos receber dados via propriedaes ( props. )

Em seções anteriores, ja usamos como usar o useState() e agora vamos revisar dentro da seção de HOOKS.

```
1) Vamos criar uma variavel/constante x (depois damos outro nome), quando atribuirmos a ela  useState() , vamos passar como parametro dessa função o [VALOR INICIAL - VI], no caso o "olá mundo" do useState() é ter um contador então colocamos o [0] como [VI].

2) Lembrando que ao criar a constante de estado, vamos receber um array[] com 2 elementos [valor_atual,função_alteração]
```
```
[valor_atual] -> Valor atual do estado, apos o valor_inicial, por ser um estado (mutavel) irá evoluir ao longo do codigo.

[função_alteração] -> Função que irá alterar o estado do valor_inicial p/ valor_atual e depois evoluindo o codigo.
```

>**[ Forma 1 ] -> Sem Destructuring**
>
> ~~~javascript
>const array = useState(0)
>const num = array[0]
>const setNum = array[1]
>~~~
>

>**[ Forma 2 ] -> Com Destructuring**
>
> ~~~javascript
>const [count,setCount] = useState(0)
>~~~
>

Criamos o componente **SectionTitle.jsx**, onde vamos importa-lo para criar um exercicio. Esse componente irá receber um uma propriedade chamada title que será onde colocaremos os nomes dos exercicios.

~~~javascript
const SectionTitle = props => (
    <div className='SectionTitle'>
        <h3>{props.title}</h3>
    </div>
)
~~~
~~~
[UseState.jsx]

    1) Import SectionTitle.jsx
    2) Create [Exercicio #01] & [Exercicio #02]
~~~

~~~javascript
const UseState = props => {
    return (
        <div className='UseState'>
            <PageTitle
                title = "Hook UseState"
                subtitle = "Estado em components funcionais!"
            />
            // === [ CHANGES ] ===
            <SectionTitle
                title="Exercício #01"
            />
            <SectionTitle
                title="Exercício #02"
            />
            // === [ CHANGES ] ===
        </div>
    )
}
~~~

Criamos algumas classes CSS em **index.css** para fazer algumas formatações na nossa pagina e vamos utilizar dentro de uma [div] nos exercicios do Usestate().
* { .text : tamanho do texto} 
* {.red : cor }
* { .input : classe para configurar os inputs}
* {.button : alterações nos botões}
* { .center : centralizar?}
  
~~~css
body{
    margin: 0;
    font-family: 'Montserrat',sans-serif;
}

.text {
    font-weight: 300;
    font-size: 5rem;
}

.red {
    font-weight: 700;
    color: red;
}

.input {
    font-weight: 300;
    font-size: 4rem;
    margin: 20px 0px;
}

.btn {
    border-radius: 25px;
    margin: 10px;
    padding: 15px 35px;
    border: none;
    outline:none;
    background-color: #0092c3;
    font-size: 3rem;
    color: #fff;
}

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
~~~

> Se colocarmos o **div.nome_classe** e apertar o [tab] o editor irá criar uma div com esse classname.

~~~javascript
<SectionTitle
    title="Exercício #01"
/>
<div className="center">
                
</div>
~~~

    1) A primeira coisa que iremos mostrar é o valor da variável de estado **count**, criando um [span] e **interpolando** o valor da variavel count para ser mostrada.

**[ UseState.jsx ]**
~~~javascript
const UseState = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div className='UseState'>
            <PageTitle
                title = "Hook UseState"
                subtitle = "Estado em components funcionais!"
            />
            <SectionTitle
                title="Exercício #01"
            />
            <div className="center">
                <span className="text">{count}</span>
            </div>
            <SectionTitle
                title="Exercício #02"
            />
        </div>
    )
}
~~~

~~~
2) Vamos criar os buttons com uma classe css [button.btn + tab].
   - Se quisermos que os botões fiquem na mesma linha, basta envolve-los dentro de ma [div]
~~~
~~~html
<SectionTitle title="Exercício #01" />
    <div className="center">
        <span className="text">{count}</span>
        <div>
            <button className="btn">-1</button>
            <button className="btn">+1</button>
        </div>
    </div>
~~~

~~~
3) No evento, {onClick} do button, vamos criar uma [arrow function: () =>], que irá receber uma outra função, onde, ao ser chamada irá ativar o setCount que definirmos...
4) No nosso caso, irá buscar o contador atual e subtrair ou somar 1
~~~

~~~html
<div>
    <button className="btn" onClick={
            () => setCount(count-1)
        }>-1</button>
    <button className="btn" onClick={
            () => setCount(count + 1)
        }>+1</button>
    <button className="btn" onClick={
            () => setCount(0)
        }>Reset</button>
</div>
~~~

Podemos observar que criamos um estado onde não alteramos diretamente, e sim a partir da função de alteração de estado criada [setCount] .

Vamos agora fazer de outra forma, iremos passar uma função dentro do setCount(). Ao passar uma função como parametro dentro do setCount iremos receber o valor_atual e aplicar na função que escrevemos.

~~~html
<div>
    <button className="btn" 
            onClick={() => setCount(count-1)}> -1 </button>
    <button className="btn" 
            onClick={() => setCount(count + 1)}> +1 </button>
    <button className="btn"
            onClick={() => setCount(1000)}> R = 1000 </button>
    <button className="btn"
            onClick={() => setCount(current => current + 1000)}>+1000</button>
    <button className="btn" 
            onClick={() => setCount(0)}>R = 0</button>
</div>
~~~

> Podemos passar o **valor_atual** de duas formas usando uma **FUNÇÃO CALLBACK** ou passando diretamente o valor que queremos alterar junto com a variavel **(count+1) or (count+1000)**.

&nbsp;

***
---
## [Aula 62] - Hook : useState() #02

&nbsp;

Vamos mostrar como podemos usar o setState vinculado ao dado de uma entrada (input), ou seja, vamos pegar informações de um input e armazena-lo dentro de um ESTADO DE UM COMPONENTE FUNCIONA.

    1) Vamos criar um novo ESTADO, com o valor inicial sendo uma string vazia.
   ~~~javascript
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
   ~~~

    2) Vamos colocar dentro do SectionTile(exercicio 2) um [input.input] para gerar uma tag (input) com className.
    3) Vamos colocar um valor inicial para testarmos o input.

   ~~~javascript
    const [name, setName] = useState("Inicial...")
   ~~~

    4) Temos que vincular o (input) com esse valor inicial. Para isso usamos a propriedade (value) e apontamos para o name [name,setName] o primeiro elemento do array criado e resultado da chamada do useState().
    5) Como atribuimos um valor inicial (Inicial...), na primeira vez que o componente for renderizado ele terá esse valor setado inicialmente.


   ~~~javascript
    const [name, setName] = useState("Inicial...")
    return (
        <div className="UseState">
            ...
            <SectionTitle title="Exercício #02" />
            <input 
                type="" 
                className="input" 
                value={name} 
            />
        </div>
    )
   ~~~

Se tentarmos digitar qualquer coisa, não iremos conseguir, pois esse é um COMPONENTE CONTROLADO.

> Se colocarmos na documentação de [React Controlled componentes](https://pt-br.reactjs.org/docs/forms.html), veremos a documentação do react falando o que significa esses componentes controlados.

&nbsp;

                  [COMPONENTE CONTROLADO] 

    -> Basicamente é um componente que sempre irá refletir o ESTADO DO COMPONENTE. Estamos criando um estado, uma variavel dentro de um componente baseado em função.
    -> Ou seja, durante o ciclo de vida do componente, temos um ESTADO INTERNO, e modificamos ao longo do tempo esse estado.
    -> O React é um framework que possui um ciclo de atualização unidirecional, ou seja, para que a INTERFACE GRAFICA, seja atualizada, primeiro precisamos modificar o ESTADO DO COMPONENTE, depois que esse estado for modificado, a interface grafica irá atualizar de acordo com o estado.

>| SENTIDO DE ATUALIZAÇÃO | ->| ESTADO DO COMPONENTE |->|INTERFACE GRAFICA|

&nbsp;

Para fazermos a alteração de um estado vamos precisar capturar um evento. Se alterarmos o valor do (value=null) obviamente poderemos digitar no campo do input ja que transformamos o COMPONENTE CONTROLADO em um [NÃO CONTROLADO.](https://pt-br.reactjs.org/docs/forms.html#controlled-input-null-value)

&nbsp;


> Via de regra não trabalhamos com componentes não controlados.

&nbsp;

                [ ALTERANDO O ESTADO ]

    1) No (input) vamos usar um propriedade chamada [onChange] que recebera como parametro um (evento), esse evento irá chamar uma função para acessar o (e.target.value), ou seja, o valor que foi digitado.
   
    2) Se olharmos no console, veremos que esta apresentando o valor_inicial + valor_digitado, sem alteração na renderização (não alteramos ainda o estado).


    3) Vamos chamar a função de alteração de estado (setName) e passar para ela o acesso ao (e.target.value), Para assim alterar o estado e a renderização.

~~~html
<input 
                type="" 
                className="input" 
                value={name} 
                onChange={
                    e => setName(e.target.value)
                }
            />
~~~

    4) Geramos um evento na interface grafica, a partir desse evento alteramos o estado do componente, o estado alterado, é feita ma atualização na interface grafica.
    
Criamos 2 tipos de ESTADOS (numericos e string), podemos tambem criar um objeto e ter valores internos dentro desse objeto, mas nesse caso, trabalhariamos com outro tipo de HOOK chamado useReducer().

Utilizado quando temos objetos mais complexos, pois tras ferramentas para melhor controle de estado desses objetos.

    5) Para concluir podemos criar um (span.text) para mostrar o input do {name}.

~~~javascript
<SectionTitle title="Exercício #02" />
    <span className="text">{name}</span>
    <input 
        type="" 
        className="input" 
        value={name} 
        onChange={
            e => setName(e.target.value)
        }
/>
~~~


&nbsp;

***
---
## [Aula 63] - Hook : useEffect()

&nbsp;



Permite executar efeitos colaterais em COMPONENTES FUNCIONAIS. Vamos fazer um exemplo para verificar esses efeitos colaterais.

[UseEffect.jsx] -> Forma inicial

~~~javascript
import React from 'react'

import PageTitle from '../../components/layout/PageTitle'

const UseEffect = props => {
    return (
        <div className='UseEffect'>
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais"
            />
        </div>
    )
}
export default UseEffect
~~~

Temos uma função arrow (=>) com o nome do componente (useEffect) indicando que ele irá receber propriedades (props.).

Temos uma (div) com uma classe de CSS, dentro dela temos o componente PageTitle.jsx que recebe duas propriedades (title & subtitle).

    1) A primeira coisa que iremos fazer será criar um (input) do tipo number para que possamos vincular o (input) ao ESTADO DO COMPONENTE.
       1.1) Foi mostrado na aula passada como usar o useState() para vincular com o (input)
       1.2) O valor_inicial do useState(-1)
       1.3) Vamos criar uma variavel de estado chamada (number).

[student]

~~~javascript
const UseEffect = props => {
    const [number, setNumber] = useState(-1)
    return (
        <div className='UseEffect'>
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais"
            />
            <SectionTitle title="Exercicio #01 - useEffect()"/>
            <span className="text">{number}</span>
            <input 
                type="text" 
                className="input" 
                value={number}
                onChange={
                    e => setNumber(e.target.value)
                }
            />
        </div>
    )
}
~~~

[professor]


~~~javascript
<div className="center">
    <input 
        type="number" 
        className="input"
        value={number}
        onChange={
            e => seetNumber(e.target.value)
        }
    />
</div>
~~~

[SP]

~~~javascript
const UseEffect = props => {
    const [number, setNumber] = useState(-1)
    return (
        <div className='UseEffect'>
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais"
            />
            <SectionTitle title="Exercicio #01 - useEffect()"/>
            <div className="center">
                <span className="text">{number}</span>
                <input 
                    type="number" 
                    className="input" 
                    value={number}
                    onChange={
                        e => setNumber(e.target.value)
                    }
                />
            </div>
        </div>
    )
}
~~~

Para vermos os efeitos do useEffect() vamos utilizar duas classes criadas no CSS chamadas (text & text red), dentro de uma tag (span).

Dentro da classe (text red) vamos querer mostrar o resultado do fatorial na cor vermelha.

~~~javascript
<div className="Center">
    <span className="text">Fatorial: </span>
    <span classname="text red">{number}</span>
    ...
</div>
~~~~

>Renderização horizontal.


~~~javascript
<div className="center">
    <div>
        <span className="text">Fatorial: </span>
        <span className="text red">{number}</span>
    </div>
</div>
~~~

>Renderização Vertical.

&nbsp;

A ideia é sempre que colocarmos um valor no (input) seja mostrado o fatorial desse valor em vermelho.

Isso seria um efeito colateral, ou seja, modificar(input) algo dentro da interface, que gerou um efeito colateral para outro tipo de informação que pertence a um componente, no caso, um outro estado do componente.

Vamos criar um outro estado chamado de (fatorial) e vamos atribuir o valor_inicial para (1). Como o numero (1 em number) é o padrão, o fatorial de (1 = 1) e mostrar esse estado dentro da resposta.

~~~javascript

const [fatorial, setFatorial] = useState(1)
return(
...
<div>
    <span className="text">Fatorial: </span>
    <span className="text red">{fatorial}</span>
</div>
...
)
~~~


Imagine que queremos calcular o fatorial diretamente dentro da função (não vai funcionar...)

    1) Vamos criar uma função chamada CalcFatorial() ela ira receber um numero.
       1.1) Vamos fazer um teste para que ela não calcule o fatorial de um numero negativo, pois não existe.
       1.2)Poderiamos fazer retornar uma string, mas o ideal é que esse teste retorne um valor numerico (-1 padrão). Se quisermos que mostra o valor, dentro da interface tratamos essa resposta de função e renderizamos o que queremos mostrar como string.
       1.3)Se o numero for igual a (0) traremos como resposta o numero (1)
       1.4) Passando por esses 2 testes, podemos fazer o return() do calculo do fatorial.
    2) O codigo para calculo do fatorial pode ser feito ou utilizando (for || recursividade)
       2.1) Recursividade : Fat(n-1) * n

~~~javascript

function calcFatorial (n) {
    if(n < 0 ) return -1
    if(n === 0) return 1
    return (
        calcFatorial(n-1) * n
    )
}

~~~

    3) Apos criar a função se tentarmos utiliza-la na função de mudança de estado, ira gerar um problema.

~~~javascript
const UseEffect = props => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    setFatorial(calcFatorial(number))
    return (
        <div className='UseEffect'>
~~~

    4) Não podemos dentro fazer diretamente dentro do corpo da função uma chamada que irá alterar o estado.
   
> Geralmente o trecho do corpo da função é responsavel por renderizar o componente, se chamarmos o setFatorial, dentro dele, ele irá renderizar o componente de forma infinita.

    5) Vamos usar o [useEffect] para tratar esse erro. Quando colocamos os () ele irá mostrar os parametros necessarios para utilizar esse HOOOK.
       5.1) No caso do useState() passamos o valor inicial.
       5.2) No caso do useEffect() teremos dois parametros
            -> EffectCallback : função que será chamada quando for gerar esse efeito colateral
            -> DependencyList(op): 
   
~~~javascript
useEffect(function(){

}, [])
~~~

    6)Criamos uma função callback que será chamada sempre que algo modificar, esse algo, será o que passaremos como segundo parametro do HOOK ([]), para lista/ array de dependencias.
    7) Para calcular o fatorial dentro dessa função callback, vamos depender de um valor (number). Ou seja, sempre que o number modificar, queremos chamar a função [calcFatorial] dando o (number) como propriedade para poder setarmos o novo valor do fatorial.
~~~javascript
useEffect(function(){
    setFatorial(calcFatorial(number))
},[number])
~~~

Ou seja, toda vez agora que o numero mudar (number), o useEffect será chamado para calcular pela função de callback recebendo o valor de number, o fatorial da função Calcfatorial().

Ao fazer essa declaração, nao temos mais um loop effect do componente.

> Estamos tendo um bug ao calcular o fatorialde 0, estamos recebendo o input como string, temos que converte-lo para um valor numero, basta criar uma constante que ira receber esse valor convertido.

~~~javascript
function calcFatorial(num){
    const n = partInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n-1) * n
}
~~~

> Configurando mensagem para quando o fatorial não existir

~~~javascript
...
<span className="text red">{fatorial === -1 ? "Fatorial negativo não existe!" : fatorial}
~~~

O importe no useEffect() é o efeito colateral, mudar um dado da aplicação e ao mudar esse dado, impactamos outro estado da aplicação.

Podemos utilizar o useEffect() para alterar o titulo da pagina, sempre que o [fatorial] mudar, vamos alterar o titulo da pagina, visivel somente no console pelo HTML ou na aba.

~~~~javascript

useEffect(
    function () {
        if(fatorial > 1000000){
            document.title = "EIITAA!!!"
        }
    },[fatorial]
)
~~~




































<!-- 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
