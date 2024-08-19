## Bibliolist

### Descrição

Este projeto é um site simples para cadastro de livros. Ele utiliza HTML, CSS e JavaScript para permitir o cadastro e visualização de dados de livros. Os dados são armazenados no Local Storage e podem ser visualizados em uma página separada.

### Funcionalidades

- **Cadastro de Livros**: Formulário para inserir informações sobre livros, incluindo título, autor, gênero, editora, idioma e ano de publicação.
- **Exibição de Dados**: Dados cadastrados são exibidos em uma página separada quando o formulário é enviado.
- **Simulação de Requisição HTTP**: Exibição e ocultação de uma simulação de requisição HTTP ao clicar em um botão.

### Estrutura do Projeto

- `index.html`: Página inicial da aplicação.
- `form.html`: Página principal com o formulário de cadastro de livros.
- `formSent.html`: Página para exibir os dados do livro cadastrados.
- `styles.css`: Arquivo de estilos para o design do site.
- `scripts.js`: Arquivo JavaScript para manipulação de dados e interação com o Local Storage.

### Código JavaScript

O JavaScript usado neste projeto inclui:

- `handleSubmit(event)`: Função para manipular o envio do formulário e salvar dados no Local Storage.
- `displayHttpRequest()`: Função para exibir os dados armazenados no Local Storage na página `formSent.html`.
- `showHttpRequest()`: Função para alternar a exibição de uma simulação de requisição HTTP.

---