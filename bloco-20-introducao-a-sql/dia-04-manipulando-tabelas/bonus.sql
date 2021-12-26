UPDATE Pixar.BoxOffice
SET rating = 9.0
WHERE international_sales > 400000000;

UPDATE Pixar.BoxOffice
SET rating = 6.0
WHERE international_sales > 300000000 AND domestic_sales < 200000000;

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Pixar.Movies
WHERE length_minutes < 100;