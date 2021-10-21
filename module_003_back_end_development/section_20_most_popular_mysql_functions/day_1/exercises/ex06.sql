/* Escreva uma query que exiba a quantidade de pessoas que trabalham como
pessoas programadoras */
SELECT 
    COUNT(*) AS 'Qtd de programadores'
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
