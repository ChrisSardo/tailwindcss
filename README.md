✈️ VooTrack
VooTrack é uma aplicação web desenvolvida com React + TypeScript + React Router DOM, que permite o cadastro de usuários, exibição de perfis, listagem de dados e navegação entre páginas. O layout é estilizado com Tailwind CSS e tem um efeito dinâmico de background radial baseado no movimento do mouse.

📁 Estrutura de Páginas
Home.tsx
Página de boas-vindas com fundo dinâmico.
path: /

About.tsx
Página institucional com breve descrição pessoal.
path: /sobre

Register.tsx
Formulário de cadastro com envio de dados para o perfil do usuário.
path: /cadastro

Profile.tsx
Exibe os dados do usuário passados por state via rota dinâmica.
path: /perfil/:username

Users.tsx
Lista usuários buscados via uma função externa getUsuarios() (mock ou API).
path: /usuarios

🧠 Funcionalidades
Lazy loading com React.lazy e Suspense

Navegação com react-router-dom

Cadastro de usuário com redirecionamento para /perfil/:username

Listagem de usuários (consome dados de uma API ou função mockada)

Estilização com Tailwind CSS

Efeito de gradiente dinâmico com base na posição do cursor

🚀 Para rodar o projeto
bash
Copiar
Editar
npm install
npm run dev
🔧 Tecnologias
React

TypeScript

React Router DOM

Tailwind CSS
