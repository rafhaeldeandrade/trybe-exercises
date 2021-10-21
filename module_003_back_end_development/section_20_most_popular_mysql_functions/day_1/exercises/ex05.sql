/* Escreva uma query que exiba quatro informações: o maior salário, o menor
salário, a soma de todos os salários e a média dos salários. Todos os valores
devem ser formatados para ter apenas duas casas decimais. */
SELECT 
    ROUND(MAX(SALARY), 2),
    ROUND(MIN(SALARY), 2),
    ROUND(SUM(SALARY), 2),
    ROUND(AVG(SALARY), 2)
FROM
    hr.employees;
