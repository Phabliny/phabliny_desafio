# Back-end da aplicação "Busca informações com o CEP"

Esse projeto tem como intuto desenvolver a parte do back-end de um app simples que recebe um determinado CEP e retorna os dados do mesmo.

## Pré-requisitos
Antes de prosseguir, verifique se você possui as seguintes ferramentas instaladas em seu sistema:

1. Python (versão 3.7 ou superior)
2. pip (gerenciador de pacotes do Python)
3. PostgreSQL (ou outro banco de dados suportado)
4. WSL (Windows Subsystem for Linux) instalado e configurado

## Configuração do Ambiente no WSL
Siga as etapas abaixo para configurar o ambiente de desenvolvimento no WSL:

1. Abra o seu terminal do WSL (Ubuntu ou outra distribuição Linux).
2. Navegue até o diretório raiz do projeto back-end (api_django).

### Criação do Ambiente Virtual (opcional)
Caso deseje criar um ambiente virtual para isolar as dependências do projeto, siga as etapas abaixo:

3. Execute o seguinte comando para criar um ambiente virtual:

`python3 -m venv env`

`source env/bin/activate`

O ambiente virtual será ativado e o terminal exibirá o nome do ambiente virtual entre parênteses.

## Executando a Aplicação
Finalmente, execute o seguinte comando para iniciar o servidor de desenvolvimento:

`python3 manage.py runserver`

O servidor será iniciado e a aplicação estará disponível no endereço http://localhost:8000/.
