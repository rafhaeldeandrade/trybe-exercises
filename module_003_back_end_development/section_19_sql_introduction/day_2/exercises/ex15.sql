/* Escreva uma query que exiba a string "Existem Number cientistas na tabela
Scientists.", em que Number se refira a quantidade de cientistas */
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.')
AS 'Cientistas' FROM scientists.scientists;
