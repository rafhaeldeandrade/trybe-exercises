-- Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT * FROM pixar.movies m
INNER JOIN pixar.boxoffice b ON b.movie_id=m.id
INNER JOIN pixar.theater t ON t.id = m.theater_id
WHERE b.rating > 8;

-- Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    pixar.movies t1,
    pixar.movies t2
WHERE
    t1.director = t2.director;
    
/* Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes
que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos. */
SELECT 
    m.title
FROM
    pixar.movies m
        INNER JOIN
    pixar.boxoffice b ON m.id = b.movie_id
WHERE
    (b.international_sales + b.domestic_sales) >= 500000000
        AND m.length_minutes > 110;

SELECT 
    title
FROM
    pixar.movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            pixar.boxoffice
        WHERE
            (international_sales + domestic_sales) > 500000000)
        AND length_minutes > 110;