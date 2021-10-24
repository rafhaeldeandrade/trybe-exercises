/* Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de
pagamentos feitos até o momento por um determinado customer_id. */
USE sakila;
DELIMITER $$

CREATE FUNCTION GetAllPaymentsUntilDate(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payments INT;
    SELECT COUNT(payment_date) FROM payment
    WHERE customer_id=id AND DATEDIFF(now(), payment_date) > 0
    GROUP BY customer_id INTO total_payments;
    RETURN total_payments;
END $$
DELIMITER ;

/* Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado
ao registro de inventário com esse id. */
USE sakila;
DELIMITER $$

CREATE FUNCTION GetMovieNameFromInventoryId(inventory_id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE movie_name VARCHAR(100);
    SELECT f.title
    FROM film f
    INNER JOIN inventory i ON f.film_id = i.film_id
    WHERE inventory_id = i.inventory_id
    INTO movie_name;
    RETURN movie_name;
END $$
DELIMITER ;

/* Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' )
e retorna a quantidade total de filmes registrados nessa categoria. */
USE sakila;
DELIMITER $$

CREATE FUNCTION GetMoviesQuantity(category VARCHAR(10))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantity INT;
	SELECT COUNT(*) FROM sakila.category c
    INNER JOIN sakila.film_category fc ON c.category_id = fc.category_id
    WHERE c.name = category INTO quantity;
    RETURN quantity;
END $$

DELIMITER ;