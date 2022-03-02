
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

~~~javascript
useEffect(
    function () {
        if(fatorial > 1000000){
            document.title = "EIITAA!!!"
        }
    },[fatorial]
)
~~~

&nbsp;

***
---
## [Aula 64] - useEffect() DESAFIO

&nbsp;

Na area do exercicio dois coloque um texto e um status(par ou impar) que irá depender do numero colocado no [input].

Ou seja, sempre que formos evoluindo o estado do [input], irá ser indicado se o numero é par ou impar.

Vamos precisar utilizar tanto o useState() quanto o useEffect(), ja que a mudança no input irá gerar mais de um SIDE-EFFECT (fatorial + status).


>                           [CODIGOS ATUAIS]
>**[FUNÇÃO CALCULO DO FATORIAL]**
>
> ~~~javascript
> function calcFatorial(num){
>   const n = parseInt(num)
>   if(n < 0) return -1
>   if(n === 0) return 1
>   return(
>       CalcFatorial(n - 1) * n
>   )
> }
> ~~~
>**[AF => UseEffect() - RENDERIZAÇÃO]**
>
> ~~~javascript
> const [number, setNumber] = useState(1)
> const [fatorial, setFatorial] = useState(1)
> 
> useEffect(function(){
>       setFatorial(CalcFatorial(number))
>   },[number]
> )
> useEffect(function(){
>   if(fatorial > 1000000){
>       document.title = "EIIIITAAAA!!!"
>   }
> },[fatorial])
> ~~~
>
>**[UseEffect() RETORNO]**
>
> ~~~html
> return (
>   <div className="UseEffect">
>       <PageTitle
>           title="Hook UseEffect"
>           subtitle="Permite executar efeitos colaterais em componentes funcionais"
>       />
>       <SectionTitle title="Exercicio #01"/>
>       <div className="center">
>           <div>
>               <span className="text">Fatorial: </span>
>               <span className="text red">{fatorial === -1 ? "ERROR" : fatorial}</span>
>           </div>
>           <input 
>               type="number"
>               className="input"
>               value={number}
>               onchange={
>                   e => setNumber(e.target.value)
>               }
>           />
>       </div>
>       <SectionTitle title="Exercicio #02 - DESAFIO>
>       <div className="center>
>           Area do desafio.
>       </div>
>   </div>
> )
>
>~~~

>**[STUDENT]**

    1) Criando variavel de estado (status).
   ~~~javascript
   const [status, setStatus] = useState("Impar");
   ~~~
    2) Criando função para calcular par ou impar:
   ~~~javascript
    function calcPar(num) {
        cont n = parseInt(num)
        if(n < 0 ) return -1
        if(n %2 ===0){
            return 1
        }else{
            return 0
        }
    }
   ~~~
    3) Usando o useEffect para gerar o status atual.
   ~~~javascript
    useEffect(
        function(){
            setStatus(CalcPar(number))
        },[number]
    )
   ~~~
    4) Refletindo o status quando o input é alterado...
   ~~~javascript
    <div>
        <span className="text">Status: </span>
        <span className="text red">{
            status === 1 ? "Par": (status === -1 ? "ERROR": "Impar")
        }</span>
    </div>
   ~~~
 Agora todas vez que tivermos o input alterado será mostrado se o numero é par ou impar, menor que zero, temos error igual ao fatorial.
 

&nbsp;

***
---
## [Aula 65] - useEffect() RESPOSTA

&nbsp;

>**[PROFESSOR]**

~~~javascript
// exercicio 1
const [number,setNumber] = useState(1)
const [fatorial,setFatorial] = useState(1)
useEffect(function(){
    setFatorial(calcFatorial(number))
},[number])
useEffect(function(){
    if(fatorial > 1000000){
        document.title="EITAAA!!!"
    }
},[fatorial])
//exercicios 2
const [status, setStatus] = useState("Impar")

useEffect(function(){
    setStatus(number % 2 === 0 ? "Par" : "impar")
},[number])
return(
    <div className="center">
        <span className="text">Status: </span>
        <span className="text red">{status}</span>
        <div>
            <span className="text">Status: </span>
            <span className="text red">{status}</span>
        </div>
    </div>
)
~~~

&nbsp;

***
---
## [Aula 66] - useRef() #01 

&nbsp;

Iremos fazer um exercicio relacionado ao useRef(), falamos sobre o useState(), useEffect() que basicamente são efeitos colaterais dentro de uma função CALLBACK que passamos, e temos um array de dependencias que irá dizer quais denpendencias precisam ser ativadas para disparar a CALLBACK e gerar o efeito colateral.

Vamos agora trabalhar com o HOOK useRef() a qual RETORNA um ONJETO MUTAVEL com uma PROPRIEDADE (.CURRENT). Ou seja, temos um objeto que dentro dele à uma propriedade chamada (current/atual) e dentro do valor da propriedade current teremos o ESTADO.

O nome useRef() foi determinado pois tem haver com REFERENCIA, voce tem a referencia de um objeto e esse objeto possui um atributo/propriedade chjamado (curernt) e dentro desse atributo podemos ter dentro valor (numerico/string/referencia para elemento HTML...)

    [useRef() - Estrutura Inicial]

~~~javascript
import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseRef = props => {
    return (
        <div className='UseRef'>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
        </div>
    )
}
export default UseRef
~~~

    1 - Vamos colcoar o SectioTitle para separar os exercicios e uma [div.center] para manter a padronização. 
    2 - Dentro da [div.center] vamos utilizar um [input.input] para utilizar o estilo que criamos, e dentro desse [input] iremos vincular o [value] com um estado que iremos criar.
        2.1 - State = [value1,setvalue1] = useState("")
        2.2 - onChange = criar evento (e) para alterar o conteudo (setValue1) pela chamada [e.target.value] - com isso temos um input vinculado ao estado de um componente.

~~~javascript
const UseRef = props => {
    const [value1, setValue1] = useState("")
    return (
        <div className='UseRef'>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title ="Exercicio #01" />
            <div className="center">
                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
        </div>
    )
}
~~~

    3 - Queremos controlar a quantidade de vezes que o componente é renderizado. para mostrar isso, vamos usar o [span.text]. 

~~~html
<SectionTitle title ="Exercicio #01" />
<div className="center">
    <div>
        <span className="text">Valor:</span>
        <span className="text">{value1} [</span>
        <span className="text red">contador</span>
        <span className="text">]</span>
    </div>
    <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
</div>
~~~

&nbsp;

 Ate agora, se olharmos, teremos o valor, oq ue digitarmos ira aparecer ao lado do contador, e o mesmo irá mostrar a quantidade de vezes que o componente foi renderizado(algo foi alterado).

Até agora temos um contador fixo, agora vamos utilizar o useref() para obter a quantidade de vezes que o componentes foi renderizado.

    1 - Vamos criar uma constante de estado [count] chamando o hook useRef(), que irá retornar um objeto que terá o valor inicial passado no atributo .current. Como temos um contador, o valor inicial será 0.
        [useState] -> Retorna o proprio elemento passado (string), e uma função para alterar essa string
        [useRef] -> Retornar um objeto e sempre irá retornar a mesma REFERENCIA. Ou seja, quando temos um objeto em javascript, e atribuimos o valor de um objeto para essa variavel e essa variavel atribui o valor para outra, isso é chamado de PASSAGEM POR REFERENCIA.
    2 - Basicamente, [count] é um objeto, para termos acesso a ele, no [span = contador] vamos INTERPOLAR chamando {count.current}, acessando assim o valor armazenado dentro do objeto, ja que count é a referencia para esse objeto.
        2.1 - Sempre que o COMPONENTE for renderizado novamente teremos acesso ao mesmo objeto/mesma referencia.
        [Ref VS State] -> Uma das diferenças é que quando o REF é alterado não ha a necessidade de renderizar o componente novamente, ou seja, podemos mudar o valor do atributo (.current), não o ref() que terá a propriedade sendo a inicial sempre. Quando modificamos somente o (.current) o componente não é renderizado novamente.
        2.2 - Por essa razão podemos criar uma logica antres do return do tipo (count.current = count.current + 1), pois não irá causar uma nova renderização (não entrando no loop infinito.)

~~~javascript
const UseRef = props => {
    const [value1, setValue1] = useState("")
    const count = useRef(0)

    count.current = count.current + 1

    return (
        <div className='UseRef'>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title ="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
        </div>
    )
}
~~~

> Outra forma, seria colocar o contador dentro de um useEffect() e configurar para que sempre que tivermos uma mudança no (value1) ele chamar o contador.
>~~~javascript
>useEffect(function(){
>    count.current = count.current + 1   
>},[value1])
> ~~~
> Para controlar todas as renderizações do componente, colocamos a logica do **count** do lado de fora. 
> Para controlar somente quando um certo valor for modificado usa o para vincular com esse valor.
> ~~~javascript
> useEffect(function(){
>       logica
> },[valor_modificado]) 
> ~~~
> 

    [useRef() #01 - Estrutura Final]

~~~javascript
const UseRef = props => {
    const [value1, setValue1] = useState("")
    const count = useRef(0)

    useEffect(function(){
        count.current = count.current + 1
    },[value1])
    
    // count.current = count.current + 1

    return (
        <div className='UseRef'>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title ="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
        </div>
    )
}
export default UseRef
~~~

Nessa aula vimos que o useRef() irá criar um objeto, retorna um objeto mutavel (atributos internos podem ser alterados) propriedade [.current] exatamente onde tem o valor.
Enquanto esse componente existir ele terá o valor da renderização (ex:54) se sairmos da tela (F5 | mudar pagina), o componente será resetado (recebe um novo objeto), mas enquanto estivermos renderizando o mesmo objeto varias vezes sempre irá ser retornado a mesma referencia, ou seja, temos um objeto, irá retornar a referencia e podemos mexer no atributo **current**.

[REF vs State] = Não renderiza toda vez que é modificado.


&nbsp;

***
---
## [Aula 67] - useRef() #02

&nbsp;


    1 - Vamos criar o segundo exercicio obedecendo as estruturas anteriores.
        1.1 - Criar constante de estado [value2,setValue2]
        1.2 - Vamos criar um outro [input.input] com o value apontando para (value2) e no onChange vamos ativar a função de alteração do value2.
    2 - O monitoramento da renderização pelo contador não esta acontecendo no exercicio #02, para resolvermos isso, MAIS DE UMA DEPENDENCIA, no useEffect usamos a estrutura:
        useEffect(function(){},[value1,value2])
        2.1 - Fazendo isso, o contador irá contar a renderização dos 2 inputs.

~~~javascript
const UseRef = props => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    useEffect(function(){
        count.current = count.current + 1
    },[value1, value2])
    // count.current = count.current + 1
    return (
        <div className='UseRef'>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title ="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}
~~~

&nbsp;


**===================[ UTILIZANDO USEREF() PARA PEGAR ELEMENTO HTML ]===================**

Existe uma forma de usar o UseRef() para pegar um elemento HTML. Para isso se usa a propriedade chamada [ref={}], que irá apontar para dentro de um objeto que representa uma referencia.

    1 - Vamos criar +2 useRef() [myInput1 , myinput2] ambos com o valor_inicial de [null]
    2 - Vamos aplicar essa referencia que acabamos de criar dentro do atributo do input [ref={}]. Agora uma vez que temos um atributo [ref={}] dentro do elemento (jsx) e aplicamos dentro do par de chaves {} o que será interpolado pelo react (no caso myInput1 - uma referencia/useRef() - objeto que possui um atributo current) automaticamente o react irá colocar uma referencia para esse input dentro do atributo current desse objeto que é retornado pelo useRef().
        2.1 - Isso acontece de tal forma que se pedirmos para imprimir no console poderemos observar a referencia para o input.
    3 - Aplicamos o mesmo principio para o input2 no exercicio 2.


~~~javascript
const UseRef = props => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function(){
        count.current = count.current + 1
    },[value1, value2])
    
    // count.current = count.current + 1

    return (
        <div className='UseRef'>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title ="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input 
                    type="text" 
                    className="input" 
                    value={value1} 
                    onChange={e => 
                    setValue1(e.target.value)} 
                    ref={myInput1}
                />
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input 
                    type="text" 
                    className="input" 
                    value={value2} 
                    onChange={e => setValue2(e.target.value)} 
                    ref={myInput2}
                />
            </div>
        </div>
    )
}
~~~

> Agora o contador esta vinculado ao input do exercicio #02.

    1 - Vamos separar o useEffect() em duas partes, vamos querer ter um valor especifico para o value1 e value2, ambos tendo por enquanto a mesma funcionalidade.

~~~javascript
useEffect(function(){
    count.current = count.current + 1
},[value1])
useEffect(function(){
    count.current++
},[value2])
~~~

    2 - Agora vamos fazer com que, sempre que tivermos o (value1) alterado, pegaremos o input2 e gerar um foco nesse input (.focus()). Significa que agora  quando digitarmos o valor no input1 a seta de foco para digitar ( | ) irápara o input2

~~~javascript
useEffect(function(){
    count.current = count.current + 1
    myInput2.current.focus()
},[value1])
useEffect(function(){
    count.current++
},[value2])
~~~

    3 - Se aplicarmos a mesma tecnica para o input2, o que teremos eh a mudança de foco entre os input, logo ao digitar os valores irá alterar entre input1 e input2.

~~~javascript
useEffect(function(){
    count.current++
    myInput2.current.focus()
},[value1])
useEffect(function(){
    count.current++
    myInput1.current.focus()
},[value2])
~~~


**===================[ DESAFIO JAVASCRIPT ]===================**

Criar uma função chamada (merge) - pode ser colocada dentro ou fora do componente. Ela irá receber duas strings (s1,s2), e terá que retornar a uniao dessas duas strings de maneira que faça sentido no que foi digitado (input1 + input2 + input1 + input2 ...)



Na saida do valor, do exercicio #01, coloque o "merge" entre o {value1 & value2}, entre as duas strings:

    ex: 
        input 1 = 13579 {value1}
        input 2 = 2468 {value2}
        saida = 123456789

Dica: No [span] iremos fazer a interpolação chamando a função e passando os valores 1 e 2.





**===================[ RECAPITULANDO ]===================**

&nbsp;

    1 - Vimos o UseRed() de duas formas diferentes:
        1.1 - Com Valor Numerico, onde retornou para gente um objeto, ou mais especificamente a referencia para um objeto que podemos modificar via o atributo .current
        1.2 - Pegando elemento HTML, alteramos o foco do componente pela referencia apontando para um elemento jsx dentro do componente.

&nbsp;

***
---
## [Aula 68] - DESAFIO FUNÇÃO MERGE

&nbsp;

    [useRef.jsx - ESTRUTURA ATUAL]

~~~javascript
const merge = function(s1,s2){
    return s1+s2
}

const UseRef = props => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    // console.log(myInput1)
    const myInput2 = useRef(null)

    useEffect(function(){
        count.current = count.current + 1
        myInput2.current.focus()
    },[value1])
    useEffect(function(){
        count.current++
    },[value2])
    
    // count.current = count.current + 1

    return (
        <div className='UseRef'>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title ="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input 
                    type="text" 
                    className="input" 
                    value={value1} 
                    onChange={e => 
                    setValue1(e.target.value)} 
                    ref={myInput1}
                />
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input 
                    type="text" 
                    className="input" 
                    value={value2} 
                    onChange={e => setValue2(e.target.value)} 
                    ref={myInput2}
                />
            </div>
        </div>
    )
}
~~~


Vamos ver alguns exemplos para entendermos algumas funcionalidades que iremos utilizar na resposta do exercicio. Não vamos criar uma implementação que irá resolver todos os casos mas sim alguns...

    [EXEMPLO 1 - CONSOLE]
    
        1 - Vamos criar uma constante (string) e atribuir o valor de "casa"
            > const x = "casa"
        2 - Duas coisas importante sobre string que precisamos saber para entendermos as implementações a seguir:
            2.1 - Conseguimos acessar as letras da string a partir da anotação dos colchetes[] que parece um array.
                2.1.1 - Se acessarmos o x[4] iremos ter um valor undefined.
                2.1.2 - Se pegarmos um letra e concatenar com um valor de indice teremos o resultado de [letra+undefined - ira usar o undefined como texto].
                -> Para contar isso basta ["b" + ( x[4] || "" )] se o x[4] for undefined irá concatenar com o vazio caso o valor não exista.
            2.2 - Conseguimos transformar uma string em um array de letras/caracteres usando o simbulo de colchetes {} junto com o operador spreadding. Nos retornando um array com cada letra, ate os espaços em branco.
                > [...x]

Vamos utilizar esses conceitos na resolução do problema. Iremos fazer uma implementação simples que irá gerar alguns erros para posteriormente a gente colocar mais complexidade nessa implementação.

    1 - Vamos transformar a string(s1) em um ARRAY DE LETRAS, onde iremos usar o [.map()] para mapear essas letras, pois nosso objetivo é concatenar a STRING1 com a STRING2. Para isso iremos criar um passo intermediario.
        1.1 - Iremos criar criar uma função para ser passada para a função [map()] que irá retornar a letra chamda de (e = elemento) e um segundo valor que será o indice (i).
~~~javascript
const merge = function(s1,s2){
    return [...s1].map(function(e,i){
    })
}
~~~

    2 - Dentro da função chamada pelo map, iremos inicialmente usar uma template string para retornar o proprio elemento (e) mais um traço (-). Ou seja, letras + traço entre cada letra.
~~~javascript
const merge = function(s1,s2){
    return [...s1].map(function(e,i){
        return `${e}-`
    })
}
~~~

    3 - A função [.map()] irá nos retornar um array, para transformar novamente numa string, basta usar o [.join("")] JOIN com uma string vazia.
        3.1 - Observe que ainda não estamos utilizando o parametro 2 (s2).
~~~javascript
const merge = function(s1,s2){
    return [...s1].map(function(e,i){
        return `${e}-`
    }).join("")
}
~~~

    4 - Podemos observar que no input2 o map esta funcionando e as letras estao sendo alternadas juntamente com um traço. Mas não queremos alternar com traços e sim com a letra da outra string (input2).
    4.1 - Na teoria acima foi mostrado que poderiamos pegar a letra a partir do indice, logo, ja que temos o indice mapeado pela função, podemos usar uma template string para a string2 e colocar o indice i para que ela acompanhe a string1.
~~~javascript
const merge = function(s1,s2){
    return [...s1].map(function(e,i){
        return `${e}${s2[i]}`
    }).join("")
}
~~~

    5 - Foi gerado um problema de undefined pois não fizemos um tratamento de verificação nas strings. Para isso colocamos uma condicional de string vazia.

~~~javascript
const merge = function(s1,s2){
    return [...s1].map(function(e,i){
        return `${e}${s2[i]} || ""`
    }).join("")
}
~~~

    6 - Ainda irá dar alguns BUGS pois so estamos mapeando a string1. O que podemos fazer é que quando for o ultimo elemento da string1, pegamos o resto da string2 e concatenamos no final.
    7 - Uma forma de simplificar a função seria transformando numa ARROW FUNCTION.

~~~javascript
const merge = function(s1,s2){
    return [...s1].map( (e, i) => `${e}${s2[i] || ""}`).join("")
}
~~~


    [USEREF() - ESTADO FINAL]

~~~javascript

//função simplificada
const merge = function(s1,s2){
    return [...s1].map((e,i) => `${e}${s2[i] || ""}`).join("")
}

const UseRef = props => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    
    const count = useRef(0)
    const myInput1 = useRef(null)
    console.log(myInput1)
    const myInput2 = useRef(null)

    useEffect(function(){
        count.current = count.current + 1
        myInput2.current.focus()
    },[value1])
    useEffect(function(){
        count.current++
        myInput1.current.focus()
    },[value2])
    
    // count.current = count.current + 1

    return (
        <div className='UseRef'>
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title ="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input 
                    type="text" 
                    className="input" 
                    value={value1} 
                    onChange={e => 
                    setValue1(e.target.value)} 
                    ref={myInput1}
                />
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input 
                    type="text" 
                    className="input" 
                    value={value2} 
                    onChange={e => setValue2(e.target.value)} 
                    ref={myInput2}
                />
            </div>
        </div>
    )
}
export default UseRef
~~~

&nbsp;

***
---
## [Aula 69] - useMemo() 

&nbsp;

Agora vamos falar do useMemo() , um HOOK que retornar um valor memorizado. Um valor que foi calculado, armazenado e retornado como se fosse um **CACHE**. Vamos ver quando poderemos usar esse tipo de recurso e uma alternativa para o useMemo(), que seria a utilização do useState() juntamente com o useEffect() para resolver esse mesmo problema.

    [usememo() - ESTRUTURA INICIAL]
~~~javascript
const UseMemo = props => {
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!"
            />
        </div>
    )
}
export default UseMemo
~~~

    1 - Vamos criar 3 constantes de estados [n1,n2,n3]
    2 - Vamos criar um [input] vinculado para o valor [n1] usando o [parseInt] no [onChange] para retornar um valor inteiro. Iremos fazer o mesmo para os 3 estados (n1,n2,n3).

~~~javascript
const UseMemo = props => {
    const [n1,setN1] = useState(0)
    const [n2,setN2] = useState(0)
    const [n3,setN3] = useState(0)
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <input 
                    type="text" 
                    className="input" 
                    value={n1}
                    onChange={e => setN1(parseInt(e.target.value))}
                />
                <input 
                    type="text" 
                    className="input" 
                    value={n2}
                    onChange={e => setN2(parseInt(e.target.value))}
                />
                <input 
                    type="text" 
                    className="input"
                    value={n3}
                    onChange={e=>setN3(parseInt(e.target.value))}
                />
            </div>
        </div>
    )
}
~~~

    3 - Vamos agora supor que criamos uma função fora do componente que fará a soma de dois valores retornando inicialmente o valor de (a+b)

~~~javascript
function sum(a + b){
    return a + b
}
~~~

    4 - Queremos criar uma resultado dentro do componente que irá receber a resposta dos dois valores que iremos passar como parametro para função [sum()] criada.

~~~javascript
const result = sum(n1,n2)
~~~

    5 - Para verificar essas mundaças criamos um [span] e interpolamos o valor de [result]

~~~javascript
function sum(a,b){
    return a + b
}

const UseMemo = props => {
    const [n1,setN1] = useState(0)
    const [n2,setN2] = useState(0)
    const [n3,setN3] = useState(0)

    const result = sum(n1,n2)

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{result}</span>
                <input 
                    type="number" 
                    className="input" 
                    value={n1}
                    onChange={e => setN1(parseInt(e.target.value))}
                />
                <input 
                    type="number" 
                    className="input" 
                    value={n2}
                    onChange={e => setN2(parseInt(e.target.value))}
                />
                <input 
                    type="number" 
                    className="input"
                    value={n3}
                    onChange={e=>setN3(parseInt(e.target.value))}
                />
            </div>
        </div>
    )
}
~~~

    6 - Vamos imaginar que a função soma, seja um calculo mais complexo que irá demandar uma certa quantidade de tempo. Para simular isso, iremos criar uma constante (future) e iremos atribuir a ela o [date.now() + 2000] - dois mil milesegundos. Ela irá esperar a partir de um while ate que o [date.now()] seja menor do que a data futura armazenada (future). Basicamente é um codigo de espera.

~~~javascript
function (a,b){
    const future = Date.now() + 2000
    while(Date.now() < future) {} //espera...2s
    return a + b
}
~~~

    7 - Agora nos temos uma função [sum()] que em teoria, esta simulando um processamento mais pesado. Do jeito que implementamos, o input3 esta sendo afetado pela simulação do processo, ou seja, so vai mudar depois de dois segundos. Existe duas formas diferentes de resolvermos esse problema:
        7.1 - A primeira forma seria utilizando o useEffect() juntamente com o useState().
        -> Em vez de criar um result criamos um estado dando como valor inicial 0.
        -> No useEffect() criamos uma função que ira chamar o setResult() que terá a função [sum()] como parametro.
        -> So irá achar a função sum() quando os valores corretos forem modificados.
    
~~~javascript
const [result, setresult] = useState(0)
useEffect(function(){
    setresult(sum(n1,n2))
},[n1, n2])
~~~

        7.2 - A segunda forma seria usando o **useMemo()** para resolver esse problema.
        -> Primeiro parametro : FUNÇÃO (no caso, soma)
        -> Segundo parametro : arrays das dependencias (semelhante ao useEffect())
        -> Criamos a variavel result e passamos o useMemo() chamando uma arrow function, dentro dessa função irá ser feita a soma do (n1) com (n2).
        
~~~javascript
function sum(a,b){
   const future = Date.now() + 2000
   while(Date.now() < future) {} // //espera...2s
   return a + b
}

const UseMemo = props => {
    const [n1,setN1] = useState(0)
    const [n2,setN2] = useState(0)
    const [n3,setN3] = useState(0)

    const result = useMemo(() => sum(n1,n2), [n1,n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{result}</span>
                <input 
                    type="number" 
                    className="input" 
                    value={n1}
                    onChange={e => setN1(parseInt(e.target.value))}
                />
                <input 
                    type="number" 
                    className="input" 
                    value={n2}
                    onChange={e => setN2(parseInt(e.target.value))}
                />
                <input 
                    type="number" 
                    className="input"
                    value={n3}
                    onChange={e=>setN3(parseInt(e.target.value))}
                />
            </div>
        </div>
    )
}
~~~

Agora nos temos um resultado similar somente com a utilização do **useMemo()**, ou seja, sem usar a uniao do **useState()** com o **useEffect()**. Agora temos um resultado memorizado, resultado calculado anteriormente, armazenado numa variavel e so será chamado novamente caso os valores que dependem desse resultado sejam alterados.

Lembrar que é armazenado como se fosse em CACHE.

&nbsp;

***
---
## [Aula 70] - useCallback() 

&nbsp;

    [useCallback.jsx - ESTADO INICIAL]
~~~javascript
const UseCallback = props => {
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hooke UseCallback"
                subtitle="Retorna uma função memorizada!"
            />
        </div>
    )
}
~~~


O **useCallbac()** é semelhante ao **useMemo()**, so que o **useMemo()** irá retornar um valor memorizado em cache, e so irá calcular esse valor caso as dependencias forem modificadas. No caso do **useCallback() ele irá retornar uma função CHACHEADA para que voce possa usar a mesma função e não precise retorna-la novamente.

    1 - Vamos criar um contador e coloca-lo para ser mostrado pela interpolação dentro de um [span].
    2 - Tambem iremos criar um botão para somar (6,12,18).
    3 - Vamos criar uma função (inc) que recebera um parametro para ser somado ao contador.
        3.1 - Colocamos essa função nos botões usando uma arrow function e passando os valores.
~~~javascript
const UseCallback = props => {
    const [count,setCount] = useState(0)

    function increment(delta){ // criação extra do botão reset.
        if(delta === 0) return setCount(0)
        setCount(count + delta)

        // outra forma
        if(delta === 0) {
            setCount(0)
        }else{
            setCount(count + delta)
        }
    }
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hooke UseCallback"
                subtitle="Retorna uma função memorizada!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => increment(0)}>Reset</button>
                    <button className="btn" onClick={() => increment(6)}>+6</button>
                    <button className="btn" onClick={() => increment(12)}>+12</button>
                    <button className="btn" onClick={() => increment(18)}>+18</button>
                </div>
            </div>
        </div>
    )
}
~~~

    4 - vamos supor que queremos pegar o a parte do codigo dos botões e colocar em outro componente (padronização/organização).
    -> Criar componente (mesma pasta) chamado [UseCallbackButtons.jsx].
    -> Criar uma estrutura basica para ele.
~~~javascript
const UseCallbackButtons = props => {
    return (
        <div>
            <button className="btn" onClick={
                () => props.compInc(6)
            }>+6</button>
            <button className="btn" onClick={
                () => props.compInc(12)
            }>+12</button>
            <button className="btn" onClick={
                () => props.compInc(18)
            }>+18</button>
            <button className="btn" onClick={
                () props.compInc(0)
            }>Reset</button>
        </div>
    )
}

export default UseCallbackButtons
~~~

    5 - Agora vamos em [UseCallback.jsx] e importamos o componente dos botões que acabamos de criar passando para ele o a função increment(delta) como atributo de [comInc={}]
~~~javascript
const UseCallback = props => {
    const [count,setCount] = useState(0)

    function increment(delta){ // criação extra do botão reset.
        if(delta === 0) return setCount(0)
        setCount(count + delta)

        // outra forma
        if(delta === 0) {
            setCount(0)
        }else{
            setCount(count + delta)
        }
    }
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hooke UseCallback"
                subtitle="Retorna uma função memorizada!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButton 
                    compInc={increment}
                />
            </div>
        </div>
    )
}
~~~

    6 - Existe a possibilidade dentro do React de usarmos o [React.memo(parametro)]. Ele irá criar um componente CACHEADO. E conseguiremos ver essa funcionalidade colocando um console.log("render...") no componente button para sabermos quantas vezes ele foi renderizado.
    -> Antes de mostrar o react.memo() vamos ver quando o componente dos botões é renderizado, e note que esse componente é um componente estatico, não estamos mudando os [laybel, classe, função que é chamada...], esse botão so depende das propriedades.
    -> Se as propriedades não mudarem o componente não precisa ser renderizado novamente.
    -> Assim podemos observar que tanto o componente PAI, como o FILHO tambem. O componente PAI, precisa ser renderizado, mas o componente FILHO que são os botões, não tem por que ser renderizado pois eh um componente estatico, não possui necessidade de renderização.

    7 - Assim no [UseCallbackButton.jsx] usamos o react.memo() no export para que se crie um CACHE desse componente, so o renderizando novamente caso tenha uma alteração no mesmo, ou seja, passando um novo numero e/ou nova função (quando iremos usar o useCallback()).

~~~javascript
const UseCallbackButtons = props => {
    console.log("Render...")
    return (
        <div>
            <button className="btn" onClick={
                () => props.compInc(6)
            }>+6</button>
            <button className="btn" onClick={
                () => props.compInc(12)
            }>+12</button>
            <button className="btn" onClick={
                () => props.compInc(18)
            }>+18</button>
            <button className="btn" onClick={
                () => props.compInc(0)
            }>Reset</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)
~~~

    8 - Agora nos possuimos um componente sujeito a ser CACHEADO, ou seja, ele so será renderizado caso as propriedades modifiquem. Ele continuaram renderizado pelo fato de que estamos passando uma função (inc) novamente, ou seja, todas as vezes que renderiza é criada essa função.
    -> Como não podemos colocar a função inc() fora do componente, temos que utilizar o HOOK useCallback(), para tratar essa renderização.
    -> No usecallback() basicamente passamos uma função que recebe um parametro e faz uma determinada operação. Precisamo garantir a dependencia (o que irá mudar para ativar) para que essa função seja chamada novamente.
    -> Essa função, será um função callback que irá receber o valor de current(curr) e somar ao delta, em vez de dependermos do count para ativar as modificações.

~~~javascript
const increment = useCallback(function(delta){
    if(delta === 0) return setCount(0)
    setCount(curr => curr + delta)
},[setCount])
~~~

    9 - Agora temos a criação unica de dependencias. Não causando a renderização dos botões toda vez que for clicado.

~~~javascript
const UseCallback = props => {
    const [count,setCount] = useState(0)

    // function increment(delta){ // criação extra do botão reset.
    //     if(delta === 0) return setCount(0)
    //     setCount(count + delta)

    //     // outra forma
    //     if(delta === 0) {
    //         setCount(0)
    //     }else{
    //         setCount(count + delta)
    //     }
    // }

    const increment = useCallback(function(delta){
        if(delta === 0) return setCount(0)
        setCount(curr => curr + delta)
    },[setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hooke UseCallback"
                subtitle="Retorna uma função memorizada!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons 
                    compInc={increment}
                />
            </div>
        </div>
    )
}
export default UseCallback
~~~

~~~javascript
import React from 'react'

const UseCallbackButtons = props => {
    console.log("Render...")
    return (
        <div>
            <button className="btn" onClick={
                () => props.compInc(6)
            }>+6</button>
            <button className="btn" onClick={
                () => props.compInc(12)
            }>+12</button>
            <button className="btn" onClick={
                () => props.compInc(18)
            }>+18</button>
            <button className="btn" onClick={
                () => props.compInc(0)
            }>Reset</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)
~~~


&nbsp;

***
---
## [Aula 71] - PORQUE USAR O CONTEXT API 

&nbsp;

Porque precisamos de algo como o CONTEXT API? Quando temos uma aplicação baseada em React seja (React, angular ,view, react native, flutter) todos esses frameworks e bibliotecas baseadas em componentes, temos um aplicação mais ou menos assim:

    1 - Imagine um componente chamado [APP]
    2 - [App] possui outros componentes em segundo plano.
                                [APP] 

        [HEADER]-----------[CONTENT]---------------[MENU]---------[FOOTER]
        [body]        [PAGEHEADER]    [PAGEBODY]
                                      [TABLE]
                                      [ROW]
    3 - Isso é para mostrar que temos uma grande arvore de componentes.
    4 - Imagine que voce tenha a necessidade de trocar informações entre os componentes em extremos diferentes da arvore. Como poderiamos fazer para haver comunicação entre esses dois componentes?
    -> Existe um processo de comunicação direta e um processo de comunicação indireta.
    
    [EXEMPLO]
        1 - Vamos supor que o [HEADER] seja a origem e o [ROW] o destino.
        2 - Então o componente [HEADER] precisa ter uma comunicação indireta com o [APP]. Ou seja, em [APP] vamos criar uma função e passa-la para [HEADER] que irá dar uma resposta e passa-la para o [APP] novamente.
        3 - O [APP] que agora possui o retorno do componente [HEADER] pode passar as informações para os componentes do outro extremo ate chegar no componente desejado, no caso: [CONTENT]->[PAGEBODY]->[TABLE]->[ROW].
        -> Ou seja, os componentes [CONTENT]->[PAGEBODY]->[TABLE]->[ROW] foram envolvidos na comunicação sem que haja a necessidade. A ideia seria fazer uma comunicação direta entre [HEADER]->[ROW]
    
    5 - Para estabelecer a comunicação entre esses dois componentes, nos teriamos que criar uma estrutura para armazenar informações que esteja fora/envolvendo toda a sua aplicação.
    -> Eventualmente voce terá um componente antes do componente raiz da sua aplicação, e dentro desse componente voce terá CONTEXTO, ou seja, dados para que seja possivel compartilhar entre componentes.
    -> Ou seja, se esse CONTEXTO de alguma forma for acessivel dentro do dos dois componentes [HEADER] E [ROW], consequimos alterar o dado do contexto no [HEADER] por exemplo, e esse valor ser refletido no [ROW].
    
TEMOS ASSIM UMA ESTRUTURA, UM CONTEXTO QUE SERÁ PASSADO PARA TODOS OS COMPONENTES NA ARVORE SEM QUE TENHAMOS A COMUNICAÇÃO DIRETA (PAI -> FILHO) E NEM A COMUNICAÇÃO INDIRETA (PAI_FUNÇÃO -> FILHO -> CHAMA FUNÇÃO DEVOLVENDO INFORMAÇÕES.)

Essa é a ideia do **context API** , ter algo externo a arvore de componentes, com um contexto para alterar as informações.

                                     [RESULTADO]
    Comunicação Direita e Indireta não é suficiente para trocar informações entre componentes. Caso tenha muitos componentes, o nivel de complexidade irá aumentar.

    Estabelecer troca de informações entre componentes sem que haja necessidade de usar comunicação Direta e/ou Indireta.
    

&nbsp;

***
---
## [Aula 72] - useContext #01 

&nbsp;

Vamos agora fazer um exercicio para que possamos entender melhor o CONTEXT API. Dentro de /src vamos criar outra pasta chamada de /data, que irá receber alguns dados para o CONTEXTO.

Esses dados estarão fora dos componentes para que possamos passar esses dados por meio de um PROVEDOR/PROVIDER e assim conseguirmos acessar esses dados de qualquer componente da aplicação.

Dentro de /data vamos criar por enquanto um arquivo chamado [DataContext.js] - não terá codigo jsx - depois iremos criar um componente que dentro dele iremos colocar um CONTEXTO. Logo, primeiro iremos criar um CONTEXTO solto, e depois iremos ver uma outra forma de organizar o codigo.

É muito comum a utilização do CONTEXT API juntamente com o useReducer(), alternativa do useState() quando temos ESTADOS MAIS COMPLEXOS.


```text
.
|--- src
|    |--- components
|    |--- data
|--- |--- |--- [ DataContext.js ] 
|    |--- views
|    |--- index.css
|    |--- index.js
```

    1 - Vamos criar uma constante chamada data (poderia ser state).
    -> Ela irá receber um numero e um texto.
    -> Quando formos exporta-la (export) vamos criar uma constante chamada [dataContext] e vamos criar um CONTEXTO a apartir de [React.createContext()] passando os dados para o CONTEXTO INICIAL (DataContext).

&nbsp;

    [DataContext.js - ESTADO INICIAL]
~~~javascript
import React from 'react'

export const data = {
    number: 123,
    text: 'Context API...'
}
const DataContext = React.createContext(data)
export default DataContext
~~~

    2 - Tando expostamos os dados [React.createContext(data) -> number & text] quando exportamos a constante criada chamada [DataContext].

    3 - Para usar esse DataContext, no componente [APP.jsx] estamos preparando o ambiente para que possamos usar o HOOK [useContext()], um hook que aceita um objeto de CONTEXTO (no caso, DataContext, criado a partir do .createContext).
    -> Logo a resposta do [.createContext] é o OBJETO DE CONTEXTO = DataContext.
    -> Irá retornar o CONTEXTO ATUAL.

    4 - Apos a criação do contexto iremos utiliza-lo em um ponto que nos deixe utiliza-lo em toda a nossa aplicação.
    -> Qual o componente de mais alto nivel / RAIZ de toda nossa aplicação? [APP.jsx], estamos usando esse COMPONENTE dentro do [INDEX.JS -> Primeiro componente carregado na aplicação]. A partir do momento que esse componente carrega, todos os outros componentes serão carregados tambem.
    -> Poderiamos colocar o [dataContext] tanto dentro do [APP.JSX] quanto dentro do [INDEX.JS].
    
    5 - Dentro do [INDEX.JS] vamos importar o [DataContext] e envolver toda a aplicação [APP.jsx] dentro do DataContext.


~~~javascript
[INDEX.JS]
//IMPORT REACTS
import React from 'react'
import ReactDom from 'react-dom'

// import style
import './index.css'

// import componente para contexto
import DataContext from './data/DataContext'
// import componente para renderização APP.jsx
import App from './views/App'

// renderização com DOM
ReactDom.render(
    <DataContext.Provider>
        <App />
    </DataContext.Provider>,
    document.getElementById('root')
)
~~~

    6 - Existe um parametro do .Provider chamado [value] que precisa ser incializado com os dados que queremos passar para todos os componentes.
    -> Logo em DataContext.js vamos pegar o [data] que estamos exportando sem o default, e importar no [INDES.JS] junto do DataContext.

~~~javascript
import DataContext, {data} from './data/DataContext'

ReactDom.render(
    <DataContext.Provider value={data}>
        <App />
    </DataContext.Provider>
    document.getElementById('root')
)
~~~

    7 - Passando o atributo {data} para dentro de [valu={}], temos os objetos {number & text} sendo passados para todos os componentes a partir do [.provider].

**[REVISÃO - INICIO]**

Criamos um CONTEXTO a partir do [React.createContext(contexto)], a partir de um conjuto de dados e colocamos numa variavel chamada DataContext (exportada por padrão) e importamos ele no mais alto nivel da aplicação, envolvendo o componente raiz.

Logo, temos o componente [APP] envolvido pelo nosso CONTEXT a partir do [DataContext.provider].

Todos os componentes terão a possibilidade de acessar os dados do CONTEXTO.

**[REVISÃO - FIM]**


Vamos agora criar um exemplo para verificarmos o acesso a esse contexto.

    [UseContext() - ESTADO INICIAL]

~~~javascript
const UseContext = props => {
    return (
        <div className="UseContext">
            <PageTitle
                title="Hooke UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                
            </div>
        </div>
    )
}
~~~

    1 - Precisamos importar o OBJETO DE CONTEXTO que criamos [DataContext].
    2 - Passando ele como propriedade para o useContext() significa que iremos receber na variavel(que iremos criar - qualquer nome) o contexto atual.
~~~javascript
const UseContext = props => {
    const context = useContext(DataContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e rotar o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center>
            </div>
    )
}
~~~

    3 - Se olharmos dentro do [index.js] dentro do contexto passamos o valor de [value={data}], ao olharmos para o objeto [data] temos o [number | text].
    -> Vamos fazer uma alteração onde vamos inicializar o contexto como nulo
        -> const DataContext = React.createContext(null).
~~~javascript
[index.js]

ReactDom.render(
    <DataContext.Provider value={data}>
        <App />
    </DataContext.Provider>,
    document.getElementById('root')
)
~~~
~~~javascript
[DataContext.js]

import React from 'react'

export const data = {
    number:123,
    text: 'Context API...'
}
const DataContext = React.createContext(null)
~~~

    4 - Nosso contexto é um objeto que possui um numero e um texto, como podemos acessar esses elementos?
    -> dentro de [UseContext.jsx] vamos criar uma [div.center] junto com um [span.text] (Note que não estamos precisando criar comunicação direta nem indireta, simplesmente importamos o contexto.)
    -> Feito isso basta utilizarmos a interpolação para fazer o acesso aos dados.

~~~javascript
[useContext.jsx]

import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import DataContext from "../../data/DataContext";

const UseContext = props => {
    const context = useContext(DataContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hooke UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{context.text}</span>
                <span className="text">{context.number}</span>
            </div>
        </div>
    )
}
export default UseContext
~~~

    5 - Agora queremos fazer a modificação do valor, o que requer um cuidado pois a modificação do valor altera todo o CONTEXTO.
    -> Para verificarmos isso vamos fazer algumas alterações:
    1) COLOCAR O DATACONTEXT.PROVIDER PARA O [APP.JSX] EM VEZ DO [INDEX.JS], PARA ASSIM PODERMOS CRIAR UM ESTADO E DEPOIS UM FUNÇÃO QUE O ALTERE.

~~~javascript
[APP.JSX]
const App = props => {
    return (
        <DataContext.Provider value={data}>
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}
~~~
~~~javascript
[index.js]
ReactDom.render(
    <App />,
    document.getElementById('root')
)
~~~

    6 - Podemos por exemplo inicializar um estado dentro do componente app, a partir do objeto {data} criado dentro do [DataContext.js], basicamente o numero e o texto.
    -> Agora estamos inicializando o estado com um objeto, e temos uma função que irá alterar o estado.
    -> Ao chamar a função de alterar o estado, temos que tomar o cuidado de SETAR O TIPO DE DADO correto que queremos.

~~~javascript
const [state, setState] = useState(data)
~~~

    7 - Agora em vez de passar o {data} em [value={}] vamos passar um objeto que terá dois atributos o [state, setState].
    -> OBS: A utilização de duas chaves se da com a primeira sendo a interpolação de um valor, e as chaves internas indicam a delimitação de um objeto em javascript.
~~~javascript
const App = props => {
    const [state, setState] = useState(data)
    return (
        <DataContext.Provider value={{state, setState}}>
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}
~~~
    8 - Com isso nosso contexto possui um objeto com 2 atributos [state, setState].
    -> Para acessar agora, precisamos colocar o [context.state.text] no span de [UseContext.jsx]
~~~javascript
[UseContext.jsx]
<span className="text">{context.state.text}</span>
<span className="text">{context.state.number}</span>
~~~

    9 - Como agora temos o [context.setState] podemos criar uma função chamada (addNumber) para alterar o numero.
    -> Basicamente vamos receber um numero e chamar o [context.setState()]
    -> Lembrando que ele irá setar um objeto, logo queremos que ele continue utilizando cada um dos atributos, usa o operador spredding(...) para pegar todos os atributos do estado atual.
    -> E assim so alterar o valor do atributo [number] a partir do (delta) passado como parametro da fnção [setNUmber].
    -> Quando formos alterar o estado o ideal é que se altere restaurando todos os outros atributos do objeto que não foram alterados.
~~~javascript
function addNumber(n){
    context.setState({
        ...context.state,
        number: context.state.number + delta
    })
}
~~~

    10 - Vamos criar alguns botões para no onClick chamarmos funções arrow para alterar o estado.
~~~javascript
const UseContext = props => {
    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }
    return (
        <div className="UseContext">
            <PageTitle
                title="Hooke UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"
                    onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>
        </div>
    )
}
~~~

    11 - Uma observação é que como esta sendo um dado que estamos compartilhando com a aplicação inteira, ao navegar para outra pagina e retornar, o valor anterior será mantido.
    -> Pois o contexto irá sobrevivera aplicação inteira.
    -> Se dermos um refresh irá restaurar para o valor inicial.
  
**[OUTRA FOMAR]**

~~~javascript 
const UseContext = (props) => {
    // desestruturando
    const {state, setState} = useContext(DataContext)

    function addNumber(delta){
        setState({
            ...state,
            number: state.number + delta
        })
    }
}
~~~


Proxima aula vamos fazer d mesma coisa (criação de estados) mas de uma maniera mais organizada (sem ser dentro de APP).

    1 - Criar dentro de /data/store.jsx.


&nbsp;

***
---
## [Aula 73] - useContext #02

&nbsp;

Vamos fazer mais um exercicio sobre o CONTEXT API. Essa aula é uma evolução, vamos utilizar exatamente as mesmas coisas, [context api, usecontext], so que iremos fazer usando uma formatação melhor.

Vamos fazer de uma forma mais ENCAPSULADA. Na primeira solução criamos um Provider e passados para a aplicação inteira, ou seja, possui um baixo nivel de encapsulamento. Agora vamos criar de uma forma mais ENCAPSULADA.

    1 - Vamos criar um componente não visual (por isso não colcoamos dentro de /components), que terá um estado interno para controlar o estado da aplicação.
    -> Poderiamos usar o useReducer() depois, quebrar em arquivos diferentes, ja que o gerenciamento de estado de uma aplicaçã é algo que merece ter uma boa organização.

    2 - Na estrutura inical do [STORE.JSX] vamos criar uma constante chamada (store) que irá receber o componente funcional que irá retornar algum tercho jsx.
~~~javascript
const Store = props => {
    return (
        <div>Store</div>
    )
}
~~~

    3 - Ja vimos que se quisermos usar esse componente (Store) envolvendo toda a aplicação, iriamos em [app.jsx] e envolveriamos todo o condigo dentro dessa nova tag/compoennte.
    -> E assim para acessar iremos retonar na div o [props.children]
~~~javascript
[App.jsx]
const App = props => {
    const [state, setState] = useState(data)
    return (
        <Store>
            <DataContext.Provider value={{state, setState}}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}
~~~
~~~javascript
[Store.jsx]
const Store = props => {
    return (
        <div>{props.children}</div>
    )
}
~~~

    4 - Agora a primeira parte do componente [STORE], esta funcionando. A outra parte que iremos precisar fazer será criar Dados e o Contexto.
~~~javascript
const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}
~~~
    5 - Apos a criação do objeto de estado inical de dados, vamos fazer a criação do contexto e atribuir ele a uma variavel chamada (AppContext)
~~~javascript
const AppContext = React.createContext(InitialState)
~~~

    6 - Agora podemos acessa o [Provider] usando o AppContext e colocar a aplicação inteira dentro do provider e não na [div].
    -> Vai dar uma advertencia pois nao utilizamos ainda a propriedade {value} no [.provider]
~~~javascript
[store.jsx]
// criação estado inicial de dados
const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}
// criação do contexto
const AppContext = React.createContext(initialState)
// alternativa
// const AppContext = React.createContext(null)

const Store = props => {
    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store
~~~

    7 - Agora como temos o estado inicial, vamos criar uma constante de estado (state,setState) e com o useState() vamos passar o estado inicial de dados que criamos.
    -> Não vamos passar no [value] do PROVIDER, como fizemos anteriormente, o [state, setState] diretamente.
    -> Como estamos criando um componente para fazer o controle do estado, vamos querer passar as funções mais ou menos prontas.
        - FUNÇÃO DE ALTERAÇÃO DE TEXTO
        - FUNÇÃO DE ALTERAÇÃO DO NUMERO
    -> Não vamos querer passar a função setStage diretamente para os filhos e nem o state.

~~~javascript
const initialState = {
    number:1234,
    text:'Context API + Hooks'
}
const AppContext = React.createContext(InitialState)

const Store = props => {
    const [state, setState] = useState(initialState)
}
return (
    <AppContext.Provider value={{
        number: state.number,
        text: state.text,
    }}>
            {props.children}
    </AppContext.Provider>
)
~~~

    8 - Vamos agora criar uma função chamada (updateState) que irá receber dois parametros (key = chave/nome_do_atributo (caso number), value = novo valor)
    -> Para alterar o state, dentro dessa função chamamos o SetState(objeto-rplicar estado atual).
    -> o atributo chave será uma string logo precisamos colocar ele enter colchetes.
    -> Apos isso, em provider, em vamos passar a função setNumber recebendo um novo numero chamando o updatestate passando o valor number e o atributo(n).
    -> Faz a mesma coisa para o atributo text.
    -> A utilização da função [updateState] é uma forma simplificada de que todas as vezes que criarmos uma nova função nao termos que clonar o state nvoamente.
~~~javascript
const Store = props => {

    const [state, setState] = useState(initialState)

    function updateState(key, value){
        setState({
            ...state, // clonando
            [key]:value
        })
    }
    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number',n),
            setText: t => updateState('number',t),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
~~~

    9 - Em vez de passar a função que altera o estado inteiro, estamos passando funções indivoduais de alteração do estado. Causando a imposibilidade de alteração do estado itneiro de uma vez.
    -> Então a partir do provider estamos compartilhando um objeto que criamos encapsulado dentro do componente [STORE].
    -> Como a aplicação ja esta envolvida dentro de <store>, não precisamos fazer anda dentro de [App] simplesmente envolvemos dentro de uma tag/compoenente <Store>, temos a posibildiade de usar esse outro estado.

    10 - Outra coisa que precisamos fazer em [Store.jsx] é exportar a variavel que esta criando o CONTEXTO, para assim podermos usar ele dentro de outros componentes.

~~~javascript
export const AppContext = React.createContext(initialState)
~~~

    11 - Dentro do [useContext.jsx] vamos criar um segundo exercicio.
    -> Vamos acessar o [number, setNumber] usando o contexto.
    -> Vamos mostra-los utilizando uma [span]
~~~javascript
[USECONTEXT.JSX]

const UseContext = props => {
    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }
    const {number, setNumber} = useContext(AppContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hooke UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"
                    onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={
                            () => setNumber(number - 1)
                        }
                    >-1</button>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)
                    }>+1</button>
                </div>
            </div>
        </div>
    )
}
~~~

    12 - Agora podemos observar a mesma utilização de um contexto, mas agora sendo monitarado o acesso por um componente chamado [store.jsx].

    13 - Para usar o text, basta importa-lo no contexto do {number} e coloca-lo dentro de uma <span>.
~~~javascript
const UseContext = props => {
    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    const {number,text, setNumber} = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hooke UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"
                    onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={
                            () => setNumber(number - 1)
                        }
                    >-1</button>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)
                    }>+1</button>
                </div>
            </div>
        </div>
    )
}
export default UseContext
~~~

    14 - Podemos tambem fazer a utilização de algum tipo de useEffect(). Vamos passar uma função e colocar como dependenia o [number], se o numero que como padrão eh 1234, passar de 1250, vamos alterar o [text] para (Eita!!!!).
~~~javascript
const UseContext = props => {
    const {state, setState} = useContext(DataContext)

    function addNumber(delta){
        setState({
            ...state,
            number: state.number + delta,
        })
    }

    const {number,text, setNumber} = useContext(AppContext)

    // como modificar o texto -add setText na variavel acima.
    // useEffect(function() {
    //     if(number > 1250){
    //         setText('Eitaaa!!!')
    //     }
    // },[number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hooke UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"
                    onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={
                            () => setNumber(number - 1)
                        }
                    >-1</button>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)
                    }>+1</button>
                </div>
            </div>
        </div>
    )
}
~~~


&nbsp;

***
---
## [Aula 74] - useReducer #01

&nbsp;











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
