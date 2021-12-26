SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%F%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15.00 AND 40.00
ORDER BY Preco;

SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';