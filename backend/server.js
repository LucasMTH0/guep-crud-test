const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const cors = require('cors');
const db = new sqlite3.Database(path.resolve(__dirname, './database/db_enterprises.db'));

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.get('/api/enterprises', (request, response) => {
  db.all('SELECT * FROM enterprises', [], (err, rows) => {
    if (err) {
      response.status(500).send(err.message);
      return;
    }
    response.json(rows);
  });
});

app.post('/api/enterprises/', (request, response) => {
  const { body } = request;
  const query = `
    INSERT INTO enterprises (name, email, phone, cnpj, cep, address, city, state)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [body.name, body.email, body.phone, body.cnpj, body.cep, body.address, body.city, body.state ];
  db.run(query, values, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    response.status(201).json({ message: 'Empresa cadastrada com sucesso!', id: this.lastID });
  });
})


app.get('/api/enterprises/cnpj/:cnpj', (request, response) => {
  db.all(`SELECT * FROM enterprises WHERE cnpj = ?`, [request.params.cnpj], (err, rows) => {
    if (err) {
      response.status(500).send(err.message);
      return;
    }
    response.json(rows);
  });
})


app.get('/api/enterprises/id/:id', (request, response) => {
  db.all(`SELECT * FROM enterprises WHERE id = ?`, [request.params.id], (err, rows) => {
    if (err) {
      response.status(500).send(err.message);
      return;
    }
    response.json(rows);
  });
});


app.put('/api/enterprises/id/:id', (request, response) => {
  const { body } = request;
  const query = `UPDATE enterprises SET name = ?, email = ?,phone = ?,cnpj = ?, address = ?, city = ?, state = ?,cep = ? WHERE id = ?`;
  const values = [body.name,body.email,body.phone,body.cnpj,body.address,body.city,body.state,body.cep,request.params.id];
  db.run(query, values, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    response.status(201).json({ message: 'Dados atualizados com sucesso!', id: this.lastID });
  });
})

app.delete('/api/enterprises/id/:id', (request, response) => {
  const query = "DELETE FROM enterprises WHERE id = ?"
  db.all(query, [request.params.id], (err, rows) => {
    if (err) {
      response.status(500).send(err.message);
      return;
    }
    response.json(rows);
  });
})


app.listen(9090, () => {
  console.log('API running on http://localhost:9090');
});
