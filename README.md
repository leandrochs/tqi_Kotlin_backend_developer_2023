# tqi_Kotlin_backend_developer_2023



Rodar o Docker do Mysql
Primeiro, devemos criar o volume lógico do docker para manter os dados do sistema;
`
docker volume create jumarket-mysql

`

Em seguida, devemos executar o container, utilizando o volume criado como referência;
O comando abaixo, executa o container docker na porta 3306 e com a senha de root = 123456;

`
docker run -d --rm --name mysql-server -v jumarket-mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=jumarket mysql:8.0
`

Migrations
Na raíz do projeto:
`./gradlew flywayMigrate -i`


### Banco de Dados

Tabelas
    category (category_id, name)
    product (product_id, name, unit_of_measure, unit_price, quantity, category_id)
    