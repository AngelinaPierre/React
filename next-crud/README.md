# ==== [Seção 6 - Projeto Cadastro (Integração com Banco de dados (Firestore)) ] ====

&nbsp;

---

---

## [Aula 103] - INTRODUÇÃO DO PROJETO

&nbsp;

Agora iremos desenvolver uma aplicação de cadastro (**CRUD - CREATE/READ/UPDATE/DELETE**), vamos integrar nossa aplicação com o **FIRE BASE**, vamos utilizar HOOKS PERSONALIZADOS, vamos usar o **TAILWIND CSS** novamente, vamos usar **TYPESCRIPT** e **INTERFACES**.

> **Tailwind CSS** is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a >highly customizable, low-level CSS framework that gives you all of the building blocks you need to build >bespoke designs without any annoying opinionated styles you have to fight to override.

Vamos fazer a integração de varias ferramentas para aprendermos a fazer um **CRUD**, inclusive de uma forma organizada, dando varias dicas de como organizar o codigo durante o processo de construção do PROJETO.

Será algo que sem duvida ira ajudar a ter uma consolidação melhor de tudo que ja foi visto no curso. Vamos começar na proxima aula vendo uma visão geral do projeto.

&nbsp;

---

---

## [Aula 104] - RESULTADO FINAL

&nbsp;

Antes de começar a codificação vamos ver o resultado final da aplicação que iremos trablhar. Embora seja uma aplicação simples, iremos trabalhar com muitos conceitos interessantes.

Os dados que aparecem são dados que estão vindo da numve, no caso, **FIREBASE**, mas precisamente do **FIRESTORE**.

Quando clicamos em [Novo Cliente], será direcionado para um formulario, como é um formulario onde o criente não foi cadastrado, aparece apenas o nome e a idade. Ou seja, o codigo/id não aparece.

    nome = leonardo
    idade = 18

Quando clicamos em salvar ele volta para a tela da lista de cadastro, trazendo mais um novo usuario cadastrado. Em codigo estamos colocando diretamente o proprio ID obtido do FIREBASE, mas se quisermos podemos omitir essa informação a retirando da tabela.

Podemos tambem editar e complementar as informações dos usuarios cadastrados, na parte de edição, colocamos o codigo para somente leitura, mas podemos tambem suprimir essa informação. Quando editamos e salvamos, volta para a tela que lista os usuarios.

Podemos tambem excluir os dados (os usuarios cadastrados)

&nbsp;

---

---

## [Aula 105] - CONFIGURAÇÃO: **NextJS, TailwingCSS e Firebase**

&nbsp;

Vamos começar nossa jornada criando nosso aplicativo(**next-crud**) com o comando abaixo:

```
npx create-next-app next-crud
```

Vamos fazer a Integração com o **[Firebase](https://console.firebase.google.com/u/1/)**, vamos tambem instalar o **[TAILWINGCSS](https://tailwindcss.com)** para configurarmos o estilo da pagina.

No **Firebase** vamos criar um novo projeto e chama-lo tbm de [next-crud], vamos desativar o ANALYTICS. Essa parte de configuração é feita no inicio, tanto a parte do projeto quanto a do firebase.

> Lembre-se de no final excluir o projeto para nao ficar disponivel ate porque terá algumas informações sensiveis, que irão aparecer.

Apos a criação do projeto no **FIREBASE**, vamos pedir para ele criar uma aplicação web com o nome de [frontend]. Será mostrado algumas informações de configurações que poderemos visualiza-las depois, ou seja, podemos copia-las agora ou buscar mais tarde(configurações do projeto).

    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
            authDomain: "zzzzzzzzzzzzzzzzzzzzzzz",
            projectId: "zzzzzzzzzzzzzzzzzzzzzzzzzzz",
            storageBucket: "zzzzzzzzzzzzzzzzzz",
         messagingSenderId: "zzzzzzzzzzzzzzzzzzzzzzz",
            appId: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
    </script>

Podemos ja tambem entrar na parte do **Firestore** fazendo ja a criação do banco de dados, vamos cria-lo no modo **DESENVOLVIMENTO** para não termos que ficar nos preocupando tanto com as questões de regras e tals, mas é simples fazer as regras, podemos por exemplo, deixar apenas o usuario so mexer em dados que tenha haver com o email dele e coisas similares.

Como vamos colocar no modo de **TESTE/DEV** temos que ter cuidado, para eventualmente deixarmos nessa forma e informações sensiveis do projeto vazem. Logo cuidao na criação do banco de dados, e principalmente ficar atento na parte das regras(definida como qualquer um pode escrever).

Do ponto de vista do **FIREBASE** nos criamos o nosso projeto, vamos depois precisar das informações relacionadas a ele (ex: "apikey:", "authDomain:","projectid:"), para podermos fazer com que nossa aplicação interaja com o **FIREBASE**.

Agora, apos a criação do nosso projeto com o comando **npx create-next-app** vamos entrar no nosso projeto e começar as configurações.

Vamos entrar na parte de [documentação do tailwindCSS](https://tailwindcss.com/docs/guides/nextjs) para fazermos a intalação.

```
npm install -D tailwindcss postcss autoprefixer
```

O proximo passo será rodar o comando abaixo, onde serão criados dois arquivos:

- **tailwind.config.js**
- **postcss.config.js**

```
npx tailwindcss init -p
```

Apos isso, vamos abrir o VSCODE para fazermos uma pequena modificação(opcional) que é criar a pasta [/src] e mover as pastas [/styles && /pages].

> OBS: não mova a pasta public

Quando formos passar para as configurações, dentro do arquivo de configuração do **tailwind.config.js** a parte onde temos precisamos substituir o codigo pelo seguinte, criando a pasta [/src/components]

```javascript
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

O comando [purge:] serve para quando formos gerar a versão final da nossa aplicação, ele irá olhar para esses arquivos e irá apenas usar aquilo que realmente foi utilizado na aplicação. Todo o resto será excluido. É a partir dessa configuração que iremos informar quais são as pastas que terão componentes react que irão usar as classes do **tailwindcss**.

o proximo passo é a inclusão/import do nosso **tailwindcss** dentro do nosso arquivo [_app.js].

```javascript
[/pages/_app.js]

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

Outra alteração que iremos fazer é no nosso [/pages/index.js], mudar a extensão para [TSX] e no diretorio principal da nossa aplicação vamos ter que importar o **TYPESCRIPT**

    1 - Criar arquivo no root /tsconfig.json

Uma vez com esse arquivo criado, se tentarmos iniciar o nosso codigo usando o comando

```
npm run dev
```

Apos rodar esse comando, vamos ter que instalar as dependencias do **typescript** (comando de retorno do terminal) com a adição no comando do proprio [typescript].

Agora temos o nosso projeto configurado, vamos inicia-lo novamente com o comando:

```
npm run dev
```

Quando fizermos isso, ele irá preencher o arquivo [tsconfig.json] automaticamente e teremos o nosso projeto funcionando.

```JSON
[/next-crud/tsconfig.json
]
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

Podemos apagar o arquivo [Home.module.css] e no [/pages/index.tsx] vamos deixar apenas a primeira [div] e vamos fazer um teste para termos certeza que a nossa aplicação esta funcionando com o **TAILWINDCSS**.

> Fazer instalação do plugin do tailwindcss no VScode.

```tsx
[/pages/deinx.tsx];
export default function Home() {
  return <div className=""></div>;
}
```

Vamos utilizar o formato de template string na atribuição do classname para podermos escrever em multiplas linhas.

```tsx
export default function Home() {
  return (
    <div
      className={`
        flex h-screen justify-center items-center
    `}
    >
      <span>Texto</span>
    </div>
  );
}
```

Usando esses atributos o texto irá ficar centralizado na tela. Podemos tambem aplicar uma classe CSS na tag [span] como exemplo "text-4xl" irá pegar um tamanho mais de texto.

```tsx
[/pages/deinx.tsx];

export default function Home() {
  return (
    <div
      className={`
        flex h-screen justify-center items-center
    `}
    >
      <span className="text-4xl">Texto</span>
    </div>
  );
}
```

Podemos tambem definir um gradiente de background para direita, pegando assim nossa div e colocando uma gradiente de das cores que definimos.

```tsx
export default function Home() {
  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-blue-600
    `}
    >
      <span className="text-4xl">Texto</span>
    </div>
  );
}
```

POdemos inclusive colocando um [via-yellow-500], ou seja, colcoando um terceiro valor de cor para incrementar no gradiente, indo do roxo para o amarelo e depois para o azul.

```tsx
[/pages/index.tsx - ESTRUTURA INICIAL]

export default function Home() {
  return (
    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-blue-600
    `}>
      <span className="text-4xl">Texto</span>
    </div>
  )
}
```

Até agora temos o **tailwindCSS** configurado no nosso projeto, temos o projeto **NextJS** configurado dentro da pasta **/src**, onde copiamos os diretorios [ /pages && /styles ], fizemos o teste usando o template-string para vermos se que nosso projeto estava configurado, e tambem esta ja configuramos o firebase onde iremos fazer a integração com nossa aplicação depois.

&nbsp;

---

---

## [Aula 106] - COMPONENTES LAYOUT E TITULO

&nbsp;

Vamos agora começar a desenvolver nossa aplicação. Vamos colocar um [h1] para vermos como nossa div irá se comportar quando aplicarmos algumas classes do **tailwindCSS**.

> Lembrando que precisamos ter alguns conhecimentos previos, por exemplo, sobre **flex-box**(video canal coder), algo importantissimo para quem é desenvolvedor web, um dos primeiros assuntos que precisamos saber quando começamos a estudar CSS.

```typescript
[/pages/deinx.tsx];

export default function Home() {
  return (
    <div
      className={`
        flex justify-center items-center h-screen
    `}
    >
      <h1>App</h1>
    </div>
  );
}
```

    1 - Com essas configurações, agora temos o nosso elemento centralizado. Vamos fazer um gradient de background.

```typescript
[/pages/deinx.tsx];

export default function Home() {
  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
    `}
    >
      <h1>App</h1>
    </div>
  );
}
```

    2 - Vamos agora querer q o texto da nossa aplicação seja branco.

```typescript
[/pages/deinx.tsx];

export default function Home() {
  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}
    >
      <h1>App</h1>
    </div>
  );
}
```

    3 - Vamos agora criar um componente chamado de [LAYOUT.tsx - vamos trabalhar com typescript e react]
    -> Vamos construir essa função de Layout() para receber propriedades.
    -> Vamos definir a <div> inicial, onde no [className=] vamos utilizar uma TEMPLATE-STRING para assim utilizarmos multiplas linhas caso tenhamos uma quantidade muito grande de classes.
    -> Vamos colcoar para o layout ser [flex](vamos definir ele para ser um {flex-col}), ou seja, vai definir o fle-direction para ser em coluna.
    -> Vamos usar na largura da pagina, em vez de inteira, vamos usar (2/3) da largura. Se colocarmos o mouse em cima, como estamos usando o plugin do TAILWINDCSS conseguimos ter o code_complete.
    -> Vamos colocar o background para ser branco, e o texto cinza escuro.

```typescript
[/components/Layout.tsx - ESTRUTURA INICIAL]

export default function Layout(props){
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
        `}>
            <div>

            </div>
        </div>
    )
}
```

    4 - Vamos tambem criar logo o componente [/components/Titulo.jsx], para usarmos no LAYOUT.
    -> Vamos criar uma função [Titulo()] que irá receber algumas propriedades via (props).
    -> Vamos definir uma <div> para dentro dela criarmos um <h1> e um <hr - linha>.
    -> No <h1> vamos receber o que colocarmos dentro do titulo em outro componente via {props.children}.

```typescript
[/components/Titulo.tsx - ESTRUTURA INICIAL]

export default function Titulo(props){
    return (
        <div>
            <h1>{props.children}</h1>
        </div>
    )
}
```

    5 - Apos a criação do [Titulo.tsx] vamos no nosso [Layout.tsx] importar esse componente, e terminar de fazer as alterações no Layout() necessarias.
    -> Dentro do componente <Titulo> vamos esperar receber via props dentro do <Layout> para nessa tag, passarmos o titulo como parametro ----- <Layout Titulo="">.
    -> Logo, podemos usar um recurso do TYPESCRIPT que é a criação de uma interface (LayoutProps - o mesmo nome do componente so que com o final props). E nessa interface conseguimos informar quais são as propriedades que esperamos receber no componente(ex:titulo do tipo string).

```typescript
[/components/Laotuy.tsx];

import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex flex-col w-2/3
            bg-white text-gray-800
        `}
    >
      <Titulo></Titulo>
      <div></div>
    </div>
  );
}
```

    6 - Significa que dentro da função Layout, podemos informar que essas propriedades que ela irá receber são do tipo (props: LayoutProps), e quando formos criar na nossa pagina [/pages/index.tsx] o componente <Layout> será exigido que coloquemos q propriedade {titulo}.
    -> Outra coisa que precisamos definir é o conteudo, vamos usar uma <span> para isso.

```typescript
[/pages/deinx.tsx];
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  );
}
```

    7 - Uma vez que definimos o <Layout>, e ele obrigatoriamente exige um componente filho {titulo}. Se quisermos que a colocação do componente filho {titulo} fosse opcional. Dentro da interface que criamos em [Layout.tsx] colocariamos um simbolo de (?) antes dos dois pontos (?:). Agora, podemos ou não passar para o componente <Layout> um titulo.
    -> Essa é uma das formas que temos para garantir que algumas propriedades sejam exigidas pelo seu elemento.
    -> Em [Layout.tsx] agora que temos dentro de (props) a propriedade {titulo}, podemos fazer a interpolação para mostrar o mesmo.

```typescript
[/components/Laotuy.tsx];

import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex flex-col w-2/3
            bg-white text-gray-800
        `}
    >
      <Titulo>{props.titulo}</Titulo>
      <div></div>
    </div>
  );
}
```

    8 - Nosso componente ja esta funcionando no Browser, agora vamos so precisar fazer alguns ajustes.
    -> Por exemplo, nesse momento vamos trabalhar com o [Titulo.tsx && Layout.tsx] para termos a parte inicial do nosso projeto concluida.
    -> Dentro do nosso [Titulo.tsx], vamos criar um {ClassName}, não vamos usar nenhum arquivo CSS, mas sim as classes do TAILWINDCSS para construir o layout da aplicação.
    -> No <h1> vamos colocar um padding left (pl-7) onde colocando o mouse em cima do 7, veremos que ele corresponde a 1.75rem.

```typescript
[/components/Tilotu.tsx];

export default function Titulo(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2">{props.children}</h1>
    </div>
  );
}
```

    9 - No [Layout.tsx] não estamos utilizando o que seria o conteudo, que será recebido via {props.children}.
    -> O que passamos como filho do compoente <Layout> usado no [index.tsx], o que foi basicamente o <span> de conteudo.
    -> Assim, teremos tanto o conteudo sendo exibido, como a parte do titulo.

```typescript
[/components/Laotuy.tsx];
import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex flex-col w-2/3
            bg-white text-gray-800
        `}
    >
      <Titulo>{props.titulo}</Titulo>
      <div>{props.children}</div>
    </div>
  );
}
```

    10 - Vamos criar uma classe no <hr> para modifircar ela um pouco e aplicar um estilo nela.
    -> Vamos definir uma bordar mais grossa, 2 pixels. E uma cor de borda roxa.

```typescript
[/components/Tilotu.tsx];

export default function Titulo(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2">{props.children}</h1>
      <hr className="border-2 border-purple-500" />
    </div>
  );
}
```

    11 - Outra modificação que iremos fazer eh colocar o [Layout.tsx] para ter uma borda arredondada (rounded-md).
    ->

```typescript
[/components/Laotuy.tsx];

interface LayoutProps {
  titulo: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}
    >
      <Titulo>{props.titulo}</Titulo>
      <div>{props.children}</div>
    </div>
  );
}
```

    12 - Vamos alterar o tamanho do texto to titulo.

```typescript
[/components/Tilotu.tsx];

export default function Titulo(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2 text-2xl">{props.children}</h1>
      <hr className="border-2 border-purple-500" />
    </div>
  );
}
```

    13 - Para finalizar, na <div> do conteudo, vamos aplicar um padding para nao ficar colocado.
    -> Assim o conteudo não esta mais grudado nas laterais.

```typescript
[/components/Layout.tsx - ESTRUTURA FINAL]

import Titulo from "./Titulo"

interface LayoutProps{
    titulo:string
    children:any
}

export default function Layout(props: LayoutProps){
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}
```

```typescript
[/components/Titulo.tsx - ESTRUTURA FINAL]

export default function Titulo(props){
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}
```

```typescript
[/pages/index.tsx - ESTRUTURA FINAL]

import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            <span>Conteúdo</span>
        </Layout>
    </div>
  )
}

```

&nbsp;

---

---

## [Aula 107] - CLASSE CLIENTE

&nbsp;

Agora iremos criar uma outra pasta [/src/core], para representar o que seria do **DOMINIO** da nossa aplicação.

Podemos seraparar essa pasta [/core] em multiplas pastas/subdominios, podemos ter o dominio do RH, do financeiro de qualquer setor relecionado a sua aplicação. Como vamos criar uma aplicação simples, vamos criar os arquivos diretamente no [/core]. Obviamente numa aplicação grande voce separa em sub-pastas/sub-pacotes dentro de [/core].

    1 - Vamos criar uma arquivo chamado [/core/Cliente.ts] que será a nossa CLASSE que irá representar um CLIENTE.
    -> Vamos exportar a classe que criarmos e essa classe terá 3 atributos [id|nome|idade].
    -> Podemos usar o proprio [PRIVATE] do TYPESCRIPT para os membros/propriedades da classe CLiente.

> TypeScript also has its own way to declare a member as being marked private, it cannot be accessed from outside of its containing class. For example

    -> Vamos criar um construtor que irá receber [nome,idade,id] e como o id será algo gerado, colocamos ele por ultimo na sequencia, para podermos colocar como valor_inicial um valor PADRÃO para ser NULO inicialmente. Ou seja, quando criarmos um cliente, ele terá um [ID]NULO, quando enviarmos para o FIREBASE irá gerar uma [ID], e na volta teremos o [ID] setado.
    -> Vamos usar o [this.] para referenciar as propriedades da classe e criar o nosso objeto.

```typescript
[/core/Cliente.ts - ESTRUTURA INICIAL]

export default class Cliente{
    // criação das propriedadades
    private id: string
    private nome: string
    private idade: number

    // criação do objeto usando constructor
    constructor(nome:string, idade:number, id:string = null){
        this.nome = nome
        this.idade = idade
        this.id = id
    }

}

```

    2 - Apos isso, podemos criar os nossos [GET & SET]'s.
    -> Vamos falar que o [GET][ID] irá retornar o {this.id} - objeto. Dessa maneira como esta escrita irá gerar um problema.

```typescript
[/core/Cliente.ts]

get id(){
        return this.id
    }
```

    3 - Ele esta informando que o "GETTER" que temos esta com o mesmo nome que o atributo da classe Cliente {private id:string}.
    -> Nesse caso, vamos usar o proprio recurso do JAVASCRIPT para trabalhar com [DADOS PRIVADOS].
    -> Para fazer isso, precisamos mudar o nosso [tsconfig.json] para uma versão mais nova (ex:ES2015), que ja suporta a questão dos ATRIBUTOS PRIVADOS.

```json
"compilerOptions": {
    "target": "ES2015",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },

```

    4 - Apos feita essa mudança, em vez de colocar [PRIVATE] na frente dos atributos iremos utilizar a cerquilha [#].
    -> Isso faz com que tenhamos NATIVAMENTE (javascript) ATRIBUTOS PRIVADOS.

```typescript
[/core/Ceeilnt.ts];

export default class Cliente {
  // criação das propriedadades
  #id: string;
  #nome: string;
  #idade: number;

  // criação do objeto usando constructor
  constructor(nome: string, idade: number, id: string = null) {
    this.nome = nome;
    this.idade = idade;
    this.id = id;
  }

  get id() {
    return this.id;
  }
}
```

    5 - Outra alteração que teremos que fazer para funcionar, é colocar o [#] nos restos das referencias.

```typescript
[/core/Ceeilnt.ts];

export default class Cliente {
  // criação das propriedadades
  #id: string;
  #nome: string;
  #idade: number;

  // criação do objeto usando constructor
  constructor(nome: string, idade: number, id: string = null) {
    this.#nome = nome;
    this.#idade = idade;
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}
```

    6 - Vamos agora fazer o mesmo processo de [GET] para [nome & idade]. Essas são as funçõespor onde iremos acessar essas 3 INFORMAÇÕES.

```typescript
[/core/Ceeilnt.ts];

export default class Cliente {
  // criação das propriedadades
  #id: string;
  #nome: string;
  #idade: number;

  // criação do objeto usando constructor
  constructor(nome: string, idade: number, id: string = null) {
    this.#nome = nome;
    this.#idade = idade;
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  get idade() {
    return this.#idade;
  }
}
```

Por enquanto não vamos criar nenhum "SETTER" na nossa aplicação, se fossemos precisar, criariamos de outra forma para não criar **OBJETOS MUTAVEIS** (poderia ser uma estrategia de criação).

    7 - Outra coisa que iremos fazer é a criação de um [METODO ESTATICO] para criar uma INSTANCIA VAZIA. No caso, um "CLIENTE" VAZIO.
    -> Para não termos que instanciar?? podemos ja por exemplo retornar um cliente [new Cliente()] passando os atributos (nome:'')(idade:0)(id = nulo - não precisa colocar).
    -> Essa é uma maneira de fazer, outra seria declarar o padrão na criação do constructor.

```typescript
[/core/Cliente.ts]

static vazio(){
    return new Cliente('',0)
}
```

Agora criamos o methodo, quando precisarmos no COMPONENTE [index.tsx] INSTANCIAR um cliente, podemos instanciar sem usar o CONSTRUCTOR mas sim um METODO ESTATICO para criar um cliente VAZIO.

Feito isso, podemos agora ir para a parte de criação da nosso **TABELA** e passar a ela uma lista de clientes.

- Podemos criar essa **LISTA** inicialmente **MOCADA** (na mão mesmo).
- Depois iremos evoluindo e fazendo a integração com o BKND.

Proxima aula iremos usar a classe que criamos e criar os clientes manualmente para vermos o componente **TABELA** funcionando.

&nbsp;

---

---

## [Aula 108] - COMPONENTE TABELA #01

&nbsp;

Dentro de [/components] vamos criar o nosoo componente da **TABELA**.

```text
|components
|---|Layout.tsx
|---|Tabela.tsx
|---|Titulo.tsx
```

    1 - Ela seráum componente funcional do react que irá utilizar propriedades recebidas.
    -> Como a tabela é um componente simples, basicamente em seu [return()], vamos utilizar a tag <table> para ja retorna-la.
    -> Outra coisa que podemos fazer nesse componente é definir uma [INTERFACE - Recurso Typescritpt], para deixarmos mais ENCAPSULADO ainda o que esperemos receber como propriedade dentro deste componente, ou seja, para utilizarmos ele.

```typescript
[/components/Tabela.tsx - ESTRUTURA INICIAL]

interface TabelaProps {

}

export default function Tabela(props: TabelaProps){
    return (
        <table>

        </table>
    )
}
```

    2 - Como estamos trabalhando com uma tabela especifica para CLIENTES, ate poderiamos chamar de [TabelaClientes()], mas vamos colocar genericamente como [Tabela()], pois nosso escopo é desenvolver apenas um CRUD.
    -> Poderiamos criar uma SUBPASTA para ter todos os componentes relacionados a CLIENTE ou coisas do tipo.
    -> Como propriedade DO COMPONENTE TABELA, vamos esperar receber um ARRAY de clientes, onde, nos passa [1] criamos essa classe [/src/core/Cliente.ts].
    -> Esperamos receber um ARRAY de clientes que é exatamente o que iremos RENDERIZAR no componente [Tabela()].
    -> Depois iremos criar funções dentro do nosso componente de tabela, pois na nossa aplicação final, dentro da tabela temos uma opção que irá representar quando o cliente for selecionado, ou quando for excluido.
    -> Ou seja, existem eventos que a tabela irá disparar quando clicarmos em certos elementos.

```typescript
[/core/Cliente.ts - ESTRUTURA INICIAL]

export default class Cliente{
    // criação das propriedadades
    #id: string
    #nome: string
    #idade: number

    // criação do objeto usando constructor
    constructor(nome:string, idade:number, id:string = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    static vazio(){
        return new Cliente('',0)
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }
}
```

```typescript
[/components/Taabel.tsx];

import Cliente from "../core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  return <table></table>;
}
```

    3 - Outra coisa que podemos fazer é a quebrar a renderização em multiplas funções.
    -> Poderiamos simplesmente na tabela colocar um <tr - table row - linha> e dentro dela colocaremos um <th>.
    -> O primeiro ao terceiro <th>, respectivamente, serão [Código, Nome, idade], e o quarto <th> iremos colocar depois, será as ações.

```typescript
[/components/Taabel.tsx];

import Cliente from "../core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  return (
    <table>
      <tr>
        <th>Código </th>
        <th>Nome </th>
        <th>Idade </th>
      </tr>
    </table>
  );
}
```

    4 - Agora temos o que seria o cabeçalho da tabela, temos agora que fazer o import desse novo componente no nosso conteudo dentro do [/pages/index.tsx].
    -> Precisamos passar uma lista de clientes, usando o atributo {clientes}, para isso temos que criar uma constante chamada clientes que será um ARRAY, e vamos instanciar(dar valor) -> new Cliente('Ana',34,'1').
    -> Criar varios clientes para usar no exemplo.
    -> Apos a criação da lista de clientes, possamos ela como parametro para a tabela.

```typescript
[/pages/deinx.tsx];

import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientList = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Clara", 65, "3"),
    new Cliente("Giulia", 12, "4"),
  ];
  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientList}></Tabela>
      </Layout>
    </div>
  );
}
```

    5 - Apos feita essas configurações, teremos nossa tabela sendo exibida apenas com a parte do cabeçalho. Podemos evetualmente, olhando para o nosso componente [Tabela.tsx] querer quebrar-lo em funções para deixarmos a renderização um pouco mais organizada.
    -> Podemos criar, como exemplo uma função(rendCabecalho) para renderização do cabeçalho da tabela. E depois, no retorno da função Tabela(props) fazemos a interpolaçao chamando a função que acabamos de criar.
    -> Assim vamos organizando e quebrando um pouco mais a renderização dos nossos componentes.

```typescript
[/components/Taabel.tsx];

import Cliente from "../core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  function rendCabecalho() {
    return (
      <tr>
        <th>Código </th>
        <th>Nome </th>
        <th>Idade </th>
      </tr>
    );
  }

  return <table>{rendCabecalho()}</table>;
}
```

    6 - Outra parte que podemos trabalhar é a parte de renderização dos dados.
    -> Vamos criar uma função igual a da renderização do cabeçalho.
    -> Nessa função vamos precisar trabalhar com a lista de clientes [return props.clientes].
    -> Vamos imaginar que se esse cliente vinher nulo, e chamarmos a função map() [props.clientes.map()] teriamos um problema. Para isso não ocorrer, usamos a SINTAXE do optional channing(?) [ props.clientes?.map]. Ou seja, so irá chamar a função [.map()] caso clientes esteja preenchido, com isso não precisamos ficar nos preocupando se esta nulo ou nao.
    -> Como propriedade do [.map()], vamos receber o [cliente e o indice que estivermos pecorrendo], esse indice (i) irá nos ajudar no ZEBRADO das cores da tabela de clientes.
    -> No retorno da função de renderização de dados, vamos retornar uma linha <tr> e alguns <tds>, onde respectivamente vamos colocar fazendo a interpolação. [cliente.id|cliente.nome|cliente.idade].
    -> Como estamos trabalhando com lista de elementos, vamos precisar fazer a definição de uma chave unica na tag <tr> e o compilador não ficar reclamando que estamos rederizando elementos dentro de um contexto de lista sem a propriedade chave.

```typescript
[/components/Taabel.tsx];

function rendDados() {
  return props.clientes.map((cliente, i) => {
    return (
      <tr key={cliente.id}>
        <td>{cliente.id}</td>
        <td>{cliente.nome}</td>
        <td>{cliente.idade}</td>
      </tr>
    );
  });
}
```

    7 - Apos a criação da função para renderização dos dados dos clientes. Podemos fazer sua renderização usando a interpolação.
    -> Vamos fazer a renderização do CABECALHO() dentro de um <thead>.
    -> E a renderização dos dados será dentro de um <tbody>.

```typescript
[/components/Taabel.tsx];

import Cliente from "../core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  function rendCabecalho() {
    return (
      <tr>
        <th>Código </th>
        <th>Nome </th>
        <th>Idade </th>
      </tr>
    );
  }
  function rendDados() {
    return props.clientes.map((cliente, i) => {
      return (
        <tr key={cliente.id}>
          <td>{cliente.id}</td>
          <td>{cliente.nome}</td>
          <td>{cliente.idade}</td>
        </tr>
      );
    });
  }

  return (
    <table>
      <thead>{rendCabecalho()}</thead>
      <tbody>{rendDados()}</tbody>
    </table>
  );
}
```

Agora temos uma tabela funcional, sem o layout, mas mostrando os codigos, os nomes e as idades dos clientes registrados manualmente ate agora.

Na proxima aula, vamos trabalhar um pouco a parte do layout para deixarmos nossa tabela um pouco mais parecida com nossa aplicação de referencia.

&nbsp;

---

---

## [Aula 109] - COMPONENTE TABELA #02

&nbsp;

Vamos agora modificar um pouco o Layout da nossa tabela.

```typescript
[/components/Tabela.tsx - ESTRUTURA INICIAL]

import Cliente from '../core/Cliente'

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps){

    function rendCabecalho() {
        return(
            <tr>
                <th>Código </th>
                <th>Nome </th>
                <th>Idade </th>
            </tr>
        )
    }
    function rendDados(){
        return props.clientes.map((cliente,i)=>{
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>{rendCabecalho()}</thead>
            <tbody>{rendDados()}</tbody>
        </table>
    )
}
```

    1 - Vamos dentro do <thead> usar a template-string para colocarmos algumas classes do tailwindcss.
    -> Vamos colocar um background gradient(bg-gradient-to-r/l) (purple-500-->purple-800).
    -> Outra coisa que podemos trabalhar com a tabela<table> em si, é ter a tabela ocupando a largura inteira(w-full).
    -> Vamos tbm colocar para o texto do cabeçalho te ruma cor cinza claro(text-grey-100).
    -> Podemos colocar na <table> uma borda arredodanda (rounded-xl), precisamos tbm colocar a opção de OVERFLOW PARA ESCONDER.

```typescript
[/components/Tabela.tsx]

<table className={`
    w-full rounded-xl overflow-hidden
`}>
    <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800

    `}>{rendCabecalho()}</thead>
    <tbody>{rendDados()}</tbody>
</table>
```

    2 - Agora, dentro do <th - cabeçalho>, vamos colocar algumas classes, e configurar para todos possuirem o mesmo estilo, por enquanto.
    -> Vamos colocar o texto para o lado esquerdo (texzt-left), juntamente com um padding (p-4).

```typescript
[/components/Taabel.tsx];

function rendCabecalho() {
  return (
    <tr>
      <th className="text-left p-4">Código </th>
      <th className="text-left p-4">Nome </th>
      <th className="text-left p-4">Idade </th>
    </tr>
  );
}
```

    3 - Vamos tambem trabalhar um estilo nas linhas<td> da nossa tabela.
    -> Vamos aplicar as mesmas propriedades do TAILWINDCSS que aplicamos no <TH> no <td>.
    -> Vamos ter o padding tanto nas linhas quanto na parte do cabeçalho.

```typescript
[/components/Taabel.tsx];

function rendDados() {
  return props.clientes.map((cliente, i) => {
    return (
      <tr key={cliente.id}>
        <td className="text-left p-4">{cliente.id}</td>
        <td className="text-left p-4">{cliente.nome}</td>
        <td className="text-left p-4">{cliente.idade}</td>
      </tr>
    );
  });
}
```

    4 - Agora iremos precisar aplicar a cor nas linhas para ficarem de uma forma mais ZEBRADA.
    -> Para isso, podemos aplicar diretamente dentro do nosso <tr>, como vamos precisar aplicar de forma condicional (pares e impares - uso do indice), vamos utilizar uma TEMPLATE-STRING.
    -> A logica será, se nosso indice for PAR['bg-purple-200'], caso contrario,IMPAR['bg-purple-100']. Agora o compilador irá ZEBRAR as linhas de acordo com nosso logica.

```typescript
[/components/Tabela.jsx - ESTRUTURA FINAL]
   function rendCabecalho() {
        return(
            <tr>
                <th className='text-left p-4'>Código </th>
                <th className='text-left p-4'>Nome </th>
                <th className='text-left p-4'>Idade </th>
            </tr>
        )
    }
    function rendDados(){
        return props.clientes.map((cliente,i)=>{
            return (
                <tr key={cliente.id} className={`${
                    i % 2 === 0 ?
                    'bg-purple-200' :
                    'bg-purple-100'
                }`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                </tr>
            )
        })
    }

    return (
        <table className={`
            w-full rounded-xl overflow-hidden
        `}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800

            `}>{rendCabecalho()}</thead>
            <tbody>{rendDados()}</tbody>
        </table>
    )
}
```

&nbsp;

---

---

## [Aula 110] - COMPONENTE TABELA #03

&nbsp;

O vamos fazer agora é a definição da coluna das ações[editar, edletar] na tabela.

Primeira vamos precisar definir os icones utilziados, e vamos pegar eles a partir de um site chamado [HeroIcons](https://heroicons.com). Vamos procurar um icone chamado [EDIT], apos escolher, temos duas opções de copia [SVG & JSX].

    1 - Vamos criar um arquivo tsx[/components/Icones.tsx] que irá ter uma constante chamada [IconeEdicao] e o retorno dessa constante será a expressão que corresponde ao trecho de JSX que copiamos do site.

```typescript
[/components/Icones.tsx - ESTRUTURA INICIAL]
export const IconeEdit = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
)
```

    2 - Outro icone que iremos utilizar será o da lixeira(trash). Vamos criar uma constante para receber a expressão que iremos copiar do site, igual fizemos com o icone de edição.

```typescript
[/components/Icones.tsx - ESTRUTURA FINAL]
//constante criada e exportada para guardar o icone do edição
export const IconeEdit = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
    </svg>
)
//constante criada e exportada para guardar o icone do lixo
export const IconeTrash = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
)
```

    3 - Apos fazer as configurações para exportamos os icones, vamos na tabela para que possamos criar a parte especifica das ações (o quarto <th> das aulas passadas).
    -> Vamos criar mais um <th> e chama-lo de [Ações].
    -> Nas configurações de TAILWINDCSS, vamos apagar o [text-left] pois iremos coloca-las para serem centralizadas.

```typescript
[/components/Tabela.jsx]

function rendCabecalho() {
    return(
        <tr>
            <th className='text-left p-4'>Código</th>
            <th className='text-left p-4'>Nome</th>
            <th className='text-left p-4'>Idade</th>
            <th className='p-4'>Ações</th>
        </tr>
    )
```

    4 - Vamos tbm criar mais uma função[rendAcoes() - parecido com rendDados()], onde vamos renderizar especificamente a parte dos botões.
    -> Vamos ter uma tag <td> onde iremos colocar os botões, e dentro das linhas dos dados, vamos fazer a interpolação pedindo para ele chamar a função [rendAcoes()].
    -> Para renderizar as ações, como estamos trabalhando com uma lista de clientes, vamos esperar receber o cliente na função [rendAcoes(cliente: cliente)], pois iremos precisar selecionar um cliente especifico.
    -> Então para cada cliente que percorrermos iremos renderizar as ações daquele cliente especificamente.

```typescript
[/components/Tabela.jsx]

function rendDados(){
        return props.clientes.map((cliente,i)=>{
            return (
                <tr key={cliente.id} className={`${
                    i % 2 === 0 ?
                    'bg-purple-200' :
                    'bg-purple-100'
                }`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {rendAcoes(cliente:cliente)}
                </tr>
            )
        })
    }

    function rendAcoes(){
        return (
            <td>

            </td>
        )
    }
```

    5 - No nosso <td> vamos criar os botões que irão gerar as ações de Editar e deletar os clientes.
    -> Dentro do <button> vamos usar os icones que definimos como constantes em [/components/Icones.tsx]. Faremos a mesma coisa para o icone de TRASH. Não precisamos importar uma biblioteca de icones nem nada.

```typescript
function rendAcoes() {
  return (
    <td>
      <button>{IconeEdit}</button>
      <button>{IconeTrash}</button>
    </td>
  );
}
```

    6 - Vamos agora aplicar alguns estilos nos nossos botões.
    -> Poderiamos criar um outro componente chamado [BotaoAcao] ou [AcaoTabela] para reutilizar a mesma logica, mas vamos deixar como tarefa de casa.
    -> Colocando no <td> a propriedade {flex} os icones irão ficar na mesma linha.
    -> Vamos usar o mesmo estilo do botão de edição no botão de deletar, trocando por vermelho-500 a cor.
~~~typescript

[BOTÃO EDIÇÃO]
<button className={`
    flex justify-center items-center
    text-green-600 rounded-full p-2 m-1
    hover:bg-purple-50
`}>{IconeEdit}</button>

[BOTÃO TRASH]

<button className={`
    flex justify-center items-center
    text-red-500 rounded-full p-2 m-1
    hover:bg-purple-50
`}>{IconeEdit}</button>
~~~

Nossa tabela agora possui 2 botões, precisamos agora tratar o clique (evento/ação) desse botão. Quando definirmos as propriedades da tabela, onde a gente colocou apenas uma propriedade {clientes: Cliente[]} que é fornecida pelo componente PAI, chamamos isso de comunicação direta.
~~~typescript
[/pages/index.tsx --> COMPONENTE PAI]

export default function Home() {
    const clientList = [
        new Cliente('Ana',34,'1'),
        new Cliente('Bia',45,'2'),
        new Cliente('Clara',65,'3'),
        new Cliente('Giulia',12,'4'),
    ]
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            <Tabela clientes={clientList}></Tabela>
        </Layout>
    </div>
  )
}


[/components/Tabela.jsx --> COMPONENTE FILHO]

interface TabelaProps {
    clients: Cliente[]
}


~~~

No Componente PAI, o [/pages/index.tsx], definimos a lista de clientes e chamamos a tabela passando os clientes. Vamos definir agora que a tabela irá receber duas funções:

    1 - Uma função que será chamada quando o cliente for selecionado = [clientSelect]
    2 - Uma função que será chamada quando o cliente for excluido = [clientDelete]
> Vamos colocar essas duas opções como se fossem opcionais, ou seja, não vamos exigir que o usuario passe essa duas funções [ ?:(cliente: Cliente)=> void ]. Devolvemos um cliente (cliente: CLiente) onde essa função irá retornar void, e quando o usuario clicar no selecionar ele ira devolver o [clientSelect].
>
> Como são propriedades opções não somos obrigados a passar.

~~~typescript
[/components/Tabela.jsx]

interface TabelaProps {
    clientes: Cliente[]
    clientSelect?: (cliente: Cliente) => void
    clientDelete?: (cliente: Cliente) => VoidFunction
}
~~~

    7 - Vamos criar uma condicional para renderizações dos botões so ocorrerem dependendo da função ter sido passada ou nao.
~~~typescript
function rendAcoes(){
    return (
        <td className='flex'>
            {props.clientSelect ? 
                (
                    <button className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>{IconeEdit}</button>
                ):false
            }
            {props.clientDelete ? 
                (
                    <button className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>{IconeTrash}</button>
                ):false
            }
        </td>
    )
}
~~~

    8 - Agora o que temos é, como não passamos nenhuma função, no browser, nenhuma das ações esta disponivel.
    -> Podemos inclusive criar uma constante na tabela chamada [showActions] para fazer a verificação de que, se tiver uma ou outra ação, exiba as ações.
~~~typescript
const showActions = props.clientDelete || props.clientSelect

function rendCabecalho(){
    return (
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {ShowActions ?
            <th className="p-4">Ações</th>
            :false
        }
    )
}

~~~

    9 - E podemos tambem so chamar o [rendActions()] se a variavel [showActions] estiver presente. Como fizemos no caso acima do [rendCabecalho()].
~~~typescript

function rendDados(){
    return props.clientes.map((cliente,i)=>{
        return (
            <tr key={cliente.id} className={`${
                i % 2 === 0 ?
                'bg-purple-200' :
                'bg-purple-100' 
            }`}>
                <td className='text-left p-4'>{cliente.id}</td>
                <td className='text-left p-4'>{cliente.nome}</td>
                <td className='text-left p-4'>{cliente.idade}</td>
                {showActions ? rendAcoes() : false}
            </tr>
        )
    })
}
~~~

    10 - Se for dentro do nosso [/pages/index.tsx] vamos definir a passagem da função de [clientSelect] para a tabela.
    -> Vamos criar uma função que irá receber como parametro um cliente do tipo Cliente [cliente:Cliente], e vamos passar essa função como parametro para a função [clientSelect()].
    -> Vamos usar o mesmo principio para o DELETE. A diferença é que vamos fazer uma interpolação com o nome do cliente e escrever um texto de exclusão.
~~~typescript
[/pages/index.tsx]

import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
    const clientList = [
        new Cliente('Ana',34,'1'),
        new Cliente('Bia',45,'2'),
        new Cliente('Clara',65,'3'),
        new Cliente('Giulia',12,'4'),
    ]
    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluir...${cliente.nome}`)
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            <Tabela 
                clientes={clientList} 
                clientSelect={selectClient}
                clientDelete={deleteClient}
             />
        </Layout>
    </div>
  )
}
~~~

    11 - Agora que passamos a função para a tabela, vamos configurar para que no momento que clicarmos no icone/botão o cliente de fato seja selecionado.
    -> Perceba no browser que o icone de edição agora esta aparecendo, ja que passamos a função a ele e suprimos a condicional criada.
    -> Vamos tbm centralizar os icones (alteração de layout), <td> , justifica de forma centralizada.
    -> Temos agora que chamar o onclick para cada uma desses botões. A logica é, se um usuario clicar nesses botões, vamos chamar [() => props.clientSelect?.(cliente)] a função de selecionar cliente se(?) a função tiver sido fornecida passando o cliente selecionado.
    -> vamos fazer a mesma coisa para o caso do excluido.

~~~typescript
[/components/Tabela.jsx]

import Cliente from '../core/Cliente'
import { IconeEdit, IconeTrash } from './Icones'

interface TabelaProps {
    clientes: Cliente[]
    clientSelect?: (cliente: Cliente) => void
    clientDelete?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const showActions = props.clientDelete || props.clientSelect

    function rendCabecalho() {
        return(
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {showActions?(<th className='p-4'>Ações</th>):false}
            </tr>
        )
    }
    function rendDados(){
        return props.clientes.map((cliente,i)=>{
            return (
                <tr key={cliente.id} className={`${
                    i % 2 === 0 ?
                    'bg-purple-200' :
                    'bg-purple-100' 
                }`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {showActions ? rendAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function rendAcoes(cliente:Cliente){
        return (
            <td className='flex justify-center'>
            {props.clientSelect ? 
                (
                    <button 
                        className={`
                            flex justify-center items-center
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-purple-50`}
                        onClick={
                            () => props.clientSelect?.(cliente)
                        }    
                    >{IconeEdit}</button>
                ):false
            }
            {props.clientDelete ? 
                (
                    <button 
                        className={`
                            flex justify-center items-center
                            text-red-500 rounded-full p-2 m-1
                            hover:bg-purple-50
                        `}
                        onClick={
                            () => props.clientDelete?.(cliente)
                        }
                    >{IconeTrash}</button>
                ):false
            }
            </td>
        )
    }

    return (
        <table className={`
            w-full rounded-xl overflow-hidden
        `}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800

            `}>{rendCabecalho()}</thead>
            <tbody>{rendDados()}</tbody>
        </table>
    )
}
~~~

Nossa tabela agora ja esta exibindo as informações e ja esta chamando a função que criamos a partir dos dois botões. O que significa que nossa tabela ja esta pronta para trabalharmos com a outra parte da nossa aplicação, que seria a definição de formularios e depois a integração com o **backend que é o FIREBASE**.


&nbsp;

---

---

## [Aula 111] - COMPONENTE BOTÃO

&nbsp;























&nbsp;

---

---

## [Aula 112] -

&nbsp;

&nbsp;

---

---

## [Aula 113] -

&nbsp;

&nbsp;

---

---

## [Aula 114] -

&nbsp;

&nbsp;

---

---

## [Aula 115] -

&nbsp;

&nbsp;

---

---

## [Aula 116] -

&nbsp;

&nbsp;

---

---

## [Aula 117] -

&nbsp;

&nbsp;

---

---

## [Aula 118] -

&nbsp;

&nbsp;

---

---

## [Aula 119] - EXCLUINDO PROJETO FIREBASE

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
