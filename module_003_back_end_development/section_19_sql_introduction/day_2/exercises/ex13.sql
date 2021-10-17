/* Escreva uma query para exibir o nome do segundo projeto com menor quantidade
de horas */
SELECT Name from scientists.projects ORDER BY Hours DESC LIMIT 1 OFFSET 1;
