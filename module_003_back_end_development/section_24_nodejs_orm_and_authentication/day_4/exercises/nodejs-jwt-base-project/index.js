const app = require('./api/server');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
