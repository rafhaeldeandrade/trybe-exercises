/* 1. Escreva uma query para exibir todas as informações de todos os
cientistas que possuam a letra e em seu nome */
SELECT * from scientists.scientists
WHERE Name LIKE '%a%';

/* 2. Escreva uma query para exibir o nome de todos os projetos cujo
o código inicie com a letra A . Ordene o resultado em ordem alfabética */
SELECT Name from scientists.projects
WHERE Name LIKE 'a%' ORDER BY Name ASC;

/* 3. Escreva uma query para exibir o código e nome de todos os projetos
que possuam em seu código o número 3 . Ordene o resultado em ordem
alfabética */
SELECT Code, Name from scientists.projects
WHERE Code LIKE '%3%' ORDER BY Name ASC;

/* 4. Escreva uma query para exibir todos os cientistas
(valores numéricos) cujos projetos sejam AeH3 , Ast3 ou Che1 */
SELECT Scientist FROM scientists.assignedto
WHERE Project IN ('Aeh1', 'Ast3', 'Che1');

/* 5. Escreva uma query para exibir todas as informações
de todos os projetos com mais de 500 horas */
SELECT * FROM scientists.projects
WHERE Hours > 500;

/* 6. Escreva uma query para exibir todas as informações de
todos os projetos cujas horas sejam maiores que 250 e menores 800 */
SELECT * FROM scientists.projects
WHERE Hours > 250 AND Hours < 800;

/* 7. Escreva uma query para exibir o nome e o código de
todos os projetos cujo nome NÃO inicie com a letra A */
SELECT Code, Name FROM scientists.projects
WHERE Name NOT LIKE 'a%';

/* 8. Escreva uma query para exibir o nome de todos os
projetos cujo código contenha a letra H */
SELECT Name FROM scientists.projects
WHERE Name LIKE '%h%';