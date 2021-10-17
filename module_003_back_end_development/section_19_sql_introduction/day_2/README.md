<p>Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:</p>
<strong>File: select.sql</strong>
<ol>
<li>Escreva uma query que selecione todas as colunas da tabela city;</li>
<li>Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;</li>
<li>Escreva uma query que exiba todas as colunas da tabela rental;</li>
<li>Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;</li>
<li>Utilize o SELECT para explorar todas as tabelas do banco de dados.</li>
</ol>

<strong>File: concat.sql</strong>
<ol>
<li>Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.</li>
<li>Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.</li>
<li>Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.</li>
</ol>

<p>Dada a tabela a seguir:</p>

```sql
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
```
<strong>File: distinct.sql</strong>
<p>Faça</p>
<ol>
<li>Monte uma query para encontrar pares únicos de nomes e idades.</li>
<li>Quantas linhas você encontraria na query anterior?</li>
<li>Monte uma query para encontrar somente os nomes únicos.</li>
<li>Quantas linhas você encontraria na query anterior?</li>
<li>Monte uma query para encontrar somente as idades únicas.</li>
<li>Quantas linhas você encontraria na query anterior?</li>
</ol>