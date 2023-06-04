<?php

// Verifica se o formulário foi submetido
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// Define as variáveis com os valores enviados pelo formulário
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$servico = $_POST['servico'];
	$data = $_POST['data'];
	$horario = $_POST['horario'];
	
	// Verifica se todos os campos foram preenchidos
	if ($nome && $email && $telefone && $servico && $data && $horario) {
		// Define o endereço de e-mail para envio da mensagem
		$para = 'contato@salaochique.com';
		
		// Define o assunto da mensagem
		$assunto = 'Agendamento de Serviço';
		
		// Define o corpo da mensagem
		$mensagem = 'Nome: ' . $nome . "\n";
		$mensagem .= 'Email: ' . $email . "\n";
		$mensagem .= 'Telefone: ' . $telefone . "\n";
		$mensagem .= 'Serviço: ' . $servico . "\n";
		$mensagem .= 'Data: ' . $data . "\n";
		$mensagem .= 'Horário: ' . $horario . "\n";
		
		// Define o cabeçalho da mensagem
		$cabecalho = 'From: ' . $email . "\r\n";
		
		// Envia a mensagem para o endereço de e-mail definido
		if (mail($para, $assunto, $mensagem, $cabecalho)) {
			// Define a mensagem de confirmação para exibição ao cliente
			$confirmacao = 'O seu agendamento foi recebido com sucesso. Entraremos em contato em breve para confirmar os detalhes.';
		} else {
			// Define a mensagem de erro para exibição ao cliente
			$erro = 'Ocorreu um erro ao enviar o agendamento. Por favor, tente novamente mais tarde.';
		}
	} else {
		// Define a mensagem de erro para exibição ao cliente
		$erro = 'Por favor, preencha todos os campos do formulário.';
	}
}

?>