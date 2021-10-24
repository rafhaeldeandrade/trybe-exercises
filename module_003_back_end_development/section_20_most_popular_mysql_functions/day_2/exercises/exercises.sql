/* Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais
( international_sales ) de cada filme. */
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    pixar.movies m
        INNER JOIN
    pixar.boxoffice b ON m.id = b.movie_id;
    
/* Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui
um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ). */
SELECT 
    m.title,
    b.international_sales + b.domestic_sales AS 'Vendas'
FROM
    pixar.movies m
        INNER JOIN
    pixar.boxoffice b ON m.id = b.movie_id
WHERE
    b.international_sales > b.domestic_sales;
    
-- Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    m.title, b.rating
FROM
    pixar.movies m
        INNER JOIN
    pixar.boxoffice b ON m.id = b.movie_id
ORDER BY rating DESC;

/* Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem
filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes
dos cinemas em ordem alfabética. */
SELECT * FROM pixar.theater t
LEFT JOIN pixar.movies m ON m.theater_id=t.id
ORDER BY m.title ASC;

/* Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em
cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas
em ordem alfabética. */
SELECT 
    *
FROM
    pixar.theater t
        RIGHT JOIN
    pixar.movies m ON t.id = m.id
ORDER BY t.name ASC;

/* Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos
filmes que possuem avaliação maior que 7.5. */
SELECT 
    m.title
FROM
    pixar.movies m
        INNER JOIN
    pixar.boxoffice b ON m.id = b.movie_id
WHERE
    b.rating > 7.5;

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
            rating > 7.5);

/* Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos
filmes lançados depois de 2009. */
SELECT 
    b.rating
FROM
    pixar.movies m
        INNER JOIN
    pixar.boxoffice b ON m.id = b.movie_id
WHERE
    m.year > 2009;

SELECT 
    rating
FROM
    pixar.boxoffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            pixar.movies
        WHERE
            `year` > 2009);
            
-- Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT 
    t.name, t.location
FROM
    pixar.theater t
WHERE
    EXISTS( SELECT 
            *
        FROM
            pixar.movies m
        WHERE
            t.id = m.theater_id);
            
-- Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT 
    t.name, t.location
FROM
    pixar.theater t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            pixar.movies m
        WHERE
            m.theater_id = t.id);