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

Vamos criar um outro componente funcional, que será o **COMPONENTE BOTÃO**, para melhorar a estruturação do nosso cosigo.

    1 - Vamos criar uma componente funcinal e exporta-lo por padrão, ele irá receber propriedades via {props}.
    -> Como retorno dessa função teremos um <button> e dentro dele vamos fazer a interpolação usando {props.children}, pois assim conseguimos ter um pouco mais de flexibilidade caso a gente queira passar um icone, ou algo dentro do botão.
~~~typescript
[/components/botao.tsx - ESTRUTURA INICIAL]

export default function Botao(props){
    return (
        <button>
            {props.children}
        </button>
    )
}
~~~

    2 - Vamos tambem criar uma INTERFACE chamada [BotaoProps], onde nela, iremos definir o tipo de informação/atributo/propriedade que a função [Botao()] ira receber via props.
~~~typescript
[/components/Botao.tsx]

interface BotaoProps{
    children: any
}

export default function Botao(props: BotaoProps){
    return (
        <button>
            {props.children}
        </button>
    )
}
~~~

    3 - Alem dessa propriedade[children] vamos tambem querer passar a cor, que será um atributo opcional, onde iremos definir 3 cores literais['gree'|'blue'|'grey'].
~~~typescripts
[/components/Botao.tsx]

interface BotaoProps{
    children: any
    cor: 'green' | 'blue' | 'grey'
}
~~~

    4 - Vamos tambem colocar o botao que acabamos de criar na interface grafica [index.tsx], temos a <Tabela> dentro do <Layout> e vamos colocar o componente do <Botao> entre eles.
    -> Lembrando que no componente que criamos do [Botao.tsx] definimos que ele possui componentes filhos, logo, vamos dar colocar "Novo Cliente".
~~~typescript
[/pages/index.tsx]

import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
...
        <Layout titulo="Cadastro Simples">
            <Botao>Novo CLiente</Botao>
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

Vamos fazer uma modificação que eventualmente pode gerar problema quando formos fazer a geração da versão final para a produção.

    5 - Vamos fazer umas estilisações no botão usando o TAILWINDCSS.
~~~html
[/components/Botao.tsx]

<button className={`
    bg-gradient-to-r from-blue-400 to-blue-700
    text-white px-4 py-2 rounded-md
`}>
    {props.children}
</button>
~~~

    6 - Nos tambem podemos definir uma margem, so que nesse caso, em vez de definir especificamente no botão, vamos esperar receber uma PROPRIEDADE[BotaoProps] OPICIONAL chamada [className:] do tipo (string).
~~~typescript
[/components/Botao.tsx]

interface BotaoProps{
    children: any
    cor: 'green' | 'blue' | 'grey'
    className?: string 
}
~~~

    7 - Vamos fazer com que essa propriedade que adicionamos seja colocada no final das nossas configurações de TAILWIND. De tal forma que se for passada alguma propriedade será SUBESCRITO o que tinha sido configurado antes.
~~~typescript
[/componentes/Botao.tsx]

export default function Botao(props: BotaoProps){
    return (
        <button className={`
            bg-gradient-to-r from-blue-400 to-blue-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
~~~

    8 - Nesse caso, especificamente para esse componente de <Botao> que criamos podemos colocar uma atributo("className") e dentro dele colocar a margem que queremos. Dando assim um espaçamento entre o <Botao> e a <Tabela>.
~~~typescript
[/pages/index.tsx]
...
<div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
`}>
    <Layout titulo="Cadastro Simples">
        <Botao className='mb-4'>Novo CLiente</Botao>
        <Tabela 
            clientes={clientList} 
            clientSelect={selectClient}
            clientDelete={deleteClient}
        />
    </Layout>
</div>
~~~

    9 - Outra coisa que podemos colocar, é esse botão dentro de uma <div> e nela criar alguns estilos.
~~~typescript
[/pages/index.tsx]

<Layout titulo="Cadastro Simples">
    <div className="flex justify-end">
        <Botao className='mb-4'>Novo CLiente</Botao>
    </div>
    <Tabela 
        clientes={clientList} 
        clientSelect={selectClient}
        clientDelete={deleteClient}
    />
</Layout>
~~~

    10 - Agora, o que podemos fazer em relação a cor.
    -> Lembrando que criamos na interface um atributo chamado {cor}.
    -> Podemos fazer uma interpolação a variavel que esta dentro de {props.cor} para usar as cores definidas na interface.
~~~typescript
[/components/Botao.tsx]

interface BotaoProps{
    children: any
    cor?: 'green' | 'blue' | 'grey'
    className?: string 
}

export default function Botao(props: BotaoProps){
    return (
        <button className={`
            bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
~~~

    11 - Poderiamos tambem ter um valor padrão, basta criamos uma constante chamada [cor], que irá receber uma condicional. Se {props.cor} estiver setado, retornarmos {props.cor} ou (??), se nao estiver setado, retornamos o "grey".
    
~~~typescript
[/components/Botao.tsx]

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'grey'
    return (
        <button className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
~~~

    12 - No caso, ira ficar cinza o botão pois não colocamos o atributo de cor no componente <Botao> dentro do [index.tsx].
    -> Quando colocarmos o atributo[cor=""], ele nos dará a opção de 3 cores, que foram as que definimos na INTERFACE.
~~~typescript
[/pages/index.tsx]

<Layout titulo="Cadastro Simples">
    <div className="flex justify-end">
        <Botao 
            className='mb-4'
            cor="green"
        >Novo CLiente</Botao>
    </div>
    <Tabela 
        clientes={clientList} 
        clientSelect={selectClient}
        clientDelete={deleteClient}
    />
</Layout>
~~~

Essa logica funciona no **AMBIENTE DE DESENVOLVIMENTO** mas quando enviarmos para o **AMBIENTE DE PRODUÇÃO** irá dar um problema. Pois, quandor for fazer o [ purge: ] do **tailwind.config.js**, ele irá olhar todos os arquivos dentro de **/pages** e **/components**, vai procurar todas as classes do **tailwindCSS** que são usadas, e ai ele vai gerar a versão final.

Ao fazermos dessa forma, irá gerar um problema pq ele não irá conseguir detectar que **from-${props.cor}-400 é uma classe que possui 3 possiveis cores ['green' | 'blue' | 'grey'][interface BotaoProps].

Existe uma forma de garantirmos que algumas classes CSS estejam sempre disponiveis quando o **tailwindCSS** *fizer o processo de **PURGE** - tirar todas as classes que não são utilizadas*.

Para fazer isso, termos o **SAFE-LIST** e conseguirmos na produção ter o comportamento do botão funcionando (mudança de cores).

    1 - Precisamos transformar o [ PURGE ] em um objeto { PURGE }, onde existe um atributo chamado [content - que é a lista que tinhamos antes no purge].
~~~javascript
[/next-crud/tailwind.config.js]

module.exports = {
    purge: {
        content: [
            "./src/pages/**/*.{js,ts,jsx,tsx}",
            "./src/components/**/*.{js,ts,jsx,tsx}",
        ],
        safeList:[

        ]
    },
    theme: {
    extend: {},
    },
    plugins: [],
}

~~~
    2 - Depois colocamos a virgula para adicionarmos outra propriedades chamada [safeList:], onde vamos colocar uma [ARRAY] com todas as classes que queremos que tenha na versão final.
    -> Podemos inclusive, colocar uma EXPRESSÃO REGULAR, como exemplo, vamos colocar todas as classes que começam com [ ^/bg-/, ^/to-/,^/from-/].
~~~javascript
[/next-crud/tailwind.config.js]

module.exports = {
    purge: {
        content: [
            "./src/pages/**/*.{js,ts,jsx,tsx}",
            "./src/components/**/*.{js,ts,jsx,tsx}",
        ],
        safeList:[
            /^bg-/,
            /^to-/,
            /^from-/,
        ],
    },
    theme: {
    extend: {},
    },
    plugins: [],
}
~~~

Agora, mesmo que estejamos trabalhando com **CLASSES DINAMICAS** (interpolação de uma determinada propriedade),como foi no caso do [Botao.jsx], sabemos que todas as cores irão funcionar pois criamos a [safelist].

Dito isso, nos construimos o nosso **BOTÃO**, nesse caso especificamente ele é verde, e vamos trabalhar agora a alternancia entre o **MODO TABELA** e quando clicarmos no botão **NOVO CLIENTE**, será direcionado para a area do formulario. Onde depois tambem iremos construir o formulario.





&nbsp;

---

---

## [Aula 112] - COMPONENTE FORMULÁRIO

&nbsp;

Vamos criar agora dois componentes que iremos trabalhar em paralelo. O primeiro sendo o **FORMULÁRIO.tsx** e o segundo a **ENTRADA.tsx**.

    1 - Vamos criar a estrutura inicial do componente [Formulario.tsx], será um componente funcional, que possuirá uma interface chamada[FormularioProps{}] .
    -> O proximo componente que vamos criar chamado {Entrada.tsx} será importado para o [Formulario.tsx]
~~~typescript
[/components/Formulario.tsx - ESTRUTURA INICIAL]

import Entrada from './Entrada'

interface FormularioProps {

}
export default function Formulario(props: FormularioProps) {
    return (
        <Entrada />
    )
}
~~~

    2 - Vamos criar o segundo arquivo/componente de nome [Entrada.tsx], que irá representar o nosso INPUT.
    -> Vamos ter a mesma estrutura por enquanto.
    -> Apos exportar o componente [Entrada.tsx] para o [Formulario.tsx], vamos começar a trabalhar no componente {Entrada.tsx} e depois no [Formulario.tsx]
~~~typescript
[/components/Entrada.tsx - ESTRUTURA INICIAL]

interface EntradaProps {

}
export default function Entrada(props: EntradaProps) {
    return (
        
    )
}

~~~

    3 - Apos exportar o componente [Entrada.tsx] para o [Formulario.tsx], vamos começar a trabalhar no componente {Entrada.tsx} e depois no [Formulario.tsx].
    -> Vamos definir uma <label> onde dentro dela, teremos um {texto:string}, logo, na interface vamos criar essa propriedade do componente Entrada.tsx.
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    text: string
}
export default function Entrada(props: EntradaProps) {
    return (
        <label></label>
    )
}
~~~

    4 - No[Formulario.tsx] vamos colocar a primeira entrada para ser "nome".
~~~typescript
[/components/Formulario.tsx]

import Entrada from './Entrada'

interface FormularioProps {

}
export default function Formulario(props: FormularioProps) {
    return (
        <Entrada text="Nome" />
    )
}
~~~

    5 - Na [Entrada.tsx] vamos usar pegar a propriedade passada para nos pela <Entrada text> no [Formulario.tsx], para aparecener no <label> fazendo a interpolação.
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    text: string
}
export default function Entrada(props: EntradaProps) {
    return (
        <label>{props.text}</label>
    )
}
~~~

    6 - Apos a definição da <labe> vamos definir o <input>, esse <input> terá um tipo de dado (criado por nos) que será um [texto || numero] (poderiamos ter outros tipo, mas so iremos utilizar esses dois).
    -> Vamos criar uma condicional na interpolarização, onde caso o tipo do dado não seja informado, vamos assumir que o padrão será "text".
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    tipo: 'text' | 'number'
    text: string
}
export default function Entrada(props: EntradaProps) {
    return (
        <div>
            <label>{props.text}</label>
            <input>
                {props.tipo ?? 'text'}
            </input>
        </div>
    )
}
~~~

    7 - Outra coisa que iremos precisar passar para a Entrada, será o valor, que poderá ser uma STRING, um NUMERO, por isso vamos colocar na interface que o tipo dessa propriedade pode ser {any}.
    -> Depois disso vamos colocar ele como o value do <input>.
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    text: string
    tipo: 'text' | 'number'
    valor: any
}
export default function Entrada(props: EntradaProps) {
    return (
        <div>
            <label>{props.text}</label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
            ></input>
        </div>
    )
}
~~~

    8 - Podemos ter outras propriedades para assim crescermos nossa aplicação. Por exemplo, uma propriedade opcional de somente leitura, que terá um tipo de dado com valores booleanos.
    -> Se não for passado, o valor ficará com falso, se passar fica como verdadeiro.
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    text: string
    tipo: 'text' | 'number'
    valor: any
    SomenteLeitura?: boolean
}
export default function Entrada(props: EntradaProps) {
    return (
        <div>
            <label>{props.text}</label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.SomenteLeitura}
            ></input>
        </div>
    )
}
~~~

    9 - Agora ja temos alguns atributos obrigatorios para o componente <Entrada />, que esta dentro de [Formulario.tsx]. Vamos colocar esses atributos para serem usados pela Entrada.
    -> Vamos alterar tbm, na interface {EntradaProps} o dado {tipo} para ser opcional(?). Pois se não tiver sido passado iremos assumir como "text"
~~~typescript
[/components/Formulario.tsx]

import Entrada from './Entrada'

interface FormularioProps {

}
export default function Formulario(props: FormularioProps) {
    return (
        <Entrada text="Nome" valor="teste"/>
    )
}

~~~

    10 - Vamos visualizar a construção do nosso formulario na nossa pagina, para isso vamos comentar a tabela e criar o componente <Formulario />.
~~~typescript
[/pages/index.tsx]

import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
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
        console.log(`Excluindo...${cliente.nome}`)
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            <div className="flex justify-end">
                <Botao 
                    className='mb-4'
                    cor="green"
                >Novo CLiente</Botao>
            </div>
            {/* <Tabela 
                clientes={clientList} 
                clientSelect={selectClient}
                clientDelete={deleteClient}
            /> */}
            <Formulario />
        </Layout>
    </div>
  )
}
~~~

    11 - Agora que podemos visualizar o formulario na pagina, vamos trabalhar um pouco com a questão do CSS, usando o [TAILWINDCSS].
    -> Vamos definir a primeira <div> para possui as propriedaes {flex + flex-column} para ficar um embaixo do outro.
    -> Vamos tambem definir no <input> um {className} onde iremos usar varias classes CSS logo, colocamos uma TEMPLATE-STRING.
    -> Vamos tirar o outline quando dermos um focus no input. [focus:outline-none].
    -> Vamos tbm colocar um {className} no <label> para criarmos um afastamento entre ela e o <input>
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    text: string
    tipo?: 'text' | 'number'
    valor: any
    SomenteLeitura?: boolean
}
export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">{props.text}</label>
            <input 
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50
                    px-4 py-2
                `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.SomenteLeitura}
            ></input>
        </div>
    )
}

~~~

    12 - ara fazermos a questão do foco, ou seja, quando ele focar, mostrar uma cor difernte.
    -> Vamos querer que ele fale [focus:bg-white], mas so iremos querer aplicar isso, se ele não for da classe de SomenteLeitura. Ou seja, fazemos aquela interpolação usando o ${}, para aplicar a condicional.
    -> Se for {somenteLeitura} não faz nada, caso não seja aplicar o background branco.
~~~typescript
[/components/Entrada.tsx]


interface EntradaProps {
    text: string
    tipo?: 'text' | 'number'
    valor: any
    SomenteLeitura?: boolean
}
export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">{props.text}</label>
            <input 
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2 
                    ${props.SomenteLeitura ? '' : 'focus:bg-white'}
                `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.SomenteLeitura}
            ></input>
        </div>
    )
}
~~~

    13 - Por enquanto no nosso [Formulario.tsx] temos a entrada/input do nome, vamos precisar fazer outra entrada para a idade.
~~~typescript
[/components/Formulario.tsx]

import Entrada from './Entrada'

interface FormularioProps {

}
export default function Formulario(props: FormularioProps) {
    return (
        <div>
            <Entrada 
                text="Nome" 
                valor="teste"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor="teste" 
            />
        </div>
    )
}
~~~

    14 - Ainda no nosso formulario, vamos precisar definir dois ESTADOS. Um para fazer o controle do [NOME] e o outro para fazer o controle da idade.
    -> Na interface do nosso FORMULARIO vamos criar a referencia para a classe "client", que será o que ele irá receber na sua função Formulario(). Lembrando que temos q fazer o import pois ja criamos em [/core/Cliente.ts] essa classe com seus atributos.
~~~typescript
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

[/components/Formulario.tsx]
import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import {useState} from 'react'

interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState()
    return (
        <div>
            <Entrada 
                text="Nome" 
                valor="teste"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor="teste" 
            />
        </div>
    )
}
~~~

    15 - Se esse cliente estiver setado e tiver ID, quer dizer que estamos modificando algo que ja existe, se não estiver setado, ou sem ID, significa que é um cliente novo.
    -> Logo vamos criar uma constante para receber a ID, criando no momento da atribuição uma condicional caso o ID não seja passado iremos setar como nulo. 
        const id = props.client.id ?? null
        -> Se o cliente não estiver setado e tentarmos acessar o ID dele, pode gerar um problema, por isso, podemos usar o optiona-chaning:
            const id = props.client?.id
~~~typescript
[/components/Formulario.tsx]

import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import {useState} from 'react'

interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState()
    const id = props.client?.id
    return (
        <div>
            <Entrada 
                text="Nome" 
                valor="teste"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor="teste" 
            />
        </div>
    )
}
~~~

    16 - Agora a depender da situação criamos uma entrada para mostrar o codigo do usuario juntamente com uma renderização condicional. Caso o ID esteja setado irá mostrar, caso nao irá retornar "false".
    -> ja com relação ao nome e a idade, vão aparecer sempre, idependente de ter o USUARIO ou nao.
~~~typescript
[/components/Formulario.tsx]

import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import {useState} from 'react'

interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState()
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada text="Código" valor="teste" />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor="teste"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor="teste" 
            />
        </div>
    )
}

~~~

    17 - Vamos aplicar no ESTADO que criamos os valores iniciais de (props.cliente?.nome), lembrando que se não possuirmos o cliente, não iremos querer acessar o nome, e como valor padrão vamos querer uma string vazia [''].
    -> Vamos fazer a mesma criação de estado de [nome] para a idade. Tendo assim dois componentes controlados.
~~~typescript
[/components/Formulario.tsx]

import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import {useState} from 'react'

interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada text="Código" valor="teste" />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor="teste"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor="teste" 
            />
        </div>
    )
}
~~~

    18 - A <Entrada> do ID, irá receber como valor o proprio {id} que iremos receber, e irá tambem possui a propriedade de somente leitura.
~~~typescript
[/components/Formulario.tsx]

import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import {useState} from 'react'

interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor="teste"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor="teste" 
            />
        </div>
    )
}
~~~

    19 - Com relação ao valor das outras entradas, vamos mudar para {nome} e {idade}.
~~~typescript
[/components/FOrmulario.tsx]

import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import {useState} from 'react'

interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor={nome}
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor={idade} 
            />
        </div>
    )
}
~~~

    20 - Agora precisamos construir uma forma de alterar os campos de valor da <Entrada>. Logo, dentro deste componente [Entrada.tsx - interface{}] vamos precisar receber uma função que nos diga quando o valor foi modificado.
    -> Poderia ser [onChange - que seria o padrão se fosse ingles].
    -> Vamos criar a função valorMudou e coloca-la na interface como sendo opcional, para não nos preocuparmos com o acesso a função caso seja somente leitura, Vamos receber como retorno dessa função o "(valor:any)" do tipo any, sendo que essa função irá retornar void.
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    text: string
    tipo?: 'text' | 'number'
    valor: any
    SomenteLeitura?: boolean
    valorMudou?: (valor:any) => void
}
~~~

    21 - Uma vez recebida essa função podemos, dentro do nosso <input> chamar o atributo {onChangpara quando receber uma notificação de mudança vamos receber um evento(e), que irá chamar o {props.valorMudou} de maneira condicional.
    -> Se o valor tiver sido informado vamos invocar a função [valorMudou?.() - optional channing], passando o valor de (e.target.value). ====================DANDO ERRO NO VALUE=============
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    text: string
    tipo?: 'text' | 'number'
    valor: any
    SomenteLeitura?: boolean
    valorMudou?: (valor:any) => void
}
export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">{props.text}</label>
            <input 
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2 
                    ${props.SomenteLeitura ? '' : 'focus:bg-white'}
                `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.SomenteLeitura}
                onClick={e => props.valorMudou?.(e.target.value)}
            ></input>
        </div>
    )
}
~~~

    22 - Dessa forma quando formos para o nosso formulario, podemos chamar a função criada dentro de <Entrada>, passando o [setNome], reproduzindo a mesma coisa para a IDADE.
~~~typescript
[/components/Formulario.jsx]

'
import {useState} from 'react'

interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor={idade} 
                valorMudou={setIdade}
            />
        </div>
    )
}
~~~

    23 - Agora temos os nossos dois campos, funcionando. Vamos agora estilar um pouco mais nosso formulario.
    -> Vamos criar a possibildade dentro da interface de receber um [className:string] do tipo string. para fazermos a interpolação de uma prorpiedade de tailwindcss dentro da div.
~~~typescript
[/components/Entrada.tsx]

interface EntradaProps {
    text: string
    tipo?: 'text' | 'number'
    valor: any
    SomenteLeitura?: boolean
    valorMudou?: (valor:any) => void
    className?: string
}
export default function Entrada(props: EntradaProps) {
    return (
        <div className={`
            flex flex-col ${props.className}
        `}>
            <label className="mb-4">{props.text}</label>
            <input 
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2 
                    ${props.SomenteLeitura ? '' : 'focus:bg-white'}
                `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.SomenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
            ></input>
        </div>
    )
}
~~~

    24 - Agora quando tivermos no formulario, e obviamente o {className} precisa ser opcional. No formulario especificamente no caso do nome, podemos colocar a propriedade de {className} que criamos na interface EntradaProps, para adicionar uma margem.
    -> Vamos fazer a mesma coisa para o ID, caso ele apareça.
~~~typescript
[/components/Formulario.tsx]


interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                    className="mb-4"
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor={idade} 
                valorMudou={setIdade}
            />
        </div>
    )
}
~~~


    25 - Vamos agora colocar criar os botões de salvar e de cancelar.
    -> Dentro do [FORMULARIO.TSX] alem de ter os campo de <Entrada>, podemos colocar uma <div> e dentro dessa div, vamos utilizar o componente <Botão> que ja criamos.
    -> Vamos falar que um dos botões irá receber a cor azul, e a outra cinza, se nao colocarmos nada, irá assumir os valores padrões.
    -> Vamos ter o botãod e "CANCELAR" e outro botão que ira possuir uma condicional. Se tiver ID, irá "ALTERAR", se nao tiver, irá salvar.
~~~typescript
[/components/Botao.tsx - ESTRUTURA INICIAL]

interface BotaoProps{
    children: any
    cor?: 'green' | 'blue' | 'grey'
    className?: string 
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'grey'
    return (
        <button className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
~~~

~~~typescript
[/components/Formulario.tsx]

   return (
        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                    className="mb-4"
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor={idade} 
                valorMudou={setIdade}
            />
            <div>
                <Botao cor="blue">
                    {id? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
~~~

    26 - Olhando agora temos o botão de salvar e de cancelar no nosso formulario. POdemos colocar no <Botao> de salvar e alterar, um {classname} para colocarmos uma marge.
    -> Na <div> vamoc colocar tbm uma margem usando o {className}. Vamos falar que ela é {flex} e colocar a classe {justify-end}
~~~typescript
[/components/Formulario.tsx]


        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                    className="mb-4"
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor={idade} 
                valorMudou={setIdade}
            />
            <div className='flex justify-end mt-7'>
                <Botao cor="blue" className="mr-2">
                    {id? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
~~~

    27 - Agora nos temos os dois botões, abaixo do <input> na esquerda do nosso formulario.
    -> Temos que construir a logica para o botão [NOVO CLIENTE] sumir a depender, se vamos criar um novo cliente ou somente fazer uma edição de um ja existente.
    -> Vamos fazer outra alteração em [/pages/index.tsx] que será a colocação de um cliente para ja pre-carregar e vermos se esta funcionando, vamos pegar o primeiro cliente da lista: [clientes[0]]
~~~typescript
[/pages/index.tsx]
 
       new Cliente('Ana',34,'1'),
        new Cliente('Bia',45,'2'),
        new Cliente('Clara',65,'3'),
        new Cliente('Giulia',12,'4'),
    ]
    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            <div className="flex justify-end">
                <Botao 
                    className='mb-4'
                    cor="green"
                >Novo CLiente</Botao>
            </div>
            {/* <Tabela 
                clientes={clientList} 
                clientSelect={selectClient}
                clientDelete={deleteClient}
            /> */}
            <Formulario client={clientList[0]} />
        </Layout>
    </div>
  )
}
~~~

Na proxima aula o que iremos fazer será a alternancia entre a tabela e o formulario. Se descomentarmos a parte da tabela em [/pages/index.tsx] teremos um componente abaixo do outro, mas a logica que queremos eh, quando clicarmos novo cliente, ir para o formulario, quando formor editar, tambem ir para o formulario com os campos ja preenchidos, e quando cancelarmos voltar para a tabela.




&nbsp;

---

---

## [Aula 113] - ALTERNANDO ENTRE TABELA E FORMULÁRIO

&nbsp;

Para fazermos essa alternancia entre a **TABELA** e o **formulário** vamos criar primeiramente uma **SOLUÇAO TEMPORARIA** e depois iremos evoluindo essa solução.

    1 - Vamos criar no nosso [Home() -> /pages/index.tsx], um estado chamado [visivel,setVisivel].
    -> Vamos definir um [useState()] que iremos definir dois estados.
        -> Um será <'tabela' | 'form
    -> E por padrão vamos inicializar esse ESTADO como 'tabela'.
~~~typescript
[/pages/index.tsx]

'form'>('tabela')
    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            <div className="flex justify-end">
                <Botao 
                    className='mb-4'
                    cor="green"
                >Novo CLiente</Botao>
            </div>
            <Tabela 
                clientes={clientList} 
                clientSelect={selectClient}
                clientDelete={deleteClient}
            />
            <Formulario client={clientList[0]} />
        </Layout>
    </div>
  )
}

~~~

    2 - Vamos fazer o seguinte texte, vamos colocar o <Botao> e a <Tabela>, dentro de um FRAGMENTO <></>, pois iremos querer esconder os dois ao mesmo tempo.
    -> Vamos tambem colocar uma renderização condicional.
        -> Se visivel for igual a 'tabela', irá mostrar a tabela e o botao que colocamos dentro do FRAGMENTO.
        -> Se visivel não for igual a tabela, irá mostrar o <formulario> na segunda parte.
    -> Usamos os (parenteses) para podermos escrever na condicional mais de uma linha de codigo.
~~~typescript
[/pages/index.tsx]

export default function Home() {
    const clientList = [
        new Cliente('Ana',34,'1'),
        new Cliente('Bia',45,'2'),
        new Cliente('Clara',65,'3'),
        new Cliente('Giulia',12,'4'),
    ]
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            {visivel === 'tabela' ? (
                <>
                    <div className="flex justify-end">
                        <Botao 
                            className='mb-4'
                            cor="green"
                        >Novo CLiente</Botao>
                    </div>
                    <Tabela 
                        clientes={clientList} 
                        clientSelect={selectClient}
                        clientDelete={deleteClient}
                    />
                </>
            ) : (
                <Formulario client={clientList[0]} />
            )}
        </Layout>
    </div>
  )
}
~~~
    3 - O que iremos fazer agora para fazer a alternancia entre a TABELA e o FORMULÁRIO? 
    -> Vamos no <Botao> de NOVO CLIENTE, vamos ter a propriedade {onClick=}.
    -> Temos que definir essa propriedade na interface do [Botao.tsx]. Essa função, será passada de forma opcional (?:), e basicamente vamos chamar uma função retornando void, na interface.
~~~typescript
[/components/Botao.tsx]
 
interface BotaoProps{
    children: any
    cor?: 'green' | 'blue' | 'grey'
    className?: string 
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'grey'
    return (
        <button className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
~~~

    4 - No <Button> onde realmente esta acontecendo o {onClick} passaamos o [props.onClick].
~~~typescript
[/components/Botao.tsx]

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'grey'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
~~~

    5 - Agora no <Botao> de NOVO CLIENTE, podemos passar a propriedade {onCLick=} e dentro dela vamos chamar uma função [() => ] que i´ra pegar a função [setVisivel()] tendo como valor o FORMULARIO.
    -> Logo, quando clicarmos no botão do NOVO CLIENTE ele irá mostrar o formulario.
~~~typescript
[/pages/index.tsx]

export default function Home() {
    const clientList = [
        new Cliente('Ana',34,'1'),
        new Cliente('Bia',45,'2'),
        new Cliente('Clara',65,'3'),
        new Cliente('Giulia',12,'4'),
    ]
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            {visivel === 'tabela' ? (
                <>
                    <div className="flex justify-end">
                        <Botao 
                            className='mb-4'
                            cor="green"
                            onClick={() => setVisivel('form')}
                        >Novo CLiente</Botao>
                    </div>
                    <Tabela 
                        clientes={clientList} 
                        clientSelect={selectClient}
                        clientDelete={deleteClient}
                    />
                </>
            ) : (
                <Formulario client={clientList[0]} />
            )}
        </Layout>
    </div>
  )
}
~~~

    6 - Agora quando clicarmos no botão de CANCELAR queremos que ele volte para a pagina inicial, mostrando a tabela.
    -> Logo, no [Formulario.tsx] precisamos passar os eventos quando o cliente for modificado, quando clicar por exmplo, em alterar ou salvar e quando clicar em cancelar.
    -> Então, dentro da interface do FORMULARIO, vamos esperar receber alem do {client: Cliente}uma função, por exemplo, que será chamada de [cancelado?:], onde será uma função opcional, que nao recebe nenhum parametro e nao retorna nada.
    -> O que significa que se essa função [cancelado?:] tiver sido passada, vamos direcionar ela para o {onClick} do <Botao> de CANCELAR.
~~~typescript
interface FormularioProps {
    client: Cliente
    cancelado?: () => void
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                    className="mb-4"
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor={idade} 
                valorMudou={setIdade}
            />
            <div className='flex justify-end mt-7'>
                <Botao cor="blue" className="mr-2">
                    {id? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao 
                    cor='grey'
                    onClick={props.cancelado}
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
~~~

    7 - Agora, na nossa pagina [/pages/index.tsx] nos temos o <Formulario> e dentro dele, passamos a função [cancelado] que criamos, passando para ela uma função [() =>] onde quando o usuario chamar a função cancelado irá, chamar a [setVisivel()] passando como valor a tabela. 
~~~typescript
[/pages/index.tsx]

export default function Home() {
    const clientList = [
        new Cliente('Ana',34,'1'),
        new Cliente('Bia',45,'2'),
        new Cliente('Clara',65,'3'),
        new Cliente('Giulia',12,'4'),
    ]
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            {visivel === 'tabela' ? (
                <>
                    <div className="flex justify-end">
                        <Botao 
                            className='mb-4'
                            cor="green"
                            onClick={() => setVisivel('form')}
                        >Novo CLiente</Botao>
                    </div>
                    <Tabela 
                        clientes={clientList} 
                        clientSelect={selectClient}
                        clientDelete={deleteClient}
                    />
                </>
            ) : (
                <Formulario 
                    client={clientList[0]} 
                    cancelado={
                        () => setVisivel('tabela')
                    }
                />
            )}
        </Layout>
    </div>
  )
}
~~~

Ainda estamos com valor fixo no formulario, nesse caso, quando clicarmos em novo cliente, iremos precisar passar para a tabela o cliente novo, jaja iremos fazer isso. 

    8 - Outra coisa que queremos fazer, so para complementar a questão das funções é, alem de termos a funçaio {cancelado}, vamos ter uma função chamada {clienteMudou?:}, para mantermos o mesmo padrão da [Entrada.tsx] onde, na interface passamos o {valor} e o {valorMudou}.
    -> Nessa função vamos receber como parametro o [cliente] que é do tipo {Cliente}, e essa função irá retornar o VOID. 
    -> Isso significa que quando o usuario clicar salvar/alterar, vamos chamar o {onCLick={}} onde nele vamos chamar uma função [() =>] para retornar o cliente.
    -> Para retornar o novo cliente, vamos instanciar o novo cliente baseado nos 3 atributos [id | alterar | salvar].
    -> Vamos criar um condicional, onde caso existe a função [CLienteMudou()], vamos instanciar um novo cliente [new CLiente()] passando como parametro o (nome, idade, id), se existir. Caso o ID seja nulo nao tem problema ele irá conseguir criar o cliente sem problema. So para lembrarmos dos 3 parametros do Cliente:
        new Cliente(nome:string, idade:number, id?:string).
~~~typescript
[/components/Formulario.tsx]

interface FormularioProps {
    client: Cliente
    cancelado?: () => void
    clientChange?: (client: Cliente) => void
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                    className="mb-4"
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor={idade} 
                valorMudou={setIdade}
            />
            <div className='flex justify-end mt-7'>
                <Botao 
                    cor="blue" 
                    className="mr-2"
                    onClick={
                        () => props.clientChange?.(new Cliente(nome, idade, id))
                    }
                >
                    {id? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao 
                    cor='grey'
                    onClick={props.cancelado}
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}

~~~

    9 - Agora quando clicarmos em "SALVAR" ou "ALTERAR", ele irá pegar o cliente modificado, o que significa que agora la na nossa pagina [index.tsx], podemos ter uma função chamama [saveCLient()] que irá receber um cliente do tipo cliente [client: Cliente], e dentro dela podemos colocar um console.log para vermos a modificação.
    -> Passamos essa função criada dentro do nosso <Formulario> que será chamada sempre que o cliente tiver sido modificado [clientChange - interface FormularioProps]
~~~typescript
[/pages/index.tsx]

export default function Home() {
    const clientList = [
        new Cliente('Ana',34,'1'),
        new Cliente('Bia',45,'2'),
        new Cliente('Clara',65,'3'),
        new Cliente('Giulia',12,'4'),
    ]
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
    function saveClient(client: Cliente){
        console.log(client)
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            {visivel === 'tabela' ? (
                <>
                    <div className="flex justify-end">
                        <Botao 
                            className='mb-4'
                            cor="green"
                            onClick={() => setVisivel('form')}
                        >Novo CLiente</Botao>
                    </div>
                    <Tabela 
                        clientes={clientList} 
                        clientSelect={selectClient}
                        clientDelete={deleteClient}
                    />
                </>
            ) : (
                <Formulario 
                    client={clientList[0]} 
                    cancelado={
                        () => setVisivel('tabela')
                    }
                    clientChange={saveClient}
                />
            )}
        </Layout>
    </div>
  )
}

~~~

Agora conseguimos no **console** ver o cliente que chegou do formulario apos a modificação.

> Esta mostrando a idade como uma string, para virar um valor numerico, colocarmos no envento em que chamamos a função **clienteMudou()** o simbolo de [+idade]. Para assim ele gerar a idade como um valor numerico.
>~~~typescript
>Botao 
>   cor="blue" 
>   className="mr-2"
>   onClick={
>      () => props.clientChange?.(new Cliente(nome, *idade, id))
>   }
>
>~~~

Temos agora que fazer mais algumas correções, mas ja temos nosso formulario e tabela alternando, e a modificação do cliente mostrando no console. Temos que fazer o tratamento para quando clicarmos no botao de **Edição**, ele selecionar o elemento e carregar o formulario com os dados do objeto selecionado.



&nbsp;

---

---

## [Aula 114] - INTEGRANDO TABELA E FORMULÁRIO

&nbsp;

Outra coisa que iremos querer fazer, é quando clicarmos no botão de **ALTERAR** a pagina voltar para a **TABELA**.

~~~typescript
[/compoentns/Formulario.tsx - Interface com funções e propriedades]

interface FormularioProps {
    client: Cliente
    cancelado?: () => void
    clientChange?: (client: Cliente) => void
}

[/compoentns/Formulario.tsx - BOTÃO DE ALTERAR]
<Botao 
    cor="blue" 
    className="mr-2"
    onClick={
        () => props.clientChange?.(new Cliente(nome, +idade, id))
    }
>
    {id? 'Alterar' : 'Salvar'}
</Botao>

~~~

Na nossa pagina [/pages/index.tsx] onde no <Formulario> criamos a função [clientChange] para chamar a outra função que criamos chamada {saveClient}, e nessa função de {saveClient}, alem de colocar o **console.log()** poderiamos chamar a função que mostra ou a tabela ou o formulario (setVisivel).

~~~typescript
[/pages/indext.tsx - <Formulario> chamando a função saveClient()] 


{visivel === 'tabela' ? (
    <>
        <div className="flex justify-end">
            <Botao 
                className='mb-4'
                cor="green"
                onClick={() => setVisivel('form')}
            >Novo CLiente</Botao>
        </div>
        <Tabela 
            clientes={clientList} 
            clientSelect={selectClient}
            clientDelete={deleteClient}
        />
    </>
    ) : (
    <Formulario 
        client={clientList[0]} 
        cancelado={
            () => setVisivel('tabela')
        }
        clientChange={saveClient}
    />
)}

[/pages/indext.tsx - função de salvar o cliente]

function saveClient(client: Cliente){
    console.log(client)
    setVisivel('tabela')
}

~~~

Com essa modificação agora quando chamamos a função **ALTERAR** ele irá retornar para a tabela causando a alteração visisvel somente, por enquanto no console.log().

Outra coisa que queremos que fique claro, é que podemos organizar essas coisas dentro de **HOOKS**, vamos separar essas **LÓGICAS** e colocar dentro de um HOOKS personalizado. Essa é uma das formas que temos de **REUTILIZAR** a lógicas entre os **COMPONENTES REACT**. Logo, deixar um componente cheio de logicas em seu arquivo não é algo que seria **ESTRUTURALMENTE** interessante.

Por enquanto vamos deixar tudo dentro da nossa pagina [/pages/index.tsx] e depois iremos organizar e criar HOOKS personalizados para termos um pouco mais de organização. Vamos primeiro deixar tudo funcionando e depois nos preocupamos com a questão de organização.

    1 - Agora precisamos criar um ESTADO para armazenar o nosso cliente, vamos fazer isso dentro de [/pages/index.tsx] por enquanto.
    -> Vamos criar um Estado chamado [cliente, setCliente], a inicialização dele será com o tipo de dado [Cliente.vazio()] para ele ficar vazio. 
    -> E vamos tambem informar que noss estado é para armazenar elementos do tipo <Cliente>.
~~~typescript
[/pages/index.tsx - criação do estado cliente]

const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
~~~

    2 - Agora em vez de passarmos para o <Formulario> o valor [cliente={clientes[2]}] da lista de clientes que criamos [clientList], vamos passar o estado [cliente, setCliente] que criamos.
~~~typescript
[/pages/index.tsx - componente formulario]

<Formulario 
    client={cliente} 
    cancelado={
        () => setVisivel('tabela')
    }
    clientChange={saveClient}
/>
~~~

    3 - Quando selecionarmos na tabela um cliente, ou seja, a função [selectClient()] for chamada, vamos chamar a função de alteração de estado do cliente [setCliente], passando como propriedade o cliente.
    -> Precisamos tambem setar a visibilidade do formulario, para fazer a mudança.
~~~typescript
[/pages/index.tsx - função de selecionar o cliente]

function selectClient(cliente: Cliente){
    console.log(cliente)
    setCliente(cliente)
    setVisivel('form')
}

~~~

Agora se clicarmos em novo cliente, mostrara o cadastro em branco, para digitarmos e colocar a idade, mas se selecionarmos, por exemplo, o cliente 3 (Clara), ira para a edição desse cliente.

Agora quando clicamos no botão de **NOVO CLIENTE** ele esta mostrando o ultimo cliente selecionado, o que não é para acontecer. 

Quando clicarmos em NOVO CLIENTE ele esta simplesmente setando o formulario como visivel.
~~~typescript
[/pages/index.tsx - botão NOVO CLIENTE]

<div className="flex justify-end">
    <Botao 
        className='mb-4'
        cor="green"
        onClick={() => setVisivel('form')}
    >Novo CLiente</Botao>
</div>

~~~

    4 - Podemos criar uma função chamada [newClient()], onde iremos usar o [setClient()] para receber um cliente vazio [Cliente.vazio()] e depois chamando o [setVisivel()] encaminhando para o formulario.
~~~typescript
[/pages/index.tsx - função para setar novo cliente]

function newClient(cliente:Cliente){
    console.log(cliente)
    setCliente(Cliente.vazio())
    setVisivel('form')
}
~~~

    5 - Agora iremos usar essa funçao [NewClient()] no {onClick} do botão de NOVO CLIENTE.
~~~typescript
[/pages/index.tsx - chamando função newClient()]

<Botao 
    className='mb-4'
    cor="green"
    onClick={newClient}
>Novo CLiente</Botao>
~~~

Ja fizemos mais uma evolução no nosso formulario, mas ainda falta algumas coisas, falta começarmos a integrar nossa aplicação com a parte do **FIREBASE**.

Por enquanto, ainda não conseguimos excluir os clientes, poderiamos fazer com base na lista de clientes que criamos [clientList], mas ja nao faz tanto sentido, podemos ja começar a trabalhar a integração com o **FIREBASE** para que a gente possa realmente, começar a inserir, salvar e ver nosso codigo funcionando com o **BACK-END** no **FIREBASE**


&nbsp;

---

---

## [Aula 115] - CONFIGURANDO FIREBASE NO PROJETO

&nbsp;

Agora, para trabalharmos com o **BACK-END** da nossa aplicação se olharmos nosso arquivo do [/next-crud/.gitignore], existe um arquivo que é ignorado, ou seja, não é versionado no **GITHUB**, chamado de [.env.local].

~~~
[/next-crud/.gitignore]

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
                                        .env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

~~~

Vamos criar uma arquivo com esse nome **/next-crud/.env.local**, e vamos colocar alguias variaveis de ambiente nesse arquivo para que a gente possa colocar algumas variaveis que são senciveis e nao podem ir para o repositorio, logo, ele não irá colocar diretamente no codigo fonte.

Alem disso, vamos criar uma nova pasta **/src/backend || /src/firebase**, pode ser qualquer nome, e dentro desta pasta vamos criar um arquivo chamado [/firebase/config.ts], para fazermos a configuração do **FIREBASE**.

Vamos precisar para o nosso projeto no ambiente de desenvolvimento, para podermos instalar o **FIREBASE**.
```
npm i firebase
```

E vamos precisar configurar o **FIREBASE** e especificamente o **FIRESTORE** para podermos acessar o banco de dados na nuvem.

No **FIREBASE** vamos precsisar de  informações **{ "apikey", 'authDomain', 'projectId' }**. E vamos coloca-las no nosso arquivo **/next-crud/.env.local**, vamos transformar todos essas chaves para UPPERCASE, vamos tirar as aspas duplas, a virgula no final e no lugar dos dois pontos(:) colocamos o simbolo de igualdade (=).

Especificamente no caso de **PROJETOS NEXTJS** precisamos inicializar as chaves com o nome **NEXT_PUBLIC**, pois essa é a forma que conseguimos ter acesso as chaves dentro da **APLICAÇÃO WEB**.

    NEXT_PUBLIC_FIREBASE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXX
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=XXXXXXXXXXXXXXXXXXXXXXXXXX
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXX

> lEMBRANDO QUE ESSAS INFORMAÇÕES SÃO SENSIVEIS , CASO O PROJETO SEJA EXCLUIDO ELAS DEIXAM DE SER VALIDAS, MAS ENQUANTO ESTIVER OPERACIONAL, ESSAS SÃO CHAVES DE ACESSO A SUA APLICAÇÃO. LOGO, NÃO COLOQUE NO REPOSITÓRIO.

Uma vez que configuramos o projeto, fizemos a instalação do **FIREBASE** podemos "startar" o ambiente de desenvolvimento novamente. e vamos começar a configurar o **FIREBASE**.

```
npm run dev
```

    1 - No arquivo [/firebaseBKND/config.ts], vamos importar o FIREBASE e o FIRESTORE e vamos fazer um teste:
    -> Vamos criar uma condicional e perguntar [firebase.apps.lenght], se o lenght for MAIOR que 0, significa que foi inicializado. Então caso seja (!), vamos inicializar [firebase.initializeApp()]
    passando como parametro ({objeto}) um objeto com os parametros: [ 'apikey', 'authDomain', 'projectId'].
    -> Que são exatamente os 3 valores que temos dentro do arquivo [/next-crud/.env.local]. Como valores desses parametros colocamos [process.env.].
~~~typescript
[/src/firebaseBKND - CONFIGURAÇÃO DO FIREBASE]

import firebase from 'firebase'

import 'firebase/firestore'

if(!firebase.apps.lenght){
    firebase.initializeApp({
        apikey: process.env.,
        authDomain: process.env.,
        productId: process.env.,
    })
}
~~~

    2 - Agora pegamos as chaves que colocamos no arquivo [/next-crud/.env.local], no final de [process.env.].
~~~typescript
[/firebaseBKND/config.ts]

import firebase from 'firebase'
import 'firebase/firestore'

if(!firebase.apps.lenght){
    firebase.initializeApp({
        apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        productId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase
~~~

Então, o que estamos fazendo? Se não tiver uma **APP** inicializada, ou seja, se **apps.lenght = 0**, como estamos colocando a negação, quer dizer que ele irá entrar e inicializar a aplicação. No final, exportamos por padrão o **FIREBASE** que acabamos de inicializar, chamando no IF().

Vamos entrar no **FIRESTORE**, e o que iremos precisar fazer agora é definir o codigo que irá salvar, obter dados no **beck-end**, excluir e fazer outras coisas.

Entao vamos criar uma **INTERFACE** dentro de **/src/core** e nos iremos implementar para que a gente possa interagir com o **FIREBASE**.





&nbsp;

---

---

## [Aula 116] - REPOSITÓRIO DE CLIENTES

&nbsp;

Vamos criar uma novo arquivo chamado **/core/ClientRepo.ts** que será um **INTERFACE do typescript**. Poderiamos nem utilizar essa interface, pois nao iremso utiliza-la tao diretamente, mas vamos uusa-la para mostrar que podemos definir dentro do **CORE** da aplicação uma **INTERFACE**, e trabalhariamos em termos de *interface* ou seja, dentro do **CORE** não precisamos saber que estamos trabalhando com **FIREBASE**, simplesmente podemos definir uma **INTERFACE** e a partir dessa interface usar uma **IMPLEMENTAÇÃO** que irá salvar la no **FIREBASE**.

    1 - Logo vamos exportar por padrão com o nome [ ClienteRepositorio {}].
    -> Esse cliente repositorio terá 3 METODOS:
        1) SALVAR / SAVE -> que irá receber como propriedade um cliente do tipo Cliente. 
        2) EXCLUIR / DELETE -> excluir
        3) OBTERTODOS / fetchAll - nesse caso, iremos retornar um ARRAY de clientes.
~~~typescript
[/core/ClientRepo.ts]

import Cliente from './Cliente'


export default interface ClienteRepositorio {
    save(cliente: Cliente): Promise<Cliente>
    delete(cliente: Cliente): Promise<void>
    fetchAll():Promise<Cliente[]>
}

~~~

    2 - Dentro da nossa pasta de back-end vamos criar uma outra pasta e chama-la de [/src/firebaseBKND/db], nela, vamos criar o que seria o arquivo chamado [/src/firebaseBKND/db/ColecaoCliente.js].
    -> Vamos exportar por padrão uma classe de nome [ColecaoCliente], ja que no FIREBASE a gente trabalha com o conceito de COLLECTION. E essa classe irá implementar o [ClienteRepositorio] que definimos, se não importar automatico, precisa fazer o import do [ClienteRepositorio].
~~~typescript
[/src/firebaseBKND/db/ColecaoCliente.js]

import ClienteRepositorio from "../../core/ClientRepo";

export default class ColecaoCliente implements ClienteRepositorio {
    
}

~~~

    3 - Dentro dessa classe, vamos precisar implementar 3 METODOS [save] que receberá como parametro um cliente do tipo de dado Cliente (client: Cliente), onde retornará uma PROMISE retornando um <Cliente>.
    -> Vamos fazer com que esse metodo seja ASSICRONO (async).
~~~typescript
[/src/firebaseBKND/db/ColecaoCliente.js]

import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClientRepo";

export default class ColecaoCliente implements ClienteRepositorio {
    async save(client: Cliente): Promise<Cliente> {
        return null
    }
}
~~~

    4 - Depois iremos fazer o mesmo para os metodos de [delete & fetchAll].
    -> [delete] retorna void e recebe como parametro um cliente
    -> [fecthAll] não recebe parametro e retorna um ARRAY DE CLIENTES.


~~~typescript
[/src/firebaseBKND/db/ColecaoCliente.js - ESTRUTURA BASICA P/ TRABALHAR OS METODOS]

import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClientRepo";

export default class ColecaoCliente implements ClienteRepositorio {
    async save(client: Cliente): Promise<Cliente> {
        return null
    } 
    async delete(client: Cliente): Promise<void>{
        return null
    }
    async fetchAll(): Promise<Cliente[]> {
        return null
    }
}
~~~

Dentro do **FIREBASE** existe um objeto chamado **CONVERSOR** que tem **2 METODOS**, e um deles é o **toFirestore()** e esse metodo recebe um cliente (do tipo CLiente) e irá devolver um **objeto que seja APTO para ser PERSISTIDO no firestore**.

O nosso cliente é uma **CLASSE** e por padrão, essa classe não será convertida automaticamente para um **JSON**. Então, quando quisermos converter esse cliente para o FIRESTORE precisamos retornar alguma coisa como um objeto [return{}]. Por exemplo, {nome:cliente.nome, idade: cliente.idade}, o {id:} será gerado pelo FILESTORE, logo não precisamos nos preocupar em fazer a conversão.

Estamos transformando uma classe para uma **PLAIN OBJECT** do **JAVASCRIPT**, que será interpretado pelo **firestore**, se mandarmos diretamente a **class** não irá dar certo.

O **2° METODO** desse objeto (conversor) é o **fromFirestore()**, no qual, irá nos devolver um **SNAP-SHOT** e nos dará um cara chamado **OPTIONS**, podemos tambem colocar os tipos desses restornos (snapshot: firebase.firestore.QueryDocumentSnapshot), onde **firestore.QueryDocumentSnapshot** é o tipo de dado.

> OBS: Fazer o "import" do firebase vindo do [/firebaseBKND/config.ts].

O tipo do dado chamado **OPTION** será **firestore.snapshotOptions**. Esses são os dois tipos que recebemos do **fromFirestore()** . Ou seja, estamos recebendo os dados do **FIREBASE** e queremos retornar um cliente, logo a resposta desta função será um objeto do tipo cliente.

Para isso, precisamos criar uma constante para receber os dados a partir do **snapshot.data()**, onde iremos passar o **options** como parametro. Para o retorno instanciamos um novo cliente **new Cliente()** e passamos como parametro **(dados.nome, dados.idade, snapshot.id)**, fazendo assim o ID ser gerado pelo proprio **FIREBASE**, usando o id do proprio snapshot. Vamos colocar o optional channing(?) para termos certeza que estamos tendo acesso ao dados, para no caso de eventualmente vir nulo.

Esse **CONVERSOR** que pode inclusive ser privado (**#conversor**), ele irá converter uma **CLASSE** para algo que será **PERSISTIDO** no **FIRESTORE**, e nos iremos receber algo do **firestore** e vamos converter novamente para a **CLASSE** que criamos. 


~~~typescript
[/firebaseBKND/db/ColecaoCliente.ts ]

import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClientRepo";
import firebase from '../config'

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(client: Cliente){
            return {
                nome: client.nome,
                idade: client.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }


    async save(client: Cliente): Promise<Cliente> {
        return null
    } 
    async delete(client: Cliente): Promise<void>{
        return null
    }
    async fetchAll(client: Cliente): Promise<Cliente[]> {
        return null
    }
}

~~~

Agora não precisamos mas nos preocupar em fazer essa logica de todas as vezes que formos utilizar as funções [save | delete | fetchAll].

Vamos criar um **METODO**  chamado **colecao()**, para ser um metodo privado ou colocamos a cerquilha [#] ou a palavra **private**. Nesse metodo vamos retornar uma coleção, chamando o **firebase** depois o **firestore()**, apos, chamamos a coleção **collection('clientes'), usando clientes no plural, juntamente com o conversor que construimos acima.

~~~typescript
[METODO DA COLEÇÃO]

private || #colecao(){
    return firebase
        .firestore()
        .collection('clientes')
        .withConverter(this.#conversor)
}

~~~

Agora vamos retornar nossa coleção, juntamente com o conversor, e agora em cada um desses metodos [save | delete | fetchAll], em vez de termos que repetir a logica para os 3, usamos o [this.colecao()].

[ **delete** ] -> Chamamos o **.doc()** a partir de **clientes.id**, pois dentro da coleção de clientes conseguimos acessar um cliente especifico que é um documento a apartir do ID dele. Podendo depois chamar o **.delete**

~~~typescript

async delete(client: Clientes): Promise<void>{
    return this.colecao().doc(cliente.id).delete()
}

~~~

[ **save** ] -> Para salvarmos teremos **2 CENARIOS** :

- Se o **cliente.id** tiver setado, ou seja, o cliente existe, quer dizer que iremos **alterar**. Usamos o **this.colecao().doc()** peganod o cliente a partir do ID, e depois chama a função de alteração passando o cliente. Como no conversor, ele converte o cliente para objeto, nao iremos precisar fazer isso dentro desta função. No começo da função podemos colocar um **await** pois seria algo assincrono, quando setar. De retorno, caso esteja tudo certo, temos o **cliente** que passamos como parametro.
  - this.colecao().doc(cliente.id).set(cliente) 

- Se o **cliente.id** não estiver setado, significa que iremos **salvar**. Para salvar chamamos o **this.colecao()** juntamente com o **.add()** passando o cliente como parametro. No caso que estamos adicionando, será retornado para gente o que chamam de **DocumentReference**, o que seria a referencia de um documento. Vamos criar uma constante chamada **docRef** para receber esse retorno, vamos colocar um **await**, pois esse metodo vai retornar uma **PROMISE**, uma promessa de **firebase.firestore.DocumentReference<Cliente>**, logo, colocando um await, significa que isso será um **documentReference**????
    - Depois da criação da constante iremos usar o metodo **.get()** onde ele retorna uma **PROMISE** de um snapshot de documento **firebase.firestore.DocumentSnapshot<Cliente>**. Logo como é uma promessa e queremos pegar esse snapshot, colocamos um **await**, salvando esse documento dentro de uma constante chamada **DOC**. 
    - Com esse **doc** conseguimos pegar o cliente recebido, inclusive com **id**, no retorno usando o **doc.data()**, se colocarmos o cursos em cima, vemos que ele irá retornar um cliente.
  
~~~typescript
[/firebaseBKND/db/ColecaoCliente.ts]

import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClientRepo";
import firebase from '../config'

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(client: Cliente){
            return {
                nome: client.nome,
                idade: client.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }
    async save(client: Cliente): Promise<Cliente> {
        if(client?.id) {
            await this.colecao().doc(client.id).set(client)
            return client
        } else {
            const docRef = await this.colecao().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    } 
    async delete(client: Cliente): Promise<void>{
        return this.colecao().doc(client.id).delete()
    }
    async fetchAll(client: Cliente): Promise<Cliente[]> {
        return null
    }
    private colecao(){
        return firebase
            .firestore()
            .collection('clientes')
            .withConverter(this.#conversor)
    }
}

~~~

Na função para obter todos **fetchAll()** vamos pegar o **this.colecao()** chamando o **.get()**, obtendo assim os dados, o retorno do **.get()** é um **.QuerySnapshot**, uma promessa disso, ja que estamos trabalhando no modo **assincrono**. Logo, criamos uma constante **query**, e a partir dela teremos acesso aos documentos, ja que irá pegar mais de um **query.docs.map()**, usando o **.docs** podemos usar a função **.map()** para pegar cada documento (doc =>) com o objeto **doc.data()**, esse objeto nos dará os proprios **clientes**, obtidos no **backend**.

Ou seja, estamos pegando todos os documentos [ **query.docs.map()** ] e fazendo um mapeamento de cada documento [**doc =>** ] e transformando para [**doc.data()**]. 
- Podemos usar uma condicional para caso a gente nao receba nada como retorno, podemos pedir que retorne um **array vazio []**;.

~~~typescript
[/firebaseBKND/db/ColecaoCliente.ts - ESTRUTURA FINAL]

import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClientRepo";
import firebase from '../config'

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(client: Cliente){
            return {
                nome: client.nome,
                idade: client.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }
    async save(client: Cliente): Promise<Cliente> {
        if(client?.id) {
            await this.colecao().doc(client.id).set(client)
            return client
        } else {
            const docRef = await this.colecao().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    } 
    async delete(client: Cliente): Promise<void>{
        return this.colecao().doc(client.id).delete()
    }
    async fetchAll(client: Cliente): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(
            doc => doc.data()
        )
    }
    private colecao(){
        return firebase
            .firestore()
            .collection('clientes')
            .withConverter(this.#conversor)
    }
}

~~~

Com isso finalizamos a parte de implementação do nosso **ClienteRepositorio**, a implementação para o **FIREBASE**. O que vamos precisar fazer agora é usar esse **ClienteRepositorio** dentro do componente para fazermos as **interações** com o **firebase** e vermos se estamos conseguindo realmente persistir os dados.




&nbsp;

---

---

## [Aula 117] - INTEGRANDO CADASTRO COM O FIREBASE

&nbsp;

Agora iremos dentro da nossa pagina [/pages/index.tsx], nos vamos criar uma constante chamada **repo:** que será do tipo **ClienteRepositorio**, e vamos **INSTANCIAR** uma nova coleção de clientes **colecaoCliente()**. 

> Se tivessemos outras classes  para implementar as regras, poderiamos evoluir o **/Core** para que ele ficasse independente de **framework** ser so a parte que representa o **negocio** da aplicação. Evenmtualmente podemos serparar o que é puramente do negocio, daquilo que tem haver com o **framework** que seria os arquivos de **/componentes & /firestoreBKND**

~~~typescript
[/pages;index.ts - criação da constante do repositorio]

const repo: ClienteRepositorio - new ColecaoCliente()

~~~

A partir do repositorio **repo: ClienteRepositorio** podemos obter a lista de clientes, logo, em vez de ter os clientes na forma de **clientList=[]**, vamos criar um **ESTADO [clientes,setClientes]**, onde vamos colocar inicialmente uma lista vazia, ja que iremos ter um ARRAY de clientes[].

~~~typescript
[/pages;index.ts - criação da constante de estado clientes]

const [clientes, setClientes] = useState<Cliente[]>([])

~~~


Vamos utilizar o **useEFFect()** para que a gente possa alterar o **estado** na inicialização do nosso componente. Quando o componente for inicializado, vamos usar o **repo.fetchALL()**. Quando receber todos, ele irá retornar uma **PROMISE**, onde depois iremos fazer um **.then()** para recebermos os clientes, logo, dentro de **.then()** chamamos a funçao de alteração de estado **setClientes()**, quando ele terminar de obter todos os clientes. Dessa forma atualizamos a nossa tabela.

~~~typescript
[/pages/index.tsx]

import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ColecaoCliente from "../firebaseBKND/db/ColecaoCliente";

export default function Home() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const repo: ColecaoCliente = new ColecaoCliente()

    useEffect(() => {
        repo.fetchAll().then(setClientes)
    }, [])

    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
        setCliente(cliente)
        setVisivel('form')
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
    function saveClient(client: Cliente){
        console.log(client)
        setVisivel('tabela')
    }
    function newClient(cliente:Cliente){
        console.log(cliente)
        setCliente(Cliente.vazio())
        setVisivel('form')
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            {visivel === 'tabela' ? (
                <>
                    <div className="flex justify-end">
                        <Botao 
                            className='mb-4'
                            cor="green"
                            onClick={newClient}
                        >Novo CLiente</Botao>
                    </div>
                    <Tabela 
                        clientes={clientList} 
                        clientSelect={selectClient}
                        clientDelete={deleteClient}
                    />
                </>
            ) : (
                <Formulario 
                    client={cliente} 
                    cancelado={
                        () => setVisivel('tabela')
                    }
                    clientChange={saveClient}
                />
            )}
        </Layout>
    </div>
  )
}
~~~

Com relação a salvar o novo cliente **newClient()**, quando clicamos em **newClient()**, ele irá para a tela, e por enquanto na função [saveClient()], esta sendo mostrado no **console.log**.

Em **saveClient()** podemos fazer **repo.save(cliente)**, chamamos o repositorio e a função de salvar passando o cliente.

~~~typescript
[/pages/index.tsx]

function saveClient(client: Cliente){
    console.log(client)
    repo.save(cliente)
    setVisivel('tabela')
}
~~~

Em vez de setarmos a tela com o **setVisivel()**, vamos criar um metodo chamado **obterTodos()** e vamos jogar o **repo.fetchAll().then(setClientes)**. No **then()** iremos fazer o seguinte:
- Quando ele obter os clientes **[ clientes => {}]**, vamos chamar o *setClientes)** passando os clientes que recebemos, e vamos chamar tambem o **setVisivel()** para setar a **tabela**.
- Vamos chamar o **obterTodos()** dentro do **useEffect()**, passando somente a referencia da função.

~~~typescript
[/pages/index.tsx]

useEffect(obterTodos, [])

function obterTodos() {
    repo.fetchAll().then(clientes => {
        setClientes(clientes)
        setVisivel('tabela')
    })
}
~~~

Depois que salvarmos **saveClient()**, e podemos colocar esse metodo como **async**, vamos colocar um **await** na chamada do repositorio, e depois que salvar, chamamos a função que criamos acima **obterTodos()**. Essa função irá obter todos os clientes, depois irá setar os clientes e coloca a tabela como visivel.

Vamos criar um novo cliente como exemplo "Angelina | 30 ". Como o alterar é o mesmo metodo de salvar, tambem esta funcionando. Vamos fazer a implementação de exclusão agora. Para excluir, podemos fazer mais ou menos a mesma estrategia do **saveClient** trocando o *save()* por **delete()**.

~~~typescript
[/pages/index.tsx]

async function deleteClient(client: Cliente){
    await repo.delete(client)
    obterTodos()
}
~~~ 

O cadastro em si ja esta funcional, ja conseguimos adicionar, excluir e alterar os clientes. Do ponto de vista da funcionalidade, esta tudo certo. O que faremos a seguir, será **ORGANIZAR** um pouco mais o nosso componentes.

Vamos criar **HOOKS** para organizar a logica e deixar as coisas separadas, ou seja, a parte visual ficará dentro do nosso componente **home()** - **/pages/index.tsx**. E a parte da logica, chamada de funções acesso ao repositorio, vamos colocar dentro de um **HOOK** para vermos como podemos organizar nossas aplicações **REACT/NEXT**.


&nbsp;

---

---

## [Aula 118] - ORGANIZANDO O CÓDIGO COM HOOKS

&nbsp;

Agora que temos nosso **CADASTRO** integrando junto ao **FIREBASE**, vamos organizar nosso codigo de uma maneira que fique viavel a escalabilidade no futuro e a compreensão por parte de outros desenvolvedores.

### ESTRUTURA ATUAL DO DIRETORIO

```text
|--- |src
|--- |--- |backend (firebaseBKND)
|--- |--- |--- |db
|--- |--- |--- |---|ColecaoCliente.ts
|--- |--- |--- |config.ts
|--- |--- |components
|--- |--- |---|Botao.tsx
|--- |--- |---|Entrada.tsx
|--- |--- |---|Formulario.tsx
|--- |--- |---|Icones.tsx
|--- |--- |---|Layout.tsx
|--- |--- |---|Tabela.tsx
|--- |--- |---|Titulo.tsx
|--- |--- |core
|--- |--- |---|Cliente.ts
|--- |--- |---|ClientRepo.ts
|--- |--- |hook
|--- |--- |pages
|--- |--- |--- |api
|--- |--- |--- |---|hello.js
|--- |--- |--- |app.js
|--- |--- |--- |index.tsx

```

Vamos criar uma pasta chamada **/hooks**, onde vamos fazer a implementação de alguns [**HOOKS PERSONALIZADOS**](https://pt-br.reactjs.org/docs/hooks-custom.html). 

> Criar seus próprios Hooks permite que você extraia a lógica de um componente em funções reutilizáveis.

    1 - O primeiro hooke que iremos criar será chamado de [ useClientes.ts]. Pode ser qualquer nome.
    -> Vamos colocar, as cosntantes, o useEffect() e as funções dentro desse HOOK. Irá dar problema, jaja iremos começar a fazer os ajustes.
    -> Vamos precisar importar o {CLiente, useState, ColecaoCliente, ClienteRepositorio, useEffect}
~~~typescript
[/hooks/useClientes.ts]

import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../firebaseBKND/db/ColecaoCliente"


export default function useClientes() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const repo: ColecaoCliente = new ColecaoCliente()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.fetchAll().then(clientes => {
            setClientes(clientes)
            setVisivel('tabela')
        })
    }

    function selectClient(client: Cliente){
        console.log(client.nome)
        setCliente(client)
        setVisivel('form')
    }
    async function deleteClient(client: Cliente){
        await repo.delete(client)
        obterTodos()
    }
    async function saveClient(client: Cliente){
        console.log(client)
        await repo.save(client)
        obterTodos()
    }
    function newClient(client:Cliente){
        console.log(client)
        setCliente(Cliente.vazio())
        setVisivel('form')
    }
}
~~~

    2 - Em [/pages/index.tsx] vamos precisar de algumas propriedades e funções {visivel, novoCliente}. Para isso, temos que exportar as funções e consntantes que colocamos dentro de /hooks/useClientes.ts.
    -> Usamos o return para isso.
~~~typescript

[/hooks/useClientes.ts]
import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../firebaseBKND/db/ColecaoCliente"


export default function useClientes() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const repo: ColecaoCliente = new ColecaoCliente()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.fetchAll().then(clientes => {
            setClientes(clientes)
            setVisivel('tabela')
        })
    }

    function selectClient(client: Cliente){
        console.log(client.nome)
        setCliente(client)
        setVisivel('form')
    }
    async function deleteClient(client: Cliente){
        await repo.delete(client)
        obterTodos()
    }
    async function saveClient(client: Cliente){
        console.log(client)
        await repo.save(client)
        obterTodos()
    }
    function newClient(client:Cliente){
        console.log(client)
        setCliente(Cliente.vazio())
        setVisivel('form')
    }

    return {
        newClient,
        saveClient,
        deleteClient,
        selectClient,
        obterTodos,
    }
}
~~~

    3 - Agora em [/pages/index.tsx] vamos criar uma constante para podermos usar o HOOK que criamos.
    -> Dentro das {} iremos conseguir selecionar alguns metodos que ja importamos do nosso HOOK personalisado.
~~~typescript
[/pages/index.tsx]

const {selectClient, deleteClient} = useClientes()
~~~

    4 - Vamos precisar do proprio CLIENTE em si, então no nosso HOOK PERSONALIZADO exportamos o cliente.
~~~typescript
[/hooks/useClientes.ts]

return {
    cliente,
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    obterTodos,
}
[/pages/index.tsx]

const {cliente,selectClient, deleteClient} = useClientes()

~~~

    5 - Precisamos tambem a lista de clientes, o que seria os [clientes].
    -> Vamos tambem aproveitar e ja exportar o [novoCliente], e as outras funções que faltam.
~~~typescript
[/hooks/useClientes.ts]
return {
    cliente,
    clientes,
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    obterTodos,
    }
[/pages/index.tsx]

const {
        cliente,
        clientes,
        selectClient,
        deleteClient,
        newClient,
        saveClient,
    } = useClientes()

~~~

    6 - Falta agora trabalharmos com a questão da visibilidade. Podemos criar outro HOOK P  ERSONALIZADO, para trabalhar somente com essa questão da visibilidade, vamos chama-lo de [useTabelaOuForms.ts].
    -> Vamos exporta-lo por padrão, usando o mesmo nome, e dentro da função  vamos criar um ESTADO [visivel, setVisivel], que irá inicialmente começar como ('tabela'), mas que terá dois estados <'tabela' | 'form'>.
    -> No retorno, vamos retornar esse estado, mas não das formas anteriores. Vamos criar uma variavel chamada [formularioVisivel: visivel === 'form'].
    -> Vamos tambem criar outra variavel chamada [tabelaVisivel: visivel === 'tabela'].
    -> Vamos tambem criar duas funções para fazer a alteração. A primeira chamada [exibirTabela() - arrow function ], e vamos atribuir o [setVisivel('tabela')] a ela. Vamos usar o mesmo principio para o formulario.
    -> Agora nos podemos exportar essas duas funções, isolando assim uma logica da nossa aplicação dentro de um HOOK.
~~~typescript
[/hooks/useTabelaOuForm.ts]

import { useState } from "react";

export default function useTabelaOuForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const showTable = () => setVisivel('tabela')
    const showForm = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        showTable,
        showForm,
    }
}

~~~

    7 - Agora dentro do nosso outro HOOK personalizado [useClientes.ts] podemos excluir essa variavel, e importar um HOOK dentro dele.
~~~typescript
[/hooks/useClientes.ts]

const {
    tabelaVisivel,
    formularioVisivel,
    showForm,
    showTable,
} = useTabelaOuForm()
~~~

    8 - Agora, na função, [obterTodos()] em vez de colocarmos o [setVisivel('tabela')], colocamos o [showTable()], e analogamente, fazemos o mesmo para o formulario.
~~~typescript
[/hooks/useClientes.ts]

function obterTodos() {
    repo.fetchAll().then(clientes => {
        setClientes(clientes)
        showTable()
    })
}

function selectClient(client: Cliente){
    console.log(client.nome)
    setCliente(client)
    showForm()
}

function newClient(client:Cliente){
    console.log(client)
    setCliente(Cliente.vazio())
    showForm()
}
~~~

    9 - Nos podemos retornar o que precisamos dentro do nosso componente [/pages/index.tsx], para isso, no [useClientes.tsx], precisamos retornar a propriedade [tabelaVisivel]. Retornando ela no hook, no componente, podemos obter essa propriedades na chamada do hook e substituir o visivel pela propriedade.
    -> Vamos tambem precisar fazer o mesmo processo para a função que irá exibir a tabela.
~~~typescript
[/hooks/useClientes.ts]

import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../firebaseBKND/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"


export default function useClientes() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const repo: ColecaoCliente = new ColecaoCliente()

    const {
        tabelaVisivel,
        formularioVisivel,
        showForm,
        showTable,
    } = useTabelaOuForm()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.fetchAll().then(clientes => {
            setClientes(clientes)
            showTable()
        })
    }

    function selectClient(client: Cliente){
        console.log(client.nome)
        setCliente(client)
        showForm()
    }
    async function deleteClient(client: Cliente){
        await repo.delete(client)
        obterTodos()
    }
    async function saveClient(client: Cliente){
        console.log(client)
        await repo.save(client)
        obterTodos()
    }
    function newClient(client:Cliente){
        console.log(client)
        setCliente(Cliente.vazio())
        showForm()
    }

    return {
        cliente,
        clientes,
        newClient,
        saveClient,
        deleteClient,
        selectClient,
        obterTodos,
        tabelaVisivel,
        showTable,
    }
}
~~~

~~~typescript
[/pages/index.tsx]

export default function Home() {
    const {
        cliente,
        clientes,
        selectClient,
        deleteClient,
        newClient,
        saveClient,
        tabelaVisivel,
        showTable,
    } = useClientes()
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            {tabelaVisivel ? (
                <>
                    <div className="flex justify-end">
                        <Botao 
                            className='mb-4'
                            cor="green"
                            onClick={newClient}
                        >Novo CLiente</Botao>
                    </div>
                    <Tabela 
                        clientes={clientes} 
                        clientSelect={selectClient}
                        clientDelete={deleteClient}
                    />
                </>
            ) : (
                <Formulario 
                    client={cliente} 
                    cancelado={showTable}
                    clientChange={saveClient}
                />
            )}
        </Layout>
    </div>
  )
}
~~~

Agora possuimos uma estrutura muito mais organizada e refatorada.




&nbsp;

---

---

## [Aula 119] - EXCLUINDO PROJETO FIREBASE

&nbsp;

Para finalizarmos vamos entrar dentro do **FIRESTORE**, e vamos excluir o projeto. Pois durante a implementação do projeto fimos, algumas informações sensiveis, que deixam esse repositorio com falhas na segurança.




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
