# Nome do Projeto

Uma breve descrição do projeto, suas funcionalidades e objetivos.

## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Como Executar](#como-executar)
- [Acessando a API](#acessando-a-api)
- [Acessando o RabbitMQ](#acessando-o-rabbitmq)
- [Licença](#licença)

## Sobre

Descreva aqui o que seu projeto faz, como ele pode ser útil e quais problemas ele resolve.

## Tecnologias

Este projeto utiliza as seguintes tecnologias:

- **Node.js**: Para a API.
- **Express**: Framework para a construção da API.
- **RabbitMQ**: Sistema de gerenciamento de filas de mensagens.
- **Docker**: Para containerização da aplicação.
- **Nginx**: Como servidor web reverso (se aplicável).

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Docker](https://docs.docker.com/get-docker/) (versão 20 ou superior)
- [Docker Compose](https://docs.docker.com/compose/install/) (versão 1.27 ou superior)

## Como Executar

Siga os passos abaixo para executar o projeto localmente.

1. Clone o repositório:

    ```bash
    https://github.com/brunopautz/test-docker.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd test-docker
    ```

3. Execute o seguinte comando para construir e iniciar os contêineres:

    ```bash
    docker-compose up --build
    ```

4. Execute o seguinte comando para derrubar os contêineres:

    ```bash
    docker-compose down
    ```

## Acessando a API

Após a inicialização bem-sucedida, você pode acessar a API no seguinte endereço:

- **API**: [http://localhost/api/reset-password](http://localhost/api/reset-password)

## Acessando o RabbitMQ

Acesse a interface de gerenciamento do RabbitMQ em:

- **RabbitMQ**: [http://localhost:15672](http://localhost:15672)

Credenciais padrão:

- **Usuário**: `bruno`
- **Senha**: `bruno`

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

