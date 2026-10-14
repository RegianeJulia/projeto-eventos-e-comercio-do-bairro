# Portal de Eventos & Comércio do Bairro

Projeto de front-end para divulgar eventos e comércios do bairro. As duas áreas permitem cadastrar, listar, editar e excluir registros no próprio navegador.

## Tecnologias

- HTML5
- CSS3 (Flexbox, Grid e media queries)
- JavaScript puro
- `localStorage` para armazenar eventos e comércios

## Funcionalidades implementadas

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

✅ Projeto concluído.

O Portal de Eventos & Comércio do Bairro foi desenvolvido como um projeto de estudo, com o objetivo de praticar e consolidar meus conhecimentos em desenvolvimento front-end por meio da construção de um CRUD simples utilizando HTML, CSS e JavaScript.

A proposta foi exercitar principalmente a lógica de programação, a manipulação do DOM, a validação de formulários e a persistência de dados com localStorage, aplicando esses conceitos em funcionalidades de cadastro, listagem, edição e exclusão.

Por ser um projeto focado na consolidação desses fundamentos, os principais fluxos foram validados por meio de testes manuais, sem a implementação de testes automatizados.

O desenvolvimento foi encerrado após a revisão das funcionalidades e a aplicação de melhorias de segurança, organização e padronização do código.

## Autora

Feito por Regiane Julia Pereira como projeto de estudo em desenvolvimento full stack.
