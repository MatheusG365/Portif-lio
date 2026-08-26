# Portfólio — Matheus Gonçalves

Portfólio em React + Vite, pronto para hospedagem estática na Vercel.

## Tecnologias

- React
- Vite
- CSS puro
- Lucide React

## Como executar

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado pelo Vite.

## Build para produção

```bash
npm run build
npm run preview
```

## Colocar sua foto

Substitua:

`public/images/profile/profile-placeholder.svg`

por uma foto sua, por exemplo:

`public/images/profile/profile.jpg`

Não precisa alterar o componente, porque o `Hero` já está apontando para o arquivo de placeholder. Se quiser usar `.jpg`, altere o caminho em `src/App.jsx`.

## Colocar screenshots reais dos projetos

Cada projeto possui três imagens de exemplo:

- `public/images/projects/cortae/01.svg`
- `public/images/projects/cortae/02.svg`
- `public/images/projects/cortae/03.svg`

E o mesmo padrão para os outros projetos.

Você pode substituir os SVGs por imagens reais, mantendo os mesmos nomes e extensões, ou alterar os caminhos em:

`src/data/projects.js`

Exemplo:

```js
images: [
  "/images/projects/cortae/01.jpg",
  "/images/projects/cortae/02.jpg",
  "/images/projects/cortae/03.jpg",
],
```

## Adicionar projeto

Abra `src/data/projects.js` e copie um objeto existente. O modal, card, galeria, tags e links são gerados automaticamente.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Entre na Vercel.
3. Importe o repositório.
4. Framework: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Faça o deploy.

O projeto não precisa de backend para o portfólio.
