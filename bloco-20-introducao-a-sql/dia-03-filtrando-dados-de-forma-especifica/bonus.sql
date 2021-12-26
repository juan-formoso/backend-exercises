SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';

SELECT Name FROM Scientists.Projects
WHERE Code LIKE 'A%'
ORDER BY Name;

SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Name;

SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

SELECT * FROM Scientists.Projects
WHERE Hours > 500;

SELECT * FROM Scientists.Projects
WHERE Hours > 250 AND Hours < 800;

SELECT Name, Code FROM Scientists.Projects
WHERE Name NOT LIKE 'A%';

SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';