SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS 'Média de duração de locação', rating
FROM sakila.film
GROUP BY rating
ORDER BY 'Média de duração de locação' DESC;

SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;
