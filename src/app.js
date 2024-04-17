require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
