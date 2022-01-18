SELECT rating, AVG(length) AS duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) as custo_substituicao
FROM sakila.film
GROUP BY rating
HAVING custo_substituicao > 3950.50
ORDER BY custo_substituicao;