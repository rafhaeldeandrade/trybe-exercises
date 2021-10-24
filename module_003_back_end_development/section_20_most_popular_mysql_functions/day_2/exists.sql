-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT Id, Title FROM hotel.books b
WHERE NOT EXISTS (
	SELECT * FROM hotel.books_lent bl
    WHERE b.Id=bl.book_id
);

/* Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados
e que contêm a palavra "lost" no título. */
SELECT Id, Title FROM hotel.books b
WHERE EXISTS (
	SELECT * FROM hotel.books_lent bl
    WHERE b.Id=bl.book_id AND b.Title LIKE '%lost%'
);

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT `Name` FROM hotel.customers c
WHERE NOT EXISTS (
	SELECT * FROM hotel.carsales cs
    WHERE cs.CustomerID=c.CustomerId
);

/* Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do
cliente e o modelo do carro de todos os clientes que fizeram compras de carros. */
SELECT c.`Name`, car.`Name` AS `Nome do carro` FROM hotel.customers c
INNER JOIN hotel.cars car
WHERE EXISTS(
	SELECT * FROM hotel.carsales cs
    WHERE cs.CustomerID = c.CustomerId AND cs.CarID = car.Id
);