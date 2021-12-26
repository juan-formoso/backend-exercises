SELECT actor_id, first_name FROM sakila.actor
WHERE first_name IN ('KARL', 'MATTHEW');

DELETE FROM sakila.actor
WHERE actor_id IN (8, 12, 103, 181);

DELETE FROM sakila.actor
WHERE first_name IN ('KARL', 'MATTHEW');

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

# Exercício 5: Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. 
# Use o Table Inspector para fazer isso (aba DDL).
# Resposta: address, city, customer, film, film_actor, film_category, inventory, payment, rental, staff and store have ON DELETE RESTRICT.

# Exercício 6: Exclua o banco de dados e o recrie (use as instruções no início desta aula).
# Solução: abrir e se conectar ao Workbench; selecionar o banco sakila e clicar em 'Drop Schema'; selecionar a opção 'Drop Now';
# Utilizar este link 'https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sakila-1ae15ae82697888c35bf1f1c8acbf755.sql' e salvá-lo como '.sql';
# Selecionar todo o conteúdo do arquivo e colar em uma query no workbench; execute e restaure o banco de dados.