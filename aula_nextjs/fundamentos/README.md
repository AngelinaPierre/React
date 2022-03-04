

## [Aula 81] - CONFIGURAÇÕES DO PROJETO.

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
