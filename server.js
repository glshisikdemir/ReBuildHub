const express = require('express');
const app = express();
const path = require('path');

// frontend dosyalarını sun
app.use(express.static('.'));

// '/' isteğinde rebuildhub-mvp.html'i gönder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'rebuildhub-mvp.html'));
});

// Render için port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
