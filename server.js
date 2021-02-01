const express = require('express');

const app = express();
const PORT = 2222;

app.use(express.static('public'));
app.use(express.static('src'));

app.use('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(PORT, () => console.log(`server running on the port ${PORT}`));

