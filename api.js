const express = require('express');
const app = express();
const port = 3000;

// endpoint de exemplo
app.get('/dados', (req, res) => {
    const dados = {
        nome: 'Dados',
        valor: 42,
        mensagem: 'Estes são dados de exemplo.'
    };
    res.json(dados);
});

// inicio do servidor na porta especificada
app.listen(port, () => {
    console.log(`API executada na porta ${port}`);
});
