const express = require('express');
const path = require('path');
const app = express();

// Statische Dateien aus dem 'public'-Ordner bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

// Route für die Startseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route für die Login-Seite
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route für die Support-Seite
app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'support.html'));
});

app.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});
