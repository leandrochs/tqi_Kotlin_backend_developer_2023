# tqi_Kotlin_backend_developer_2023



## I - Opções de inicialização

**1) Subir individualmente:**

a) Rodar o Docker do Mysql
Criar volume lógico do docker para manter os dados do sistema.

`docker volume create jumarket-mysql`

b) Container, utilizando o volume criado como referência.
O comando abaixo, executa o container docker na porta 3306 e com a senha de root = 123456.

`docker run -d --rm --name mysql-server -v jumarket-mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=jumarket mysql:8.0`

c) Comando na pasta backend (onde está o arquivo gradlew).
Sobe o backend, roda as migrations do flyway e se conecta com banco de dados mysql.

`./gradlew bootRun` (linux)

`./gradlew.bat bootRun` (windows)

d) Comando na pasta frontend (onde está o arquivo package.json).

Instala as dependências

`npm install`

sobe o frontend.

`npm start`


**2) Subir com docker compose**

Essa opção está em construção. 
Houve problemas ao fazer o backend se comunicar com o banco de dados, o que foi contornado provisoriamente subindo o banco de dados e o frontend com docker compose e subindo o backend depois separadamente.
Estamos trabalhando nisso!!

**3) Subir banco de dados e frontend com docker compose e subir backend individualmente**

a) Comando na raiz do projeto (onde está o arquivo docker-compose.yml)

`docker compose up -d`

b) Comando na pasta backend (onde está o arquivo gradlew)

`./gradlew bootRun`


### II - Migrations do Flyway

Se necessário, rodar as migrations do flyway (elas já rodam automaticamente durante a inicialização do backend).
Comando na raíz do projeto backend:

`./gradlew flywayMigrate -i`


### III - Banco de Dados

**Tabelas**

- category (category_id, name)

- product (product_id, name, unit_of_measure, unit_price, quantity, category_id)


### IV - TODO:
- [ ] Habilitar CORS global  https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
- [ ] Fazer todo sistema subir com docker compose https://bmuschko.com/blog/gradle-docker-compose/
- [ ] Adicionar autenticação para rota admin
- [ ] Tratar exceções
    