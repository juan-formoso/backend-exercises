/* SELECT coluna(s) FROM tabela
GROUP BY coluna(s) */

SELECT first_name FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de subtituição dos filmes agrupado por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de subtituição dos filmes agrupado por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de subtituição dos filmes agrupado por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP BY rating;