CREATE DATABASE salao_cabeleireiro;
CREATE TABLE agendamentos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  data DATE NOT NULL,
  hora TIME NOT NULL,
  servico VARCHAR(255) NOT NULL
);
INSERT INTO agendamentos (data, hora, servico) VALUES
('2023-03-01', '14:00:00', 'Corte Masculino'),
('2023-03-02', '10:30:00', 'Coloração'),
('2023-03-03', '16:00:00', 'Penteado'),
('2023-03-04', '11:00:00', 'Corte Feminino');