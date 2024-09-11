# Service Order Tool

Este repositório contém o código de uma plataforma web desenvolvida com Next.js para o front-end, que tem como objetivo facilitar a gestão de uma oficina, possibilitando a criação e o gerenciamento de ordens de serviço, veículos e projetos.

## Funcionalidades

- Ordens de Serviço: Criação, visualização, edição e exclusão de ordens de serviço, com controle do status de cada tarefa.

- Gestão de Veículos: Registro de veículos com informações detalhadas, como fabricante, modelo, ano, número do chassi, entre outros.
- Gerenciamento de Projetos: Acompanhe os projetos da oficina, associando veículos e ordens de serviço a cada projeto.
- Interface Amigável: Design moderno e responsivo utilizando Tailwind CSS.
- Autenticação: Sistema de autenticação para controlar o acesso de usuários.

## Tecnologias Utilizadas

- Next.js: Framework de React para renderização do front-end e geração de páginas dinâmicas.

- Tailwind CSS: Biblioteca de CSS utilitária para criação de interfaces responsivas e customizáveis.

- Docker: Para criar e gerenciar os containers de desenvolvimento.

- MSSQL: Banco de dados para armazenar os dados

## Pré-requisitos

- Node.js v18+
- NPM ou Yarn
- Docker (opcional, para ambientes de desenvolvimento)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/PS-smarthub/sot.git
cd seu-repositorio
```

2. Instale as dependências:

```bash Copiar Código
npm install
```

ou, se estimer usando pnpm

```bash Copiar Código
pnpm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do projeto e configure as variáveis de ambiente necessárias para o banco de dados, autenticação e outras integrações. Exemplo:

```bash
DATABASE_URL=mongodb://localhost:27017/oficina
NEXTAUTH_URL=http://localhost:3000
```

4. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

ou com pnpm

```bash
pnpm dev
```

5. Acesse a aplicação em http://localhost:3000.

## Utilização

Após iniciar o ambiente de desenvolvimento, você poderá acessar a plataforma e:

- Criar novas ordens de serviço, atribuir status e acompanhar o progresso.
- dicionar veículos à oficina e editar seus detalhes.
- Gerenciar projetos, associando ordens de serviço e veículos a cada um deles.

## Estrutura do Projeto

Abaixo está um resumo da estrutura de pastas do projeto:

```
src/
├── components       # Componentes reutilizáveis de UI
├── app            # Páginas do Next.js (rotas da aplicação)
│   ├── api          # API routes para o backend
│   ├── app     # Página inicial da aplicação (Ordens de Serviço)
│   ├── vehicles     # Página de gerenciamento de veículos
│   ├── projects     # Página de gerenciamento de projetos
│   └── settings       # Página de configuração
├── public           # Arquivos públicos (imagens, ícones, etc.)
```