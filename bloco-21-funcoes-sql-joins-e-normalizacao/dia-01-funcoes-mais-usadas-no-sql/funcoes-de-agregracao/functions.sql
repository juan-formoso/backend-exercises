-- Usando a coluna replacement_cost vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- Média entre todos os registros
SELECT MIN(replacement_cost) FROM sakila.film; -- Menor valor encontrado
SELECT MAX(replacement_cost) FROM sakila.film; -- Maior valor encontrado
SELECT SUM(replacement_cost) FROM sakila.film; -- Soma de todos os registros
SELECT COUNT(replacement_cost) FROM sakila.film; -- Quantidade de registros encontrados