const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nathan',
    password: 'ds564',
    port: 7007,
  });

  

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });