const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // ajuste conforme necessário
    password: '', // ajuste conforme necessário
    database: 'enquete_db'
});

// Rota GET para buscar resultados
app.get('/resultados', (req, res) => {
    db.query('SELECT * FROM tbl_votos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Rota POST para registrar voto
app.post('/votar', (req, res) => {
    const { opcao } = req.body;
    db.query('UPDATE tbl_votos SET total_votos = total_votos + 1 WHERE opcao_nome = ?', [opcao], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Voto registrado com sucesso!' });
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
