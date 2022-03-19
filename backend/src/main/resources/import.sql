INSERT INTO tb_user(nome, email, senha, endereco, cidade, estado, cep) VALUES ('Maria','maria@gmail.com', '12345', 'Rua A', 'B', 'Rio de Janeiro', '24715-623');
INSERT INTO tb_user(nome, email, senha, endereco, cidade, estado, cep) VALUES ('Joao','joao@gmail.com', '123333', 'Rua B',  'B', 'Rio de Janeiro', '24715-623');
INSERT INTO tb_user(nome, email, senha, endereco, cidade, estado, cep) VALUES ('Ana','ana@gmail.com', '12223', 'Rua C',  'B', 'Rio de Janeiro', '24715-623');
INSERT INTO tb_user(nome, email, senha, endereco, cidade, estado, cep) VALUES ('Lucia','lucia@gmail.com', '15555', 'Rua D',  'B', 'Rio de Janeiro', '24715-623');
INSERT INTO tb_user(nome, email, senha, endereco, cidade, estado, cep) VALUES ('Joaquim','joaquim@gmail.com', '16666', 'Rua E',  'B', 'Rio de Janeiro', '24715-623');

INSERT INTO tb_pacote(nome, reservado, origem, destino, saida, retorno, preco, informacao, contagem,  image) VALUES ('Caribe Brasileiro', 5, 'Rio de Janeiro', 'Recife', '20/03/2022','25/03/2022', 'R$ 2200,00', 'Hotel + Passagem Aérea + Translado', 2, 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg');
INSERT INTO tb_pacote(nome, reservado, origem, destino, saida, retorno, preco, informacao, contagem,  image) VALUES ('Quero ir tbm', 5, 'Rio de Janeiro', 'Recife', '02/03/2022', '07/03/2022', 'R$ 3000,00', 'Hotel + Passagem Aérea + Translado', 18, 'https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702__340.jpg');
INSERT INTO tb_pacote(nome, reservado, origem, destino, saida, retorno, preco, informacao, contagem,  image) VALUES ('Sua Felicidade', 5, 'Rio de Janeiro', 'Recife', '22/03/2022', '27/03/2022', 'R$ 1800,00', 'Hotel + Passagem Aérea + Translado', 7, 'https://cdn.pixabay.com/photo/2016/06/20/03/21/rainbow-1467988__340.jpg');
INSERT INTO tb_pacote(nome, reservado, origem, destino, saida, retorno, preco, informacao, contagem,  image) VALUES ('Premium Do Norte', 5, 'Rio de Janeiro', 'Recife', '10/03/2022', '15/03/2022', 'R$ 5000,00', 'Hotel + Passagem Aérea + Translado', 32, 'https://cdn.pixabay.com/photo/2017/11/24/21/49/bali-2975787__340.jpg');
INSERT INTO tb_pacote(nome, reservado, origem, destino, saida, retorno, preco, informacao, contagem,  image) VALUES ('Montanha da Paz', 5, 'Recife', 'São Paulo', '18/03/2022', '23/03/2022', 'R$ 3400,00', 'Passagem Aérea + Translado', 5, 'https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587__340.jpg');


INSERT INTO tb_compra(pacote_id, user_id,  tel, diaria, data, valor, pagamento) VALUES (1, 1, '2198765-4789', 5, '16/02/2022', 'R$ 2200,00', 'Cartão');
INSERT INTO tb_compra(pacote_id, user_id,  tel, diaria, data, valor, pagamento) VALUES (2, 2, '2193432-3432', 5, '16/02/2022', 'R$ 3000,00', 'Boleto');
INSERT INTO tb_compra(pacote_id, user_id,  tel, diaria, data, valor, pagamento) VALUES (3, 1, '1198765-5435', 5, '16/02/2022', 'R$ 1800,00', 'Cartão');
INSERT INTO tb_compra(pacote_id, user_id,  tel, diaria, data, valor, pagamento) VALUES (4, 2, '3198745-4549', 5, '16/02/2022', 'R$ 5000,00', 'Pix');
INSERT INTO tb_compra(pacote_id, user_id,  tel, diaria, data, valor, pagamento) VALUES (5, 3, '2198987-3459', 5, '16/02/2022', 'R$ 3400,00', 'Cartão');
