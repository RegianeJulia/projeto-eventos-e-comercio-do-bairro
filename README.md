# Portal de Eventos & Comércio do Bairro

Projeto de front-end para divulgar eventos e comércios do bairro. A parte de eventos permite cadastrar, listar, editar e excluir registros no próprio navegador. As páginas de comércio ainda estão em desenvolvimento.

## Tecnologias

- HTML5
- CSS3 (Flexbox, Grid e media queries)
- JavaScript puro
- `localStorage` para armazenar os eventos

## Funcionalidades atuais

- Cadastro de eventos com categorias predefinidas.
- Cadastro de eventos com uma categoria personalizada, vinculada apenas ao evento criado.
- Listagem, edição e exclusão de eventos cadastrados.
- Botões de cancelamento dos formulários de eventos com retorno à página inicial.
- Layout adaptado para telas menores com Grid e media queries.

Os eventos ficam salvos no `localStorage` do navegador usado. Não há servidor ou banco de dados compartilhado: os dados de um navegador não aparecem para outros usuários.

## Páginas

- `index.html` — menu principal.
- `cadastro-eventos.html` — cadastro com categorias predefinidas.
- `cadastro-novo-tipo-de-evento.html` — cadastro de evento com categoria personalizada.
- `lista-de-eventos.html` — consulta, edição e exclusão de eventos.
- `cadastrar-comercio.html` — interface do formulário de comércio, ainda sem gravação dos dados.
- `lista-de-comercios.html` — página de listagem de comércios, ainda sem dados dinâmicos.

## Como executar

1. Clone o repositório e abra a pasta no VS Code.
2. Sirva a pasta localmente, por exemplo com a extensão Live Server.
3. Abra `index.html` pelo endereço fornecido pelo servidor local.

Não há instalação de dependências nem etapa de compilação.

## Status

Em desenvolvimento. O fluxo de eventos usa `localStorage`; o cadastro e a listagem de comércios ainda não foram implementados em JavaScript. Os fluxos atuais são conferidos manualmente, sem testes automatizados neste projeto.

## Autora

Feito por Regiane Julia Pereira como projeto de estudo em desenvolvimento full stack.
