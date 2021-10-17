/* Escreva uma query que selecione todas as colunas da tabela city */
SELECT * from sakila.city;

/* Escreva uma query que exiba apenas as colunas first_name e last_name da
tabela customer */
SELECT first_name AS 'Nome', last_name AS 'Sobrenome' FROM sakila.customer;

/* Escreva uma query que exiba todas as colunas da tabela rental */
SELECT * from sakila.rental;

/* Escreva uma query que exiba o título, a descrição e a data de lançamento
dos filmes registrados na tabela film */
SELECT * from sakila.film;