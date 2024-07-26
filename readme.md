CREATE TABLE produtos_alta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    secao VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    preco_desconto DECIMAL(10, 2),
    porcentagem DECIMAL(5, 2)
);


INSERT INTO produtos_alta (nome, secao, preco, preco_desconto, porcentagem) VALUES
('Camiseta', 'Vestuário', 50.00, 40.00, 20.00),
('Calça Jeans', 'Vestuário', 100.00, 80.00, 20.00),
('Tênis', 'Calçados', 150.00, 120.00, 20.00),
('Relógio', 'Acessórios', 200.00, 180.00, 10.00),
('Bolsa', 'Acessórios', 120.00, 90.00, 25.00);
