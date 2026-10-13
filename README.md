# Portal de Eventos & Comércio do Bairro

Projeto de front-end para divulgar eventos e comércios do bairro. As duas áreas permitem cadastrar, listar, editar e excluir registros no próprio navegador.

## Tecnologias

- HTML5
- CSS3 (Flexbox, Grid e media queries)
- JavaScript puro
- `localStorage` para armazenar eventos e comércios

## Funcionalidades atuais

- Cadastro de eventos com categorias predefinidas.
- Cadastro de eventos com uma categoria personalizada, vinculada apenas ao evento criado.
- Listagem, edição e exclusão de eventos cadastrados.
- Botões de cancelamento dos formulários de eventos com retorno à página inicial.
- Cadastro de comércios com categorias predefinidas.
- Opção **Outros** para digitar uma categoria vinculada apenas ao comércio cadastrado, sem adicioná-la às opções do formulário.
- Listagem de comércios com nome, categoria, telefone, e-mail e endereço.
- Edição e exclusão de comércios, com confirmação antes de excluir.
- Botão Cancelar do formulário de comércio com retorno à página inicial.
- Layout adaptado para telas menores com Grid e media queries.

Eventos e comércios ficam salvos, respectivamente, nas chaves `events` e `businesses` do `localStorage` do navegador usado. Não há servidor ou banco de dados compartilhado: os dados de um navegador não aparecem para outros usuários.

## Páginas

- `index.html` — menu principal.
- `cadastro-eventos.html` — cadastro com categorias predefinidas.
- `cadastro-novo-tipo-de-evento.html` — cadastro de evento com categoria personalizada.
- `lista-de-eventos.html` — consulta, edição e exclusão de eventos.
- `cadastrar-comercio.html` — cadastro e edição de comércios, com categoria predefinida ou personalizada.
- `lista-de-comercios.html` — consulta, edição e exclusão de comércios.

## Como executar

1. Clone o repositório e abra a pasta no VS Code.
2. Sirva a pasta localmente, por exemplo com a extensão Live Server.
3. Abra `index.html` pelo endereço fornecido pelo servidor local.

Não há instalação de dependências nem etapa de compilação.

## Status

Em desenvolvimento. Os fluxos de eventos e comércios usam `localStorage` e são conferidos manualmente, sem uma suíte de testes automatizados neste projeto.

## Autora

Feito por Regiane Julia Pereira como projeto de estudo em desenvolvimento full stack.
