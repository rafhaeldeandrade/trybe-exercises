/* 1. Escreva uma query para exibir todas as peças que começam com GR */
SELECT 
    *
FROM
    pecasfornecedores.pecas
WHERE
    name LIKE 'gr%'

/* 2. Escreva uma query para exibir todos os fornecimentos que contenham a
peça com code 2. Organize o resultado por ordem alfabética de fornecedor */
SELECT * from pecasfornecedores.fornecimentos
WHERE peca = 2 ORDER BY fornecedor ASC;

/* 3. Escreva uma query para exibir as peças, preço e fornecedor de todos
os fornecimentos em que o código do fornecedor tenha a letra N */
SELECT peca, Preco, Fornecedor from pecasfornecedores.fornecimentos
WHERE Fornecedor LIKE '%N%';

/* 4. Escreva uma query para exibir todas as informações dos fornecedores
que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética
decrescente */
SELECT * from pecasfornecedores.fornecedores
WHERE name LIKE '%LTDA' ORDER BY name DESC;

/* 5. Escreva uma query para exibir o número de empresas (fornecedores) que
contém a letra F no código */
SELECT COUNT(code) from pecasfornecedores.fornecedores
WHERE code LIKE '%F%';

/* 6. Escreva uma query para exibir os fornecimentos onde as peças custam
mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente */
SELECT * FROM pecasfornecedores.fornecimentos
WHERE preco > 15 AND preco < 40 ORDER BY preco ASC;

/* 7. Escreva uma query para exibir o número de vendas feitas entre o dia
15/04/2018 e o dia 30/07/2019 */
SELECT COUNT(*) FROM pecasfornecedores.vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
