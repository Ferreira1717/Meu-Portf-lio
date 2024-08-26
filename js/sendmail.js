// Este código adiciona um evento de clique ao elemento com o id 'emailButton'
document.getElementById('emailButton').addEventListener('click', sendMail);

function sendMail (e) {

    e.preventDefault();
    

    const mail = document.getElementById('email').value;
    const message = document.getElementById('mensagem').value;
    const name = document.getElementById('nome').value;

    // Verifica se todos os campos foram preenchidos.
    if (mail && message && name) {

    
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "guifsilva240506@gmail.com",
            Password: "5F557916A8FB6CD897BBFCBAFF826987235B",
            To: "email addressee",
            From: "guifsilva240506@gmail.com",
            Subject: `${name} Enviando E-mail Com Javascript`,
            Body: `Email: ${mail} \n \n ${message}`,
          }).then(() => {
            // Após o envio bem-sucedido, exibe um alerta informando que a mensagem foi enviada
            alert('Mensagem enviada!');
            // E recarrega a página, para limpar os campos e permitir que o usuário envie mais e-mails.
            location.reload();
          });
    } else {
        // Se algum dos campos estiver em branco, exibe um alerta informando que todos os campos devem ser preenchidos.
        alert('Preencha todos os campos!');
    }    
}