const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório onde estão os arquivos estáticos (como o HTML, CSS e imagens)
app.use(express.static(path.join(__dirname, 'aplicacao-devops-main', 'src')));

// Define o endpoint para servir a página HTML
app.get('/projeto', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define o endpoint para servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views.html'));
});

// Define o endpoint para servir o arquivo JSON de integrantes
app.get('/integrantes', (req, res) => {
    res.sendFile(path.join(__dirname, 'integrantes.json'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});
