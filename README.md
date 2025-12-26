# SWMG - Circuito Mineiro de Startup Weekend

Website oficial do Circuito Mineiro de Startup Weekend, uma iniciativa que leva o maior evento de empreendedorismo do mundo para todas as regiões de Minas Gerais.

## Sobre o Projeto

Este é o repositório do site oficial do Circuito Mineiro de Startup Weekend, desenvolvido com:

- 🚀 Vite para desenvolvimento rápido
- ⚛️ React para a interface de usuário
- 🎨 Componentes UI personalizados
- 📝 PayloadCMS para gerenciamento de conteúdo
- 🐘 PostgreSQL (Neon) para banco de dados
- 🔒 Autenticação integrada

O projeto permite gerenciar eventos, mentores, casos de sucesso, blog e todo o ecossistema de startups em Minas Gerais.

## O que é o Startup Weekend?

Startup Weekend é um evento de 54 horas onde empreendedores, designers e desenvolvedores se reúnem para criar startups do zero. Durante o fim de semana, os participantes:

- Formam equipes em torno das melhores ideias
- Validam com usuários reais
- Desenvolvem MVPs (Produtos Mínimos Viáveis)
- Recebem mentoria de especialistas
- Apresentam suas soluções para uma banca de jurados

## Funcionalidades do Site

- 📅 Calendário de eventos em todas as cidades mineiras
- 👨‍🏫 Programa de mentoria e cadastro de mentores
- 📊 Casos de sucesso de startups nascidas no evento
- 🗺️ Mapa do ecossistema mineiro de startups
- 📰 Blog com conteúdo sobre empreendedorismo
- 👥 Seção de organizadores e voluntários
- 🎟️ Sistema de inscrição para eventos

## Setup

1. Clone o repositório
2. Instale as dependências:

```bash
yarn install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
PAYLOAD_SECRET=sua-chave-secreta
DATABASE_URL=postgres://sua-string-de-conexao-neon
PORT=3001
```

4. Execute o script de seed para popular o banco de dados:

```bash
yarn seed
```

5. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

6. Acesse a aplicação:
   - Frontend: http://localhost:8080
   - PayloadCMS Admin: http://localhost:8080/admin

## Login de Administrador

Após executar o script de seed, você pode fazer login no painel de administração com:

- Email: admin@startupweekendmg.com
- Senha: Password123!

## Scripts Disponíveis

- `yarn dev` - Inicia o frontend e o servidor PayloadCMS
- `yarn dev:vite` - Inicia apenas o frontend Vite
- `yarn dev:payload` - Inicia apenas o servidor PayloadCMS
- `yarn build` - Compila o frontend para produção
- `yarn build:payload` - Compila o PayloadCMS para produção
- `yarn seed` - Popula o banco de dados com dados iniciais
- `yarn generate:types` - Gera tipos TypeScript para as coleções do PayloadCMS

## Implantação

Para implantar a aplicação em produção:

1. Compile a aplicação:

```bash
yarn build && yarn build:payload
```

2. Configure seu ambiente de produção com as variáveis de ambiente necessárias.

3. Implante os ativos compilados no provedor de hospedagem de sua escolha (Vercel, Netlify, etc.).

4. Certifique-se de que seu banco de dados PostgreSQL Neon esteja configurado corretamente para uso em produção.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## Licença

Este projeto está licenciado sob a Licença SWMG - consulte o arquivo LICENSE para obter detalhes.

## Contato

Para mais informações sobre o Circuito Mineiro de Startup Weekend:

- Email: contato@startupweekendmg.com
- Site: [startupweekendmg.com](https://startupweekendmg.com)
