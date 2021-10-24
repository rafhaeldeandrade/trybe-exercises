/* Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o
id do ator ou atriz e a quantidade de filmes em que atuaram. */
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTopTenMostPopularActors()
BEGIN
	SELECT a.actor_id, COUNT(f.film_id) AS `Quantidade de filmes`
    FROM actor a
    INNER JOIN film_actor f ON f.actor_id=a.actor_id
    GROUP BY a.actor_id
    ORDER BY `Quantidade de filmes` DESC LIMIT 10;
END $$

DELIMITER ;

/* Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em
uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria
selecionada. Use as tabelas film , film_category e category para montar essa procedure. */

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowSomeCategoriesInfo(IN category_name varchar(50))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.name
    FROM film f
    INNER JOIN film_category fc ON f.film_id=fc.film_id
    INNER JOIN category c ON fc.category_id=c.category_id
    WHERE c.name=category_name;
END $$

DELIMITER ;

/* Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o
cliente está ou não ativo, através de um parâmetro de saída. */
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowIfIsRegistered(IN check_email varchar(50), OUT is_active varchar(22))
BEGIN
	SELECT IF (active, 'O cliente está ativo', 'O cliente está inativo') INTO is_active FROM customer
    WHERE email=check_email;
END $$

DELIMITER ;