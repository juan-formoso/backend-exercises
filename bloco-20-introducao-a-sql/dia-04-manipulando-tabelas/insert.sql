INSERT INTO `sakila`.`staff`
  (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Boruto', 'Uzumaki', 1, 'bolt@gmail.com', 2, 2, 'borushiki', 'uncle8neji');
  
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Jeff', 'Bezos', 2, 'jeffbezos@gmail.com', 1, 1, 'jeffb', 'ImTheChamp'),
    ('Sekiro', 'Okami', 2, 'sekirowolf@gmail.com', 1, 1, 'okami', 'SekiroTheSamurai');
    
INSERT INTO `sakila`.`actor`
  (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
ORDER BY customer_id LIMIT 5;

INSERT INTO sakila.category (name) VALUES
  ('Anime'),
  ('Shonen'),
  ('Isekai');
  
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);