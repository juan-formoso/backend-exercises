# Geração de valores aleatórios

-- Gerando valor entre 0 e 1:
SELECT RAND();

-- Gerando valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))